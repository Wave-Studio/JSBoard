export default function shorten(str: string, n: number) {
	return str.length > n ? str.substr(0, n) + "..." : str;
}
