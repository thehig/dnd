if (navigator.serviceWorker.controller) {
  // A ServiceWorker controls the site on load and therefor can handle offline fallbacks.
  console.log(
    navigator.serviceWorker.controller.scriptURL + " (onload) controller"
  );
  console.log(
    "An active service worker controller was found, no need to register"
  );
} else {
  // Register the ServiceWorker
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./dnd"
    })
    .then(function(reg) {
      console.log(reg.scope, "register");
      console.log("Service worker change, registered the service worker");
    });
}
