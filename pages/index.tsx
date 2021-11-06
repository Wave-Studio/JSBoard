import * as Heroicons from "@heroicons/react/outline";
import React, { useEffect } from "react";
import io from "socket.io-client";

import Navbar from "../components/misc/navbar";
import Footer from "../components/misc/footer";
import PageError from "../components/misc/error";
import Forums from "../components/forums/category";
import Sidebar from "../components/forums/sidebar";

export default function Home() {
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
	const [sidebar, setSidebar] = React.useState({
		error: null,
		data: { configured: false, sidebar: [] },
	});
	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("homepage", (data) => {
				setForums({ data, error: null });
			});
			socket.on("sidebar", (data) => {
				setSidebar({ data, error: null });
			});
			socket.emit("sidebar");
			socket.emit("homepage");
		});
	}, []);
	if (forums.error || sidebar.error) {
		return (
			<>
				<PageError
					redirect={undefined}
					redirectName={null}
					allowHome={undefined}
					code={500}
					text="An error occured while loading this!"
					back={true}
					home={true}
				/>
			</>
		);
	}
	if (!sidebar.data || !forums.data) {
		return (
			<>
				<div className="bg-coolGray-700 flex-grow">
					<Navbar name="Loading..." />
					<div
						className="bg-gradient-to-r from-green-400 to-blue-600 py-14 lg:py-20 min-w-screen font-sans"
					>
						<h1
							className="text-gray-100 text-4xl lg:text-5xl max-w-screen-xl mx-auto px-10 md:px-16 lg:px-20"
						>
							<div
								className="animate-pulse mx-4 bg-blue-500 h-12 w-2/5 rounded"
							/>
						</h1>
						{/*add smth to look at the background and see what color it is*/}
					</div>
					<div
						className="container max-w-screen-xl px-6 mx-auto text-gray-200 md:px-8 lg:px-10"
					>
						<div
							className="flex-grow rounded-md shadow-md bg-coolGray-800 py-5 my-10"
						>
							<div className="space-y-2">
								<div
									className="animate-pulse mx-4 bg-blue-500 h-10 w-2/5 rounded mb-4"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 rounded"
								/>
								<div
									className="animate-pulse mx-4 bg-blue-500 h-4 w-3/5 rounded"
								/>
							</div>
						</div>
						<div className="lg:flex w-full lg:flex-row">
							<div className="lg:w-full">
								<Forums loading={true} />
							</div>
							<div className="lg:pl-5">
								<Sidebar loading={true} />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
	if (!forums.data.configured && process.env.NODE_ENV !== "development") {
		return (
			<>
				<PageError
					code={500}
					text="JSBoard is not configured! Please configure it"
					redirect="/forums/setup"
					redirectName="Configure JSBoard"
					allowHome={false}
					back={false}
					home={false}
				/>
			</>
		);
	}
	return (
		<>
			<div className="bg-coolGray-700 flex-grow">
				<Navbar name="Home" />
				<div
					className="bg-gradient-to-r from-green-400 to-blue-600 py-14 lg:py-20 min-w-screen font-sans"
				>
					<h1
						className="text-gray-100 text-4xl lg:text-5xl max-w-screen-xl mx-auto px-10 md:px-16 lg:px-20"
					>
						{forums.data.orgName}
					</h1>
					{/*add smth to look at the background and see what color it is*/}
				</div>
				<div
					className="container max-w-screen-xl px-6 mx-auto text-gray-200 md:px-8 lg:px-10"
				>
					<div
						className="rounded-md shadow-md bg-coolGray-800 p-5 my-10 space-x-3"
					>
						<p>
							<span className="font-bold">
								this would be replaced with markdown for
								whatever the server wanted here{" "}
							</span>
							{forums.data.description}
						</p>
						{forums.data.store
							? (
								<a
									href={forums.data.storeLink || undefined}
									className="text-gray-200 px-3 py-0.5 bg-red-500 inline-flex mt-3 items-center rounded-full font-medium"
								>
									<Heroicons.ShoppingCartIcon
										className="h-5 w-5 mr-1"
									/>
									Store
								</a>
							)
							: (
								""
							)}
						{forums.data.website
							? (
								<a
									href={forums.data.websiteLink || undefined}
									className="text-gray-200 px-3 py-0.5 bg-theme-primary inline-flex mt-3 items-center rounded-full font-medium"
								>
									<Heroicons.GlobeAltIcon
										className="h-5 w-5 mr-1"
									/>
									Website
								</a>
							)
							: (
								""
							)}
						{forums.data.custom
							? (
								<a
									href={forums.data.customLink || undefined}
									className="text-gray-200 px-3 py-0.5 bg-green-700 inline-flex mt-3 items-center rounded-full font-medium"
								>
									<Heroicons.BeakerIcon
										className="h-5 w-5 mr-1"
									/>
									{forums.data.customName}
								</a>
							)
							: (
								""
							)}
					</div>
					<div className="lg:flex w-full lg:flex-row">
						<div className="lg:w-full">
							<Forums categories={forums.data.forums ?? []} />
						</div>
						<div className="lg:pl-5">
							<Sidebar categories={sidebar.data.sidebar ?? []} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
