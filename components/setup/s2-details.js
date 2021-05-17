import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react"

export default function step2(props) {
	const [storeOpen, setStoreOpen] = useState(false);
	const [websiteOpen, setWebsiteOpen] = useState(false);
	const [linkOpen, setLinkOpen] = useState(false);

	if (props.page !== 1) {
			return null
	}
	return (
				<>
					<div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
						<div className="flex flex-col max-w-xl space-y-3">
						<h2 className="text-lg font-medium text-gray-300 mb-2">
							Let's learn some more about you.
						</h2>
						<label>
                  Name
                  <input
                    type="text"
                    className="rounded border-none shadow w-full bg-coolGray-900 bg-opacity-50 placeholder-white placeholder-opacity-60"
                    placeholder="Insert indelible name here"
                    maxLength="30"
                  />
                </label>
                <label>
                  Description
                  <textarea
                    className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full h-36 placeholder-gray-200 placeholder-opacity-50"
                    placeholder="Welcome to my lovely forum!"
                    maxLength="1200"
                    wrap="soft"
                  />
                </label>
                {/*Links*/}
                <div className="flex w-full select-none ">
                  <label>
                    Store
                    <input
                      type="checkbox"
                      className="rounded-full bg-coolGray-700 bg-opacity-70 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>(setStoreOpen(!storeOpen), setWebsiteOpen(false), setLinkOpen(false))}
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (storeOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (storeOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={storeOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
                    placeholder="https://github.com/JsServices"
                    maxLength="30"
                  />
                </label>

                <div className="flex w-full select-none ">
                  <label>
                    Website
                    <input
                      type="checkbox"
                      className="rounded-full bg-coolGray-700 bg-opacity-70 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>(setStoreOpen(false), setWebsiteOpen(!websiteOpen), setLinkOpen(false))}
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (websiteOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (websiteOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={websiteOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
                    placeholder="https://github.com/JsServices/homepage"
                    maxLength="30"
                  />
                </label>

                <div className="flex w-full select-none ">
                  <label>
                    Custom Link
                    <input
                      type="checkbox"
                      className="rounded-full bg-coolGray-700 bg-opacity-70 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>(setStoreOpen(false), setWebsiteOpen(false), setLinkOpen(!linkOpen))}
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (linkOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 bg-opacity-70 hover:cursor-pointer rounded mt-1 " +
                        (linkOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={linkOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
                    placeholder="https://nohello.net"
                    maxLength="50"
                  />
                </label>
                <label className={linkOpen ? "" : "hidden"}>
                  Name
                  <input
                    type="text"
                    className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
                    placeholder="My cool link!"
                    maxLength="16"
                  />
                </label>
						<h2 className="text-lg font-medium text-gray-300 my-2">
							Now for the important bits!
						</h2>

						</div>
					</div>
				</>
		)
}