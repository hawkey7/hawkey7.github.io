"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","798a8ffdb9b0b9513a5ce75d57c2de2b"],["/static/css/main.488e542a.css","488e542aa7f8c904a8a6a04d41279915"],["/static/js/0.01b66b3b.chunk.js","9bcbd9084d12bd05e7bc5a1098d40798"],["/static/js/1.6c4c4b52.chunk.js","84286c86f5d52dd63bdd0bb6268acd80"],["/static/js/10.fa42e0a6.chunk.js","374403350fdc4cb59a6a8a80a7e639c4"],["/static/js/2.996be9d6.chunk.js","d5f58a6fe2f2400886bf6139dd0002a3"],["/static/js/3.5f692ce6.chunk.js","3cc57e03a90e2b778bff7cc227c01a81"],["/static/js/4.6a3f39f6.chunk.js","3ba929113b468c7cff6c6cee51680d47"],["/static/js/5.b6259d3e.chunk.js","6723a1a8f25e50b8111dc756edb78d96"],["/static/js/6.28104f9d.chunk.js","f3fc2f46c68aa073142ac4252e52d04f"],["/static/js/7.5490a899.chunk.js","795d1703b11ce277b9d2cb9960e7a945"],["/static/js/8.3a22e270.chunk.js","b2475c7b66ccb6e313971006bb23e63f"],["/static/js/9.581446c4.chunk.js","c67020fdd0fa98e0d3c3c67c8767e2fc"],["/static/js/main.3e59f2fc.js","d20628b5048fb31c73b01ebeeb75a37f"],["/static/media/benefit.eb895651.png","eb895651de61cf3974354c8f4e25afb5"],["/static/media/contact_success.c3d173e6.png","c3d173e674eb73a6ba8069928e9f2fc6"],["/static/media/home-banner.2dd2a6db.png","2dd2a6dbc74efc51724eb0fbf1ebc806"],["/static/media/home4.ef25f653.png","ef25f6531c63c628f419997ca930ec18"],["/static/media/home5.ae9d63e3.png","ae9d63e359dd74dde6f9aa0b2d310d6f"],["/static/media/okex.37933c90.png","37933c90d33332f37b5697eac3942c76"],["/static/media/overview.918d3832.png","918d38328b41c28f02eedf59736e45f9"],["/static/media/ripioCredit.7427f332.png","7427f3327b8f4266debfd79e42ce2a59"],["/static/media/step2.cc569461.png","cc56946148fa06d28db0bb1c6cc40143"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var c=new Request(n,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});