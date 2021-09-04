import fetcher from "../lib/fetcher";
import useSWR from "swr";
import PageError from "../components/misc/error";

import Navbar from "../components/misc/navbar";
import Footer from "../components/misc/footer";

export default function wrapper(props) {
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

  if (!data)
    return (
      <div>lajhg</div>
    )
  return (
    <>
      <div className="flex flex-col min-h-screen bg-coolGray-700">
        <Navbar name="Profiles List" />
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto text-gray-200 bg-coolGray-800 p-5 my-10 rounded-md flex justify-between">
            <div>
              <h2 className="text-2xl font-medium">Forum Members</h2>
              <form className="flex flex-grow w-96">
                <input type="search" placeholder="Search" className="text-box-form border-none rounded w-full mt-4" />
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Sort</h2>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
