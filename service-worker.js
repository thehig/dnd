// Source: https://raw.githubusercontent.com/thehig/arconai-stream/master/src/static/service-worker.js

const DEBUG = true;

const CACHE_BASE_NAME = "DND";
const CACHE_TAG = "0001";

// #region Output Styles

const swStyle = "background: #333;"; // Service Worker Background
const fnStyle = "background: #EEE;"; // Function Background

const styles = {
  install: `${swStyle} color: #c8f7c5`,
  activate: `${swStyle} color: #c5cbf7`,
  delete: `${swStyle} color: #e0ffff`,
  fetch: `${swStyle} color: #ffecdb`,

  precache: `${fnStyle} color: #2e8856`,
  fromNetwork: `${fnStyle} color: #638bb3`,
  fromCache: `${fnStyle} color: #bf55ec`,
  updateCache: `${fnStyle} color: #808080`,
  refresh: `${fnStyle} color: #9d8319`
};

// #endregion

// #region Cache Definitions

// Static cache is loaded once and then always served from cache
const staticCache = {
  name: `${CACHE_BASE_NAME}-STATIC-${CACHE_TAG}`,
  files: [
    "dnd/images/CREDIT.html",
    "dnd/images/dragons-breath-weapon-table.png",
    "dnd/images/trap-chart.png",
    "dnd/assets/css/style.css",
    "dnd/assets/js/scale.fix.js",
    "dnd/install-sw.js"
  ]
};

// Update cache is loaded, then when requested it serves from cache
//    then in the background it tries to update the cache from network
//    then refreshes the client
const updateCache = {
  name: `${CACHE_BASE_NAME}-UPDATE-${CACHE_TAG}`,
  files: []
};

const CACHES = [staticCache, updateCache];

// #endregion

// #region Service Worker Lifecycle Events

/**
 * Install service worker and runs precache
 */
self.addEventListener("install", evt => {
  if (DEBUG) console.log("%c[->][install]", styles.install);

  evt.waitUntil(precache());
});

/**
 * Remove any caches other than the current ones
 */
self.addEventListener("activate", event => {
  if (DEBUG) console.log("%c[->][activate]", styles.activate);
  event.waitUntil(
    // Get all the cache names (keys)
    caches.keys().then(cacheNames =>
      Promise.all(
        // For each cache name
        cacheNames.map(key => {
          // Whitelist the current cache names
          if (CACHES.map(c => c.name).indexOf(key) === -1) {
            if (DEBUG) console.log("%c[->][delete]", styles.delete, key);
            // Delete the rest
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", evt => {
  if (DEBUG) console.log("%c[->][fetch]", styles.fetch, evt.request.url);

  // If resource is in static cache, return it from the static cache
  // If resource is in update cache, return it from the update cache, then update the cache from the network and refresh the client
  // If resource is not in the caches, fetch it from the network and don't cache it

  evt.respondWith(
    // Return from the static cache if valid
    fromStaticCache(evt.request).catch(() =>
      // return from update cache if valid
      fromUpdateCache(evt.request)
        .then(response => {
          // update and refresh
          evt.waitUntil(updateUpdateCache(evt.request).then(refresh));
          return response;
        })
        .catch(() =>
          // resort to network
          fromNetwork(evt.request)
        )
    )
  );
});

// #endregion

// #region Cache Functions

// Accessors for named caches
const fromStaticCache = fromUsingCache(staticCache.name);
const fromUpdateCache = fromUsingCache(updateCache.name);
const updateUpdateCache = updateUsingCache(updateCache.name);

/**
 * Populate cache with a set of resources
 */
function precache() {
  if (DEBUG) console.log("%c[->][precache]", styles.precache);
  return Promise.all(
    CACHES.map(({ name, files }) =>
      caches.open(name).then(cache => cache.addAll(files))
    )
  );
}

/**
 * Get a resource from the cache
 *
 * Returns resource
 * Throws an error if resource not in cache
 */
function fromUsingCache(cacheName) {
  return function fromCache(request) {
    return caches.open(cacheName).then(cache =>
      cache.match(request).then(matching => {
        if (DEBUG && matching) {
          console.log(
            `%c[<-][cache ${cacheName}]`,
            styles.fromCache,
            request.url
          );
        }
        return matching || Promise.reject("no-match");
      })
    );
  };
}

/**
 * Get a resource from network then store it in the cache
 *
 * Returns resource
 */
function updateUsingCache(cacheName) {
  return function update(request) {
    if (DEBUG)
      console.log(
        `%c[->][update ${cacheName}]`,
        styles.updateCache,
        request.url
      );
    return caches
      .open(cacheName)
      .then(cache =>
        fromNetwork(request).then(response =>
          cache.put(request, response.clone()).then(() => response)
        )
      );
  };
}

// #endregion

/**
 * Get a resource from a URL (within ${timeout}ms if specified)
 *
 * Returns resource
 * If timeout is specified, throws an error if timeout exceeded
 */
function fromNetwork(request, timeout) {
  return new Promise((fulfill, reject) => {
    var timeoutId = timeout && setTimeout(reject, timeout);
    fetch(request).then(function(response) {
      if (DEBUG)
        console.log(
          "%c[<-][network]",
          styles.fromNetwork,
          request.url,
          timeout || ""
        );
      timeout && clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

/**
 * Refresh any serviceworker connected client pages
 */
function refresh(response) {
  if (DEBUG) console.log("%c[->][refresh]", styles.refresh, response.url);

  // Get all attached clients
  return self.clients.matchAll().then(clients =>
    Promise.all(
      // For each client
      clients.map(client =>
        // Post message
        client.postMessage(
          // To refresh
          JSON.stringify({
            type: "refresh",
            url: response.url,
            eTag: response.headers.get("ETag")
          })
        )
      )
    )
  );
}
