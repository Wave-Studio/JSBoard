import React from "react";
import Link from "next/link";
import nightwind from "nightwind/helper";

export default class JSBoardFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-coolGray-800">
        <footer className="flex max-w-screen-xl px-4 mx-auto text-gray-200 md:px-6 lg:px-8">
          <div className="container py-1">
            <hr className="h-px mt-6 bg-gray-600 bg-opacity-50 border-none inset-y-0 bottom-0"></hr>
            <div className="flex flex-col md:flex-row max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:px-6 lg:px-8">
              <div className="my-3 mx-4">
                <p>
                  Powered by{" "}
                  <a className="text-lg font-semibold rounded-lg focus:outline-none focus:shadow-outline">
                    <Link href="/"> JSBoard &#169; </Link>{" "}
                  </a>
                  <button className='btn' onClick={() => nightwind.toggle()}><p>Toggle Theme</p></button>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
