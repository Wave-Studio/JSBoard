import React from "react";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export default class PageError extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <Navbar name={this.props.code} />
          <div className="flex h-full justify-center items-center">
            <div className="bg-coolGray-800 text-gray-100 rounded-md shadow-lg p-10">
              <h2 className="text-4xl font-semibold text-center">
                {this.props.code}
              </h2>
              <div className="text-xl">
                <p className="mb-5">
                  An error occured while preforming that action!
                </p>

                <div className="flex justify-center items-center space-x-4">
                  <div
                    className={this.props.back ? "" : "hidden"}
                    onClick={() => history.back()}
                  >
                    <a className="btn btn-lg btn-white ">Go back</a>
                  </div>
                  <div className={this.props.home ? "" : "hidden"}>
                    <Link href="/">
                      <a className="btn btn-lg btn-blue">Home</a>
                    </Link>
                  </div>

                  <div
                    className={
                      this.props.redirect ||
                      typeof this.props.allowhome !== "undefined"
                        ? ""
                        : "hidden"
                    }
                  >
                    <Link href={this.props.redirect || ""}>
                      <a className="btn btn-lg btn-blue ">
                        {this.props.redirectname || ""}
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
}
