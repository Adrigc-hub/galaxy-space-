// sw.js - Service Worker para Notificaciones y Gestión de Red
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Manejo de notificaciones programadas en segundo plano
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, delayMs } = event.data;
    
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'https://static.tvtropes.org/pmwiki/pub/images/fabulous_beasts.png',
        vibrate: [200, 100, 200],
        badge: 'https://static.tvtropes.org/pmwiki/pub/images/fabulous_beasts.png'
      });
    }, delayMs);
  }
});
