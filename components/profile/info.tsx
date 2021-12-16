export default function Info(props: { page: number; rank: string }) {
	if (props.page !== 3) {
		return null;
	} else {
		return (
			<>
				{/*Section one*/}
				<div className="space-y-8">
					<div>
						<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
							Rank
						</h2>
						<p className="text-gray-200 text-sm px-1 bg-theme-primary inline-flex rounded font-medium">
							{props.rank}
						</p>
					</div>
					<div>
						<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
							Minecraft account
						</h2>
						<p className="text-gray-200 text-sm">Not linked</p>
					</div>
				</div>

				<fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
					<legend className="text-center px-1 font-medium">Signature</legend>
				</fieldset>

				{/*Section 2 - Report*/}
				<hr className="border-t-2 border-gray-300 border-opacity-25 my-4" />
				<h2 className="text-xs tracking-tight font-medium uppercase text-gray-500">
					Report
				</h2>
				<p className="text-gray-200 text-sm flex lg:max-w-screen-sm xl:max-w-screen-md">
					Report this user to the forums admins. Please make sure you've
					thoroughly read the forums rules before reporting a user
				</p>
				<button className="btn btn-blue !px-6 mt-4 font-semibold">
					Report this user
				</button>
			</>
		);
	}
}
