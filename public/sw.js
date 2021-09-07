if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, t, n) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const i = { uri: location.origin + s.slice(1) };
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return i;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./sw.js", ["./workbox-21b21c9a"], function (e) {
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
        {
          url: "/_next/static/FmDJD3Z8-W_Ne1rAggYsv/_buildManifest.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/FmDJD3Z8-W_Ne1rAggYsv/_ssgManifest.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/249-cfdbe45da20f9f010d96.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/489-aca965d5ce0044ccc4dd.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/861-c8f2acb6c79e02b62b89.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/framework-895f067827ebe11ffe45.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/main-a24fd78f98c3ac5c2849.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/404-16e80f346b6097cdbe82.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/_app-e98ed7ba6ec5e812ca9c.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/forums/%5Bforum%5D-01ef049b442efc4dff25.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/forums/setup-b9d68e98ae02980cdc48.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/index-3a4009a8b9668fa1ad34.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/profile/%5BuserID%5D-fbe2ef3e05302ff96dc4.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/profiles-e758dba4b256af523499.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/dashboard-4ab3dbf61b788b204180.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/forums/categories-fb562bcfdade0f31dd3f.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/forums/labels-3f632b0d1c28b1fa59d8.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/forums/settings-402f4962b3beb4da7f7d.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/forums/statistics-eeeda0c0c729af5798ef.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/main/modules-712330f4116ed9e0d589.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/main/pages-fe68cd458a4efc51cc8e.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/main/settings-122ba92c3a4fc31be33f.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/main/themes-31eea5ffa5ed55557286.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/users/punishments-ada59fdce3798e8bd68b.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/users/reports-1aca717af8ac7bb90f45.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/users/roles-3f8e4045846e3ac4846b.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/pages/staff/users/users-fc247d5e1a23bdcd4bda.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        {
          url: "/_next/static/css/9ddd6ad623f87b665ed0.css",
          revision: "FmDJD3Z8-W_Ne1rAggYsv",
        },
        { url: "/blox.png", revision: "fae5f48e2497d496cd76d00231230db8" },
        {
          url: "/examplepfp.gif",
          revision: "7e95bf12459ee31c2df43f3deb9df19a",
        },
        { url: "/favicon.ico", revision: "9022ed7b56d27f10bfab939e4b39da2d" },
        { url: "/manifest.json", revision: "a8aaa1e81f4fe64901f87df40e65e033" },
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
              event: a,
              state: t,
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
