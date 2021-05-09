import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Heroicons from "@heroicons/react/outline";

import JSBoardFooter from "../misc/footer.js";
import DashBtn from "./dashbutton";
import Loading from "../misc/loading";
import PageError from "../misc/error";
import Notification from "../misc/notification";

export default class StaffCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName || "Guest",
      profilePicture: this.props.profilePicture || "../../ProfilePicture.png",
      isAdmin: this.props.isAdmin,
      profileOpen: false,
      sideBarOpen: false,
    };
  }

  render() {
    //A Secure Minecraft Vault in a Secure Minecraft Vault in a Secure Minecraft Vault in a Secure...
    if (this.props.isAdmin === true) {
      //add a ! once we move to prod
      return (
        <>
          <PageError
            code={401}
            text="User unathorized"
            back={true}
            home={true}
          />
        </>
      );
    } else {
      return (
        <>
          <title>JSboard Staff Dashboard</title>
          <div className="overflow-hidden flex bg-coolGray-700 text-gray-200 h-screen">
            {/*Side panel*/}
            <div
              className={
                "max-h-screen shadow-2xl md:shadow-sm bg-coolGray-900 flex-none z-40 absolute bottom-0 top-0 md:z-0 md:static w-11/12 md:w-60 lg:w-72 xl:w-80 flex-col min-h-0 select-none " +
                (this.state.sideBarOpen ? "flex" : "hidden md:flex")
              }
            >
              <div className="py-4">
                <h2 className="text-xl font-semibold text-center flex md:block">
                  <Heroicons.XIcon
                    className="h-6 w-6 ml-2 mr-4 mt-[0.20rem] md:hidden"
                    onClick={() =>
                      this.setState({ sideBarOpen: !this.state.sideBarOpen })
                    }
                  />
                  <Link href="/staff">DashJSBoard</Link>
                </h2>
              </div>
              <hr className="mx-6 mb-4 bg-coolGray-800 border-none h-px flex-none" />
              {/*Sidebar Menu*/}
              <div className="flex-grow overflow-y-auto space-y-4">
                <ListStuffz />
              </div>
              {/*Profile popup*/}
              <div className={this.state.profileOpen ? "" : "hidden"}>
                <div className="flex flex-col py-1 text-gray-300 text-lg rounded bg-coolGray-800 bg-opacity-30 mx-2 space-y-2">
                  <Link href="/">
                    <button className="btn flex flex-row flex-grow hover:bg-gray-800">
                      <Heroicons.HomeIcon className="h-6 w-6 mx-2" />
                      <p className="mr-2">Back to forums</p>
                    </button>
                  </Link>
                  <hr className="mx-6 opacity-50" />
                  <Link href={"/profile/" + this.props.userName}>
                    <button className="btn flex flex-row flex-grow hover:bg-gray-800">
                      <Heroicons.UserCircleIcon className="h-6 w-6 mx-2" />
                      <p className="mr-2">Profile</p>
                    </button>
                  </Link>
                </div>
              </div>
              {/*Bottom Profile img thing*/}
              <div
                className="container bg-coolGray-800 bg-opacity-50 hover:bg-opacity-75 shadow h-16 flex-none mt-2 items-center cursor-pointer"
                onClick={() =>
                  this.setState({ profileOpen: !this.state.profileOpen })
                }
              >
                <div className="mx-3 my-2 flex flex-grow flex-row rounded-lg">
                  <div>
                    <img
                      src={this.state.profilePicture}
                      className="mx-3 rounded-full h-12 w-12"
                      alt="User profile picture"
                    ></img>
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">
                      <span className="hidden xl:block">
                        {truncate(this.state.userName, 16)}
                      </span>
                      <span className="hidden lg:block xl:hidden">
                        {truncate(this.state.userName, 14)}
                      </span>
                      <span className="block lg:hidden">
                        {truncate(this.state.userName, 10)}
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
                    className={
                      "md:hidden " + (this.props.sideBarOpen ? "hidden" : "")
                    }
                    onClick={() =>
                      this.setState({ sideBarOpen: !this.state.sideBarOpen })
                    }
                  >
                    <Heroicons.MenuAlt2Icon className="h-6 w-6 mx-2 text-gray-200 hover:text-gray-400" />
                  </div>
                  <form className="flex flex-grow max-w-md">
                    <input
                      type="search"
                      className="bg-gray-800 rounded-lg border-none w-full"
                    />
                  </form>
                </nav>
                <div className="h-full">
                  {" "}
                  {/*dont touch. it works*/}
                  <div className="flex flex-col min-h-full m-6">
                    {this.props.children}
                  </div>
                  <JSBoardFooter />
                </div>
              </div>
            </div>
          </div>
          <Notification msg="✓ Saved!" color="bg-green-600" />
        </>
      );
    }
  }
}

function ListStuffz() {
  return (
    <ul className="mx-6">
      <li>
        <h2 className="uppercase my-2 tracking-wide font-semibold text-gray-200">
          Main
        </h2>
        <ul className="ml-2">
          <DashBtn
            icon={<Heroicons.HomeIcon className="h-6 w-6 mx-2" />}
            name="Dashboard"
            section="main"
          />
          <DashBtn
            icon={<Heroicons.CogIcon className="h-6 w-6 mx-2" />}
            name="Settings"
            section="main"
          />
          <DashBtn
            icon={<Heroicons.DownloadIcon className="h-6 w-6 mx-2" />}
            name="Integrations"
            section="main"
          />
          <DashBtn
            icon={<Heroicons.AdjustmentsIcon className="h-6 w-6 mx-2" />}
            name="Themes"
            section="main"
          />
          <DashBtn
            icon={<Heroicons.DocumentAddIcon className="h-6 w-6 mx-2" />}
            name="Custom Pages"
            url="pages"
            section="main"
          />
        </ul>
      </li>
      <li>
        <h2 className="uppercase my-2 mt-10 tracking-wide font-semibold text-gray-200">
          Forums
        </h2>
        <ul className="ml-2">
          <DashBtn
            icon={<Heroicons.NewspaperIcon className="h-6 w-6 mx-2" />}
            name="Customization"
            section="forums"
          />
          <DashBtn
            icon={<Heroicons.AnnotationIcon className="h-6 w-6 mx-2" />}
            name="Categories"
            section="forums"
          />
          <DashBtn
            icon={<Heroicons.ColorSwatchIcon className="h-6 w-6 mx-2" />}
            name="Labels"
            section="forums"
          />
          <DashBtn
            icon={<Heroicons.ChartSquareBarIcon className="h-6 w-6 mx-2" />}
            name="Statistics"
            section="forums"
          />
        </ul>
      </li>
      <li>
        <h2 className="uppercase my-2 mt-10 tracking-wide font-semibold text-gray-200">
          User Management
        </h2>
        <ul className="ml-2">
          <DashBtn
            icon={<Heroicons.UserGroupIcon className="h-6 w-6 mx-2" />}
            name="Users"
            section="users"
          />
          <DashBtn
            icon={<Heroicons.HandIcon className="h-6 w-6 mx-2" />}
            name="Roles"
            section="users"
          />
          <DashBtn
            icon={<Heroicons.ChatIcon className="h-6 w-6 mx-2" />}
            name="Reports"
            section="users"
          />
          <DashBtn
            icon={<Heroicons.BanIcon className="h-6 w-6 mx-2" />}
            name="Punishments"
            section="users"
          />
        </ul>
      </li>
    </ul>
  );
}

function truncate(str, n) {
  return str.length > n ? str.substr(0, n) + "..." : str;
}
