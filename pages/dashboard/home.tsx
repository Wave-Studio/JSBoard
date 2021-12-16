import React from "react";
import StaffCore from "../../components/staff/core";

export default function Dashboard() {
	return (
		<>
			<StaffCore page="Home">
				<div>
					<h1 className="text-3xl font-bold text-gray-200 mb-1">
						Dashboard Home
					</h1>
					<h2 className="text-xl font-medium text-gray-300 mb-2">
						View basic stats, quick modules, and more
					</h2>
					<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10" />
					<div className="space-y-8 mt-10">
						<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 text-gray-200"></div>
					</div>
				</div>
			</StaffCore>
		</>
	);
}
