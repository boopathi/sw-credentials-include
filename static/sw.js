var VERSION = 1;
self.onfetch = function(event) {
  event.respondWith(fetch(event.request));
}
