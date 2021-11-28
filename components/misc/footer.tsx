import React from "react";
import Link from "next/link";

export default function JSBoardFooter() {
	return (
		<>
			<div className="w-full bg-coolGray-800">
				<div className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-10 py-6">
					{/*Title bit*/}
					<div>
						<div className="flex flex-col bg-black p-2 border-l-2 border-theme-primary rounded-r-md bg-opacity-30 backdrop-filter backdrop-blur-3xl backdrop-saturate-150">
							<h2 className="tracking-wider text-2xl font-medium text-gray-200">
								Forums by JSBoard
							</h2>
							<p className="text-gray-200 text-sm">
								Default theme - Built by JSBoard
							</p>
							<p className="text-gray-200 text-sm">
								&#169;2020 - Present Wave Studios&trade;
							</p>
							<a
								href="https://discord.com/invite/yrwUpMcfcR"
								className="mt-5 text-gray-200 font-semibold bg-branding-900 rounded-md py-1 px-10 text-center"
							>
								Crafted by Wave Studios
							</a>
						</div>
					</div>
					{/*Rows of info*/}
					<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row mt-4 border-l-2 md:border-l-0 border-theme-primary md:mt-0 w-full md:w-auto ml-auto p-2 bg-black rounded-r-md md:rounded-md bg-opacity-30 backdrop-filter backdrop-blur-3xl backdrop-saturate-150">
						<div className="flex flex-col mr-2 lg:mr-0">
							<h2 className="tracking-wider text-lg font-semibold uppercase text-gray-200">
								Policies
							</h2>
							<hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
							<Link href="/rules">
								<a className="ml-1 prose-sm text-gray-300 hover:underline">
									Rules
								</a>
							</Link>
							<a className="ml-1 prose-sm text-gray-300 hover:underline">
							</a>
						</div>
						<div className="flex flex-col md:mx-10">
							<h2 className="tracking-wider text-lg font-semibold uppercase text-gray-200">
								Resources
							</h2>
							<hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
							<a
								href="https://www.youtube.com/watch?v=d78_3cKu3Oc"
								className="ml-1 prose-sm text-gray-300 hover:underline"
							>
								Joe Biden
							</a>
						</div>
						<div className="flex flex-col">
							<h2 className="tracking-wider text-lg  font-semibold uppercase text-gray-200">
								Social
							</h2>
							<hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
							<a
								href="https://discord.com/invite/yrwUpMcfcR"
								className="ml-1 prose-sm text-gray-300 hover:underline"
							>
								Discord
							</a>
							<a
								href="https://github.com/wave-studio"
								className="ml-1 prose-sm text-gray-300 hover:underline"
							>
								Github
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
