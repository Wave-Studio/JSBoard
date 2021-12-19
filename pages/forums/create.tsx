/**
 * Create a new thread:
 * 1: Takes user input
 * 2: Throws it in db
 * 3: Redirect user to new post
 *
 * If error: send error to person
 *
 *
 */

import Link from "next/link";
import Navbar from "../../components/misc/navbar";
import Footer from "../../components/misc/footer";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import PageError from "../../components/misc/error";
import { OutputThreadTypings } from "../../lib/typings/forum";

export default function createPost() {
	const [cookies, setCookie] = useCookies(["token"]);
	const { query } = useRouter();
	const forumID = query.id;
	const router = useRouter();
	const [socket, setSocket] = useState<Socket>();
	const [res, setRes] = useState<OutputThreadTypings>({ success: false });
	const [disabled, setDisabled] = useState(false);
	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			setSocket(socket);
			socket.on("newThread", (data: OutputThreadTypings) => {
				setRes(data);
				console.log(data)
			});
		});
	}, []);

	if (!forumID) {
		return <PageError code={423} text="Error" back={true} home={true} />;
	} else if (!res.success && !res.message) {
		return (
			<>
				<div className="flex flex-col min-h-screen px-0 overflow-x-hidden text-gray-300">
					<Navbar name="Create a post" />
					<div className="flex-1 relative">
						<div className="max-w-screen-xl mx-auto px-4 ">
							<div className="rounded-md shadow-md bg-coolGray-800 p-5 my-10">
								<h1 className="text-2xl font-bold text-gray-200 mb-1">
									Create a Thread
								</h1>

								<hr className="border-theme-primary border-t-2 bg-opacity-50 w-10" />

								<Formik
									initialValues={{
										title: "",
										content: "",
									}}
									onSubmit={(values) => {
										
											//TODO: Need to make it save in session storage
											setDisabled(true);
											//alert(JSON.stringify(values, null, 2));
											socket!.emit("newThread", {
												forumID: forumID,
												title: values.title,
												content: values.content,
												token: cookies.token,
												pinned: false,
												locked: false,
											
											});
									}}
									validationSchema={Yup.object({
										title: Yup.string()
											.min(3, "Must be at least 3 characters")
											.max(60, "Must be 60 characters or less")
											.required("Required"),
										content: Yup.string()
											.min(10, "Must be at least 10 characters")
											.max(10000, "Must be 10000 characters or less")
											.required("Required"),
									})}
								>
									{(formik) => (
										<Form>
											<h2 className="text-lg font-semibold text-gray-300 mb-8">
												{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
											</h2>
											<div className="flex flex-col space-y-3 font-medium">
												{/*Make basic info adrea for main page*/}
												<div>
													<label htmlFor="title">Title</label>
													<Field
														type="text"
														name="title"
														className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
														placeholder="Give your post a good title"
														maxLength={30}
														autoComplete="off"
														autoCapitalize="on"
													/>
													<div className="text-red-600 font-normal font-sm">
														<ErrorMessage name="title" />
													</div>
												</div>
												<div>
													<label htmlFor="content">Content</label>
													<Field
														component="textarea"
														className="shadow rounded border-none w-full h-96 placeholder-gray-200 placeholder-opacity-50"
														placeholder="Write your heart out!"
														maxLength={10000}
														name="content"
														wrap="soft"
														autoComplete="on"
													/>
													<div className="text-red-600 font-normal font-sm">
														<ErrorMessage name="content" />
													</div>
												</div>
											</div>
											<div className="flex space-x-4 mt-5">
												<button
													type="submit"
													value="Save"
													className="bg-theme-primary btn btn-lg hover:opacity-70 font-semibold disabled:cursor-not-allowed disabled:opacity-70"
													disabled={disabled}
												>
													{`Creat${disabled ? "ing" : "e"} Thread`}
												</button>
												<button
													type="reset"
													onClick={() => formik.resetForm}
													className=" bg-red-500 btn btn-lg hover:opacity-70 font-semibold "
												>
													Clear
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</>
		);
	} else if (!res.success) {
		return (
			//TODO: Make this look nice
			<>{res.message}</>
		);
	} else {
		router.push(res.redirect as string);
		return <>Loading...</>;
		
	}
}
