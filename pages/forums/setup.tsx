import React, { useState } from "react";
import Link from "next/link";


import Navbar from "../../components/misc/navbar";
import Footer from "../../components/misc/footer";
import PageError from "../../components/misc/error";
import Loading from "../../components/misc/loading";
import Step1 from "../../components/setup/s1-type";
import Step2 from "../../components/setup/s2-details";
import Step3 from "../../components/setup/s3-themeing";
import Summary from "../../components/setup/summary";

export default function setup() {
  const [page, setPage] = useState(1);
  //const router = useRouter();
  const saveAnswers = (e: React.SyntheticEvent) => {
    e.preventDefault(); //NEEDED OR THE FORM BREAKS
    // TODO: Implement saving
    console.log(e.target);
  };
  


  if ([1, 2, 3, 4].includes(page)) {
    return (
      <>
        <div className="flex-grow bg-coolGray-700">
          <Navbar name="Setup" />

          <div className="max-w-screen-xl mx-auto">
            <div className="flex-grow rounded-md p-5 my-10 text-gray-200 relative">
              <div className="flex flex-grow flex-col">
                <h1 className="text-3xl font-bold text-gray-200 mb-1">
                  JSBoard Setup
                </h1>
                <h2 className="text-xl font-medium text-gray-300 mb-2">
                  Configure our forums software to work perfectly with your
                  community.
                </h2>
                <hr className="border-blue-600 border-t-2 bg-opacity-50 w-10" />
                <div className="inline-flex items-center lg:absolute right-5 bottom-5 ml-auto">
                  <div className="rounded-full bg-gray-400 h-3 w-44  flex flex-row">
                    <div
                      className={
                        "bg-green-500 w-1/3 h-3 rounded-full shadow-green " +
                        ([2, 3, 4].includes(page) ? "hidden" : "")
                      }
                    />
                    <div
                      className={
                        "bg-green-500 w-2/3 h-3 rounded-full shadow-green " +
                        ([1, 3, 4].includes(page) ? "hidden " : "")
                      }
                    />
                    <div
                      className={
                        "bg-green-500 w-full h-3 rounded-full shadow-green " +
                        ([3, 4].includes(page) ? "" : "hidden")
                      }
                    />
                  </div>
                  <span
                    className={
                      "ml-3 select-none " + ([4].includes(page) ? "" : "hidden")
                    }
                  >
                    Summary
                  </span>
                  <span
                    className={
                      "ml-3 select-none " + ([4].includes(page) ? "hidden" : "")
                    }
                  >
                    {page + "/3"}
                  </span>
                </div>
              </div>
            </div>
            {
              // This is a stupid fix, but I don't have time to do a cleaner implementation.
            }
            <form onSubmit={saveAnswers}>
              <Step1 page={page} />
              <Step2 page={page} />
              <Step3 page={page} />
              <Summary
                page={page}
                //temp
                forumType="Minecraft"
                name="AzynNet"
                db="MongoDB"
                theme="Dark"
                accentColor="Blue"
              />
              <input
                type="button"
                value="Previous Page"
                className={
                  "!bg-coolGray-700 !hover:bg-gray-100 btn-white btn btn-lg mr-4 mb-10 " +
                  ([1].includes(page) ? "hidden" : "")
                }
                onClick={() => setPage(page - 1)}
              />
              <input
                type="button"
                value="Next Page"
                className={
                  "bg-green-600 btn btn-lg mr-4 hover:opacity-70 font-semibold mb-10 " +
                  ([4].includes(page) ? "hidden" : "")
                }
                onClick={() => setPage(page + 1)}
              />
              <input
                type="submit"
                value="Submit"
                className={
                  "btn btn-lg btn-blue mr-4 font-semibold mb-10 " +
                  ([4].includes(page) ? "" : "hidden")
                }
                onClick={() => saveAnswers}
              />
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <PageError
          code={418}
          text="I'm a teapot" // no one should actually see this page, if they did then I messed up
          back={true}
          home={false}
        />
      </>
    );
  }
}
