const withPWA = require("next-pwa");

module.exports = withPWA({
	generateBuildId: () => "build",
	target: "serverless",
	throwIfNamespace: false,
	reactStrictMode: true,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	redirects() {
		return [
			{
				source: "/dashboard",
				destination: "/dashboard/home",
				permanent: true,
			},
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
			{
				source: "/dashboard/main/dashboard",
				destination: "/dashboard/home",
				permanent: true,
			},
			{
				source: "/profile",
				destination: "/profiles",
				permanent: false,
			},
			{
				source: "/signup",
				destination: "/forums/login",
				permanent: false,
			},
			{
				source: "/login",
				destination: "/forums/login",
				permanent: false,
			},
		];
	},
});
