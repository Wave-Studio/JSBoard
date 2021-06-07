import {
  ChevronDownIcon,
  ChevronRightIcon,
  PlusSmIcon,
  StatusOnlineIcon,
  FireIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import StaffCore from "../../../components/staff/core";
import Linkmaker from "../../../components/staff/linkmaker"
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";

export default function dashboard() {

    return (
      <>
      <StaffCore page="Settings">
      <h1 className="text-3xl font-bold text-gray-200 mb-1">Settings</h1>
          <h2 className="text-xl font-medium text-gray-300 mb-2">
            Configure the sidebar and main boxes
          </h2>
          <hr className="border-blue-600 border-t-2 bg-opacity-50 w-10" />
          <div className="space-y-8 mt-10">
      <div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 text-gray-200">
        {/*Section 1*/}
        <h2 className="text-lg font-semibold text-gray-300 mb-8">
          Let's learn some more about you
          {/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
        </h2>
        <div className="flex flex-col max-w-xl space-y-3 font-medium">
          {/*Make basic info adrea for main page*/}
          <label>
            Name
            <input
              type="text"
              className="rounded border-none shadow w-full placeholder-white placeholder-opacity-50"
              placeholder="Insert indelible name here"
              maxLength={30}
              autoComplete="off"
              autoCapitalize="on"
            />
          </label>
          <label>
            Description
            <textarea
              className="shadow rounded border-none w-full h-36 placeholder-gray-200 placeholder-opacity-50"
              placeholder="Welcome to my lovely forum!"
              maxLength={1200}
              wrap="soft"
              autoComplete="on"
            />
          </label>
          {/*Links*/}
          <Linkmaker name="Store">
          <label>
            Link
            <input
              type="text"
              className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
              placeholder="https://github.com/JsServices"
              maxLength={30}
              autoComplete="url"
            />
          </label>
          </Linkmaker>
          <Linkmaker name="Website">
          <label>
            Link
            <input
              type="text"
              className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
              placeholder="https://github.com/JsServices/homepage"
              maxLength={30}
            />
          </label>
          </Linkmaker>
          <Linkmaker name="Custom Link">
          <label>
            Link
            <input
              type="text"
              className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
              placeholder="https://nohello.net"
              maxLength={50}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              className="bg-coolGray-700 bg-opacity-70 rounded border-none w-full placeholder-gray-200 placeholder-opacity-50"
              placeholder="My cool link!"
              maxLength={16}
            />
          </label>
          </Linkmaker>
        </div>
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
            
          </div>
          <div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Create a theme for your forums
              {/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
            </h2>
            <h3 className="text-gray-200 font-medium">
              Select one of our beautifuly handcrafted default user themes{" "}
              <span className="font-extralight">(we reccomend dark!)</span>
            </h3>
            <div className="flex py-4 space-x-4">
              <input
                type="radio"
                name="theme"
                className="appearance-none transition bg-coolGray-900 text-coolGray-900 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-black focus:checked:ring-opacity-50 ring-opacity-50 fill-black-yes"
                defaultChecked
              />
              <input
                type="radio"
                name="theme"
                className="appearance-none transition bg-white text-white p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-white focus:checked:ring-opacity-50 ring-opacity-50"
              />
            </div>
            <h3 className="text-gray-200 font-medium">
              Choose a luxurious accent color from our expertly-crafted color
              palette by the makers of TailwindCSS
            </h3>
            <div className="flex py-4 space-x-4">
              <input
                type="radio"
                name="colors"
                className="appearance-none transition bg-blue-600 text-blue-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-blue-600 focus:checked:ring-opacity-50 ring-opacity-50"
                defaultChecked
              />
              <input
                type="radio"
                name="colors"
                className="appearance-none transition bg-green-600 text-green-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-green-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-green-600 focus:checked:ring-opacity-50 ring-opacity-50"
              />
              <input
                type="radio"
                name="colors"
                className="appearance-none transition bg-red-600 text-red-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-red-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-red-600 focus:checked:ring-opacity-50 ring-opacity-50"
              />
              <input
                type="radio"
                name="colors"
                className="appearance-none transition bg-purple-600 text-purple-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-purple-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-purple-600 focus:checked:ring-opacity-50 ring-opacity-50"
              />
              <input
                type="radio"
                name="colors"
                className="appearance-none transition bg-yellow-600 text-yellow-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-yellow-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-yellow-600 focus:checked:ring-opacity-50 ring-opacity-50"
              />
            </div>
            <h3 className="text-gray-200 font-medium">
              Pick an image or color gradient that represents your community
            </h3>
            <div className="border-2 border-gray-300 border-opacity-25 rounded-lg max-w-xl mt-3 p-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-600 h-12 rounded-lg relative">
                <span className="absolute bottom-0 right-1 text-gray-400 italic flex">
                  Preview
                </span>
              </div>
              <fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
                <legend className="text-center px-1 font-medium">
                  Starting Gradient
                </legend>
                <input
                  type="text"
                  className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
                  defaultValue="#34D399"
                  maxLength={7}
                />
              </fieldset>
              <fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
                <legend className="text-center px-1 font-medium">
                  Ending Gradient
                </legend>
                <input
                  type="text"
                  className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
                  defaultValue="#2563EB"
                  maxLength={7}
                />
              </fieldset>
            </div>
            //color picker here?
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
        </StaffCore>
      </>
    );
  }

