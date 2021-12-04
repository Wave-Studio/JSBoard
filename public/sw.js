if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => i(e, t),
      u = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(n.map((e) => u[e] || r(e))).then((e) => (a(...e), c));
  };
}
define(["./workbox-1846d813"], function (e) {
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
          url: "/_next/server/pages/dashboard/_middleware.js",
          revision: "build",
        },
        { url: "/_next/static/build/_buildManifest.js", revision: "build" },
        {
          url: "/_next/static/build/_middlewareManifest.js",
          revision: "build",
        },
        { url: "/_next/static/build/_ssgManifest.js", revision: "build" },
        {
          url: "/_next/static/chunks/110-1dcd633cec70b312.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/175-665ec78d515bdef9.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/226-1e199a34e8b9d6a4.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/467-7be877ba801827bc.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/675-69abce8ee6e53914.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/710-355a3957b6cb5943.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/78-e0788f412f839692.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/framework-91d7f78b5b4003c8.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/main-0980f3a260f2e98c.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/404-6cbda858e772c4cd.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/_app-5654e920e6a996a0.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/_error-2280fa386d040b66.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/categories-f88feb52a6bd291a.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/labels-7ece22d56dd1d2bb.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/settings-54185e54be348a1f.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/forums/statistics-14be99600f09adc1.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/home-1b87bef97ab53b96.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/modules-03e58f45b634ecbf.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/pages-2ec3430f8e4eedaf.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/settings-993fd7a25c1e8e13.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/main/themes-3f74c5978d619c52.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/punishments-9e27c241e5f62c51.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/reports-584edef0b8a8e23e.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/roles-686d2ec72b72eb40.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/users/users-5079f1398f8ea6af.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/%5Bforum%5D-5e87499a9677d2a2.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/%5Bforum%5D/%5Bpage%5D-ed5caffcfb97388e.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/login-fdd86f85620feba9.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/setup-5b489526d3084471.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/forums/signup-e10ef5782c938b66.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/index-207339abb00ec20f.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/profile/%5BuserID%5D-3f354e652add58a5.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/pages/profiles-8813a35c05dd064d.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",
          revision: "build",
        },
        {
          url: "/_next/static/chunks/webpack-middleware-f8fe1f0eb2299c5d.js",
          revision: "build",
        },
        { url: "/_next/static/css/3d2b0d39c3e00df5.css", revision: "build" },
        { url: "/blox.png", revision: "fae5f48e2497d496cd76d00231230db8" },
        {
          url: "/examplepfp.gif",
          revision: "7e95bf12459ee31c2df43f3deb9df19a",
        },
        { url: "/favicon.ico", revision: "9022ed7b56d27f10bfab939e4b39da2d" },
        { url: "/manifest.json", revision: "3bc3bcc55a52ca206d4e569248f2401c" },
        { url: "/pfps/1.jpg", revision: "45ec97b94c5dd428cc15f4f6b9d11f9b" },
        { url: "/pfps/3.jpg", revision: "2ab03db7c9fc470f97b7fac4aa3a5ac0" },
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
