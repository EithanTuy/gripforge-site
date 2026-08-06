// Kill switch for the Workbox service worker that GoDaddy's Website Builder
// registered at this scope. Anyone who visited gripforge.us before the move to
// Netlify still has that worker serving the old "Launching Soon" page from its
// precache. Browsers re-fetch sw.js on navigation, so they pick this up, wipe
// the caches, unregister, and reload onto the real site.
//
// Safe to delete once the real store ships and enough time has passed.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));

      await self.registration.unregister();

      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })()
  );
});
