

export default function Edit(props: { page: number; }) {
	if (props.page !== 4) {
		return null;
	}
	else {
		return (
			<>
				<div className="flex flex-grow flex-col">
					<div className="space-y-8">
						<div className="justify-between flex flex-grow">
							<div>
								<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">Username</h2>
								<p className="text-gray-200 text-sm">Test</p>
							</div>
							<button className="btn btn-white">Edit</button>
						</div>
						<div className="justify-between flex flex-grow">
							<div>
								<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">Email</h2>
								<p className="text-gray-200 text-sm">Test</p>
							</div>
							<button className="btn btn-white">Edit</button>
						</div>
						<div className="justify-between flex flex-grow">
							<div>
								<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">Phone Number</h2>
								<p className="text-gray-200 text-sm">Test</p>
							</div>
							<button className="btn btn-white">Edit</button>
						</div>
					</div>
					<hr className="border-t-2 border-gray-300 border-opacity-25 my-4" />
					<div className="">
						<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">Password</h2>
						<p className="text-gray-200 text-sm">Change your password to something new. hanging your password will log you out of all devices your currently logged in on.</p>
						<button className="btn btn-blue !px-6 mt-4 mb-8 font-semibold">Change your password</button>
						<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">Two-Factor Authentication</h2>
						<p className="text-gray-200 text-sm">Protect your account with an extra layer of security. Once configured on your account, you'll need to enter your password and a code from your phone to sign in.</p>
						<button className="btn btn-blue !px-6 mt-4 font-semibold">Enable 2fa</button>
					</div>
				</div>
			</>
		)
	}
}