import {
  ChevronDownIcon,
  ChevronRightIcon,
  PlusSmIcon,
  StatusOnlineIcon,
  FireIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/outline";
import React from "react";
import StaffCore from "../../components/staff/core.js";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher.js";

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = {
      storeOpen: false,
      websiteOpen: false,
      linkOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mainDesc: event.target.mainDesc });
    useSWR(
      "/api/staff/save/" +
        event.target.mainDesc +
        "/?desc=" +
        event.target.mainDesc,
      fetcher
    );
  }

  render() {
    return (
      <>
        <StaffCore page="Settings">
          <h1 className="text-3xl font-bold text-gray-200 mb-1">
            Settings
          </h1>
          <h2 className="text-xl font-medium text-gray-300 mb-2">
            Configure the sidebar and main boxes
          </h2>
          <hr className="border-blue-600 border-t-2 bg-opacity-50 w-10" />
          <div className="space-y-8 mt-10">
            {/*Server Info*/}
            <div className="p-4 rounded-lg shadow w-full bg-coolGray-800">
              <h1 className="text-2xl font-semibold text-gray-200">Info</h1>
              <h2 className="text-lg font-medium text-gray-300 mb-2">
                The name and description of your forum, appearing on the
                homepage
              </h2>
              <form className="flex flex-grow flex-col max-w-xl font-medium tracking-wide text-gray-200 space-y-4">
                <label>
                  Name
                  <input
                    type="text"
                    className="rounded border-none w-full bg-coolGray-700 bg-opacity-70"
                    placeholder="Insert indelible name here"
                    maxLength="30"
                  />
                </label>
                <label>
                  Description
                  <textarea
                    className="bg-gray-800 rounded border-none w-full h-36"
                    placeholder="Welcome to my lovely forum!"
                    maxLength="1200"
                    wrap="soft"
                    value={this.state.mainDesc}
                    onChange={this.handleChange}
                  />
                </label>
                {/*Links*/}
                <div className="flex w-full select-none ">
                  <label>
                    Store
                    <input
                      type="checkbox"
                      className="rounded-full bg-gray-800 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>
                      this.setState({
                        storeOpen: !this.state.storeOpen,
                        websiteOpen: false,
                        linkOpen: false,
                      })
                    }
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.storeOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.storeOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={this.state.storeOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-gray-800 rounded border-none w-full"
                    placeholder="https://github.com/JsServices"
                    maxLength="30"
                  />
                </label>

                <div className="flex w-full select-none ">
                  <label>
                    Website
                    <input
                      type="checkbox"
                      className="rounded-full bg-gray-800 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>
                      this.setState({
                        storeOpen: false,
                        websiteOpen: !this.state.websiteOpen,
                        linkOpen: false,
                      })
                    }
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.websiteOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.websiteOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={this.state.websiteOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-gray-800 rounded border-none w-full"
                    placeholder="https://github.com/JsServices/homepage"
                    maxLength="30"
                  />
                </label>

                <div className="flex w-full select-none ">
                  <label>
                    Custom Link
                    <input
                      type="checkbox"
                      className="rounded-full bg-gray-800 ml-2"
                    />
                  </label>
                  <div className="flex flex-grow"></div>
                  <span
                    onClick={() =>
                      this.setState({
                        storeOpen: false,
                        websiteOpen: false,
                        linkOpen: !this.state.linkOpen,
                      })
                    }
                  >
                    <ChevronRightIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.linkOpen ? "hidden" : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-6 h-auto hover:bg-coolGray-700 hover:cursor-pointer rounded mt-1 " +
                        (this.state.linkOpen ? "" : "hidden")
                      }
                    />
                  </span>
                </div>
                <label className={this.state.linkOpen ? "" : "hidden"}>
                  Link
                  <input
                    type="text"
                    className="bg-gray-800 rounded border-none w-full"
                    placeholder="https://nohello.net"
                    maxLength="50"
                  />
                </label>
                <label className={this.state.linkOpen ? "" : "hidden"}>
                  Name
                  <input
                    type="text"
                    className="bg-gray-800 rounded border-none w-full"
                    placeholder="My cool link!"
                    maxLength="16"
                  />
                </label>
              </form>
            </div>
            {/*Sidebar Options*/}
            <div className="p-4 rounded-lg shadow w-full bg-coolGray-800">
              <h1 className="text-2xl font-semibold text-gray-200">Sidebar</h1>
              <h2 className="text-lg font-medium text-gray-300 mb-2">
                Configure whats on the sidebar, or even create your own cutom
                sidebar boxes
              </h2>
              <form className="flex flex-wrap max-w-xl justify-center sm:justify-start items-center gap-10">
                {/*Sidebar Things to click*/}
                <label className="expand relative select-none bg-gradient-to-br from-blue-500 to-green-600 hover:from-blue-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
                  <StatusOnlineIcon className="w-10" />
                  Online Users
                  <input
                    type="checkbox"
                    className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
                  />
                </label>

                <label className="expand relative select-none bg-gradient-to-br from-red-500 to-yellow-600 hover:from-red-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
                  <FireIcon className="w-10" />
                  Hot Posts
                  <input
                    type="checkbox"
                    className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
                  />
                </label>
                <label className="expand relative select-none bg-gradient-to-br from-indigo-500 to-pink-600 hover:from-indigo-600 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
                  <DocumentDuplicateIcon className="w-10" />
                  New Posts
                  <input
                    type="checkbox"
                    className="rounded-full absolute bottom-[5px] right-[5px] border-none bg-gray-200 bg-opacity-50"
                  />
                </label>

                <label className="expand relative select-none bg-coolGray-700 rounded-lg h-40 w-40 flex flex-col justify-center items-center font-medium text-gray-300 cursor-pointer opacity-70 hover:opacity-90">
                  <PlusSmIcon className="w-10" />
                  Create a Tab
                </label>
              </form>
            </div>
            {/*Possible Footer/navbar area*/}
            <div className="p-4 rounded-lg shadow w-full bg-coolGray-800">
              <h1 className="text-2xl font-semibold text-gray-200">
                Something else
              </h1>
              <h2 className="text-lg font-medium text-gray-300 mb-2">
                TBH idk what to put here, maybe like some sort of navbar/footer
                thing?
              </h2>
            </div>
          </div>
        </StaffCore>
      </>
    );
  }
}
