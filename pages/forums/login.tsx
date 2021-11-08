import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import io, { Socket } from "socket.io-client";
import * as Yup from "yup";
import Link from "next/link";

import Navbar from "../../components/misc/navbar";
import Footer from "../../components/misc/footer";

const names = [
	"sampletext",
	"imposter21",
	"boomer",
	"searge-from-ltt",
	"shortstack",
	"felisha",
	"anthony",
	"hecker",
	"beluga",
	"eugene",
	"skittle-chan",
	"pablo",
	"lester",
	"snowie",
	"vladimir",
	"belu-mom",
	"🅱️eter",
	"ralph",
	"howard",
	"chad",
];

export default function signup() {
	const router = useRouter();
	const [signUp, setSignUp] = useState(1);
	const [socket, setSocket] = useState<Socket>();
	const [response, setResponse] = useState<
		{ success: boolean; token?: string; message: string }
	>();

	useEffect(() => {
		fetch("/api/socket").finally(() => {
			const socket = io();
			setSocket(socket);
			socket.on("signUpRes", (data) => {
				setSignUp(2);
				setResponse(data);
				//I should set cookies here
			});
		});
	}, []);

	return (
		/*First Box*/
		<div className="flex flex-col min-h-screen md:px-0">
			<Navbar name="Signup" />
			<div className="flex-1">
				<div
					className="max-w-screen-xl mx-auto text-gray-200 py-12 px-6 md:px-8 lg:px-10 space-y-5"
				>
					{
						//it works. no touch.
					}
					<div
						className="bg-coolGray-800 max-w-2xl mx-auto p-4 rounded-md flex justify-between"
					>
						<h1 className="font-medium text-2xl">
							{signUp ? "Get connected!" : "Welcome back!"}
						</h1>
						{
							//(for context what i did below is really bad practice. Like this shouldn't go into production at all.
							// I just wanted to see if it was possible, and heres what I ended up with)
						}
						<div
							className="rounded-md py-1.5 pr-2 pl-3 bg-coolGray-700 font-semibold select-none "
						>
							<div
								className="grid grid-cols-2 gap-2 place-items-center relative"
							>
								<div
									className={"absolute bg-coolGray-900 rounded-md transform transition bg-opacity-75 " +
										(signUp
											? "-translate-x-8"
											: "translate-x-8")}
								>
									<div
										className="invisible py-0.5 px-1.5 transition"
									>
										{signUp ? "Sign Up" : "Login"}
									</div>
								</div>
								<div
									className="z-10 cursor-pointer"
									onClick={() => setSignUp(1)}
								>
									Sign Up
								</div>
								<div
									className="z-10 cursor-pointer"
									onClick={() => setSignUp(0)}
								>
									Login
								</div>
							</div>
						</div>
					</div>
					{/*Second Box*/}
					{socket != undefined
						? (
							signUp == 0
								? (
									<>
										<Log />
									</>
								)
								: signUp == 1
								? (
									<>
										<Sign />
									</>
								)
								: <></>
						)
						: <></>}
				</div>
			</div>
			<Footer />
		</div>
	);
	function Res() {
		return (
			<div
				className={"space-y-3 max-w-2xl mx-auto p-4 rounded-md text-gray-200 font-medium grid place-items-center " +
					(response?.success ? "bg-green-500" : "bg-red-500")}
			>
				<h3 className="nightwind-prevent tracking-wide text-2xl">
					{response?.message}
				</h3>
				<div>
					<Link href="/">
						<a>
							<button className="btn btn-blue font-medium">
								To Home!
							</button>
						</a>
					</Link>
					<button
						className="btn btn-blue ml-3 font-medium"
						onClick={() => history.back()}
					>
						Back
					</button>
				</div>
			</div>
		);
	}

	function Log() {
		return (
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={(values) => {
					socket!.emit("login", {
						username: values.email,
						password: values.password,
					});
				}}
			>
				<Form
					className="flex flex-col space-y-3 bg-coolGray-800 max-w-2xl mx-auto p-4 rounded-md text-gray-200 font-medium"
				>
					<label htmlFor="email">
						Email
						<Field
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder="wireframes@mspaint.aol"
							autoComplete="email"
							name="email"
							required
						/>
					</label>
					<label htmlFor="password">
						Password
						<Field
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder="Pass123"
							autoComplete="password"
							name="password"
							required
						/>
					</label>
					<button
						type="submit"
						className="btn btn-blue mt-4 font-medium"
					>
						Login
					</button>
				</Form>
			</Formik>
		);
	}

	function Sign() {
		return (
			<Formik
				initialValues={{
					username: "",
					email: "",
					password: "",
					acceptedTerms: false,
				}}
				onSubmit={(values) => {
					socket!.emit("signUp", {
						username: values.username,
						email: values.email,
						password: values.password,
						acceptedTerms: values.acceptedTerms,
					});
				}}
			>
				<Form
					className="flex flex-col space-y-3 bg-coolGray-800 max-w-2xl mx-auto p-4 rounded-md text-gray-200 font-medium"
				>
					<label htmlFor="username">
						Username
						<Field
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder={names[
								Math.floor(Math.random() * names.length)
							]}
							autoComplete="username"
							name="username"
							required
						/>
					</label>
					<label htmlFor="email">
						Email
						<Field
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder="wireframes@mspaint.aol"
							autoComplete="email"
							name="email"
							required
						/>
					</label>
					<label htmlFor="password">
						Password
						<Field
							type="text"
							className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
							placeholder="Pass123"
							autoComplete="password"
							name="password"
							required
						/>
					</label>
					<label
						htmlFor="acceptedTerms"
						className="flex items-center py-2"
					>
						<Field
							type="checkbox"
							className="appearance-none transition bg-theme-primary text-theme-primary p-2.5 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-theme-primary focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-theme-primary focus:checked:ring-opacity-50 ring-opacity-50 rounded-full mr-3"
							autoComplete="none"
							name="acceptedTerms"
							required
						/>
						I accept the terms and conditions
					</label>
					<button
						type="submit"
						className="btn btn-blue mt-4 font-medium"
					>
						Join Up!
					</button>
				</Form>
			</Formik>
		);
	}
}
