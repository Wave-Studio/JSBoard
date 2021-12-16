import React from "react";
import {
	AdjustmentsIcon,
	AnnotationIcon,
	BanIcon,
	ChartSquareBarIcon,
	ChatIcon,
	CogIcon,
	ColorSwatchIcon,
	DocumentAddIcon,
	DownloadIcon,
	HandIcon,
	HomeIcon,
	NewspaperIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";

import DashButton from "./dashbutton";

export default function StaffSidebar() {
	const sidebar = [
		{
			category: "Main",
			items: [
				<DashButton icon={<HomeIcon className="h-6 w-6 mx-2" />} name="Home" />,
				<DashButton
					icon={<CogIcon className="h-6 w-6 mx-2" />}
					name="Settings"
					section="main"
				/>,
				<DashButton
					icon={<DownloadIcon className="h-6 w-6 mx-2" />}
					name="Modules"
					section="main"
				/>,
				<DashButton
					icon={<AdjustmentsIcon className="h-6 w-6 mx-2" />}
					name="Themes"
					section="main"
				/>,
				<DashButton
					icon={<DocumentAddIcon className="h-6 w-6 mx-2" />}
					name="Custom pages"
					url="pages"
					section="main"
				/>,
			],
		},
		{
			category: "Forums",
			items: [
				<DashButton
					icon={<NewspaperIcon className="h-6 w-6 mx-2" />}
					name="Settings"
					section="forums"
				/>,
				<DashButton
					icon={<AnnotationIcon className="h-6 w-6 mx-2" />}
					name="Categories"
					section="forums"
				/>,
				<DashButton
					icon={<ColorSwatchIcon className="h-6 w-6 mx-2" />}
					name="Labels"
					section="forums"
				/>,
				<DashButton
					icon={<ChartSquareBarIcon className="h-6 w-6 mx-2" />}
					name="Statistics"
					section="forums"
				/>,
			],
		},
		{
			category: "User management",
			items: [
				<DashButton
					icon={<UserGroupIcon className="h-6 w-6 mx-2" />}
					name="Users"
					section="users"
				/>,
				<DashButton
					icon={<HandIcon className="h-6 w-6 mx-2" />}
					name="Roles"
					section="users"
				/>,
				<DashButton
					icon={<ChatIcon className="h-6 w-6 mx-2" />}
					name="Reports"
					section="users"
				/>,
				<DashButton
					icon={<BanIcon className="h-6 w-6 mx-2" />}
					name="Punishments"
					section="users"
				/>,
			],
		},
	];

	return (
		<>
			<ul className="mx-6">
				{sidebar.map((data) => (
					<>
						<li className="mb-6">
							<h2 className="uppercase my-2 tracking-wide font-semibold text-gray-200">
								{data.category}
							</h2>
							<ul className="ml-2">
								{data.items.map((item) => (
									<>{item}</>
								))}
							</ul>
						</li>
					</>
				))}
			</ul>
		</>
	);
}
