import useSWR from "swr";
import { useRouter } from "next/router";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import PageError from "../../../components/misc/error";
import fetcher from "../../../lib/fetcher";

export default function ViewUserProfile() {
  const router = useRouter();
  const { forumID } = router.query;

  const { data, error } = useSWR(
    "/api/user/data?id=" + (forumID || "0").toString(),
    fetcher
  );
  console.log(forumID)
  return (
    <>
      <div className="flex flex-col min-h-screen md:px-0">
				<Navbar name="Loading..." />
					<div className="flex-1">
						<div className="max-w-screen-xl mx-auto pt-4">
							{}
						</div>
						
					</div>
				<Footer />
			</div>
    </>
  );
}
