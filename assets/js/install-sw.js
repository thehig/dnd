console.log('Service Worker...');

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/dnd/assets/js/service-worker.js', {scope: '/dnd/'})
}