import useSWR from "swr";
import { useRouter } from "next/router";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import PageError from "../../../components/misc/error";
import fetcher from "../../../lib/fetcher";

export default function ViewUserProfile() {
  const router = useRouter();
  const { userID } = router.query;

  const { data, error } = useSWR(
    "/api/user/data?id=" + (userID || "0").toString(),
    fetcher
  );
}
