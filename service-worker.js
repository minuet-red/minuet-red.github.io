/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3094b4dec4f9dc6df5fa2ea551b72f18"
  },
  {
    "url": "about/index.html",
    "revision": "3c4ee11d2f4d2147a2e0a1bc6aac9e3c"
  },
  {
    "url": "assets/css/0.styles.825a4cfd.css",
    "revision": "77ab9e9adfbaf8e57d44300c82990a9e"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/audio.8f8f3d19.svg",
    "revision": "8f8f3d19c8bbe65f1169893f70d1f722"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/loading.862471f9.svg",
    "revision": "862471f95c99718d5fd52b937b6d6787"
  },
  {
    "url": "assets/js/1.20ab74bd.js",
    "revision": "e281c4fa89dfabff267a10f0951b2788"
  },
  {
    "url": "assets/js/10.78b7bd34.js",
    "revision": "6fe35d226c473d609456cec366755bfb"
  },
  {
    "url": "assets/js/11.8991ef60.js",
    "revision": "23875974214309713f66c3991afa04b1"
  },
  {
    "url": "assets/js/12.6df84a8e.js",
    "revision": "cecb0a52a3e30054a0d1226725f5efd8"
  },
  {
    "url": "assets/js/13.9024c168.js",
    "revision": "dad1a8f268c09575275949a8c9001d8c"
  },
  {
    "url": "assets/js/14.8ba5eb58.js",
    "revision": "4e26f16eabdfe95ab7d64e8be84f3e55"
  },
  {
    "url": "assets/js/15.4348f191.js",
    "revision": "e8e5cccaee0373f0236eca80cf6fb621"
  },
  {
    "url": "assets/js/16.b433193d.js",
    "revision": "17bb59d353c47de33b5d6966f23da025"
  },
  {
    "url": "assets/js/17.ad80863d.js",
    "revision": "2ec4b1fcaad782313a1d73e6bc6cc375"
  },
  {
    "url": "assets/js/18.37c3443c.js",
    "revision": "7a40669bc19adb30fff3ad100f5b4776"
  },
  {
    "url": "assets/js/19.7d4168f2.js",
    "revision": "260da032a17636b9a163b9295a00608d"
  },
  {
    "url": "assets/js/20.a0f1d454.js",
    "revision": "63ccd59fef8c971854b1d15751ebb740"
  },
  {
    "url": "assets/js/21.e9dcb3e0.js",
    "revision": "7b2591f9aebc8929fb55a0129a1669a4"
  },
  {
    "url": "assets/js/22.f4292ac6.js",
    "revision": "5a602a6ecf6904d43a2800c17c3f64dd"
  },
  {
    "url": "assets/js/23.f9f7b780.js",
    "revision": "6084544a0863d38eb2f771b1af76f9d6"
  },
  {
    "url": "assets/js/24.1a9d0256.js",
    "revision": "7c3e774dda8bb6213d55e3dc8ef5e389"
  },
  {
    "url": "assets/js/25.687edc4c.js",
    "revision": "5fc86f07c4267cd587a54b63a04497ce"
  },
  {
    "url": "assets/js/26.f68da378.js",
    "revision": "05bf9523dfe45693449976ab82f6e708"
  },
  {
    "url": "assets/js/27.7110a9e4.js",
    "revision": "cf9ea77436efa46824767d09efd9044f"
  },
  {
    "url": "assets/js/28.125b5f6d.js",
    "revision": "821323af815e92d93add234935c1816a"
  },
  {
    "url": "assets/js/29.eb760670.js",
    "revision": "1eda27d87e31dffeef5d036f20110754"
  },
  {
    "url": "assets/js/3.69fa2474.js",
    "revision": "17d5338401f8717d103568563b3b95c3"
  },
  {
    "url": "assets/js/30.c9b011f7.js",
    "revision": "1dd3c08cf9ca55956830ccfa7730a6ee"
  },
  {
    "url": "assets/js/31.42b43d14.js",
    "revision": "a6eb70c601ef5cb99a52a8e3e71231f0"
  },
  {
    "url": "assets/js/32.e0532dd5.js",
    "revision": "98765189cd98ac3b061ce61f8c544bdb"
  },
  {
    "url": "assets/js/33.fe1af7ae.js",
    "revision": "0a6121e197d66a1fbee6612d731dde05"
  },
  {
    "url": "assets/js/34.ed99fe28.js",
    "revision": "2369ed7bfc8a6537a40bbe7e24755b1c"
  },
  {
    "url": "assets/js/35.803713a9.js",
    "revision": "9423b38851d90e803e37dc344aca75f5"
  },
  {
    "url": "assets/js/36.2413f966.js",
    "revision": "d24022c69b77b04b7edb72318d47068f"
  },
  {
    "url": "assets/js/37.4e7bd9bc.js",
    "revision": "223044cb9e8775f77255cf9369cb6acf"
  },
  {
    "url": "assets/js/38.c1c636e9.js",
    "revision": "573cefaf913f2a74fc869d1bb7f90189"
  },
  {
    "url": "assets/js/39.acb8457a.js",
    "revision": "66ccb0ab809b3d90865e98907affc7d5"
  },
  {
    "url": "assets/js/4.12c14676.js",
    "revision": "05151dc51f932b2c9ef71ed1f381cc57"
  },
  {
    "url": "assets/js/40.c9ae374e.js",
    "revision": "55c897725cc4c2769b3913b25fc8bdea"
  },
  {
    "url": "assets/js/41.6bce54b6.js",
    "revision": "a840a475dd3e09c118c2a4fb91a709a9"
  },
  {
    "url": "assets/js/42.ad715368.js",
    "revision": "71802b0b3b737ed7db24a54b1be34e16"
  },
  {
    "url": "assets/js/43.b212c397.js",
    "revision": "a4fddbbed32620b84bd8cb1b25f1eeb9"
  },
  {
    "url": "assets/js/44.8d3d2c0e.js",
    "revision": "d4928e65a77b43b6eb3474cfa4f4a3fe"
  },
  {
    "url": "assets/js/45.b6067e91.js",
    "revision": "66c1d469a188c4c0001607fb858629d5"
  },
  {
    "url": "assets/js/46.4f30eb0f.js",
    "revision": "b28f4bebd3c9cfbf177da7aa561c0f7f"
  },
  {
    "url": "assets/js/47.bd948b47.js",
    "revision": "30b1e6f14a97300d62d431782f7ac372"
  },
  {
    "url": "assets/js/5.704627a7.js",
    "revision": "126c4c13e963dd22adf9811d10b176b6"
  },
  {
    "url": "assets/js/6.4e81f8bd.js",
    "revision": "58c6ae3b80f404059e893532db06eee6"
  },
  {
    "url": "assets/js/7.8cd4b69a.js",
    "revision": "81d49ec0386fe742518f5c055777f4bc"
  },
  {
    "url": "assets/js/8.fcca711a.js",
    "revision": "7baa4b8c771eeb939fe934b9c5d6ef26"
  },
  {
    "url": "assets/js/9.ce744e03.js",
    "revision": "681e04e919541bc4178b19b2f3d8a8dc"
  },
  {
    "url": "assets/js/app.768b5891.js",
    "revision": "cc64e043eacb5011ec2a60219e746958"
  },
  {
    "url": "categories/BlockChain/index.html",
    "revision": "32ebf732eadc25808f08807fd5cc56eb"
  },
  {
    "url": "categories/index.html",
    "revision": "83df26ec13c07445393c156fa23d22d9"
  },
  {
    "url": "categories/交易/index.html",
    "revision": "3179796bda6c8287940ec5f637cc6ac7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bf05a90f1e2da7ea18d7a2b0c4a76fb0"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "6db0ae1fd8476c7b6bbab46aea2f60cb"
  },
  {
    "url": "categories/外语/index.html",
    "revision": "74fbac3b93303edad5504838d427b498"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cfbb79467f645895c11c3c931b388698"
  },
  {
    "url": "img/4ec4e5f0-947b-3abe-9e8b-47bad5b8cf1c.jpg",
    "revision": "bb87f71654723ad895fa663f73f988b9"
  },
  {
    "url": "img/5666c8e4-867a-3356-9708-6ba918e87853.jpg",
    "revision": "8ea7006c94abe02131fccb395d9b82dd"
  },
  {
    "url": "img/72c84642-4439-3120-9794-13892b29f00d.jpg",
    "revision": "ee5956c70fc130b28ed254f12a8c297b"
  },
  {
    "url": "img/766d39ee-fbf0-329e-8973-45e90625b579.jpg",
    "revision": "74a8a345f1e226513f3c5c0d4c8249bd"
  },
  {
    "url": "img/breast.jpeg",
    "revision": "1f4def4316a2f3983fc004a110fec0ee"
  },
  {
    "url": "img/bronya.png",
    "revision": "c83cfba7ac9acf9440d895671995014c"
  },
  {
    "url": "img/c33a5027-85d3-3eb4-a785-dd404f674baa.jpg",
    "revision": "ef1950ef5e1aec69e6f87b12e760c518"
  },
  {
    "url": "img/leadbg.jpeg",
    "revision": "19a22783f1e5140962be620551c353b6"
  },
  {
    "url": "img/other/4ec4e5f0-947b-3abe-9e8b-47bad5b8cf1c.jpg",
    "revision": "bb87f71654723ad895fa663f73f988b9"
  },
  {
    "url": "img/other/5666c8e4-867a-3356-9708-6ba918e87853.jpg",
    "revision": "8ea7006c94abe02131fccb395d9b82dd"
  },
  {
    "url": "img/other/72c84642-4439-3120-9794-13892b29f00d.jpg",
    "revision": "ee5956c70fc130b28ed254f12a8c297b"
  },
  {
    "url": "img/other/766d39ee-fbf0-329e-8973-45e90625b579.jpg",
    "revision": "74a8a345f1e226513f3c5c0d4c8249bd"
  },
  {
    "url": "img/other/c33a5027-85d3-3eb4-a785-dd404f674baa.jpg",
    "revision": "ef1950ef5e1aec69e6f87b12e760c518"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/xiaoge.png",
    "revision": "2974fb630d4ccd553cb8d63fcd7dcae2"
  },
  {
    "url": "img/个人微信二维码.jpeg",
    "revision": "8ee47e3147ecaf0081bb3d59cf3ad239"
  },
  {
    "url": "index.html",
    "revision": "08dac42dd3b3eaf1a8719438df22394a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "625d4582102a6ef3b22f883de9be21c3"
  },
  {
    "url": "other/friends.html",
    "revision": "a436f330f46aea96ac8d035caac84998"
  },
  {
    "url": "other/project.html",
    "revision": "df8bfe5bd62369374c7c66395dc2dd47"
  },
  {
    "url": "tag/contract/index.html",
    "revision": "43bdef40f89efdfa7707f204ebc54f0f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6519cd8b47519558a6a49a64d718b699"
  },
  {
    "url": "tag/index.html",
    "revision": "6bb8e36376f1cf96ec1441cafd06d5df"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "7ca5866994152ce870f1c7660ae49dce"
  },
  {
    "url": "tag/书/index.html",
    "revision": "21b09a9514be25e3c8a5ec4fdde1bcd9"
  },
  {
    "url": "tag/宏观/index.html",
    "revision": "119ab0492c94b5a0147764ba7c43ca70"
  },
  {
    "url": "tag/投资/index.html",
    "revision": "f595c56413df8eaaf3edb186c63f2c5b"
  },
  {
    "url": "tag/游戏/index.html",
    "revision": "ebb8e12973d1a2fa5e0856393fd0d0a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fe6d0646361b3d1096f6b86d605ee39"
  },
  {
    "url": "views/backend/数据库.html",
    "revision": "c909b1d191a7cb87fbff31527512a923"
  },
  {
    "url": "views/BlockChain/move.html",
    "revision": "ce4adade4af0d982a72a41b3efa677b3"
  },
  {
    "url": "views/BlockChain/rust.html",
    "revision": "8a8d59ef88847b5ccfe671e440847df0"
  },
  {
    "url": "views/BlockChain/solidity.html",
    "revision": "2e5c509bd69d4f23ff4b2c3c0a8e5018"
  },
  {
    "url": "views/frontend/blog.html",
    "revision": "0983b44786f2e4518ff971143f0d2b71"
  },
  {
    "url": "views/frontend/vuepress.html",
    "revision": "3b2861baee3d46304cbb6993d730ec21"
  },
  {
    "url": "views/frontend/前端大白话.html",
    "revision": "7d9d18ca0597994295fd71ac35a11888"
  },
  {
    "url": "views/index.html",
    "revision": "008aa2fdebd5be271a3d6422464c9eaa"
  },
  {
    "url": "views/language/日语.html",
    "revision": "5720c32ddc4e2da8967a293270462e06"
  },
  {
    "url": "views/language/英语.html",
    "revision": "fcc28d4293cddbdbcb9217ecf3970bae"
  },
  {
    "url": "views/life/enjoy.html",
    "revision": "efb0bbe94a494213ef77ba47b7e7065e"
  },
  {
    "url": "views/life/food.html",
    "revision": "065c09a6b693c584a8d0870cac57ce7e"
  },
  {
    "url": "views/life/game.html",
    "revision": "b70bdf531acf72a230714997c35052bc"
  },
  {
    "url": "views/life/mac.html",
    "revision": "2f0122d740cb4950b1512e00f0b37fb0"
  },
  {
    "url": "views/life/travel.html",
    "revision": "0031ea6b9d3a66442dd39c63f177ed0c"
  },
  {
    "url": "views/life/书籍.html",
    "revision": "9e3c3982cc19cdd3cdd228169f5a15b8"
  },
  {
    "url": "views/life/影视.html",
    "revision": "0cf34836f451d3d6c3a0fd1a64ebc19d"
  },
  {
    "url": "views/trade/世界观.html",
    "revision": "1eecc4128b86046cee83205ce8ee2393"
  },
  {
    "url": "views/trade/投资技术.html",
    "revision": "f91b59f28e3020f61e01c65d02c6c488"
  },
  {
    "url": "views/trade/投资观.html",
    "revision": "236d25816770de068d197e5d025ed1b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
