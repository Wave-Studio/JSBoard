import "../styles/global.css";


function JSboard({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen bg-coolGray-700">
      <Component {...pageProps} />
    </div>
  );
}

export default JSboard;
