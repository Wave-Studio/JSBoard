export default function summery(props) {
	if (props.page !== 1) {
		return null
	}
	return (
		<>
			<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200 space-y-3">
				<h2 className="text-lg font-semibold text-gray-300 mb-4">
					Make sure everything is perfect!
		  			{/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
				</h2>
				<label className="flex items-center">
					<input type="checkbox" readOnly={true} className="rounded-full focus:checked:ring-0 focus:checked:ring-offset-transparent hover:checked:ring" checked />
					<span className="font-medium ml-2">{props.name}'s {props.forumType} Forum</span>
				</label>
				<label className="flex items-center">
					<input type="checkbox" readOnly={true} className="rounded-full focus:checked:ring-0 focus:checked:ring-offset-transparent hover:checked:ring" checked />
					<span className="font-medium ml-2">{props.db}</span>
				</label>
				<label className="flex items-center">
					<input type="checkbox" readOnly={true} className="rounded-full focus:checked:ring-0 focus:checked:ring-offset-transparent hover:checked:ring" checked />
					<span className="font-medium ml-2">{props.theme} Theme with {props.accentColor} Accents</span>
				</label>
			</div>
		</>
	)
}