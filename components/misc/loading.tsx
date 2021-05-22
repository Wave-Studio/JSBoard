import React from "react";
import Link from "next/link";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="flex h-full justify-center items-center">
            <div className="bg-coolGray-800 text-gray-100 rounded-md shadow-lg p-10">
              <h2 className="text-4xl font-semibold text-center">Loading</h2>
              <br />
              <div className="text-xl">
                <p>Loading your requested page!</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
