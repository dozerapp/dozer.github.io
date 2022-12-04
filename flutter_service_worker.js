'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eaccd3bdf5a84b331c1a0a833b814a33",
"splash/img/light-background.png": "d614c712af33ce7189c70ea4e5ea7a3f",
"splash/img/web-background.png": "b8512db0a3534101fe3fdf1a3bf36886",
"splash/img/dark-background.png": "d614c712af33ce7189c70ea4e5ea7a3f",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "8327a119a599f3bd070470049ad2e7e5",
"index.html": "763ff51a169199a1d9461d7d61992c02",
"/": "763ff51a169199a1d9461d7d61992c02",
"main.dart.js": "46a9bb87e20b273a82ad9bd1996162ea",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"favicon.png": "fd90ac31effd2a38a287822b9f669b82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e0bd4168d7ae2078b64d613f83216ae",
"latest_favicon.png": "db6e830e0897e7adfd0c5981cf39b842",
"assets/images/rental.png": "dab636553bc74a585fcdd38497738cfb",
"assets/images/add.png": "4aa48398ff10a4cfe7bc84f67d8f6ba0",
"assets/images/account_settings.png": "24be1ba5fa5240c0f1b125dda011a713",
"assets/images/account_next.png": "6072a21ded391d3ed0acab9d2861fba6",
"assets/images/detail_fraud.png": "ec8786697647b4f4ea8ceddca61dbbfa",
"assets/images/imgpsh_fullsize_anim.png": "263ed4eb886a36cb9ff8b607bba6b118",
"assets/images/category.png": "14361e4bbf7d2f0d7985fa078c895763",
"assets/images/notification_with_dottedicon.png": "6ee50a3e42c413401ffcdda4fedae8bb",
"assets/images/ads_edit.png": "a6ff92314bd14a8ef5a2fa39d1e20cd7",
"assets/images/tick.png": "27ccd8d92039f78363cfe4ac3cbe66ad",
"assets/images/heart_border.png": "2d24e51ca8a6fc861a79d6f2c8bb6a86",
"assets/images/login.png": "8fb27bf46f9b20ac64bf32cf87bc789a",
"assets/images/detail_report.png": "97749450f55e9f20a18cdb6890353eb6",
"assets/images/login_bg.png": "0748db2a28bd4d842cb4575c867b7a06",
"assets/images/vision.png": "348abc301b95d951f01b7853536b6d16",
"assets/images/app_bar_back.png": "566dc170a8506534013c63f83208040f",
"assets/images/choose_language.png": "cc342ec1a916c58ad8ac818bf96e4203",
"assets/images/login_logo.png": "162045f87196e3baf5ea6e7f57314fea",
"assets/images/account_logout.png": "813b90ce0e710ac198f71f8a789d8800",
"assets/images/login_drop_down.png": "e99f369bcaf9f8dad5fb5a063cf013a8",
"assets/images/sort_by.png": "00ec550189e16b4d71cd7ee165b2d4e4",
"assets/images/app_icon.png": "254a358e805a719199805748ae67656e",
"assets/images/instagram.png": "72cb6c3c5bb523ff802b2298becba504",
"assets/images/Group%2520448.png": "f9d465546e39a0cf96f2c8453dad3f00",
"assets/images/notification_without_dottedicon.png": "08e760402d5edc0b221bf305f5cd4fe4",
"assets/images/drawer.png": "ee4bec6191d759481f2ce88caed09342",
"assets/images/open_camera.png": "7b2c188c43b0df7b29c4ddb729298abe",
"assets/images/filter_product.png": "b2134f6951791ef7c04b8f2981966ee7",
"assets/images/dozer_placeholder_large.png": "2da8489b6a7cf2fe4169d08c9ca2e94f",
"assets/images/microphone.png": "d5d0cb55b06fed2633f32c8ace518c69",
"assets/images/new_favourite.png": "049c2e3a6df9a0192c64ecced91b8322",
"assets/images/toggle_off.png": "203ef7f470d16a8684da0cc8efb00512",
"assets/images/heart_half.png": "629eb90c7fe792101a883a832ffd4130",
"assets/images/account_billing.png": "3014b00854bfc4f50eb0e576d521a315",
"assets/images/detail_share.png": "54965dd735c459a32580052b71f7305d",
"assets/images/home_banner_placeholder.png": "24451a59d6c52da93282bc247132456e",
"assets/images/add-photo.png": "1c00e3a9aec2d77f917f265d9c93b643",
"assets/images/favourite.png": "049c2e3a6df9a0192c64ecced91b8322",
"assets/images/detail_phone.png": "9c86c2c5f66fb31dabbd3232eed3daaa",
"assets/images/home.png": "fffbb95d5be3de7557720ff2bf3a8a7e",
"assets/images/dashboard_favourite.png": "cfc9a2c38dfe68cf983a14cae57eef9b",
"assets/images/search_icon.png": "958088fc4da2ed4832f25e5ef732799a",
"assets/images/web_login_splash.png": "b8512db0a3534101fe3fdf1a3bf36886",
"assets/images/user.png": "af795a3f23e01744e6d48d9855396588",
"assets/images/drop_down.png": "1bb2e73797f8158a847fdf06d67fa4d3",
"assets/images/new_splash.jpg": "58ec28f2912368536a713d2b2a75ac0f",
"assets/images/dozer_placeholder_small.png": "86150c68a4939199bd205e7a5e59d01e",
"assets/images/appstore.png": "5c61b8349863dfdfa4164494c9276013",
"assets/images/add_post.png": "38b12d46f169f711b818f70e260ac0db",
"assets/images/search.png": "78e2a07f5f939fe02808211605bfe60c",
"assets/images/heart.png": "0cd9f05a38fac00ee241688770b0b954",
"assets/images/splash_mobile.png": "5741e6bb9b55ab107b9bd5d4451abcdd",
"assets/images/account_myads.png": "9d0ebdced2adbf59e030fa8f946c572a",
"assets/images/request.png": "a87f8eb546183b7000bc037b60c77ec5",
"assets/images/home_footer_logo.png": "2c8ad6cfb79aa8f1539f04b89f1acaee",
"assets/images/web_splash.jpg": "c6441499e7fae8d2ef11fe778a4be5ed",
"assets/images/splash.png": "7744448add834c1da44cfea6cb8ee531",
"assets/images/banks_en.png": "dc81a7e10bd102024fb41ebb4df63f90",
"assets/images/account_create_ad.png": "8a62071f1baa9e12daa943da5db07639",
"assets/images/app_bar_back_ar.png": "10371aec862d2781f6610dc124018fc4",
"assets/images/iban.png": "7ad3882d5365ed05cd5b20d72057c648",
"assets/images/filter.png": "d989b4d3082a7a0d2519ff5756c7224c",
"assets/images/twitter.png": "0928fd7ca2765b39b65ce1886af44e7b",
"assets/images/unfavourite.png": "f17342a42272634f4a604cf728d1bd8f",
"assets/images/product_detail_placeholder.png": "e91b035004699485bcaa77f214d9e379",
"assets/images/splash_ipad.png": "678b9f348753a56597ce2e1047878849",
"assets/images/linkedin.png": "638833c80dbe2b6b113521b1e6bca1d9",
"assets/images/detail_star.png": "3207f2555528baf607c9fb49f1e399c3",
"assets/images/bin.png": "ba5bb8ca5c7762c0d107abed4ca0a370",
"assets/images/splash_1.png": "d6bbf3b5ae3436b6979b3fdcf821f577",
"assets/images/placeholder.jpeg": "7f714b3fe32274773556aa9cee807ff1",
"assets/images/playstore.png": "d7c753a4a5c846420289dd5fc41dedfa",
"assets/images/toggle_on.png": "99a547b5b4f6c81528565d6275f35d78",
"assets/images/app_bar_notification.png": "714352b9c628d67d8b93a1df20dd0613",
"assets/images/star.png": "7544641db8ba8dc8e330adf28f45a779",
"assets/images/banks_ar.png": "ccc7afabb213026341d615ccad0f9b4e",
"assets/images/produc_list_placeholder.png": "918a85d907fd829409d10f8f21d2f4b9",
"assets/images/Group%2520447.png": "859d58e7fdc6ec68a1c61b73679f64cb",
"assets/images/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/images/new_splash-min.png": "fdd5075941a182e2401ba771e5b64e9e",
"assets/images/facebook.png": "e3ac337eada59ebb63b76ab9188233ef",
"assets/images/camera.png": "ee993f7e287b2ff68a5ceb4dbaa8621c",
"assets/images/detail_message.png": "d773bb2d78eb854b3715d90ba609acf5",
"assets/images/notification.png": "714352b9c628d67d8b93a1df20dd0613",
"assets/images/sell.png": "a75caf367c1994ffdfe39a72802dd103",
"assets/images/transparent.png": "1e4c07349f9f2fc9af2c6128ed5af912",
"assets/images/message.png": "b16588b403d4a160d5dcf4f1d89daef5",
"assets/images/account_contact_us.png": "aa8f55c1ba9763a639f277d31961e999",
"assets/images/badge.png": "7e6c81299c6154b2b50fe763954c8641",
"assets/images/splash_logo.png": "91a184cced0b76576c608b43c88c86ad",
"assets/images/new_splash_screen.png": "d614c712af33ce7189c70ea4e5ea7a3f",
"assets/images/footer_whatsapp.png": "a3804939a019e37aa24c41902fbb987f",
"assets/images/marker.png": "0ccac6dcae7e0d08b2d5b4d5e7046e75",
"assets/images/account_myorder.png": "b834fec8c894b4d8bb1ac69b3dc930b7",
"assets/images/profile_edit.png": "9d4d1fbc84464bf20b4ef9f36a932803",
"assets/images/iban_new.png": "fea71a3affe0c8cc2923a13bc3da505c",
"assets/AssetManifest.json": "cff284f1543d36195f80cba75a4f089a",
"assets/NOTICES": "126f9a27a512597712e050d5afa0f75f",
"assets/FontManifest.json": "9803bbe6aea65773a16679eecf6d1329",
"assets/packages/country_picker/lib/src/res/assets/worldwide.png": "e983bfcea9fbc75a1afb1ded43e87587",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/shaders/ink_sparkle.frag": "3a4d169c71d5ddd5c3366103db03d276",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/DroidKufi-Regular.ttf": "a9b030e29a35f523a137ee0175be419f",
"assets/fonts/DroidKufi-Bold.ttf": "1b89eb34f74a02c0681727faadf48466",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/default_payment_profile_apple_pay.json": "e843213d247aa65f2fd9f9e2188e6e87",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
