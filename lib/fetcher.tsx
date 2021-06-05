import fetch from "node-fetch";
// I think this import is redundant (unsure though)

export default async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}
