import React from "react";
import StaffCore from "../../../components/staff/core";

export default function Dashboard() {
	return (
		<>
			<StaffCore page="Labels">
				<h1 className="text-3xl font-bold text-gray-200 mb-1">
					Labels
				</h1>
				<h2 className="text-xl font-medium text-gray-300 mb-2">
					Create labels for people to add depth to their post
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
