/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4fd122fbde4ff07a7503.js"
  },
  {
    "url": "app-c0d05ffe5297c29c0419.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6f2a176f98b0da76acc0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a99632d16fc1d3d2bd009efb0befa496"
  },
  {
    "url": "0.2f67a2daa8f0ae281b4f.css"
  },
  {
    "url": "1.f2889d5a702abf7bbd42.css"
  },
  {
    "url": "1-e9fa1efc8941d584f0a4.js"
  },
  {
    "url": "component---src-pages-404-js-ed2290bd9c0d6c3793d5.js"
  },
  {
    "url": "0-7201245cea7a65e031d6.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^([^.?]*|[^?]*\.([^.?]{5,}|html))(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        var request; // Some external resources don't allow
        // CORS so get an opaque response

        if (resource.match(/^https?:/)) {
          request = fetch(resource, {
            mode: "no-cors"
          });
        } else {
          request = fetch(resource);
        }

        return request.then(function (response) {
          return cache.put(resource, response);
        });
      }));
    }));
  }
});