"use strict";var precacheConfig=[["/index.html","e844ca9a724077d99c25bfa41cc08948"],["/static/css/main.d427f659.css","f2d530031fea8d1f57410cf3fbcff826"],["/static/js/main.b814bf5f.js","82c3ce4a94ad016b171f67915791c41f"],["/static/media/CaptainChef.e187a76c.jpeg","e187a76c41feacc1e0b000766a1ccbdf"],["/static/media/Pantheon.6109f948.jpg","6109f94872ce78d69cc5ab31e6c42f94"],["/static/media/SilverScreener.0f4e2b2d.jpeg","0f4e2b2df1128454784f74156f2f1cf5"],["/static/media/anko.e655ac41.jpg","e655ac412b13bbbeffebcbd2daee4b6e"],["/static/media/bapspatil.6160837c.png","6160837c288a718d716debe4110323a7"],["/static/media/careeradvice.483581ad.jpg","483581ad2a2dd4806f07884918bec8ed"],["/static/media/eclectic.e4c95343.jpg","e4c953439e811a98a65ef95c3b6748d2"],["/static/media/flickOff.f02bca23.jpeg","f02bca23241f5be0b4c5e8a2f7bb9deb"],["/static/media/hindsight.ca8511e2.jpg","ca8511e229852a87f2331d127bcbfbdb"],["/static/media/resume.914fbd5c.pdf","914fbd5c0b2d7a4f2e0258d07686c687"],["/static/media/xoxo.9e6c66ea.jpg","9e6c66eab1bd1b40f4527be640c91430"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});