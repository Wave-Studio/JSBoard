import Link from "next/link";
import useSWR from "swr";
import * as Heroicons from "@heroicons/react/outline";

import JSboardNavbar from "../components/navbar";
import JSboardFooter from "../components/footer";
import PageError from "../components/error";
import Loading from "../components/loading";
import Forums from "../components/forums/category";

import fetcher from "../lib/fetcher";

export default function Home() {
  const { data, error } = useSWR("/api/forums/forums", fetcher);
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
  if (!data)
    return (
      <>
        <Loading />
      </>
    );
  if (!data.configured)
    // Add a ! before the data.configured to disable this
    return (
      <>
        <PageError
          code={500}
          text="JSBoard is not configured! Please configure it"
          redirect="/setup"
          redirectname="Configure JSBoard"
          allowhome={false}
        />
      </>
    );

  return (
    <>
      <div className="bg-coolGray-700 flex-grow">
        <JSboardNavbar />
        <div className="bg-gradient-to-r from-green-400 to-blue-600 py-14 lg:py-20 min-w-screen font-sans">
          <h1 className="text-gray-100 text-4xl lg:text-5xl max-w-screen-xl mx-auto px-10 md:px-16 lg:px-20">
            Insert indelible name here
          </h1>{" "}
          {/*add smth to look at the background and see what color it is*/}
        </div>
        <div className="container max-w-screen-xl px-6 mx-auto text-gray-200 md:px-8 lg:px-10">
          <div className="flex-grow rounded-md shadow-md bg-coolGray-800 py-5 my-10">
            <div className="mx-5 text-2xl text-gray-100">
              <h2 className="mb-4">Important Links:</h2>
              <Link href="/setup">
                <a className="btn btn-lg btn-blue">Setup Page</a>
              </Link>
              <Link href="/staff">
                <a className="btn btn-lg btn-blue ml-4">Staff Dashboard</a>
              </Link>
            </div>
          </div>
          <div className="lg:flex w-full lg:flex-row">
            <div className="lg:w-full">
              <Forums categories={data.forums} />
            </div>
            <div className="lg:pl-5">
              <div className="flex-none rounded-md shadow-md bg-coolGray-800 py-5 mb-10 lg:w-72">
                <h2 className="text-4xl">sidebar thing 1</h2>
              </div>
              <div className="flex-none rounded-md shadow-md bg-coolGray-800 py-5 mb-10">
                <h2 className="text-4xl">sidebar thing 2</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JSboardFooter />
    </>
  );
}
