import {
	ChevronDownIcon,
	ChevronRightIcon,
	DocumentDuplicateIcon,
	ExclamationCircleIcon,
	FireIcon,
	PlusSmIcon,
	StatusOnlineIcon,
} from "@heroicons/react/outline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import StaffCore from "../../../components/staff/core";
import Notification from "../../../components/misc/notification";
import Linkmaker from "../../../components/staff/linkmaker";

export default function dashboard() {
	const [data, setData] = useState({
		configured: false,
		websiteLink: null,
		orgName: null,
		website: null,
		description: null,
		store: null,
		customLink: null,
		custom: null,
		storeLink: null,
		customName: null,
		forums: [],
	});
	//const { data, error } = useSWR("/api/forums/homepage", fetcher);
	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("homepage", (data) => {
				setData(data);
			});
			socket.emit("homepage");
		});
	}, []);
	if (!data) {
		return (
			<StaffCore page="Settings">
				<h1 className="text-3xl font-bold text-gray-200 mb-1">
					Settings
				</h1>
				<h2 className="text-xl font-medium text-gray-300 mb-2">
					Configure the sidebar and main boxes
				</h2>
				<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10" />
				<Notification color="bg-theme-primary" msg="somthing lmao">
					<div className=" inline-flex rounded-md font-medium items-center nightwind-prevent text-white">
						<svg
							className="animate-spin mr-2 h-5 w-5 text-white nightwind-prevent "
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							>
							</circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							>
							</path>
						</svg>
						Loading...
					</div>
				</Notification>
			</StaffCore>
		);
	}
	return (
		<>
			<StaffCore page="Settings">
				<h1 className="text-3xl font-bold text-gray-200 mb-1">
					Settings
				</h1>
				<h2 className="text-xl font-medium text-gray-300 mb-2">
					Configure the sidebar and main boxes
				</h2>
				<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10" />
				<div className="space-y-8 mt-10">
					<Formik
						initialValues={{
							orgName: data.orgName,
							description: data.description,
							store: data.store,
							storeLink: data.storeLink,
							website: data.website,
							websiteLink: data.websiteLink,
							custom: data.custom,
							customName: data.customName,
							customLink: data.customLink,
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								//update(values);
								//console.log(values);
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						<Form>
							<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 text-gray-200">
								{/*Section 1*/}
								<h2 className="text-lg font-semibold text-gray-300 mb-8">
									Let{"'"}s learn some more about you
									{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
								</h2>
								<div className="flex flex-col max-w-xl space-y-3 font-medium">
									{/*Make basic info adrea for main page*/}
									<div>
										<label htmlFor="orgName">Name</label>
										<Field
											type="text"
											name="orgName"
											className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
											placeholder="Insert indelible name here"
											maxLength={30}
											autoComplete="off"
											autoCapitalize="on"
										/>
										<ErrorMessage name="name" />
									</div>
									<div>
										<label htmlFor="description">
											Description
										</label>
										<Field
											component="textarea"
											className="shadow rounded border-none w-full h-36 placeholder-gray-200 placeholder-opacity-50"
											placeholder="Welcome to my lovely forum!"
											maxLength={1200}
											name="description"
											wrap="soft"
											autoComplete="on"
										/>
									</div>
									{/*Links*/}
									<Linkmaker
										name="Store"
										input={
											<Field
												type="checkbox"
												className="rounded-full ml-2 nightwind-prevent"
												name="store"
											/>
										}
									>
										<label>
											Link
											<Field
												name="storeLink"
												type="text"
												className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
												placeholder="https://github.com/JsServices"
												maxLength={30}
												autoComplete="url"
											/>
										</label>
									</Linkmaker>
									<Linkmaker
										name="Website"
										input={
											<Field
												type="checkbox"
												className="rounded-full ml-2 nightwind-prevent"
												name="website"
											/>
										}
									>
										<label>
											Link
											<Field
												name="websiteLink"
												type="text"
												className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
												placeholder="https://github.com/JsServices/homepage"
												maxLength={30}
											/>
										</label>
									</Linkmaker>
									<Linkmaker
										name="Custom Link"
										input={
											<Field
												type="checkbox"
												className="rounded-full ml-2 nightwind-prevent"
												name="custom"
											/>
										}
									>
										<label>
											Link
											<Field
												name="customName"
												type="text"
												className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
												placeholder="https://nohello.net"
												maxLength={50}
											/>
										</label>
										<label>
											Name
											<Field
												name="customLink"
												type="text"
												className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
												placeholder="My cool link!"
												maxLength={16}
											/>
										</label>
									</Linkmaker>
								</div>
								<button
									type="submit"
									value="Save"
									className="bg-green-700 btn btn-lg  hover:opacity-70 font-semibold mt-5"
								>
									Save
								</button>
							</div>
						</Form>
					</Formik>
					{/*Sidebar Options*/}
					<div className="p-4 rounded-lg shadow w-full bg-coolGray-800">
						<h1 className="text-2xl font-semibold text-gray-200">
							Sidebar
						</h1>
						<h2 className="text-lg font-medium text-gray-300 mb-2">
							Configure whats on the sidebar, or even create your own cutom
							sidebar boxes
						</h2>
						<form className="flex flex-wrap max-w-xl justify-center sm:justify-start items-center gap-10">
							{/*Sidebar Things to click*/}
							<label className="expand relative select-none bg-gradient-to-br from-blue-500 to-green-600 hover:from-blue-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
								<StatusOnlineIcon className="w-10" />
								Online Users
								<input
									type="checkbox"
									className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
								/>
							</label>

							<label className="expand relative select-none bg-gradient-to-br from-red-500 to-yellow-600 hover:from-red-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
								<FireIcon className="w-10" />
								Hot Posts
								<input
									type="checkbox"
									className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
								/>
							</label>
							<label className="expand relative select-none bg-gradient-to-br from-indigo-500 to-pink-600 hover:from-indigo-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
								<DocumentDuplicateIcon className="w-10" />
								New Posts
								<input
									type="checkbox"
									className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
								/>
							</label>

							<label className="expand relative select-none bg-coolGray-700 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
								<PlusSmIcon className="w-10" />
								Create a Tab
							</label>
						</form>
					</div>
				</div>
				<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
					<h2 className="text-lg font-semibold text-gray-300 mb-4">
						Create a theme for your forums
						{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
					</h2>
					<h3 className="text-gray-200 font-medium">
						Select one of our beautifuly handcrafted default user themes{" "}
						<span className="font-extralight">
							(we reccomend dark!)
						</span>
					</h3>
					<div className="flex py-4 space-x-4">
						<input
							type="radio"
							name="theme"
							className="appearance-none transition bg-coolGray-900 text-coolGray-900 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-black focus:checked:ring-opacity-50 ring-opacity-50 fill-black-yes"
							defaultChecked
						/>
						<input
							type="radio"
							name="theme"
							className="appearance-none transition bg-white text-white p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-white focus:checked:ring-opacity-50 ring-opacity-50"
						/>
					</div>
					<h3 className="text-gray-200 font-medium">
						Choose a luxurious accent color from our expertly-crafted color
						palette by the makers of TailwindCSS
					</h3>
					<div className="flex py-4 space-x-4">
						<input
							type="radio"
							name="colors"
							className="appearance-none transition bg-blue-600 text-blue-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-blue-600 focus:checked:ring-opacity-50 ring-opacity-50"
							defaultChecked
						/>
						<input
							type="radio"
							name="colors"
							className="appearance-none transition bg-green-600 text-green-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-green-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-green-600 focus:checked:ring-opacity-50 ring-opacity-50"
						/>
						<input
							type="radio"
							name="colors"
							className="appearance-none transition bg-red-600 text-red-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-red-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-red-600 focus:checked:ring-opacity-50 ring-opacity-50"
						/>
						<input
							type="radio"
							name="colors"
							className="appearance-none transition bg-purple-600 text-purple-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-purple-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-purple-600 focus:checked:ring-opacity-50 ring-opacity-50"
						/>
						<input
							type="radio"
							name="colors"
							className="appearance-none transition bg-yellow-600 text-yellow-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-yellow-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-yellow-600 focus:checked:ring-opacity-50 ring-opacity-50"
						/>
					</div>
					<h3 className="text-gray-200 font-medium">
						Pick an image or color gradient that represents your community
					</h3>
					<div className="border-2 border-gray-300 border-opacity-25 rounded-lg max-w-xl mt-3 p-4">
						<div className="bg-gradient-to-r from-green-400 to-blue-600 h-12 rounded-lg relative">
							<span className="absolute bottom-0 right-1 text-gray-400 italic flex">
								Preview
							</span>
						</div>
						<fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
							<legend className="text-center px-1 font-medium">
								Starting Gradient
							</legend>
							<input
								type="text"
								className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
								defaultValue="#34D399"
								maxLength={7}
							/>
						</fieldset>
						<fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
							<legend className="text-center px-1 font-medium">
								Ending Gradient
							</legend>
							<input
								type="text"
								className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
								defaultValue="#2563EB"
								maxLength={7}
							/>
						</fieldset>
					</div>
					{"//"}color picker here?
				</div>
				{/*Possible Footer/navbar area*/}
				<div className="p-4 rounded-lg shadow w-full bg-coolGray-800">
					<h1 className="text-2xl font-semibold text-gray-200">
						Something else
					</h1>
					<h2 className="text-lg font-medium text-gray-300 mb-2">
						TBH idk what to put here, maybe like some sort of navbar/footer
						thing?
					</h2>
				</div>
			</StaffCore>
		</>
	);
}
