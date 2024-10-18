'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "476d6447004cde97cfad03780dc19d49",
"assets/AssetManifest.bin.json": "c211677ecbf22cacb6b20bf7116bef76",
"assets/AssetManifest.json": "22e96310c3554342205362cb448d66bc",
"assets/assets/images/65barre.png": "c6069b1483cab800193bf446fcdf03e2",
"assets/assets/images/65barre.svg": "7e1f320ab986efd22bcb0862f8d0b350",
"assets/assets/images/65barre_2.png": "850c0edfc82533809b8b6a6f845a6390",
"assets/assets/images/65barre_conductor.svg": "cc454e1c5cbf964d2ec420f0a18b6a55",
"assets/assets/images/65barre_conductor_front.svg": "5472aff95c5ba868c13f4629a8219b6f",
"assets/assets/images/anonymous.png": "d4e4340f4c71ee7e55e112375833e20e",
"assets/assets/images/anonymous.svg": "1ac89f9225d9dd36a64432244ada4d70",
"assets/assets/images/cb_logo.svg": "332ea94a2389fa506948574f1b63c6ad",
"assets/assets/images/cb_logo_1.svg": "16e84be90256a4bd7815217c55c9327f",
"assets/assets/images/cb_sans_contact.svg": "3b62ef3f70a30ef52db8fb5902398648",
"assets/assets/images/cello.svg": "7aa6260a78ddd338824c8f9fba8dcf36",
"assets/assets/images/chip_icon.svg": "9bbb70729f8c99e82e3fca497d83e9c7",
"assets/assets/images/damien.jpg": "0db6d1f95191eefede4ed8f985a31afd",
"assets/assets/images/defendintelligence.jpg": "b486af57090c24e541ffbf67c641c5ff",
"assets/assets/images/Guillemette_Daboval.jpg": "7627bdd2d3cbc5f7ba281eafdfb3a789",
"assets/assets/images/horn.svg": "ba1c622b0315cf76e6cb08d231d05fcb",
"assets/assets/images/icone-65barre-1.png": "0c74e930ba8d19db6df3e66609c95ab1",
"assets/assets/images/icone-65barre-2.png": "2203de5c248c104cfe5e11c4ccabf6d8",
"assets/assets/images/icone-65barre-3.png": "862c4ec7bf4aeaceaee01fbc0450e31c",
"assets/assets/images/icone-65barre-4.png": "ec2e94bfec7991c84e6dfd914bde0570",
"assets/assets/images/icone-65barre-5.png": "7e36dc3b56a976ed96071fc6b36ab718",
"assets/assets/images/icone-65barre.png": "8d5eb3ab1c80e00758ed0edefadba5f4",
"assets/assets/images/image.jpg": "16b3770cabac07a24b72e908ef0ec003",
"assets/assets/images/lior.jpg": "9fe83bb6738af6179646dc5a53685389",
"assets/assets/images/logo.svg": "21b19dd7573d3cf04fa0688045bf4e4a",
"assets/assets/images/miniature.png": "f13ad2fa0ba1dabbd0c6e54b3ae03f43",
"assets/assets/images/music-note-svgrepo-com.svg": "103417621c04842a6c3dad8f390d4651",
"assets/assets/images/musiciens/florent_boyer.jpg": "a3de17fc3087291c2e1dce25b30671c3",
"assets/assets/images/musiciens/julien_castillo.png": "36f881844b09c718ab39b1ca57faeb11",
"assets/assets/images/musiciens/lorene_guerrieri.png": "2549f7cd80fbd4c0f38430bbd065eca0",
"assets/assets/images/musiciens/sarah_tapan.jpg": "489329f48e5bf26b4281889778e3b491",
"assets/assets/images/oboe.svg": "cedbe87259342d0afa7aef181c85ea17",
"assets/assets/images/prosecco.png": "c2277a612ca7367e22d92a7958d98a4d",
"assets/assets/images/timpani_harp.svg": "eb8770e763c10a63ff7635140eb5f5e8",
"assets/assets/images/treble_clef.svg": "be8ea3cc07be4aa78c91f8b7e3f06633",
"assets/assets/images/treble_clef_1.svg": "916d45a2a811662313bbe5657c247aeb",
"assets/assets/images/zeimusu_treble_clefs_4.svg": "15dec123238f51cbe7978c16223978c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85ea844188533e4a51ebeda623937c7b",
"assets/NOTICES": "469369c3ef7c323e35bdb4de2f2bb2b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b46416b4c0603b92008a094da8e22b58",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9a6264f7b315ce0657815f9486c43f61",
"icons/Icon-192.png": "aa6c4912cfac57dff9348c6471add539",
"icons/Icon-512.png": "0d396f3e511bd7b13f866fc1a9be79aa",
"icons/Icon-maskable-192.png": "aa6c4912cfac57dff9348c6471add539",
"icons/Icon-maskable-512.png": "0d396f3e511bd7b13f866fc1a9be79aa",
"index.html": "83c87cf2563bd7099321c0a2809e3671",
"/": "83c87cf2563bd7099321c0a2809e3671",
"main.dart.js": "e3e87c9be07406ed9eea3f0d9aa5b4e1",
"manifest.json": "dacc6909dd0b882e0e378dbd3b1b64a4",
"version.json": "bc8dead6f0fe868b222e6560af9dfda8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
