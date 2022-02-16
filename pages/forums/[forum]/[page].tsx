import { useRouter } from "next/router";
import { useEffect } from "react";

import ForumsIndex from "./index";
import Navbar from "../../../components/misc/navbar";

export default function page() {
	const router = useRouter();
	if (!router.query.page) {
		return (
			<>
				<Navbar name="am" />
			</>
		);
	}

	// Annndddd ForumsIndex has no return code
	// because nobody could *ever* attempt to pass an invalid page
	// it could never happen
	return <ForumsIndex selectedPage={parseInt(router.query.page as string)} />;
}
