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
			socket.on("connect", () => {
				console.log("Connected to websocket");
				socket.emit("sidebar");
				socket.emit("homepage");
			});
		});
	}, []);
	if (forums.error || sidebar.error) {
		return (
			<>
				error
				
			</>
		);
	}
	return (
		<>
			<StaffCore page="Categories">
				<h1 className="text-3xl font-bold text-gray-200 mb-1">
					Categories
				</h1>
				<h2 className="text-xl font-medium text-gray-300 mb-2">
					Manage the catagories on your forum
				</h2>
				<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10" />
				<div className="space-y-8 mt-10">
					<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 text-gray-200">
					</div>
				</div>
			</StaffCore>
		</>
	);
}
