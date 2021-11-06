export default function step1(props: { page: number }) {
	if (props.page !== 1) {
		return null;
	}
	return (
		<>
			<div
				className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200"
			>
				<h2 className="text-lg font-medium text-gray-300 mb-2">
					What type of community is this forum for?
				</h2>
				<div
					className="flex flex-wrap max-w-xl justify-center sm:justify-start items-center gap-10"
				>
					<label
						className="expand relative select-none bg-gradient-to-br from-pink-500 to-red-600 hover:from-pink-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90"
					>
						Community Forum
						<input
							type="radio"
							id="forumType-community"
							name="forumType"
							className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
						/>
					</label>
					<label
						className="expand relative select-none bg-gradient-to-br from-indigo-500 to-pink-600 hover:from-indigo-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90"
					>
						Game Forum
						<input
							type="radio"
							id="forumType-game"
							name="forumType"
							className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
						/>
					</label>
					<label
						className="expand relative select-none bg-gradient-to-br from-yellow-500  to-green-600 hover:from-yellow-600  rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90"
					>
						Management Forum
						<input
							type="radio"
							id="forumType-manage"
							name="forumType"
							className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
						/>
					</label>
					<label
						className="expand relative select-none bg-gradient-to-br from-green-500  via-green-600 to-blue-900 hover:from-green-600 hover:via-green-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90"
					>
						Minecraft Forum
						<input
							type="radio"
							id="forumType-minecraft"
							name="forumType"
							className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
						/>
					</label>
					<label
						className="expand relative select-none bg-coolGray-700 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90"
					>
						Other
						<input
							type="radio"
							id="forumType-other"
							name="forumType"
							className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
						/>
					</label>
				</div>
			</div>
		</>
	);
}
