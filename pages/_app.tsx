import "../styles/global.css";
import nightwind from "nightwind/helper";
import Head from "next/head"

function JSboard({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <div className="flex flex-col min-h-screen bg-coolGray-700">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default JSboard;
