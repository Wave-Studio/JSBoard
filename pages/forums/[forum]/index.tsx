import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
	ChatAlt2Icon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronUpIcon,
	ColorSwatchIcon,
	EyeIcon,
	LockClosedIcon,
	PencilIcon,
	PlusIcon,
} from "@heroicons/react/outline";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import Error from "../../../components/misc/notification";
import { OutputForumTypings } from "../../../lib/typings/forum";

export default function Forum() {
	const router = useRouter();
	const forumNameUnFiltered = `${router.query.forum}`;
	const forumID = forumNameUnFiltered.split(":").reverse().slice(0, 1).join("");
	const [forum, setForum] = useState<{
		error: unknown;
		data: {
			[key: string]: unknown | string;
			foundForum: boolean;
			tags: string[];
			posts: OutputForumTypings[];
		};
	}>({
		error: null,
		data: {
			foundForum: false,
			name: null,
			description: null,
			tags: [],
			page: null,
			search: null,
			posts: [],
		},
	});
	const [open, setOpen] = useState(true);
	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			socket.on("connect", () => {
				socket.emit("forum", forumID); //use the ID here, forumName (should) return "name:id"
			});
			socket.on("forum", (data) => {
				setForum({ data, error: null });
				console.log(data);
			});
		});
	}, []);

	if (!forum.data || !forum.data.name) {
		//if you generally use "forum" it
		return (
			//I can do the css for this later when I get a chance, also in theory the user will never see it
			<>
				<div className="flex flex-col h-screen">
					{/* typing mayhem */}
					<Navbar name="Loading..." />
					<div className="flex-1 overflow-y-hidden relative">
						<div className="z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-coolGray-800 opacity-70 absolute" />
						<div className="max-w-screen-xl mx-auto py-4">
							<Link href="/">
								<a>
									<button className="btn btn-white mb-2 mt-10 group flex items-center">
										<ChevronLeftIcon className="scale-0 text-gray-200 group-hover:text-gray-800 group-hover:scale-100 w-4 h-4 transition duration-500 mt-0.5" />{" "}
										Back to Home
									</button>
								</a>
							</Link>
							<div className="bg-coolGray-800 rounded-md p-5 text-gray-200 mx-4 shadow-md">
								<div className="flex flex-col md:flex-row justify-between">
									<div>
										<div className="flex space-x-2 items-center ">
											<div className="bg-coolGray-900 bg-opacity-25 p-1 rounded-lg ">
												<ColorSwatchIcon className="w-6 text-gray-300" />
											</div>
											{
												//@ts-ignore this will be defined, the system is just dumb
												tags([])
											}
										</div>

										<div className="animate-pulse my-4 bg-blue-500 h-8 w-48 rounded" />

										<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10 my-2" />
										<h2 className="text-sm font-light text-gray-400">
											{forum.data.description as string}
										</h2>
									</div>
									<div className="justify-between flex flex-col mt-4 md:mt-0">
										<button className="btn btn-blue !hover:opacity-100 font-semibold hidden md:block animate-pulse h-8"></button>

										<input
											name="search"
											type="search"
											className="form-input w-full invisible"
										/>
									</div>
								</div>
							</div>
							<div className="space-y-3 my-10 mx-4">{loadingAnimation()}</div>
						</div>
					</div>
					<Footer />
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex flex-col min-h-screen">
				{/* typing mayhem */}
				<Navbar name={forum.data.name as string} />
				<div className="flex-1">
					<div className="max-w-screen-xl mx-auto py-4">
						<Link href="/">
							<a className="inline-flex">
								<button className="btn btn-white mb-2 mt-10 group flex items-center">
									<ChevronLeftIcon className="scale-0 text-gray-200 group-hover:text-gray-800 group-hover:scale-100 w-4 h-4 transition duration-500 mt-0.5" />{" "}
									Back to Home
								</button>
							</a>
						</Link>
						<div className="bg-coolGray-800 rounded-md p-5 text-gray-200 mx-4 shadow-md">
							<div className="flex flex-col md:flex-row justify-between">
								<div>
									<div className="flex space-x-2 items-center ">
										<div className="bg-coolGray-900 bg-opacity-25 p-1 rounded-lg ">
											<ColorSwatchIcon className="w-6 text-gray-300" />
										</div>
										{
											//@ts-ignore this will be defined, the system is just dumb
											tags(forum.data.tags)
										}
									</div>
									<h1 className="text-2xl font-medium mt-3 ">
										{forum.data.name as string}
									</h1>
									<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10 my-2" />
									<h2 className="text-sm font-light text-gray-400">
										{forum.data.description as string}
									</h2>
								</div>
								<div className="justify-between flex flex-col mt-4 md:mt-0">
									<Link href={"/forums/create?id=" + forumID}>
										<a className="">
											<button className="btn btn-blue font-semibold hidden md:block w-full">
												Create a Thread
											</button>
										</a>
									</Link>
									<Link href={"/forums/create?id=" + forumID}>
										<a>
											<button className="btn-base rounded-full bg-theme-primary p-4 font-semibold md:hidden fixed bottom-3 right-3 z-50 shadow-md shadow-blue-500/20">
												<PlusIcon className="w-7 h-7" />
											</button>
										</a>
									</Link>
									<Formik
										initialValues={{ search: forum.data.search }}
										validationSchema={Yup.object({
											search: Yup.string()
												.max(50, "Search is too long")
												.min(2, "Search is too short")
												.nullable(),
										})}
										onSubmit={(values, { setSubmitting }) => {
											alert(JSON.stringify(values, null, 2));
										}}
									>
										{({ errors, touched }) => (
											<Form className="flex items-center">
												<Field
													name="search"
													type="search"
													className="form-input w-full"
													placeholder="Search"
												/>
												{errors.search && touched.search ? (
													<Error
														msg={errors.search}
														color="bg-red-500"
														mdleft={true}
													/>
												) : null}
											</Form>
										)}
									</Formik>
								</div>
							</div>
						</div>
						<div className="space-y-3 my-10 mx-4">
							{forum.data.posts?.map((post: OutputForumTypings) => (
								<Link
									href={`/threads/${post.title
										.replaceAll(" ", "-")
										.substring(0, 42)}:${post.id}`}
								>
									<a>
										<section
											className="bg-coolGray-800 px-5
										 shadow-md py-3 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none text-gray-200 font-medium tracking-wide"
										>
											<div className=" mr-4 flex flex-col items-center">
												<button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-green-200 focus:hover:opacity-95 rounded-full transition duration-300">
													<ChevronUpIcon className="w-7 p-0.5 " />
												</button>
												<span className="text-sm">{post.votes}</span>
												<button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-red-200 focus:hover:opacity-95 rounded-full transition duration-300">
													<ChevronDownIcon className="w-7 p-0.5 " />
												</button>
											</div>
											<div className=" w-[0.1rem] bg-theme-secondary mr-4 rounded my-2 " />
											<div>
												<div>
													<div className="flex items-center">
														<figure>
															<Image
																width={28}
																height={28}
																src={
																	"/pfps/" +
																	post.authorID +
																	post.authorPFPFormat
																}
																className="rounded-full"
																alt="User Icon"
															/>
														</figure>
														<figcaption className="ml-2">
															{post.author}
														</figcaption>
													</div>
													<article className="my-3">
														<h3 className="text-lg">{post.title}</h3>
														<p className="max-w-2xl leading-snug md:truncate text-sm font-normal text-gray-300 break-text">
															{post.content}
														</p>
														<div className="text-xs font-thin mt-2">
															Posted <time>{post.postDate}</time> &#8226;
															Updated <time>{post.updatedDate}</time>
														</div>
													</article>

													<div className="space-x-3">
														<div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
															<EyeIcon className="w-5 text-gray-300" />
															<span>{post.views}</span>
														</div>
														<div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
															<ChatAlt2Icon className="w-5 text-gray-300" />
															<span>{post.replies}</span>
														</div>
													</div>
												</div>
											</div>

											<div className="absolute lg:static right-5 ml-auto mr-2">
												<div className="inline-flex space-x-2 ">
													<div
														className={
															" bg-coolGray-900 bg-opacity-70 rounded-md px-2 py-1 has-tooltip " +
															post.locked
														}
													>
														<LockClosedIcon className="w-5 text-gray-300 " />
														<span className="tooltip bg-gray-300 bg-opacity-20 rounded px-2 mt-2 -ml-2 text-sm">
															Locked
														</span>
													</div>
													<div
														className={
															" bg-coolGray-900 bg-opacity-70 rounded-md px-2 py-1 has-tooltip " +
															post.pinned
														}
													>
														<PencilIcon className="w-5 text-gray-300" />
														<span className="tooltip bg-gray-300 bg-opacity-20 rounded px-2 mt-2 -ml-2 text-sm">
															Pinned
														</span>
													</div>
												</div>
											</div>
										</section>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

//This is really bad practice and I'm actually using a workaround because React doesn't like it

function tags(tags: Array<string>) {
	//Send `[]` as the array if you want a loading animation
	const r: Array<unknown> = [];
	if (!tags.length) {
		for (let i = 0; i < 2; i++) {
			r.push(
				<div className="rounded-full px-3 py-1 bg-blue-500 bg-opacity-50 w-10 h-4 animate-pulse"></div>
			);
		}
	}
	tags.forEach((tag) => {
		r.push(
			<div className="rounded-full px-3 py-1 font-medium text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
				{tag}
			</div>
		);
	});
	return r;
}

function loadingAnimation() {
	const r: Array<unknown> = [];

	for (let i = 0; i < 3; i++) {
		r.push(
			<a>
				<section
					className="bg-coolGray-800 px-5
		 py-3 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none text-gray-200 font-medium tracking-wide shadow-md"
				>
					<div className=" mr-4 flex flex-col items-center">
						<button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-green-200 focus:hover:opacity-95 rounded-full transition duration-300">
							<ChevronUpIcon className="w-7 p-0.5 " />
						</button>
						<span className="text-sm">
							<div className="animate-pulse bg-blue-500 h-4 rounded w-4" />
						</span>
						<button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-red-200 focus:hover:opacity-95 rounded-full transition duration-300">
							<ChevronDownIcon className="w-7 p-0.5 " />
						</button>
					</div>
					<div className=" w-[0.1rem] bg-theme-secondary mr-4 rounded my-2 " />
					<div>
						<div>
							<div className="flex items-center">
								<figure>
									<Image
										width={28}
										height={28}
										src="/assets/example-pfp.png"
										className="rounded-full"
										quality={100}
										alt="User Icon"
									/>
								</figure>
								<figcaption className="ml-2">
									<div className="animate-pulse bg-blue-500 h-4 rounded w-24" />
								</figcaption>
							</div>
							<article className="my-3">
								<div className="animate-pulse bg-blue-500 h-4 rounded w-36 mb-2" />

								<div className="animate-pulse bg-blue-500 h-4 rounded w-[30rem]" />
								<div className="text-xs font-thin mt-2 flex space-x-2">
									<div className="animate-pulse bg-blue-500 h-4 rounded w-12 mr-2" />{" "}
									&#8226;
									<div className="animate-pulse bg-blue-500 h-4 rounded w-12" />
								</div>
							</article>

							<div className="space-x-3">
								<div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
									<EyeIcon className="w-5 text-gray-300" />
									<div className="animate-pulse bg-blue-500 h-4 rounded w-6 brightness-90 filter" />
								</div>
								<div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
									<ChatAlt2Icon className="w-5 text-gray-300" />
									<div className="animate-pulse bg-blue-500 h-4 rounded w-6 brightness-90 filter" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</a>
		);
	}
	return r;
}
