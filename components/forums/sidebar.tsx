import React from "react";
import Link from "next/link";


export default function sidebar(props) {
/*export default class sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading == true) {
      return (
        <>
          <div>
            <div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center cursor-not-allowed">
              <div className="bg-blue-500 mb-4 animate-pulse rounded py-5 opacity-90"></div>
              <div className="bg-blue-500 mb-2 animate-pulse rounded h-4"></div>
              <div className="bg-blue-500 mb-2 w-3/4 animate-pulse rounded h-4"></div>
              <div className="bg-blue-500 w-5/6 animate-pulse rounded h-4"></div>
            </div>
          </div>

          <div>
            <div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center cursor-not-allowed">
              <div className="bg-blue-500 mb-4 animate-pulse rounded py-5 opacity-90"></div>
              <div className="bg-blue-500 mb-2 animate-pulse rounded h-4"></div>
              <div className="bg-blue-500 mb-2 w-3/4 animate-pulse rounded h-4"></div>
              <div className="bg-blue-500 w-5/6 animate-pulse rounded h-4"></div>
            </div>
          </div>
        </>
      );
    } else {*/
      return (
        <>
          {this.props.categories.map((data) => (
            <div>
              <div className="flex-none rounded-md shadow-md bg-coolGray-800 mb-10 lg:w-72 p-3 text-center">
                <div
                  className={
                    data.startColor +
                    " " +
                    data.endColor +
                    "  mb-4 rounded py-2 bg-gradient-to-r opacity-90"
                  }
                >
                  <h2 className="text-2xl opacity-100 break-words">
                    {data.icon + data.name}
                  </h2>
                </div>
                {data.content}
              </div>
            </div>
          ))}
        </>
      );
    }
  //}
//}
