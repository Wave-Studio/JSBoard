import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PageError(props: {
	code: number;
	text: string;
	back: boolean;
	home: boolean;
	redirect?: string | undefined;
	redirectName?: string | null;
	allowHome?: boolean | undefined;
}) {
	return (
		<>
			<div className="flex flex-col h-screen">
				<Navbar name={props.code + " | " + props.text} />
				<div className="flex flex-grow justify-center items-center">
					<div className="bg-coolGray-800 text-gray-100 rounded-md shadow-lg p-10 mx-4">
						<h2 className="text-4xl font-semibold text-center mb-1">
							{props.code + " " + props.text}
						</h2>
						<div className="text-xl">
							<p className="mb-8 mt-2 md:mt-0 md:mb-5 text-center">
								An error occured while preforming that action!
							</p>

							<div className="flex justify-center items-center space-x-4">
								<div
									className={props.back ? "" : "hidden"}
									onClick={() => history.back()}
								>
									<a className="btn btn-lg btn-white ">Go back</a>
								</div>
								<div className={props.home ? "" : "hidden"}>
									<Link href="/">
										<a className="btn btn-lg btn-blue">Home</a>
									</Link>
								</div>

								<div
									className={
										props.redirect || typeof props.allowHome !== "undefined"
											? ""
											: "hidden"
									}
								>
									<Link href={props.redirect || ""}>
										<a className="btn btn-lg btn-blue ">
											{props.redirectName || ""}
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
