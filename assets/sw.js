if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let f={};const c=e=>s(e,b),d={module:{uri:b},exports:f,require:c};i[b]=Promise.all(a.map((e=>d[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-8bb8e8df"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9cf83d91baa653a835a2671aa8e5a977"},{url:"assets/github-BTvnc781.webp",revision:"152b91ecbfa20b975efb63a52ef68e8f"},{url:"assets/index-DlKC-1Kq.css",revision:"ef5c7fea98f609817e30a2aeafbe15cf"},{url:"assets/index-DnSyUMmn.js",revision:"256dd3093b089506a93847c4b6d77489"},{url:"assets/nanotecks-D_Wensik.webp",revision:"0b1275c65df0ba29fd20a871ffd25764"},{url:"assets/norkut-BXh5JCNZ.webp",revision:"ed780d7ae397002f535dc26308375ce6"},{url:"assets/oldPortolio-CJZrpPiT.webp",revision:"d487c3499535beb19ff6c03c489ce85f"},{url:"assets/tudolarvenezuela-DifFPFo-.webp",revision:"4cb9b0bdfc35821b71b235984077f717"},{url:"assets/universe-BYeUS9C-.css",revision:"d284a7be8b0a33d704a3d876dfef9f9b"},{url:"assets/universe-Dhco73HG.js",revision:"ecade416f429813a6fa1e1d969883c66"},{url:"assets/youtube-clone-BAnU46dX.webp",revision:"47890779363a1db2eb6d142963b26bb7"},{url:"images/asterisk.svg",revision:"014690b64dcac45c6ad29e52aa06f7c8"},{url:"images/aws.webp",revision:"bf89541b8dd7e1ca197538105b32136d"},{url:"images/circle-error.svg",revision:"fc5a007501338b1100eb00c434a19625"},{url:"images/circle-success.svg",revision:"a4a93350039ce631daddea6359359136"},{url:"images/css3.webp",revision:"387d874f15e8c2d922da642eadc5d8b9"},{url:"images/docker.webp",revision:"f95cf99adf29cb17aecff9984257a620"},{url:"images/favicon-128x128.png",revision:"4a9ba21911a66c05a8fdbd0874015d98"},{url:"images/favicon-512x512.png",revision:"bc23e4f80ff8a4c644d6ffd4ccd1be97"},{url:"images/figma.webp",revision:"7d1b35f3fac4f0ddf7cf9421a4845435"},{url:"images/git.webp",revision:"7480ed5e0f51b0aec28002dd7b40bbac"},{url:"images/github.webp",revision:"152b91ecbfa20b975efb63a52ef68e8f"},{url:"images/golang.webp",revision:"921593106a3b68fa460434f9734f9aa9"},{url:"images/html5.webp",revision:"5d5e1108b16e5354c240bb2e64e316e8"},{url:"images/icon-earth.svg",revision:"8d40f66eb2e3e888cddf162bf84bd936"},{url:"images/icon-github.svg",revision:"e661b6b259173a63b46f106eb3286768"},{url:"images/icon-linkedin.svg",revision:"b53e95ec89bac7d3efedcc322a744be5"},{url:"images/icon-whatsapp.svg",revision:"293090c7b163bdea5278b02a6589db7b"},{url:"images/icon-youtube.svg",revision:"b652ee29dc4b2cd8f52de6f764cac20e"},{url:"images/icon.png",revision:"4a9ba21911a66c05a8fdbd0874015d98"},{url:"images/jest.svg",revision:"79db3da9f3b690523c3b0e589e9cf8e9"},{url:"images/js.webp",revision:"8f815b649f5f53a56418b6e1f4fbf9c6"},{url:"images/nextjs.webp",revision:"f9737ff20672b05593a71a7e43969e9b"},{url:"images/nodejs.webp",revision:"5df1413f869e17eefe1ef8e3592688f6"},{url:"images/pdf.svg",revision:"a8d0b5047a6a2370ef2353ce0b097be4"},{url:"images/portada.png",revision:"c0eb935ca21efa6faed966d4d76ca67a"},{url:"images/react.webp",revision:"38f050edb8f2eee8dbf77e17509ff317"},{url:"images/redux.svg",revision:"aa0a337603611296524a666b62a9ff23"},{url:"images/sass.webp",revision:"03ee06e278ee9ae34f5df4ae11fd3e03"},{url:"images/tailwind.webp",revision:"bd6adc568f411e408b95a471043708d0"},{url:"images/typescript.webp",revision:"f524d999097cb6f54ab9da6c6fc3f574"},{url:"index.html",revision:"83bd58b1ec18938ed384f5debff72c84"},{url:"manifest.json",revision:"a9cf3428c258331241ca93545b998be4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
