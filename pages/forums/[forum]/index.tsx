import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ChatAlt2Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ColorSwatchIcon,
  EyeIcon,
  LockClosedIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import Error from "../../../components/misc/notification";

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
    page: 1,
    search: null,
    posts: [
      {
        post: {
          title: "Example post",
          sampleContent:
            "I was wondeirng how linus makes so many vides and why they are all sooo cool :flushed:",
          author: "Blox",
          authorID: 1,
          authorPFPFormat: "jpg", //jpg or gif
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
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex space-x-2 items-center ">
                    <div className="bg-coolGray-900 bg-opacity-25 p-1 rounded-lg ">
                      <ColorSwatchIcon className="w-6 text-gray-300" />
                    </div>
                    {tags(forum.tags)}
                  </div>
                  <h1 className="text-2xl font-medium mt-3 ">{forum.name}</h1>
                  <hr className="border-theme-primary border-t-2 bg-opacity-50 w-10 my-2" />
                  <h2 className="text-sm font-light text-gray-400">
                    {forum.description}
                  </h2>
                </div>
                <div className="justify-between flex flex-col mt-4 md:mt-0">
                  <button className="btn btn-blue font-semibold hidden md:block">
                    Create a Post
                  </button>
                  <Formik
                    initialValues={{ search: forum.search }}
                    validationSchema={Yup.object({
                      search: Yup.string()
                        .max(50, "Search is too long")
                        .required("You can't search for nothing!")
                        .min(2, "Search is too short"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="flex items-center">
                        <Field
                          name="search"
                          type="search"
                          className="form-input w-full"
                          placeholder="Search"
                        />
                        {errors.search && touched.search ? (
                          <Error
                            msg={errors.search}
                            color="bg-red-500"
                            mdleft={true}
                          />
                        ) : null}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="space-y-3 my-10">
              <section className="bg-coolGray-800 px-5 py-3 mt-3 rounded-md flex hover:filter hover:brightness-90 transition cursor-pointer select-none text-gray-200 font-medium tracking-wide">
                <div className=" mr-4 flex flex-col items-center">
                  <button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-green-200 focus:hover:opacity-95 rounded-full transition duration-300">
                    <ChevronUpIcon className="w-7 p-0.5 " />
                  </button>
                  <span className="text-sm">1</span>
                  <button className=" text-gray-300 hover:bg-coolGray-900 hover:opacity-75 hover:text-red-200 focus:hover:opacity-95 rounded-full transition duration-300">
                    <ChevronDownIcon className="w-7 p-0.5 " />
                  </button>
                </div>
                <div className=" w-[0.1rem] bg-theme-secondary mr-4 rounded my-2 " />
                <div>
                  <div>
                    <div className="flex items-center">
                      <figure>
                        <Image
                          width={28}
                          height={28}
                          src={"/pfps/" + "3" + ".jpg"}
                          className="rounded-full"
                          alt="User Icon"
                        />
                      </figure>
                      <figcaption className="ml-2">Name</figcaption>
                    </div>
                    <div className="my-3">
                      <h3 className="text-lg">Title</h3>
                      <p className="max-w-2xl truncate text-sm font-normal text-gray-300">
                        This is some content about the bost thats cool and I
                        needd more contentttthg bc I need it and I want it so i
                        can test this stuff
                      </p>
                    </div>
                    <div className="space-x-3">
                      <div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
                        <EyeIcon className="w-5 text-gray-300" />
                        <span>1</span>
                      </div>
                      <div className="inline-flex items-center space-x-2 rounded-full px-2 py-1 text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
                        <ChatAlt2Icon className="w-5 text-gray-300" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto space-y-2">
                  <div className="inline-flex space-x-2 ">
                    <div className=" bg-coolGray-900 bg-opacity-70 rounded-md px-2 py-1">
                      <LockClosedIcon className="w-5 text-gray-300 " />
                    </div>
                    <div className=" bg-coolGray-900 bg-opacity-70 rounded-md px-2 py-1">
                      <PencilIcon className="w-5 text-gray-300" />
                    </div>
                  </div>
                  <div className=" bg-coolGray-900 bg-opacity-70 rounded-md px-4 py-3 text-xs">
                    <time>Posted: time here</time>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

//This is really bad practice and I'm, actually using a workaround because React doesn't like it

function tags(tags: Array<string>) {
  //console.log(tags);
  var r: Array<unknown> = [];
  tags.forEach((tag) => {
    r.push(
      <div className="rounded-full px-3 py-1 font-medium text-gray-300 text-sm bg-coolGray-700 bg-opacity-50">
        {tag}
      </div>
    );
  });
  return r;
}
