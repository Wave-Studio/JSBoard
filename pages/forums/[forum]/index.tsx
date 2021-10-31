import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Transition } from '@headlessui/react';

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import PageError from "../../../components/misc/error";

export default function ViewUserProfile() {
	const router = useRouter();
	const forumNameUnFiltered = `${router.query.forum}`;
	const forumID = forumNameUnFiltered.split(":").reverse().slice(0, 1).join("");
	const [forum, setForum] = useState({
		name: "Example forum",
		description: "Beans",
		posts: [
			{
				id: 1,
				title: "Example post",
				author: "Blox",
				content: "This is an example post.",
			},
		],
	});

	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("forum", (data) => {
				setForum(data);
			});
			socket.emit("forum", forumID); //use the ID here, forumName (should) return "name:id"
		});
	}, []);

	if (!forum == null) {
		return (
			//I can do the css for this later when I get a chance, also in theory the user will never see it
			<>
				<Navbar name="Loading..." />
			</>
		);
	}
  const [open, setOpen] = useState(false);
	//console.log(forumID)
	return (
		<>
			<div className="flex flex-col min-h-screen md:px-0">
				<Navbar name={forum.name} />
				<div className="flex-1">
					<div className="max-w-screen-xl mx-auto py-4">
						<Link href="/">
							<a>
								<button className="btn btn-white mb-2 mt-10 group flex items-center">
									<ChevronLeftIcon className="scale-0 text-gray-200 group-hover:text-gray-800 group-hover:scale-100 w-4 h-4 transition duration-500 mt-0.5" />{" "}
									Back to Home
								</button>
							</a>
						</Link>
						<div className="bg-coolGray-800 rounded-md p-5 text-gray-200">
							<div className="flex justify-between">
								<h1 className="text-2xl font-medium">forum name</h1>
								<div className="relative flex">
                  <Transition className={open ? "space-x-3" : ""} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} show={open}>
                    <button className={"btn btn-white nightwind-prevent hover:!bg-opacity-80 focus:!bg-opacity-80 bg-gray-100 !px-3 !text-black z-[39] " + (open ? "" : "absolute")}>
                      1
                    </button>
                    <button className={"btn btn-white !px-2.5 bg-branding-900 z-[38] left-6 " + (open ? "" : "absolute opacity-50")}>
                      2
                    </button>
                    <button className={"btn btn-white !px-2.5 bg-branding-900 z-[37] left-9 " + (open ? "" : "absolute opacity-30")}>
                      3
                    </button>
                    <button className={"btn btn-white !px-2.5 bg-branding-900 z-[36] left-12 " + (open ? "" : "absolute opacity-10")}>
                      4
                    </button>
                    <span className="ml-20">...</span>
                  </Transition>
                  <button className="btn btn-white !px-2.5 bg-branding-900 z-[39] ml-2">
										900
									</button>
								</div>
							</div>
							<h2 className="text-sm font-light text-gray-400">description</h2>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
