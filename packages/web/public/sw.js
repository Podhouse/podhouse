if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let a = Promise.resolve();
      return (
        c[e] ||
          (a = new Promise(async (a) => {
            if ("document" in self) {
              const c = document.createElement("script");
              (c.src = e), document.head.appendChild(c), (c.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    a = (a, c) => {
      Promise.all(a.map(e)).then((e) => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(a) };
  self.define = (a, s, i) => {
    c[a] ||
      (c[a] = Promise.resolve().then(() => {
        let c = {};
        const o = { uri: location.origin + a.slice(1) };
        return Promise.all(
          s.map((a) => {
            switch (a) {
              case "exports":
                return c;
              case "module":
                return o;
              default:
                return e(a);
            }
          }),
        ).then((e) => {
          const a = i(...e);
          return c.default || (c.default = a), c;
        });
      }));
  };
}
define("./sw.js", ["./workbox-a61ac24a"], function (e) {
  "use strict";
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            "/_next/static/chunks/10bcc3a9640e60da2ea530fc39f92e7c1e1c9c1b.df4fbbac930167c3ce18.js",
          revision: "eb7d58598446f2aa18764d413dab7bfa",
        },
        {
          url:
            "/_next/static/chunks/57b36b2fd634502919b0857536d9a70da4d67a76.0cc778fb4cdb6ce2efef.js",
          revision: "9938267c1f468013c899a1358d31f036",
        },
        {
          url:
            "/_next/static/chunks/5eec9076b7122a47bb63baa280245b3614395d2a.cb81e7243fd7ddc17d36.js",
          revision: "2dfc00f36275550212e34bd6033b78d2",
        },
        {
          url:
            "/_next/static/chunks/62dd4bce1bb4599189d6de362e1a5003c0250b7e.c183c061af5bc7aa9f76.js",
          revision: "e18bc4dfec0be3a69aeaa64b0a148baa",
        },
        {
          url:
            "/_next/static/chunks/a25c6e6bbde28f8d136058d01ebb11839fe45a8a.581e8f1c1b2d91bebd13.js",
          revision: "1a6c7a8d2ba1316d088f1c58e251cf85",
        },
        {
          url:
            "/_next/static/chunks/a2bdfaf424044ddcb5a141cc51f434f3675aa26a.bda4cc943c9276d96885.js",
          revision: "4cde0b6f58097834da4c4af784016c6d",
        },
        {
          url: "/_next/static/chunks/commons.0855c6620b519bdc21bd.js",
          revision: "50d1fc740b3972f639881cf6e35825bb",
        },
        {
          url: "/_next/static/chunks/framework.ad7002b3a551c278f5f0.js",
          revision: "1063ca28d9055f3d6dd6ef216d73a6b8",
        },
        {
          url: "/_next/static/chunks/main-a95a18476b1e0db9a6cf.js",
          revision: "38bdf40c44d3521671990e3a267a2924",
        },
        {
          url: "/_next/static/chunks/pages/404-33cb5427d2d271b649bb.js",
          revision: "f653d897b1650e6b30901b631883b0ac",
        },
        {
          url: "/_next/static/chunks/pages/_app-efaa1ab722a7853ed7ad.js",
          revision: "6245a2012f074a191ff1c3de179da8e7",
        },
        {
          url: "/_next/static/chunks/pages/_error-27fecb646a8c5d464364.js",
          revision: "a1d6392d9ef08dd0072119baca553dac",
        },
        {
          url: "/_next/static/chunks/pages/about-22b80c822592057b54c7.js",
          revision: "c3c29c23fa17eba02204dad543eb0c1d",
        },
        {
          url: "/_next/static/chunks/pages/advertise-4c3fc535fbadb0a097c1.js",
          revision: "25654b9fe67fb1c6e43ff83a03dfd13e",
        },
        {
          url: "/_next/static/chunks/pages/app-3e5a442002f9306552d3.js",
          revision: "2629bf6ae725119074fd58f0e378c5dc",
        },
        {
          url:
            "/_next/static/chunks/pages/app/episode/%5Bepisode%5D-a6d10cd5e8974096282e.js",
          revision: "e21c5a603aa37a7a99ce2a81b1fbad7a",
        },
        {
          url:
            "/_next/static/chunks/pages/app/favorites-52545ccbb91a8027dd3e.js",
          revision: "6db2aa16350fc0bbfead89e35307e32f",
        },
        {
          url:
            "/_next/static/chunks/pages/app/podcast/%5Bpodcast%5D-01789babf79ff01723af.js",
          revision: "18dbe3afb42e8160da7028edcb923706",
        },
        {
          url:
            "/_next/static/chunks/pages/app/podcasts-e055f1f4ebf6b46f9f08.js",
          revision: "a21beb228e897c9213cb0d7a137871fe",
        },
        {
          url: "/_next/static/chunks/pages/app/search-98f68d0438c68d7a83c2.js",
          revision: "44b4518d3ff15a9d46af92314ce6d967",
        },
        {
          url:
            "/_next/static/chunks/pages/app/settings-7c8d5cff2dc20d23daa8.js",
          revision: "a6418741bfdf191ddfba53bc98df4d96",
        },
        {
          url: "/_next/static/chunks/pages/brand-d811251c028ff3afe62d.js",
          revision: "0dce0afd00677ac4a24a4dbe759d6e42",
        },
        {
          url: "/_next/static/chunks/pages/index-93406f059c273ae7161b.js",
          revision: "21d91a00621295dbe5fb81863441661a",
        },
        {
          url: "/_next/static/chunks/polyfills-32a3b69739bfdb8fec5c.js",
          revision: "59b9e3781759df92e8c5e11931bcdc73",
        },
        {
          url: "/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",
          revision: "8c19f623e8389f11131a054a7e17ff95",
        },
        {
          url: "/_next/static/css/db6b0e72da824dce1c7f.css",
          revision: "1a676a991411d1368aee17e516f63cae",
        },
        {
          url: "/_next/static/zHBANBvJedEJ9q4hdazMC/_buildManifest.js",
          revision: "4016a594436510e3d24b7c0f9bafd0c5",
        },
        {
          url: "/_next/static/zHBANBvJedEJ9q4hdazMC/_ssgManifest.js",
          revision: "abee47769bf307639ace4945f9cfd4ff",
        },
        {
          url: "/android-icon-144x144.png",
          revision: "9f9a2a5fb40427b8328b1dac126f2d1f",
        },
        {
          url: "/android-icon-192x192.png",
          revision: "11f06ccdca56321c703bc3f977d13d79",
        },
        {
          url: "/android-icon-36x36.png",
          revision: "a8015c3758cddc6fdd4e534d0d98e1c1",
        },
        {
          url: "/android-icon-48x48.png",
          revision: "21d0e878665479829ed431159d93ee41",
        },
        {
          url: "/android-icon-72x72.png",
          revision: "8bacec640694c3decf83a8c513ded691",
        },
        {
          url: "/android-icon-96x96.png",
          revision: "e6f0d13a56d408a8a0a2cce021fdd21b",
        },
        {
          url: "/apple-icon-114x114.png",
          revision: "4442e80a6a27d0d8e96ed1435d392aa5",
        },
        {
          url: "/apple-icon-120x120.png",
          revision: "a1595e43cae5452cc1de4c25955c82d2",
        },
        {
          url: "/apple-icon-144x144.png",
          revision: "9f9a2a5fb40427b8328b1dac126f2d1f",
        },
        {
          url: "/apple-icon-152x152.png",
          revision: "e48141cb996bf9880d735dc3c4f50f13",
        },
        {
          url: "/apple-icon-180x180.png",
          revision: "143d95870f8d3c49c9d441e53633446c",
        },
        {
          url: "/apple-icon-57x57.png",
          revision: "7c2968fc7aa6a62348f0f3e96eed1f58",
        },
        {
          url: "/apple-icon-60x60.png",
          revision: "cd69e42bfdbe9345ac1d66a13e6c42f8",
        },
        {
          url: "/apple-icon-72x72.png",
          revision: "8bacec640694c3decf83a8c513ded691",
        },
        {
          url: "/apple-icon-76x76.png",
          revision: "ca643ecc7c8fba8c9806edb0341eb8ab",
        },
        {
          url: "/apple-icon-precomposed.png",
          revision: "32744c2e63749f47c887bb478d3c7bdb",
        },
        {
          url: "/apple-icon.png",
          revision: "32744c2e63749f47c887bb478d3c7bdb",
        },
        {
          url: "/favicon-16x16.png",
          revision: "8cb3fa9282a322c2d7de0936e6c26d1b",
        },
        {
          url: "/favicon-32x32.png",
          revision: "3dbb026c0af5dc745a07c5e67b7d290d",
        },
        {
          url: "/favicon-96x96.png",
          revision: "e6f0d13a56d408a8a0a2cce021fdd21b",
        },
        { url: "/favicon.ico", revision: "6eab09d86d4bc98845e870d7fe207768" },
        {
          url: "/icons/icon-128x128.png",
          revision: "6c1199f464f54eb468a4b1bf1502b253",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "7cc3fe5accece136f2e127286c5dc5e0",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "f46a3ddd7f6d0921bfc926089fb72072",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "219c139441a7efa1adc6f048684a4732",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "b2cf6f7888ee6c4f78bef7fcaafb967d",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "8ec21427aa2931b2cf01e45ceb4fb0e1",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "3f21ceab18380d2ee034539bad8223f5",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "5adf49611f1a825ba3d27f5ef9f7881c",
        },
        { url: "/images/99.jpg", revision: "a3c521fcb12fc29c8730bc43eed230d6" },
        {
          url: "/images/99.webp",
          revision: "f304e9c82b3574ac5e38d593cec7fdff",
        },
        {
          url: "/images/criminal.jpg",
          revision: "f61f881e60bf3b0bf5806b35fcb64c83",
        },
        {
          url: "/images/criminal.webp",
          revision: "22b94231a73f782a538c594e064bf611",
        },
        {
          url: "/images/google-16.png",
          revision: "a4072c8b5525db33a5d734dfb38b0a9c",
        },
        {
          url: "/images/google-16.svg",
          revision: "0e42597d2702812b44f715b767b990bf",
        },
        {
          url: "/images/google-20.png",
          revision: "f9a229d0d60022fb693bdc58a1a562b0",
        },
        {
          url: "/images/google-24.png",
          revision: "20d344d5c79eb7e6bb3bae7729d71edc",
        },
        {
          url: "/images/joe.jpg",
          revision: "3b5eb6192def8e45b6113dcb89da7d2d",
        },
        {
          url: "/images/joe.webp",
          revision: "5ba1f4e5d27456518c10dbba5b3c5cc4",
        },
        {
          url: "/images/leoo.jpg",
          revision: "59c9aef3471143081b5ca3718a98480e",
        },
        {
          url: "/images/leoo.webp",
          revision: "64007e0175fb17dd488bc7fcb98e7edb",
        },
        {
          url: "/images/mfm.jpg",
          revision: "28f2a2e17119d2bab94b85638ac45caa",
        },
        {
          url: "/images/mfm.webp",
          revision: "c54cdfc4f076fc46dc2445c56ae65338",
        },
        {
          url: "/images/the.jpg",
          revision: "b77ae1186d32d854ce01283d5cfb724e",
        },
        {
          url: "/images/the.webp",
          revision: "d0d288f79c32016c59b15fa049f1080f",
        },
        {
          url: "/images/wtf.jpg",
          revision: "b2c8115aa0270ec96b2d5d613d101aeb",
        },
        {
          url: "/images/wtf.webp",
          revision: "6d9c31b695784fc1d35387bd5f6d9072",
        },
        {
          url: "/logo/Dark/png.zip",
          revision: "25d5b3ea0b3714f8245ea89a4b573070",
        },
        {
          url: "/logo/Dark/svg.zip",
          revision: "ab713f6c597fdcac334e58f0d54abc94",
        },
        {
          url: "/logo/White/png.zip",
          revision: "b0796df633b65ea6d44fdb5eadcf278e",
        },
        {
          url: "/logo/White/svg.zip",
          revision: "8f2051837f59946a8c8608abbf89d47f",
        },
        {
          url: "/logo/logo-medium-dark.svg",
          revision: "ca504dc4e73af1ec142aea387f00a0cf",
        },
        {
          url: "/logo/logo-medium-white.svg",
          revision: "2c91cabcfd491eddf4ef49a22951b239",
        },
        {
          url: "/logo/logo-podhouse-medium-dark.svg",
          revision: "b57ea5b8f24298beec42bdfec7e57a71",
        },
        { url: "/logo/logo.png", revision: "6870ee706ed9ff46381eeb182de5c074" },
        { url: "/manifest.json", revision: "3bb8d837cf980dbed9b2be3cedb16c08" },
        {
          url: "/ms-icon-144x144.png",
          revision: "9f9a2a5fb40427b8328b1dac126f2d1f",
        },
        {
          url: "/ms-icon-150x150.png",
          revision: "ece304d710342f13b190358d451269de",
        },
        {
          url: "/ms-icon-310x310.png",
          revision: "557559f1f864e90efe80afda1fde8b46",
        },
        {
          url: "/ms-icon-70x70.png",
          revision: "1ba3015f23aee41a271e552deaba78c2",
        },
        {
          url: "/static/locales/da/common.json",
          revision: "dbbbd5fa5a1e8c5d93be12dc32c884b8",
        },
        {
          url: "/static/locales/da/getstarted.json",
          revision: "6bc92ce7d05e97675809220328aeccfa",
        },
        {
          url: "/static/locales/da/header.json",
          revision: "e2db0672899d7b2a2122f78b1e233fc1",
        },
        {
          url: "/static/locales/da/menu.json",
          revision: "421f692cb0e955f84b7060f3d97dd098",
        },
        {
          url: "/static/locales/da/player.json",
          revision: "aa52f87ce707de1050d74e29c8a5de60",
        },
        {
          url: "/static/locales/da/podcast.json",
          revision: "909964608e3632eab7c2ceeccef0bfe6",
        },
        {
          url: "/static/locales/da/settings.json",
          revision: "cb0e77f84c2b32090605ae994868198e",
        },
        {
          url: "/static/locales/da/shortcuts.json",
          revision: "c891c4c3a739833ee2106244b20d5052",
        },
        {
          url: "/static/locales/de/common.json",
          revision: "d86e8661d28b0b6b0683fb489abcfafb",
        },
        {
          url: "/static/locales/de/getstarted.json",
          revision: "3e3b4ca45d8dd8de9c9f5cce45e5d376",
        },
        {
          url: "/static/locales/de/header.json",
          revision: "9ba2fe2abeb504f44d98449af69204d1",
        },
        {
          url: "/static/locales/de/menu.json",
          revision: "0ce719dbcc0ba02399b0cba5d20e28de",
        },
        {
          url: "/static/locales/de/player.json",
          revision: "ec98a8043661136c66304fcdcc779423",
        },
        {
          url: "/static/locales/de/podcast.json",
          revision: "ee3ec4ca7902b76fadfbab83a5fbc20a",
        },
        {
          url: "/static/locales/de/settings.json",
          revision: "51dfd94baf11ba659a57dda5a0c17194",
        },
        {
          url: "/static/locales/de/shortcuts.json",
          revision: "4aedcac8702427d007003c0a6ae68166",
        },
        {
          url: "/static/locales/el/common.json",
          revision: "94d6a231b3dedbf1080a3f94b979dbe4",
        },
        {
          url: "/static/locales/el/getstarted.json",
          revision: "20a993dbf6d820625cdd91d1b87af628",
        },
        {
          url: "/static/locales/el/header.json",
          revision: "b56ddf38c5d3f36c3f7d86cc7b613b81",
        },
        {
          url: "/static/locales/el/menu.json",
          revision: "bd138be0a1a04fe569c54f9abd301f7c",
        },
        {
          url: "/static/locales/el/player.json",
          revision: "f2d78792e4c301e6fcbf5bb1ee2b2165",
        },
        {
          url: "/static/locales/el/podcast.json",
          revision: "7b13341313fbc530b35c0cbba47a5ba4",
        },
        {
          url: "/static/locales/el/settings.json",
          revision: "9356792d030a8215c12fd12eb30df1d0",
        },
        {
          url: "/static/locales/el/shortcuts.json",
          revision: "2baac53ab8fd19860630815c28745140",
        },
        {
          url: "/static/locales/en/common.json",
          revision: "a3a6e84d4a9fbc5afa544a4bd91c0b3f",
        },
        {
          url: "/static/locales/en/getstarted.json",
          revision: "e8c0ce06299b4f2ec4216cadfcb4dda0",
        },
        {
          url: "/static/locales/en/header.json",
          revision: "6dd746ae645149c6fa3a33305e8b9818",
        },
        {
          url: "/static/locales/en/menu.json",
          revision: "cb99c0805bab9f8c9474541bda65ef0e",
        },
        {
          url: "/static/locales/en/player.json",
          revision: "c0313742ed5eb4946433033693fc2adf",
        },
        {
          url: "/static/locales/en/podcast.json",
          revision: "18541282bf400869923a25a0cede7ea6",
        },
        {
          url: "/static/locales/en/settings.json",
          revision: "c955d5bc11aed70a2cf23385b35e535d",
        },
        {
          url: "/static/locales/en/shortcuts.json",
          revision: "d5770303a7c1c904cac8e1f9725ab455",
        },
        {
          url: "/static/locales/es/common.json",
          revision: "22c710eac0ec5eb8bd520efbbc3b5260",
        },
        {
          url: "/static/locales/es/getstarted.json",
          revision: "27fba1dd73c4a34030023e8c7550acb5",
        },
        {
          url: "/static/locales/es/header.json",
          revision: "e702ee902f51acf2e7f68f4462688ff2",
        },
        {
          url: "/static/locales/es/menu.json",
          revision: "9a3036874517049f4b8993d4f9d48081",
        },
        {
          url: "/static/locales/es/player.json",
          revision: "16bae74157487aaa364ddbbaa7dfabe9",
        },
        {
          url: "/static/locales/es/podcast.json",
          revision: "1738a53395b45912a51a4ab72385cf5b",
        },
        {
          url: "/static/locales/es/settings.json",
          revision: "02bd5d3f1cdf21ca932d5bcf60ee4683",
        },
        {
          url: "/static/locales/es/shortcuts.json",
          revision: "f88dc4b006529f23db9fa17bfd9c7159",
        },
        {
          url: "/static/locales/fr/common.json",
          revision: "81a0dc300713fec2706252dec18e7bd8",
        },
        {
          url: "/static/locales/fr/getstarted.json",
          revision: "51b86f797d29a462e38033f5345e20a6",
        },
        {
          url: "/static/locales/fr/header.json",
          revision: "98c2a0c334e06e2d01e595df89108402",
        },
        {
          url: "/static/locales/fr/menu.json",
          revision: "87b751b546185b24cb27686425709776",
        },
        {
          url: "/static/locales/fr/player.json",
          revision: "1a47e4b0a7180280ddab94287a2c3d90",
        },
        {
          url: "/static/locales/fr/podcast.json",
          revision: "ba1f7b3f165e61b14ec0aa2b0876cff1",
        },
        {
          url: "/static/locales/fr/settings.json",
          revision: "60c7e681db753e424d7fa4fb015a41f5",
        },
        {
          url: "/static/locales/fr/shortcuts.json",
          revision: "ba4bd9d961346fc8100627dcf6d5c6bd",
        },
        {
          url: "/static/locales/it/common.json",
          revision: "01e45260e080b3895a35828e2297bb82",
        },
        {
          url: "/static/locales/it/getstarted.json",
          revision: "97d542d1a29037a7d2897151710a6c22",
        },
        {
          url: "/static/locales/it/header.json",
          revision: "a79fc0982a3da0c8b9cc45ffb699aadf",
        },
        {
          url: "/static/locales/it/menu.json",
          revision: "39065f524daf66be2b962274a2085e4d",
        },
        {
          url: "/static/locales/it/player.json",
          revision: "bd07505a54d9b48916c26b5f41d8e3f1",
        },
        {
          url: "/static/locales/it/podcast.json",
          revision: "54cc89793afd435eaf25dd5414a857b8",
        },
        {
          url: "/static/locales/it/settings.json",
          revision: "a9b4b01e5d137baa6bac0586415562b3",
        },
        {
          url: "/static/locales/it/shortcuts.json",
          revision: "e5fd174c43ee42967ebdd77277a2ecef",
        },
        {
          url: "/static/locales/ja/common.json",
          revision: "7389ee91cb504d2fb6278430415fcd3e",
        },
        {
          url: "/static/locales/ja/getstarted.json",
          revision: "4e20bc1fd9a62f433551e108bc186b78",
        },
        {
          url: "/static/locales/ja/header.json",
          revision: "59cc7c2e20fef0f6cfab151e74f3b196",
        },
        {
          url: "/static/locales/ja/menu.json",
          revision: "2706d3838b66bed5eb8f3dc628494497",
        },
        {
          url: "/static/locales/ja/player.json",
          revision: "fd641c271b905ee2094570970722510a",
        },
        {
          url: "/static/locales/ja/podcast.json",
          revision: "ca8cf5e873e34ae818594279a538bac7",
        },
        {
          url: "/static/locales/ja/settings.json",
          revision: "24c498605e3e6676e0acd42e600cd692",
        },
        {
          url: "/static/locales/ja/shortcuts.json",
          revision: "1f2318a824ad54153264706fa387dc32",
        },
        {
          url: "/static/locales/ko/common.json",
          revision: "6a4dbf8982e4e8a766726a34cfed2f0a",
        },
        {
          url: "/static/locales/ko/getstarted.json",
          revision: "316ed94bfb6bf5ce771ed000e3969e36",
        },
        {
          url: "/static/locales/ko/header.json",
          revision: "1f61377cb3851272add4c0ec9f7c1ae8",
        },
        {
          url: "/static/locales/ko/menu.json",
          revision: "fc2173959300885e6373b24908c73773",
        },
        {
          url: "/static/locales/ko/player.json",
          revision: "fb0d36007edd85abe4fe3986ed785b10",
        },
        {
          url: "/static/locales/ko/podcast.json",
          revision: "12cc72017669cbe0780fa95934198fcb",
        },
        {
          url: "/static/locales/ko/settings.json",
          revision: "88f4a088b09a7dd0c32889faf0cae2bf",
        },
        {
          url: "/static/locales/ko/shortcuts.json",
          revision: "747c832d9d4d3ec649bc8d2e608392d2",
        },
        {
          url: "/static/locales/no/common.json",
          revision: "48f410d98a826eaef78a1f1e1ac5dd85",
        },
        {
          url: "/static/locales/no/getstarted.json",
          revision: "df4cb977e03bb392ad3f34e10c31af7e",
        },
        {
          url: "/static/locales/no/header.json",
          revision: "992916f1826bc332f689c2ff597e6a2b",
        },
        {
          url: "/static/locales/no/menu.json",
          revision: "571fcc710b06a5afe1c0efb4d6cdaaad",
        },
        {
          url: "/static/locales/no/player.json",
          revision: "0d8a44e55bac79955d419ddaa0c9465d",
        },
        {
          url: "/static/locales/no/podcast.json",
          revision: "5b7e7290d3865a9f23c80f17f1bdfd15",
        },
        {
          url: "/static/locales/no/settings.json",
          revision: "7f161141e7f82cc51bcbadfc4060f51d",
        },
        {
          url: "/static/locales/no/shortcuts.json",
          revision: "ee33389def5bb266cc787f796168fafb",
        },
        {
          url: "/static/locales/pl/common.json",
          revision: "b0d77f2f33489a33c41c12b7005407ab",
        },
        {
          url: "/static/locales/pl/getstarted.json",
          revision: "e30f91cf8fe1dbb861bba5bcc5d7f3d2",
        },
        {
          url: "/static/locales/pl/header.json",
          revision: "c6bc79ff652ad25de712443c077ea958",
        },
        {
          url: "/static/locales/pl/menu.json",
          revision: "152ce2791f10ac64f829a539c2df43d8",
        },
        {
          url: "/static/locales/pl/player.json",
          revision: "a89638c58d940f0668cac77358d6a05e",
        },
        {
          url: "/static/locales/pl/podcast.json",
          revision: "430e1f6e32c2997c8666978546199c39",
        },
        {
          url: "/static/locales/pl/settings.json",
          revision: "950c357cc0fcbb8e1bd04b254c5309b0",
        },
        {
          url: "/static/locales/pl/shortcuts.json",
          revision: "d21eef9667d3b4d183c816db6da7530f",
        },
        {
          url: "/static/locales/pt/common.json",
          revision: "ee5bc0c85fbf9d61d6e361adee511580",
        },
        {
          url: "/static/locales/pt/getstarted.json",
          revision: "6ef45850080c7231a9060efee1a9ab32",
        },
        {
          url: "/static/locales/pt/header.json",
          revision: "e4279a8661c5b877ea498cc6678bc05d",
        },
        {
          url: "/static/locales/pt/menu.json",
          revision: "61ea94edf232ac3a6c50b0c0532299bf",
        },
        {
          url: "/static/locales/pt/player.json",
          revision: "944fd2e0d659d4b3f5b85426750f0979",
        },
        {
          url: "/static/locales/pt/podcast.json",
          revision: "41d5aafdf48a8225d5243c0532b7c33c",
        },
        {
          url: "/static/locales/pt/settings.json",
          revision: "31f1201fa41537416aca8b4bae16cf73",
        },
        {
          url: "/static/locales/pt/shortcuts.json",
          revision: "0691b8944de090fa64d64ffeb75169a1",
        },
        {
          url: "/static/locales/ru/common.json",
          revision: "8deff27a1f20b0d68188ad8764adb50c",
        },
        {
          url: "/static/locales/ru/getstarted.json",
          revision: "9dc3d85f78debab0cf8bfa36a98f3bb5",
        },
        {
          url: "/static/locales/ru/header.json",
          revision: "ead6bda616b7d7c695dbcdb1daf8d9ba",
        },
        {
          url: "/static/locales/ru/menu.json",
          revision: "f0bc373da1c54bdf18c80f5a0093a2f9",
        },
        {
          url: "/static/locales/ru/player.json",
          revision: "69235ab7116e956a5441e18700a89ef0",
        },
        {
          url: "/static/locales/ru/podcast.json",
          revision: "479bf154e12fa17b54e265ddda36141c",
        },
        {
          url: "/static/locales/ru/settings.json",
          revision: "fee364184a1c24e4e2e1e2d57c7c0eb3",
        },
        {
          url: "/static/locales/ru/shortcuts.json",
          revision: "4d9dc49f0755c575213c4aae58f40127",
        },
        {
          url: "/static/locales/swe/common.json",
          revision: "511d0d9587304834c740a90ed3c30903",
        },
        {
          url: "/static/locales/swe/getstarted.json",
          revision: "d7bf0698bf92ba129fbdb1d547277850",
        },
        {
          url: "/static/locales/swe/header.json",
          revision: "867d881bfe39a04fbad37d7c98389bd4",
        },
        {
          url: "/static/locales/swe/menu.json",
          revision: "a9f217d73c371031228cac0792381f68",
        },
        {
          url: "/static/locales/swe/player.json",
          revision: "836d6bdf5bb1b210b8afe43a96320791",
        },
        {
          url: "/static/locales/swe/podcast.json",
          revision: "f68ad6a8dccabb510bc84a5e87e598b1",
        },
        {
          url: "/static/locales/swe/settings.json",
          revision: "bf65280fd7553d75b87af700777b05f7",
        },
        {
          url: "/static/locales/swe/shortcuts.json",
          revision: "1969880f01a8af01da5769463e64434e",
        },
        {
          url: "/static/locales/tr/common.json",
          revision: "ce8cb6d9ce4a830f9af080b1d29ea011",
        },
        {
          url: "/static/locales/tr/getstarted.json",
          revision: "0030e6b19dfbf85eeb2374f1716e35d1",
        },
        {
          url: "/static/locales/tr/header.json",
          revision: "110786834b9d4b0b1b55861f25479e6a",
        },
        {
          url: "/static/locales/tr/menu.json",
          revision: "17d3fd5d70935386b8c01fc6d772218e",
        },
        {
          url: "/static/locales/tr/player.json",
          revision: "84940c8da1714c07eb3a3072df5b116a",
        },
        {
          url: "/static/locales/tr/podcast.json",
          revision: "21b2f11d303bae89a7938d408e603a13",
        },
        {
          url: "/static/locales/tr/settings.json",
          revision: "ef68427bdfb78d807454662c64f1fb53",
        },
        {
          url: "/static/locales/tr/shortcuts.json",
          revision: "c90f983657d69a82b3ba65c08ae6c76e",
        },
        {
          url: "/static/locales/zh/common.json",
          revision: "da7f3b373e2062782a99f8f66a71cccc",
        },
        {
          url: "/static/locales/zh/getstarted.json",
          revision: "d91d91b7c643a1b12498dc4b00d54ace",
        },
        {
          url: "/static/locales/zh/header.json",
          revision: "1f013c697e76460efa340bc1e5aacc0a",
        },
        {
          url: "/static/locales/zh/menu.json",
          revision: "58fa82675bd12e2b61387953284ce792",
        },
        {
          url: "/static/locales/zh/player.json",
          revision: "dea9cd71f5527a0fc00af4cd89a4c991",
        },
        {
          url: "/static/locales/zh/podcast.json",
          revision: "0f8c2d5c22b7f326ac3b9aceb158e390",
        },
        {
          url: "/static/locales/zh/settings.json",
          revision: "b91310392fb634983c7f2875e08ad187",
        },
        {
          url: "/static/locales/zh/shortcuts.json",
          revision: "7228abecad27df882a5daa6982b80b9f",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET",
    );
});
