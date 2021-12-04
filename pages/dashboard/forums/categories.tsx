import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import io from "socket.io-client";
import StaffCore from "../../../components/staff/core";

export default function Dashboard() {
	const [forums, setForums] = React.useState({
		error: null,
		data: {
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
		},
	});
	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("homepage", (data) => {
				setForums({ data, error: null });
			});
			socket.on("connect", () => {
				//console.log("Connected to websocket");
				socket.emit("sidebar");
				socket.emit("homepage");
			});
		});
	}, []);
	if (forums.error) {
		return <>error</>;
	}
	return (
		<>
			<StaffCore page="Categories">
				<h1 className="text-3xl font-bold text-gray-200 mb-1">Categories</h1>
				<h2 className="text-xl font-medium text-gray-300 mb-2">
					Manage the catagories on your forum
				</h2>
				<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10 mb-10" />
				{forums.data.configured
					? (
						<>
							{forums.data.forums.map(
								(data: {
									name: string;
									description: string;
									redirect: string;
									id: string;
									topics: string;
									posts: string;
								}) => (
									<div>
										<Link href={"/forums/" + data.redirect + ":" + data.id}>
											<a>
												<div className="flex-grow flex flex-row rounded-md shadow-md hover:shadow-xl bg-coolGray-800 py-2 mb-5 items-center cursor-pointer transition">
													<div className="grid place-items-center align-middle rounded-full p-2 md:p-3 bg-blue-600 mx-5">
														<XIcon />
													</div>
													<div className="flex-grow">
														<h2 className="text-2xl text-gray-100">
															{data.name}
														</h2>
														<p className="text-gray-300 ">{data.description}</p>
													</div>
													<div className="hidden lg:block">
														<div className="mx-4 border border-blue-600 h-12" />
													</div>
													<div className="hidden lg:block">
														<h2 className="text-gray-200 text-lg ml-1/2">
															{data.topics}
														</h2>
														<h4 className="text-gray-400 text-sm uppercase font-roboto">
															Topics
														</h4>
													</div>
													<div className="hidden lg:block ml-4 mr-12">
														<h2 className="text-gray-200 text-lg ml-1/2">
															{data.posts}
														</h2>
														<h4 className="text-gray-400 text-sm uppercase font-roboto">
															Posts
														</h4>
													</div>
												</div>
											</a>
										</Link>
									</div>
								),
							)}
						</>
					)
					: (
						<div className="">
							{loadingElement()}
							{loadingElement()}
						</div>
					)}
			</StaffCore>
		</>
	);
}

function loadingElement() {
	return (
		<div>
			<div className="flex-grow flex flex-row rounded-md shadow-md bg-coolGray-800 py-2 mb-5 items-center cursor-not-allowed">
				<div className="grid place-items-center align-middle rounded-full w-11 animate-pulse h-11 md:p-3 bg-blue-500 mx-5" />
				<div className="flex-grow">
					<div className="bg-blue-500 mb-2 animate-pulse rounded h-5 w-1/2" />
					<div className="bg-blue-500 animate-pulse rounded h-4" />
				</div>
				<div className="hidden lg:block">
					<div className="animate-pulse mx-4 border border-blue-500 h-12" />
				</div>
				<div className="hidden lg:block">
					<div className="bg-blue-500 mb-2 animate-pulse rounded h-4" />
					<h4 className="text-gray-400 text-sm uppercase font-roboto">
						Topics
					</h4>
				</div>
				<div className="hidden lg:block ml-4 mr-12">
					<div className="bg-blue-500 mb-2 animate-pulse rounded h-4" />
					<h4 className="text-gray-400 text-sm uppercase font-roboto">Posts</h4>
				</div>
			</div>
		</div>
	);
}
