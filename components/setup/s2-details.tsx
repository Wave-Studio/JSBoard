import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function step2(props: { page: number }) {
	const [storeOpen, setStoreOpen] = useState(false);
	const [store, setStore] = useState(false);
	const [websiteOpen, setWebsiteOpen] = useState(false);
	const [website, setWebsite] = useState(false);
	const [linkOpen, setLinkOpen] = useState(false);
	const [link, setLink] = useState(false);

	if (props.page !== 2) {
		return null;
	}
	return (
		<>
			<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
				{/*Section 1*/}
				<h2 className="text-lg font-semibold text-gray-300 mb-8">
					Let's learn some more about you
					{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
				</h2>
				<div className="flex flex-col max-w-xl space-y-3 font-medium">
					{/*Make basic info adrea for main page*/}
					<label>
						Name
						<input
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder="Insert indelible name here"
							maxLength={30}
							autoComplete="off"
							autoCapitalize="on"
						/>
					</label>
					<label>
						Description
						<textarea
							className="shadow rounded border-none w-full h-36 placeholder-gray-200 placeholder-opacity-50"
							placeholder="Welcome to my lovely forum!"
							maxLength={1200}
							wrap="soft"
							autoComplete="on"
						/>
					</label>
					{/*Links*/}
					<div className="flex w-full select-none ">
						<label
							onChange={() => (setStore(!store), setStoreOpen(false))}
						>
							Store
							<input
								type="checkbox"
								className="rounded-full ml-2"
							/>
						</label>
						<div className="flex flex-grow"></div>
						<span
							className={store ? "" : "invisible"}
							onClick={() => (
								setStoreOpen(!storeOpen),
									setWebsiteOpen(false),
									setLinkOpen(false)
							)}
						>
							<ChevronRightIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(storeOpen ? "hidden" : "")}
							/>
							<ChevronDownIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(storeOpen ? "" : "hidden")}
							/>
						</span>
					</div>
					<label className={storeOpen ? "" : "hidden"}>
						Link
						<input
							type="text"
							className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
							placeholder="https://github.com/JsServices"
							maxLength={30}
							autoComplete="url"
						/>
					</label>

					<div className="flex w-full select-none ">
						<label
							onChange={() => (setWebsite(!website), setWebsiteOpen(false))}
						>
							Website
							<input
								type="checkbox"
								className="rounded-full ml-2"
							/>
						</label>
						<div className="flex flex-grow"></div>
						<span
							className={website ? "" : "invisible"}
							onClick={() => (
								setStoreOpen(false),
									setWebsiteOpen(!websiteOpen),
									setLinkOpen(false)
							)}
						>
							<ChevronRightIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(websiteOpen ? "hidden" : "")}
							/>
							<ChevronDownIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(websiteOpen ? "" : "hidden")}
							/>
						</span>
					</div>
					<label className={websiteOpen ? "" : "hidden"}>
						Link
						<input
							type="text"
							className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
							placeholder="https://github.com/JsServices/homepage"
							maxLength={30}
						/>
					</label>

					<div className="flex w-full select-none ">
						<label
							onChange={() => (setLink(!link), setLinkOpen(false))}
						>
							Custom Link
							<input
								type="checkbox"
								className="rounded-full ml-2"
							/>
						</label>
						<div className="flex flex-grow"></div>
						<span
							className={link ? "" : "invisible"}
							onClick={() => (
								setStoreOpen(false),
									setWebsiteOpen(false),
									setLinkOpen(!linkOpen)
							)}
						>
							<ChevronRightIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(linkOpen ? "hidden" : "")}
							/>
							<ChevronDownIcon
								className={"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
									(linkOpen ? "" : "hidden")}
							/>
						</span>
					</div>
					<label className={linkOpen ? "" : "hidden"}>
						Link
						<input
							type="text"
							className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
							placeholder="https://nohello.net"
							maxLength={50}
						/>
					</label>
					<label className={linkOpen ? "" : "hidden"}>
						Name
						<input
							type="text"
							className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
							placeholder="My cool link!"
							maxLength={16}
						/>
					</label>
				</div>
			</div>
			<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
				{/*Section 2*/}
				<h2 className="text-lg font-medium text-gray-300 mb-8">
					Now for the important bits
					{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
				</h2>
				<div className="flex flex-col max-w-xl space-y-3 font-medium">
					<h3>Select a database</h3>
					<div className="flex flex-wrap space-y-3 xs:space-x-3 xs:space-y-0 justify-center sm:justify-start">
						<label className="expand relative select-none bg-gradient-to-br from-[#28b362] to-[#12924f] hover:from-[#10aa50] rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
							MongoDB
							<input
								type="radio"
								name="database"
								className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
							/>
						</label>

						<label className="expand relative select-none bg-gradient-to-br from-[#eba73d] to-[#007a9e] hover:from-[#e99d27] rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
							MySQL
							<input
								type="radio"
								name="database"
								className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
							/>
						</label>
					</div>
					<div className="space-y-3 flex flex-col">
						{" "}
						{/*Div to show/hide mysql stuff*/}
						<label>
							MongoDB URL
							<input
								type="text"
								className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
								placeholder="mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"
								maxLength={200}
								autoComplete="url"
							/>
						</label>
						<label>
							MySQL Email
							<input
								type="text"
								className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
								placeholder="notabootstrap@theme.com"
								maxLength={50}
								autoComplete="email"
							/>
						</label>
						<label>
							MySQL Password
							<input
								type="text"
								className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
								placeholder="SuperUltraSucurePassword"
								maxLength={30}
								autoComplete="one-time-code"
							/>
						</label>
						<label>
							MySQL URL
							<input
								type="text"
								className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
								placeholder="jdbc:mysql://[host][,failoverhost...][:port]/[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue2]..."
								maxLength={200}
							/>
						</label>
						<label>
							MySQL Database
							<input
								type="text"
								className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
								placeholder="menagerie" //I honestly have no idea what these are meant to be
								maxLength={200}
							/>
						</label>
					</div>
					<span className="font-normal">
						//add some backend kode here b|0ck$
					</span>
				</div>
			</div>
		</>
	);
}
