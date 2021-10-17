const withPWA = require("next-pwa");

module.exports = withPWA({
  generateBuildId: () => 'build',
  target: "serverless",
  throwIfNamespace: false,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: "/staff",
        destination: "/staff/dashboard",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/staff/main/dashboard",
        destination: "/staff/dashboard",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "/profiles",
        permanent: false,
      },
    ];
  },
});
