if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, n, a) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case "exports":
                return i;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define("./sw.js", ["./workbox-4a677df8"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/ProfilePicture.png",
          revision: "9022ed7b56d27f10bfab939e4b39da2d",
        },
        { url: "/_next/server/middleware-manifest.json", revision: "build" },
        { url: "/_next/static/build/_buildManifest.js", revision: "build" },
        {
          url: "/_next/static/build/_middlewareManifest.js",
          revision: "build",
        },
        { url: "/_next/static/build/_ssgManifest.js", revision: "build" },
        {
          url: "/_next/static/chunks/110-fd634d814e9524b1.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/175-665ec78d515bdef9.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/226-1026e20ac8286f07.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/367-7542fd067e896388.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/488-ab2d539824591bbc.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/616-78f7e4510010b426.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/framework-91d7f78b5b4003c8.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/main-7f89a8e4ab6a00d6.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/404-4fc1b375bcd3f5cd.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/_app-2090ee2355d077a9.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/_error-2280fa386d040b66.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/categories-1709361ac5a3f453.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/labels-d5bba9a5558aa265.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/settings-d3a16f7d5538686f.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/statistics-b91d9c13f6a3bf6a.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/home-1281dcf96ccb8107.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/modules-baee569e2325a37a.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/pages-56683737031510c8.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/settings-0d37781438b37f94.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/themes-2efa1d468c10ac17.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/punishments-ce91a6f728343f81.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/reports-2f88bfc26abba44c.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/roles-fe9ac6185213706d.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/users-7539d5d4cf94a3fe.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/%5Bforum%5D-c6b1d488e621e1a2.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/%5Bforum%5D/%5Bpage%5D-2d8e27c1d3c9e65e.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/login-dd6967e965942547.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/setup-3801745d95457c2f.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/index-dab9059c1d41e2a2.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/profile/%5BuserID%5D-a88ef1c33cac6918.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/profiles-6de7bb043aeaf366.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/webpack-514908bffb652963.js",
          revision: "build",
        },
        { url: "/_next/static/css/5347db41a5e58cf9.css", revision: "build" },
        { url: "/blox.png", revision: "fae5f48e2497d496cd76d00231230db8" },
        {
          url: "/examplepfp.gif",
          revision: "7e95bf12459ee31c2df43f3deb9df19a",
        },
        { url: "/favicon.ico", revision: "9022ed7b56d27f10bfab939e4b39da2d" },
        { url: "/manifest.json", revision: "3bc3bcc55a52ca206d4e569248f2401c" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
