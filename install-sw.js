console.log('Service Worker...');

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/dnd/service-worker.js', {scope: '/dnd/'})
}