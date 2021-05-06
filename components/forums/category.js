import React from "react";
import Link from "next/link";
import { AnnotationIcon } from "@heroicons/react/outline";

export default class category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.categories.map((data) => (
          <div>
            <Link href="#">
              <div className="flex-grow flex flex-row rounded-md shadow-md bg-coolGray-800 py-2 mb-5 items-center">
                <div className="grid place-items-center align-middle rounded-full p-2 md:p-3 bg-blue-600 mx-5">
                  <AnnotationIcon />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl text-gray-100">{data.name}</h2>
                  <p className="text-gray-300 ">{data.description}</p>
                </div>
                <div className="hidden lg:block">
                  <div className="mx-4 border border-blue-600 h-12"></div>
                </div>
                <div className="hidden lg:block">
                  <h2 className="text-gray-200 text-lg ml-1/2">
                    {data.topics}
                  </h2>
                  <h4 className="text-gray-400 text-sm uppercase font-roboto">
                    Topics
                  </h4>
                </div>
                <div className="hidden lg:block ml-4 mr-12">
                  <h2 className="text-gray-200 text-lg ml-1/2">{data.posts}</h2>
                  <h4 className="text-gray-400 text-sm uppercase font-roboto">
                    Posts
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
