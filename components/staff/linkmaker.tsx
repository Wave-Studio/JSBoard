//I have litterally no idea why this file xists, but I'm keeping it for now becaus its late and I don't wanna break anything

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Linkmaker(props: {
	name: string;
	input: unknown;
	enabled?: unknown;
	children;
}) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex w-full select-none">
				<label className="flex">
					{props.name}
					{props.enabled}
				</label>
				<div className="flex flex-grow"></div>
				<span onClick={() => setOpen(!open)}>
					<ChevronRightIcon
						className={
							"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
							(open ? "hidden" : "")
						}
					/>
					<ChevronDownIcon
						className={
							"w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
							(open ? "" : "hidden")
						}
					/>
				</span>
			</div>
			<span className={`pl-5 ${open ? "" : "hidden"}`}>
				<label>Visible: {props.input}</label>
				<br />
				{props.children}
			</span>
		</>
	);
}
