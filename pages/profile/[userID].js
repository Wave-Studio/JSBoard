import useSWR from "swr";
import { useRouter } from "next/router";

import Loading from "../../components/misc/loading";
import Navbar from "../../components/misc/navbar";
import Footer from "../../components/misc/footer";
import PageError from "../../components/misc/error";

import fetcher from "../../lib/fetcher";

export default function ViewUserProfile() {
  const router = useRouter();
  const { userID } = router.query;

  if (!userID)
    return (
      <PageError
        code={404}
        text="Sorry but we couldn't find what you were looking for!"
      />
    );

  const { data, error } = useSWR(
    "http://localhost:3000/api/user/data?id=" + userID.toString(),
    fetcher
  );
  console.log(error);
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
      <Navbar />
      <div className="w-screen bg-coolGray-700 text-gray-100">
        <h2>Todo: make this actually look good</h2>
      </div>
      <Footer />
    </>
  );
}
