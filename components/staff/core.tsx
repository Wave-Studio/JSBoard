import React, { Props, useState } from "react";
import Link from "next/link";
import {
  XIcon,
  HomeIcon,
  UserCircleIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";

import Footer from "../misc/footer";
import Notification from "../misc/notification";
import PageError from "../misc/error";
import Loading from "../misc/loading";
import Sidebar from "./sidebar";
import Switcher from "../misc/mode-switcher";

import Shorten from "../../lib/shorten";
import dashboard from "./../../pages/dashboard/forums/settings";

export default function StaffCore(props) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const userName = props.userName || "Guest";
  const pfp = props.pfp || "/ProfilePicture.png";
  const admin = props.admin || false;
  const userID = props.userID || 0;

  if (admin === true)
    //add a ! once we move to prod
    return (
      <>
        <PageError code={401} text="User unathorized" back={true} home={true} />
      </>
    );

  return (
    <>
      <title>JSboard Staff Dashboard</title>
      <div className="overflow-hidden flex bg-coolGray-700 text-gray-200 h-screen">
        {/*Side panel*/}
        <div
          className={
            "max-h-screen shadow-2xl md:shadow-sm bg-coolGray-900 flex-none z-40 absolute bottom-0 top-0 md:z-0 md:static w-11/12 md:w-60 lg:w-72 xl:w-80 flex-col min-h-0 select-none " +
            (sideBarOpen ? "flex" : "hidden md:flex")
          }
        >
          <div className="py-4">
            <h2 className="text-xl font-semibold text-center flex md:block">
              <XIcon
                className="h-6 w-6 ml-2 mr-4 mt-[0.20rem] md:hidden"
                onClick={() => setSideBarOpen(!sideBarOpen)}
              />
              <Link href="/staff/dashboard">DashJSBoard</Link>
            </h2>
          </div>
          <hr className="mx-6 mb-4 bg-coolGray-800 border-none h-px flex-none" />
          {/*Sidebar Menu*/}
          <div className="flex-grow overflow-y-auto space-y-4">
            <Sidebar />
          </div>
          {/*Profile popup*/}
          <div className={profileOpen ? "" : "hidden"}>
            <div className="flex flex-col py-1 text-gray-300 text-lg rounded bg-coolGray-800 bg-opacity-30 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 text-gray-100 mx-2 space-y-2">
              <Link href="/">
                <button className="btn flex flex-row flex-grow hover:bg-gray-800">
                  <HomeIcon className="h-6 w-6 mx-2" />
                  <p className="mr-2">Back to forums</p>
                </button>
              </Link>
              <hr className="mx-6 opacity-50" />
              <Link href={"/profile/" + userID}>
                <button className="btn flex flex-row flex-grow hover:bg-gray-800">
                  <UserCircleIcon className="h-6 w-6 mx-2" />
                  <p className="mr-2">Profile</p>
                </button>
              </Link>
            </div>
          </div>
          {/*Bottom Profile img thing*/}
          <div
            className="container bg-coolGray-800 bg-opacity-50 hover:bg-opacity-75 shadow h-16 flex-none mt-2 items-center cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="mx-3 my-2 flex flex-grow flex-row rounded-lg">
              <div>
                <img
                  src={pfp}
                  className="mx-3 rounded-full h-12 w-12"
                  alt="User profile picture"
                ></img>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  <span className="hidden xl:block">
                    {Shorten(userName, 16)}
                  </span>
                  <span className="hidden lg:block xl:hidden">
                    {Shorten(userName, 14)}
                  </span>
                  <span className="block lg:hidden">
                    {Shorten(userName, 10)}
                  </span>
                </h2>
                <p className="text-sm text-gray-300">View Options</p>
              </div>
            </div>
          </div>
        </div>

        {/*Main panel*/}
        <div className="flex-grow flex flex-col min-h-screen ">
          <div className="flex flex-col min-h-screen overflow-y-auto bg-coolGray-700">
            {/*Navbar*/}
            <nav className="h-16 bg-coolGray-900 shadow flex flex-none sticky top-0 z-30 items-center px-4">
              <div
                className={"md:hidden " + (sideBarOpen ? "hidden" : "")}
                onClick={() => setSideBarOpen(!sideBarOpen)}
              >
                <MenuAlt2Icon className="h-6 w-6 mx-2 text-gray-200 hover:text-gray-400" />
              </div>
              <form className="flex flex-grow max-w-md ml-10">
                <input
                  type="search"
                  className="bg-gray-800 rounded-lg border-none w-full"
                />
              </form>
              <div className="absolute right-16">
                <Switcher darkTextOnLight={true} className="" />
              </div>
            </nav>
            <div className="h-full">
              {" "}
              {/*dont touch. it works*/}
              <menu className="flex flex-col min-h-full m-6">
                {props.children}
              </menu>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
