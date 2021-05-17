import Link from "next/link";
import useSWR from "swr";
import * as Heroicons from "@heroicons/react/outline";

import JSboardNavbar from "../components/misc/navbar";
import JSboardFooter from "../components/misc/footer";
import PageError from "../components/misc/error";
import Loading from "../components/misc/loading";
import Forums from "../components/forums/category";
import Sidebar from "../components/forums/sidebar";

import fetcher from "../lib/fetcher";

export default function Home() {
  var loading = false;
  var loadingProgress = "701";

  const forumsdata = useSWR("/api/forums/forums", fetcher);
  const sidebardata = useSWR("/api/forums/sidebar", fetcher);
  if (forumsdata.error || sidebardata.error)
    return (
      <>
        <PageError
          code={500}
          text="An error occured while loading this!"
          back={true}
          home={true}
        />
      </>
    );
  if (!sidebardata.data || !forumsdata.data)
    return (
      <>
        <Loading />
      </>
    );
  if (!forumsdata.data.configured)
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
        <JSboardNavbar
          name="Home"
          loading={loading}
          loadingProgress={loadingProgress}
        />
        <div className="bg-gradient-to-r from-green-400 to-blue-600 py-14 lg:py-20 min-w-screen font-sans">
          <h1 className="text-gray-100 text-4xl lg:text-5xl max-w-screen-xl mx-auto px-10 md:px-16 lg:px-20">
            Insert indelible name here
          </h1>
          {/*add smth to look at the background and see what color it is*/}
        </div>
        <div className="container max-w-screen-xl px-6 mx-auto text-gray-200 md:px-8 lg:px-10">
          <div className="flex-grow rounded-md shadow-md bg-coolGray-800 py-5 my-10">
            <div className="mx-5 text-2xl text-gray-100">
              <h2 className="mb-4">Important Links:</h2>
              <Link href="/setup">
                <a className="btn btn-lg btn-blue">Setup Page</a>
              </Link>
              <Link href="/staff/dashboard">
                <a className="btn btn-lg btn-blue ml-4">Staff Dashboard</a>
              </Link>
            </div>
          </div>
          <div className="lg:flex w-full lg:flex-row">
            <div className="lg:w-full">
              <Forums categories={forumsdata.data.forums} loading={loading} />
            </div>
            <div className="lg:pl-5">
              <Sidebar
                categories={sidebardata.data.sidebar}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
      <JSboardFooter />
    </>
  );
}
