import fetcher from "../lib/fetcher";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

import PageError from "../components/misc/error";
import Navbar from "../components/misc/navbar";
import Footer from "../components/misc/footer";
import { useEffect, useState } from "react";

export default function profiles(props) {
  const [menuSel, setMenuSel] = useState(1);
  const { data, error } = useSWR("/api/user/userList", fetcher);
  if (error)
    return (
      <>
        <PageError
          code={500}
          text="An error occured while loading this!"
          back={false}
          home={false}
        />
      </>
    );

  if (!data) {
    return (
      <>
        <div className="flex flex-col min-h-screen bg-coolGray-700">
          <Navbar name="Profiles List" />
          <div className="flex-1 p-2">
            <div className="max-w-screen-xl mx-auto text-gray-200 bg-coolGray-800 p-5 my-10 rounded-md flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-2xl font-medium">Forum Members</h2>
                <form className="flex flex-grow sm:w-96">
                  <input
                    type="search"
                    placeholder="Search"
                    className="text-box-form border-none rounded w-full mt-4"
                  />
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-medium">Sort</h2>
                <div className="rounded-md flex flex-wrap p-1.5 dark:bg-coolGray-75 bg-coolGray-850 gap-2 font-semibold mt-4">
                  <h1
                    className={
                      "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                      ([1].includes(menuSel)
                        ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
                        : "")
                    }
                    onClick={() => setMenuSel(1)}
                  >
                    A - Z
                  </h1>
                  <h1
                    className={
                      "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                      ([2].includes(menuSel)
                        ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
                        : "")
                    }
                    onClick={() => setMenuSel(2)}
                  >
                    User ID
                  </h1>
                </div>
              </div>
              {exProfile()}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-coolGray-700">
        <Navbar name="Profiles List" />
        <div className="flex-1 p-2 px-36 gf:px-2">
          <div className="max-w-screen-xl mx-auto text-gray-200 bg-coolGray-800 p-5 my-10 rounded-md flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-2xl font-medium">Forum Members</h2>
              <form className="flex flex-grow sm:w-96">
                <input
                  type="search"
                  placeholder="Search"
                  className="text-box-form border-none rounded w-full mt-4"
                />
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Sort</h2>
              <div className="rounded-md flex flex-wrap p-1.5 dark:bg-coolGray-75 bg-coolGray-850 gap-2 font-semibold mt-4">
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([1].includes(menuSel)
                      ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
                      : "")
                  }
                  onClick={() => setMenuSel(1)}
                >
                  A - Z
                </h1>
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([2].includes(menuSel)
                      ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
                      : "")
                  }
                  onClick={() => setMenuSel(2)}
                >
                  User ID
                </h1>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto text-gray-200 mb-10">
            <LoadUserProfiles />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
  function LoadUserProfiles() {
    const test = //if your wondering, this "works", sort of. (hint: spam click the two buttons until desired result) Accepting PRs to fix lmao
      menuSel == 1 ? data.users.sort().slice(0, 20) : data.users.slice(0, 20);
    return test.map((d: string) => {
      const user = d.split(":").pop();
      const userprofile = useSWR(`/api/user/data?id=${user}`, fetcher);
      if (!userprofile.data) {
        return exProfile();
      }
      return (
        <>
          <Link href={"/profile/" + user}>
            <a>
              <div className="bg-coolGray-800 px-5 py-3 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none">
                <Image
                  src={userprofile.data.pfp}
                  width={50}
                  height={50}
                  className="rounded-full"
                  quality={40}
                />
                <div className="ml-5">
                  <h2 className="font-medium flex">
                    {userprofile.data.username}{" "}
                    <div className="rounded-sm bg-blue-600 px-1 font-semibold text-sm ml-3 mb-auto">
                      {userprofile.data.rank}
                    </div>
                  </h2>
                  <p className="font-extralight">"{userprofile.data.title}"</p>
                </div>
                <div className="ml-auto flex items-center ">
                  <ChevronRightIcon className="w-6 h-6" />
                </div>
              </div>
            </a>
          </Link>
        </>
      );
    });
  }
}

function exProfile() {
  return (
    <div className="max-w-screen-xl mx-auto text-gray-200 mb-10">
      <div className="bg-coolGray-800 px-5 py-3 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none">
        <Image
          src="/ProfilePicture.png"
          width={50}
          height={50}
          className="rounded-full"
          quality={40}
        />
        <div className="ml-5">
          <h2 className="font-medium flex">
            <div className="animate-pulse mb-3 bg-blue-500 w-36 h-6 rounded" />
            <div className="rounded-sm bg-blue-600 px-1 font-semibold text-sm ml-3 mb-auto"></div>
          </h2>
          <p className="font-extralight">
            <div className="animate-pulse bg-blue-500 h-4 rounded" />
          </p>
        </div>
        <div className="ml-auto flex items-center ">
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
