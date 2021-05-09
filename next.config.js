module.exports = {
  throwIfNamespace: false,
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/staff",
        destination: "/staff/main/dashboard",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
