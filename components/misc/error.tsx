import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PageError({
  code,
  text,
  back = null,
  home = null,
  redirect = undefined,
  redirectname = null,
  allowhome = undefined,
}) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar name={code + " | " + text} />
        <div className="flex flex-grow justify-center items-center">
          <div className="bg-coolGray-800 text-gray-100 rounded-md shadow-lg p-10">
            <h2 className="text-4xl font-semibold text-center mb-1">
              {code + " " + text}
            </h2>
            <div className="text-xl">
              <p className="mb-5">
                An error occured while preforming that action!
              </p>

              <div className="flex justify-center items-center space-x-4">
                <div
                  className={back ? "" : "hidden"}
                  onClick={() => history.back()}
                >
                  <a className="btn btn-lg btn-white ">Go back</a>
                </div>
                <div className={home ? "" : "hidden"}>
                  <Link href="/">
                    <a className="btn btn-lg btn-blue">Home</a>
                  </Link>
                </div>

                <div
                  className={
                    redirect || typeof allowhome !== "undefined" ? "" : "hidden"
                  }
                >
                  <Link href={redirect || ""}>
                    <a className="btn btn-lg btn-blue ">{redirectname || ""}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
