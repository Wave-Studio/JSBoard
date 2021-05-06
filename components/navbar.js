import React from "react";
import Link from "next/link";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";

export default class JSBoardNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: this.props.username || "Guest",
        loggedin: this.props.loggedin || false,
        admin: this.props.admin || false,
      },
      dropdownopen: false,
    };
  }
  render() {
    return (
      <>
        <div className="w-full h-16 flex items-center text-gray-100 bg-coolGray-800 shadow-lg sticky top-[-1px] z-40">
          <div className="mx-auto max-w-screen-xl px-10 font-semibold flex flex-grow">
            <span className="my-auto">JSBoard</span>
            <div className="flex flex-grow flex-row-reverse">
              <div
                className="text-gray-200 md:hidden bg-coolGray-700 p-2 rounded-full hover:opacity-70"
                onClick={() =>
                  this.setState({ dropdownopen: !this.state.dropdownopen })
                }
              >
                <span className={this.state.dropdownopen ? "hidden" : ""}>
                  <MenuAlt3Icon className="h-5 w-auto" />
                </span>
                <span className={this.state.dropdownopen ? "" : "hidden"}>
                  <XIcon className="h-5 w-auto" />
                </span>
              </div>
              <div className="btn btn-white">
                <Link href="/signup">
                  <span
                    className={
                      "bg-coolGray-700" + !this.state.loggedin ? "" : "hidden"
                    }
                  >
                    Sign Up
                  </span>
                </Link>

                <Link href={"/profiles/" + this.state.username}>
                  <span
                    className={
                      this.state.loggedin && !this.state.admin ? "" : "hidden"
                    }
                  >
                    Profile
                  </span>
                </Link>
                <Link href="/staff/dashboard">
                  <span className={this.state.admin ? "" : "hidden"}>
                    Dashboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
