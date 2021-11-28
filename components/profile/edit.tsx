import { XIcon } from "@heroicons/react/outline";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";

export default function Edit(
	props: {
		page?: number;
		email: string;
		user: string;
		phone: string;
		twofa: boolean;
	},
) {
	const [editName, setEditName] = useState(false);
	if (props.page !== 4) {
		return null;
	} else {
		return (
			<>
				{edit()}
				<div className="space-y-8">
					<div className="justify-between flex flex-grow">
						<div>
							<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
								Username
							</h2>
							<p className="text-gray-200 text-sm">
								{props.user}
							</p>
						</div>
						<button
							className="btn btn-white"
							onClick={() => setEditName(true)}
						>
							Edit
						</button>
					</div>
					<div className="justify-between flex flex-grow">
						<div>
							<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
								Email
							</h2>
							<p className="text-gray-200 text-sm">
								{hideEmail(props.email)}
							</p>
						</div>
						<button className="btn btn-white">Edit</button>
					</div>
					<div className="justify-between flex flex-grow">
						<div>
							<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
								Phone Number
							</h2>
							<p className="text-gray-200 text-sm">
								{props.phone
									? (
										<>
											<span className="bg-coolGray-700 rounded px-1">
												{phone(props.phone).shift()}
											</span>
											<span>
												({phone(props.phone).pop()}) *******
											</span>
										</>
									)
									: (
										"There is no phone number attached to this account"
									)}
							</p>
						</div>
						<button className="btn btn-white">Edit</button>
					</div>
				</div>
				<hr className="border-t-2 border-gray-300 border-opacity-25 my-4" />
				<div className="">
					<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
						Password
					</h2>
					<p className="text-gray-200 text-sm flex lg:max-w-screen-sm xl:max-w-screen-md">
						Change your password to something new. Changing your password will
						log you out of all devices your currently logged in on.
					</p>
					<button className="btn btn-blue !px-6 mt-4 mb-8 font-semibold">
						Change your password
					</button>
					<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
						Two-Factor Authentication
					</h2>
					<p className="text-gray-200 text-sm flex lg:max-w-screen-sm xl:max-w-screen-md">
						Protect your account with an extra layer of security. Once
						configured on your account, you'll need to enter your password and a
						code from your phone to sign in.
					</p>
					<button
						type="button"
						className="btn btn-blue !px-6 mt-4 font-semibold !cursor-not-allowed !hover:opacity-100"
						disabled={true}
					>
						Enable 2fa
					</button>
				</div>
			</>
		);
	}

	function edit() {
		if (editName !== true) {
			return null;
		} else {
			return (
				<div className="z-40 inset-0 fixed backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40">
					<div className="h-screen flex flex-grow justify-center items-center">
						<div className="bg-coolGray-700 rounded-md px-8 py-5 relative">
							<XIcon
								className="absolute right-2 top-3 w-8 h-8 p-1 hover:bg-coolGray-800 hover:bg-opacity-40 rounded cursor-pointer"
								onClick={() => setEditName(false)}
							/>
							<h1 className="text-2xl font-medium text-center">
								Change Your Username
							</h1>
							<h2 className="text-sm text-gray-400 text-center mb-6">
								Choose a brand new username for your account!
							</h2>
							<form
								className="flex flex-col w-full"
								onSubmit={saveName}
							>
								<label className="flex flex-col">
									<span className="text-xs tracking-tight font-medium uppercase text-gray-500 mb-1">
										New Username
									</span>
									<input
										type="text"
										placeholder={props.user}
										className="rounded border-none focus:ring-0"
										name="username"
										maxLength={25}
										minLength={3}
										autoComplete="nickname"
										required
									/>
								</label>
								<input
									type="reset"
									className="link bg-coolGray-700 bg-opacity-0 cursor-pointer focus:ring rounded mr-auto"
								/>
								<input
									type="submit"
									className="ml-auto bg-coolGray-700 bg-opacity-0 btn btn-blue"
								/>
							</form>
						</div>
					</div>
				</div>
			);
		}
	}
}

const saveName = async (e: React.SyntheticEvent) => {
	const router = useRouter();
	const { userID } = router.query;
	e.preventDefault();

	const res = await fetch("/api/user/data?id=" + (userID || "0").toString(), {
		method: "POST",
		body: JSON.stringify({
			// @ts-ignore It *should* work
			name: e.target.username.value,
		}),
	});
};

function phone(n: string) {
	const first: string[] = phoneStr(n).split("P") ?? ["+1", "(012)345-6789"]; //gets ["+1", "(012)345-6789"]
	const second: string[] = first.pop()!.split(")"); //gets ["(012", "345-6789"]
	const end = second.shift()!.replace(/\(/g, ""); //gets "012"
	return [first.shift(), end];
}

export function hideEmail(email: string) {
	const e: string[] = email.split("@");
	const n = e.shift()!.length;
	const stars = "*".repeat(n).toString();
	const domain = e.pop();
	return stars + "@" + domain;
}

export function phoneNumb(n: string) {
	//changes smth like +1P(012)345-6789 to 10123456789
	return n.replace(/[-+\(\)\\P]/g, "");
}

export function phoneStr(n: string) {
	//changes smth like 10123456789 to +1P(012)345-6789
	return (
		"+" +
		n.slice(0, 1) +
		"P(" +
		n.slice(1, 4) +
		")" +
		n.slice(4, 7) +
		"-" +
		n.slice(7, 12)
	);
}
