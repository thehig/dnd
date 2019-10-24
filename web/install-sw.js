if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/{repository}/sw.js', {scope: '/{repository}/'})
}