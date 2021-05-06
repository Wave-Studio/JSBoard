import fetch from "node-fetch";

export default async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}
