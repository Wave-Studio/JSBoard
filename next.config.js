module.exports = {
  throwIfNamespace: false,
  future: {
    webpack5: true,
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
    ];
  },
};
