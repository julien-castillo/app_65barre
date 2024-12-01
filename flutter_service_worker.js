'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0fdf127689f59df6c2cc4b42ad9b755b",
"assets/AssetManifest.bin.json": "fc5d0152b9d9c73f363320f3f5d10595",
"assets/AssetManifest.json": "3ad44591d2442fc1b0301164872cc45d",
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
"assets/assets/images/musiciens/alice_laugier.png": "5705887b928e1916a06e42330e4907c1",
"assets/assets/images/musiciens/benedicte_reynaud.jpg": "642f1e502d71687a7f1f34e2a3df096c",
"assets/assets/images/musiciens/camille_gaillard.jpg": "46319527a1250ad2069ce0440ac822e8",
"assets/assets/images/musiciens/catherine_rochard.jpg": "4028ad4ecfc86b3a5bbbcd4c45fa54fe",
"assets/assets/images/musiciens/cecile_roux.jpg": "295d68112ed3b8c7abd7899b8b95e58d",
"assets/assets/images/musiciens/coralie_cordroch.jpg": "078cce504796ff82d7f8f6b6bae6736c",
"assets/assets/images/musiciens/emilie_tain.jpg": "fb0030ec4fd8315dca27c89854d76834",
"assets/assets/images/musiciens/fabienne_bertin.jpg": "307dfb10f0033132d290d1dba9769c52",
"assets/assets/images/musiciens/florent_boyer.jpg": "a3de17fc3087291c2e1dce25b30671c3",
"assets/assets/images/musiciens/jessica_hackett.jpg": "fd917af24dc3b5155fb4d9c4fca5fb73",
"assets/assets/images/musiciens/julien_castillo.png": "36f881844b09c718ab39b1ca57faeb11",
"assets/assets/images/musiciens/maite_platero_jaubert.jpg": "25dff031118ea8ae80cdd3f6bbbad48e",
"assets/assets/images/musiciens/nicolas_gillier.jpg": "ab14b3846b84efc45dbef23b2940e3f9",
"assets/assets/images/musiciens/sarah_tapan.jpg": "3ed9883c5c44dcf0098c95f2a4ae9866",
"assets/assets/images/musiciens/verene_gribonval.jpg": "299a3118aef9aba544b0fa5d79f549e3",
"assets/assets/images/oboe.svg": "cedbe87259342d0afa7aef181c85ea17",
"assets/assets/images/prosecco.png": "c2277a612ca7367e22d92a7958d98a4d",
"assets/assets/images/timpani_harp.svg": "eb8770e763c10a63ff7635140eb5f5e8",
"assets/assets/images/treble_clef.svg": "be8ea3cc07be4aa78c91f8b7e3f06633",
"assets/assets/images/treble_clef_1.svg": "916d45a2a811662313bbe5657c247aeb",
"assets/assets/images/zeimusu_treble_clefs_4.svg": "15dec123238f51cbe7978c16223978c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "80362672e09e90db771cd4903a9e8a9f",
"assets/NOTICES": "43c7efc622941c65ad9211ebc2ecd400",
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
"favicon.png": "b72f710a472950d2f92480b107ee30dc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "074998b9e9ba26a4fe0f0f0090b97fae",
"icons/Icon-192.png": "cc321c189bbeff5b79ae9a0d79456830",
"icons/Icon-512.png": "a8b6e1deacb207bbfaf671830d641edc",
"icons/Icon-maskable-192.png": "cc321c189bbeff5b79ae9a0d79456830",
"icons/Icon-maskable-512.png": "a8b6e1deacb207bbfaf671830d641edc",
"index.html": "f134d7570b80088296ceeddf5c9c4af2",
"/": "f134d7570b80088296ceeddf5c9c4af2",
"main.dart.js": "b589420e5a695fe71554fbab67a1df2e",
"manifest.json": "c828375886482076b73bab393a3d6914",
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
