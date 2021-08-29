import { SparklesIcon, SunIcon } from "@heroicons/react/outline";
import nightwind from "nightwind/helper";
import { useState } from "react";



export default function Switcher(props) {
	const [darkModeLoc, setDarkModeLoc] = useState(true);
	return (
		<>
			<div className={"has-tooltip relative nightwind-prevent " + props.className} onClick={() => nightwind.enable(darkModeLoc)}>
				<button className={"p-4 nightwind-prevent relative rounded-full ml-2 transition cursor-pointer duration-700 hover:duration-500 " + (darkModeLoc ? "bg-blue-800 hover:rotate-12" : "bg-yellow-400 rotate-180 hover:rotate-90")} onClick={() => setDarkModeLoc(!darkModeLoc)}>  
					<SparklesIcon className={"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 " + (darkModeLoc ? "" : "hidden")}  />
					<SunIcon className={"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 text-gray-900 " + (darkModeLoc ? "hidden" : "")}  />
							
				</button>
				<span className={"tooltip nightwind-prevent rounded font-medium shadow-lg p-1 bg-opacity-30 backdrop-filter backdrop-blur-3xl backdrop-saturate-150  mt-14 whitespace-nowrap -left-24 xl:-left-14 " + (darkModeLoc ? "text-gray-100 bg-gray-200" : "text-gray-900 bg-gray-300")}>Switch to {darkModeLoc ? "light" : "dark"} mode</span>
			</div>
		</>
	)
}