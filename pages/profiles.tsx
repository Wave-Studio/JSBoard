import fetcher from "../lib/fetcher";
import useSWR from "swr";
import PageError from "../components/misc/error";

import Navbar from "../components/misc/navbar";
import Footer from "../components/misc/footer";
import { useEffect, useState } from "react";

export default function profiles(props) {
  const [menuSel, setMenuSel] = useState(1);
  const users = useSWR("/api/user/userList", fetcher);
  if (users.error)
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

  if (!users.data)
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
              <div className="rounded-md flex flex-wrap p-1.5 dark:bg-coolGray-75 bg-coolGray-850 gap-2 font-semibold mt-4">
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([1].includes(menuSel) ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150" : "")
                  }
                  onClick={() => setMenuSel(1)}
                >
                  A - Z
                </h1>
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([2].includes(menuSel) ? "bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-3xl backdrop-saturate-150" : "")
                  }
                  onClick={() => setMenuSel(2)}
                >
                  User ID
                </h1>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto text-gray-200">
            {usersList()
            }
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
  function usersList() {
    var rt = []
    
    if (users.data) {
      users.data.users.forEach(id => {
        rt.push(<div className="bg-coolGray-800 p-5 mt-3 rounded-md flex justify-between" />)
        //const profiles = useSWR("/api/user/data?id=" + id.toString(), fetcher);
        //profiles.data.username
        
    })
    }
    return (rt);
  }
}
