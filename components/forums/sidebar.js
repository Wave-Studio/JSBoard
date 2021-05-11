import React from "react";
import Link from "next/link";
import { AnnotationIcon } from "@heroicons/react/outline";

export default class sidebar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				{this.props.categories.map((data) => (
					<div>
						<div className="flex-none rounded-md shadow-md bg-coolGray-800 py-5 mb-10 lg:w-72">
							<h2 className="text-4xl">sidebar thing 1</h2>
						</div>
					</div>
				))}
			</>
		);
	}
}
