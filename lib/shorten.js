export default function shorten(str, n) {
  return str.length > n ? str.substr(0, n) + "..." : str;
}
