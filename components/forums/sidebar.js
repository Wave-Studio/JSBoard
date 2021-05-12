import React from "react";
import Link from "next/link";

export default class sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  "  mb-4 rounded py-2 bg-gradient-to-r opacity-80"
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
}
