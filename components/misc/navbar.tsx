import { useState } from "react";
import Link from "next/link";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Head from "next/head";

import Switcher from "./mode-switcher";

export default function Navbar(props: {name: string, className?: string}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const loading = false;
  const [loadingProgress, setLoadingProgress] = useState(1);
  const username = "Guest";
  const loggedin = false;
  const admin = false;
  const sitename = "Azyn";

  return (
    //need to add images later
    <>
      <Head>
        {/*Primary Meta Tags*/}
        <title>{(props.name ?? "JSBoard page") + " | JSBoard"}</title>
        <meta name="title" content={(props.name ?? "JSBoard page") + " | JSBoard"} />

        <meta
          name="description"
          content="Placeholder until we add moving saving descriptions"
        />

        {/*Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content={(props.name ?? "JSBoard page") + " | JSBoard"} />
        <meta
          property="og:description"
          content="Placeholder until we add moving saving descriptions"
        />
        <meta
          property="og:image"
          //content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/*Twitter*/}
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={(props.name ?? "JSBoard page") + " | JSBoard"} />
        <meta
          property="twitter:description"
          content="Placeholder until we add moving saving descriptions"
        />
        <meta
          property="twitter:image"
          //content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      {
        // I don't know why, I don't what to know why, I shouldn't
        // have to wonder why, but for whatever reason this stupid
        // progressbar doesn't layout out correctly unless we do this terribleness
      }
      {/*<div className="h-1 bg-coolGray-800">
        <progress
          id="file"
          max="1000"
          value="700"
          //onLoad={animateBar()}
          className={"w-full m-0 " + (props.loading ? "" : "hidden")}
        />
      </div>*/}
      {/*Actual Navbar starts here */}

      <div
        className={
          "w-full h-16 flex items-center text-gray-100 bg-coolGray-800 bg-opacity-70 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 shadow-lg sticky top-0 z-40 " +
          props.className
        }
      >
        <div className="mx-auto max-w-screen-xl px-10 font-semibold flex flex-grow">
          <Link href="/">
            <a className="my-auto">JSBoard</a>
          </Link>
          <div className="flex flex-grow flex-row-reverse">
            <div
              className="text-gray-200 lg:hidden bg-coolGray-700 p-2 rounded-full hover:opacity-70"
              onClick={
                () => setDropDownOpen(!dropDownOpen) //mobile nav is unfinished
              }
            >
              <span className={dropDownOpen ? "hidden" : ""}>
                <MenuAlt3Icon className="h-5 w-auto" />
              </span>
              <span className={dropDownOpen ? "" : "hidden"}>
                <XIcon className="h-5 w-auto" />
              </span>
            </div>
            <div className="btn btn-white hidden md:block">
              <Link href="/signup">
                <span className={"bg-coolGray-700" + !loggedin ? "" : "hidden"}>
                  Sign Up
                </span>
              </Link>

              <Link href={"/profiles/" + username}>
                <span className={loggedin && !admin ? "" : "hidden"}>
                  Profile
                </span>
              </Link>
              <Link href="/staff/dashboard">
                <span className={admin ? "" : "hidden"}>Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Switcher />
          </div>
        </div>
      </div>
    </>
  );
}
