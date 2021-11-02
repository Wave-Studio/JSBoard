import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import PageError from "../../../components/misc/error";

export default function ViewUserProfile({
  selectedPage = 1,
}: {
  selectedPage?: number;
}) {
  const router = useRouter();
  const forumNameUnFiltered = `${router.query.forum}`;
  const forumID = forumNameUnFiltered.split(":").reverse().slice(0, 1).join("");
  const [forum, setForum] = useState({
    name: "Example forum",
    description: "Beans",
    posts: [
      {
        id: 1,
        title: "Example post",
        author: "Blox",
        content: "This is an example post.",
      },
    ],
  });
  const [open, setOpen] = useState(true);
  const pages: number = 15;
  const [page, setPage] = useState(
    ((isNaN(selectedPage) ? selectedPage : 1) ?? 1) > pages
      ? pages
      : (isNaN(selectedPage) ? selectedPage : 1) ?? 1
  );
  //we'll show a maximum of 15 posts per page

  useEffect(() => {
    fetch("/api/socket").finally(() => {
      const socket = io();
      socket.on("forum", (data) => {
        setForum(data);
      });
      socket.emit("forum", forumID); //use the ID here, forumName (should) return "name:id"
    });
  }, []);

  if (!forum == null) {
    return (
      //I can do the css for this later when I get a chance, also in theory the user will never see it
      <>
        <Navbar name="Loading..." />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen md:px-0">
        <Navbar name={forum.name} />
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto py-4">
            <Link href="/">
              <a>
                <button className="btn btn-white mb-2 mt-10 group flex items-center">
                  <ChevronLeftIcon className="scale-0 text-gray-200 group-hover:text-gray-800 group-hover:scale-100 w-4 h-4 transition duration-500 mt-0.5" />{" "}
                  Back to Home
                </button>
              </a>
            </Link>
            <div className="bg-coolGray-800 rounded-md p-5 text-gray-200">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium">forum name</h1>
                <div>
                  <div className="flex">
                    <button
                      onClick={() => {
                        if (page !== 1) setPage(page - 1);
                      }}
                    >
                      <ArrowLeftIcon
                        className={`w-6 ${page === 1 ? "text-gray-600" : ""}`}
                      />
                    </button>
                    <a className="p-2">{page}</a>
                    <button
                      onClick={() => {
                        if (page !== pages) setPage(page + 1);
                      }}
                    >
                      <ArrowRightIcon
                        className={`w-6 ${
                          page === pages ? "text-gray-600" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="text-sm font-light text-gray-400">description</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
