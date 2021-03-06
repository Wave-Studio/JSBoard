import io from "socket.io-client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

import PageError from "../components/misc/error";
import Navbar from "../components/misc/navbar";
import Footer from "../components/misc/footer";
import { useEffect, useState } from "react";

export default function profiles(props) {
	const [menuSel, setMenuSel] = useState(1);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("userList", (data) => {
				setUserList(data);
			});
			socket.on("connect", () => {
				socket.emit("userList");
			});
		});
	}, []);

	if (userList.length < 1) {
		return (
			<>
				<div className="flex flex-col min-h-screen bg-coolGray-700">
					<Navbar name="Profiles List" />
					<div className="flex-1 p-2 ">
						<div className="max-w-screen-xl mx-auto text-gray-200 bg-coolGray-800 p-5 my-10 rounded-md flex flex-col md:flex-row justify-between">
							<div>
								<h2 className="text-2xl font-medium">Forum Members</h2>
								<form className="flex flex-grow sm:w-96">
									<input
										type="search"
										placeholder="Search"
										className="text-box-form border-none rounded w-full mt-4"
									/>
								</form>
							</div>
							<div>
								<h2 className="text-2xl font-medium">Sort</h2>
								<div className="rounded-md flex flex-wrap p-1.5 dark:bg-coolGray-75 bg-coolGray-850 gap-2 font-semibold mt-4">
									<h1
										className={
											"cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
											([1].includes(menuSel)
												? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
												: "")
										}
										onClick={() => setMenuSel(1)}
									>
										A - Z
									</h1>
									<h1
										className={
											"cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
											([2].includes(menuSel)
												? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
												: "")
										}
										onClick={() => setMenuSel(2)}
									>
										User ID
									</h1>
								</div>
							</div>
							{exProfile()}
						</div>
					</div>
					<Footer />
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex flex-col min-h-screen bg-coolGray-700">
				<Navbar name="Profiles List" />
				<div className="flex-1 p-2 px-4">
					<div className="max-w-screen-xl mx-auto text-gray-200 bg-coolGray-800 p-5 my-10 rounded-md flex flex-col md:flex-row justify-between">
						<div>
							<h2 className="text-2xl font-medium">Forum Members</h2>
							<form className="flex flex-grow sm:w-96">
								<input
									type="search"
									placeholder="Search"
									className="text-box-form border-none rounded w-full mt-4"
								/>
							</form>
						</div>
						<div>
							<h2 className="text-2xl font-medium mt-4 md:mt-0">Sort</h2>
							<div className="rounded-md flex-wrap p-1.5 dark:bg-coolGray-75 bg-coolGray-850 gap-2 font-semibold mt-4 inline-flex">
								<h1
									className={
										"cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
										([1].includes(menuSel)
											? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
											: "")
									}
									onClick={() => setMenuSel(1)}
								>
									A - Z
								</h1>
								<h1
									className={
										"cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
										([2].includes(menuSel)
											? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
											: "")
									}
									onClick={() => setMenuSel(2)}
								>
									User ID
								</h1>
							</div>
						</div>
					</div>
					<div className="max-w-screen-xl mx-auto text-gray-200 mb-10">
						<LoadUserProfiles />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
	function LoadUserProfiles() {
		const test = //if your wondering, this "works", sort of. (hint: spam click the two buttons until desired result) Accepting PRs to fix lmao
			menuSel == 1 ? userList.sort().slice(0, 20) : userList.slice(0, 20);
		return (
			<>
				{test.map((d: string) => {
					const userID = d.split(":").pop();

					const [user, setUser] = useState({
						unknown: true,
						pfp: "",
						username: "",
						rank: "",
						title: "",
					});

					// Yes, this isn't the smartest approach to this, but it works.
					useEffect(() => {
						fetch("/api/socket").finally(() => {
							const socket = io();
							socket.on("userInfo", (data) => {
								setUser(data);
							});
							socket.on("connect", () => {
								socket.emit("userInfo", userID);
							});
						});
					}, []);

					if (!user || user.unknown) {
						return exProfile();
					}

					return (
						<>
							<Link href={"/profile/" + d}>
								<a>
									<div className="bg-coolGray-800 px-5 py-4 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none">
										<Image
											src={user.pfp}
											width={50}
											height={50}
											className="rounded-full"
											quality={40}
										/>
										<div className="ml-5">
											<h2 className="font-medium flex">
												{user.username}{" "}
												<div className="rounded-sm bg-blue-600 px-1 font-semibold text-sm ml-3 mb-auto">
													{user.rank}
												</div>
											</h2>
											<p className="font-extralight">"{user.title}"</p>
										</div>
										<div className="ml-auto flex items-center">
											<ChevronRightIcon className="w-6 h-6" />
										</div>
									</div>
								</a>
							</Link>
						</>
					);
				})}
			</>
		);
	}
}

function exProfile() {
	//loading thing
	return (
		<div className="max-w-screen-xl mx-auto text-gray-200 mb-10">
			<div className="bg-coolGray-800 px-5 py-4 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none">
				<Image
					src="/ProfilePicture.png"
					width={50}
					height={50}
					className="rounded-full"
					quality={40}
				/>
				<div className="ml-5">
					<h2 className="font-medium flex">
						<div className="animate-pulse mb-3 bg-blue-500 w-36 h-6 rounded" />
						<div className="rounded-sm bg-blue-600 px-1 font-semibold text-sm ml-3 mb-auto"></div>
					</h2>
					<p className="font-extralight">
						<div className="animate-pulse bg-blue-500 h-4 rounded" />
					</p>
				</div>
				<div className="ml-auto hidden xs:block">
					<ChevronRightIcon className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
}
