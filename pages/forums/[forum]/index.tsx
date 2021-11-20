import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
	ColorSwatchIcon
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
    tags: ["The", "Best", "Forum"],
    posts: [
      {
        post: {
          title: "Example post",
          author: "Blox",
          authorID: 1,
          formattedDate: "2020-01-01",
          //content: "This is an example post.", We only care about featching surface level details here
          locked: true,
          sticky: true,
          views: 0,
          tags: ["The", "Best", "post"],
        },
        replies: {
          count: 1,
          lastMsgAuthor: "quick007",
          lastMsgAuthorID: 1,
          formattedDate: "2020-01-01",
        },
        id: 1,
      },
    ],
  });
  const [open, setOpen] = useState(true);
  const pages = 15;
  const [page, setPage] = useState(
    ((isNaN(selectedPage) ? selectedPage : 1) ?? 1) > pages
      ? pages
      : (isNaN(selectedPage) ? selectedPage : 1) ?? 1
  );
  //we'll show a maximum of 15 posts per page

  useEffect(() => {
    /*fetch("/api/socket").finally(() => {
      const socket = io();
      socket.on("forum", (data) => {
        setForum(data);
      });
      socket.emit("forum", forumID); //use the ID here, forumName (should) return "name:id"
    });*/
  }, []);

  if (!forum.name == null) {
    //if you generally use "forum" it
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
                <div>
									<div className="flex space-x-2 items-center ">
										<div className="bg-coolGray-900 bg-opacity-25 p-1 rounded-lg ">
										<ColorSwatchIcon className="w-6 text-transparent bg-gradient-to-br from-theme-primary to-green-500 bg-clip-text overflow-hidden" />
										</div>
                  	{tags(forum.tags)}
									</div>
                  <h1 className="text-2xl font-medium mt-3 ">{forum.name}</h1>
                  <h2 className="text-sm font-light text-gray-400">
                    {forum.description}
                  </h2>
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

//This is really bad practice and I', actually using a workaround because React doesn't like it

function tags(tags: Array<string>) {
  console.log(tags);
  var r: Array<unknown> = [];
  tags.forEach((tag) => {
    r.push(
      <div className="rounded-r border-l-2 border-theme-primary dark:border-blue-400 px-3 py-1 font-medium text-gray-300 text-sm bg-coolGray-900 bg-opacity-40">
        {tag}
      </div>
    );
  });
  return r;
}
