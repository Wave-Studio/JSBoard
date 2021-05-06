import PageError from "../components/error";

export default function Custom404() {
  return (
    <>
      <PageError code={404} text="Page not found!" back={true} home={true} />
    </>
  );
}
