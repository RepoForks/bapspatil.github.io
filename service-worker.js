"use strict";var precacheConfig=[["/index.html","0d758e7d4a8e58773738b1860be6357c"],["/static/css/main.7e756c86.css","f39c6a16fd11c5e4951ed14c6ea3f18f"],["/static/js/main.359ed4ee.js","524cecccc1876c33b9ad9ad33bc6485c"],["/static/media/CaptainChef.f7adacdc.jpeg","f7adacdcf64da29ce78ea99c8a6b8231"],["/static/media/Pantheon.fed375b9.jpg","fed375b91fe7dd1f68eac5d3a598d5cf"],["/static/media/SilverScreener.5e470f22.jpeg","5e470f22d4ced544c9d6c153b5596f95"],["/static/media/androidappbundle.879f68b5.png","879f68b53dd9cf432b8e73721a588887"],["/static/media/animus.83277af4.jpg","83277af4512b7bd5de7789e83e2896e3"],["/static/media/anko.a8c5af50.jpg","a8c5af5047121f5b64a2c08e060f09b8"],["/static/media/bapspatil.6160837c.png","6160837c288a718d716debe4110323a7"],["/static/media/careeradvice.564562a8.jpg","564562a8f7b1e7038afcbda667915ed9"],["/static/media/eclectic.63bd606d.jpg","63bd606dac0e889650854193a3b529a2"],["/static/media/flickOff.0409ab63.jpeg","0409ab63df93926d0835f061ca0f4613"],["/static/media/hindsight.1fa73235.jpg","1fa73235060361db8c45d8d11066d194"],["/static/media/kotlinjava.7ae80c93.png","7ae80c93e55664b9125bcfb862222f54"],["/static/media/lineuptechjob.f26650e3.png","f26650e372e0750516f9c72da441b434"],["/static/media/mentorcruise.cb93ea26.png","cb93ea263ec2db6ec822294eb6029b4b"],["/static/media/mockingbirdmedia.c86214d4.png","c86214d4640781ad1f89102d3e7386d9"],["/static/media/notchphones.c4fef24a.png","c4fef24a9a6ca7a252409408ba21ae50"],["/static/media/realmapksize.bbdcfb14.png","bbdcfb14ce1162f49b73d60f4b600433"],["/static/media/resume.1dfdfc5b.pdf","1dfdfc5bfa9a7df18aea115022c4c88c"],["/static/media/retrofitcaching.afbd79ae.png","afbd79ae8ea8dc24ecaba11c7ebc7b88"],["/static/media/xoxo.ce951c1e.jpg","ce951c1ead1f8cecf8c6cc8895add998"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});