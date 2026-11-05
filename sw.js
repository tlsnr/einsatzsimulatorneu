// Minimaler Service Worker (macht die Seite installierbar, cached bewusst nichts -> immer aktueller Stand)
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{});
