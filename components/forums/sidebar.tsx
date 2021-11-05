import React from "react";
import Link from "next/link";

export default function sidebar(props: {categories?: Array<{
	startColor: string,
	endColor: string,
	name: string,
	content: string
}>, loading?: boolean}) {
	/*export default class sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {*/
	if (props.loading == true || props.categories == undefined) {
		return (
			<>
				<div>
					<div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center cursor-not-allowed">
						<div className="bg-blue-500 mb-4 animate-pulse rounded py-5 opacity-90"></div>
						<div className="bg-blue-500 mb-2 animate-pulse rounded h-4"></div>
						<div className="bg-blue-500 mb-2 w-3/4 animate-pulse rounded h-4"></div>
						<div className="bg-blue-500 w-5/6 animate-pulse rounded h-4"></div>
					</div>
				</div>

				<div>
					<div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center cursor-not-allowed">
						<div className="bg-blue-500 mb-4 animate-pulse rounded py-5 opacity-90"></div>
						<div className="bg-blue-500 mb-2 animate-pulse rounded h-4"></div>
						<div className="bg-blue-500 mb-2 w-3/4 animate-pulse rounded h-4"></div>
						<div className="bg-blue-500 w-5/6 animate-pulse rounded h-4"></div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				{props.categories.map((data) => (
					<div>
						<div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center">
							<div
								className={
									data.startColor +
									" " +
									data.endColor +
									"  mb-4 rounded py-2 bg-gradient-to-r opacity-90"
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
									/>
								</svg>
								<h2 className="text-2xl opacity-100 break-words">
									{data.name}
								</h2>
							</div>
							{data.content}
						</div>
					</div>
				))}
			</>
		);
	}
}
//}
