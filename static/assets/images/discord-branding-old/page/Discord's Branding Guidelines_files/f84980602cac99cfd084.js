(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[41],{1858:function(e,t,n){e.exports=n.p+"d24e290703f8b31b56744a69df613fcb.png"},1859:function(e,t,n){e.exports=n.p+"44a7840b2161275358742595c9257e76.png"},1860:function(e,t,n){e.exports=n.p+"3590df6f2ae2f7202dab15c0bd3aca9a.png"},1861:function(e,t,n){e.exports=n.p+"7fa2adf98f26db34178bb30a63dabe8c.png"},1862:function(e,t,n){e.exports=n.p+"d19290ba3158e138bb241ae669a3bc37.png"},1863:function(e,t,n){e.exports=n.p+"6bf3cf5d375d7561cb3b9bf74212ed45.png"},1864:function(e,t,n){e.exports=n.p+"e6d6b255259ac878d00819a9555072ad.png"},1865:function(e,t,n){e.exports=n.p+"10bb7b2e55f0a34f23d903121de6b9bc.png"},1866:function(e,t,n){e.exports=n.p+"02e75e392ab5d5a8ed5ab4f8fcae9c77.png"},1867:function(e,t,n){e.exports=n.p+"8d1d548a64761f0c5b1d7c9e00ae66a6.png"},1868:function(e,t,n){e.exports=n.p+"78cbfbf0381b8c7f5a192c4a46bd0b0e.png"},1869:function(e,t,n){e.exports=n.p+"cfc9643cb00e44fae64bfeda3556bfd9.png"},1870:function(e,t,n){e.exports=n.p+"08d0c70a708cd25acecb7a8b0cb0eb23.png"},1871:function(e,t,n){e.exports=n.p+"cbf50c2e3287d2118f741e827a3ddaf5.png"},1872:function(e,t,n){e.exports=n.p+"f23c5c28c4429691f7c54af93876d661.png"},1873:function(e,t,n){e.exports=n.p+"ab02db863b7edeaa46bf4cd49b6646a9.png"},1874:function(e,t,n){e.exports=n.p+"7eb9487d4dac00095f8ed2d2c80b21a8.png"},1875:function(e,t,n){e.exports=n.p+"c9f51873ae719a6b4b8c6724362e999e.png"},1876:function(e,t,n){e.exports=n.p+"fcdf14841cd468de3f43704be16fa303.png"},1877:function(e,t,n){e.exports=n.p+"894cceea2dd5b523936930d1d7e333c5.png"},1878:function(e,t,n){e.exports=n.p+"7beab7b17eaa9ff7ceed3e5b1af274c2.png"},1879:function(e,t,n){e.exports=n.p+"d5073ab2ca9ee7c06c3f4d761968ac44.png"},1880:function(e,t,n){e.exports=n.p+"64f37efd5319b9b581557604864f042a.png"},1881:function(e,t,n){e.exports=n.p+"2ac1239c26c4ae1d27817a9d7b85dc53.png"},1882:function(e,t,n){e.exports=n.p+"da07da4bde6f81f16366b62e8fcc90ec.png"},1883:function(e,t,n){e.exports=n.p+"8e1cf1f1cf2a1a917002b8b583270c32.png"},1884:function(e,t,n){e.exports=n.p+"d52ce383ca6d8eb53588bcc042574cae.png"},1885:function(e,t,n){e.exports=n.p+"b1309f8892f138383d8b0b6ff8e23463.png"},1886:function(e,t,n){e.exports=n.p+"b2da62f020089ccee92860e4defafdb4.png"},1887:function(e,t,n){e.exports=n.p+"4db0790f7a81e49025d7fbfb9aeb182c.png"},1897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClass=void 0;var r=n(1977).getClass;t.getClass=r},1977:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClass=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var f=a.reduce((function(e,t){return e+(0,r.upperCaseFirstChar)(t)}),""),u=""+t+f,l=e[u];if(null==l)return"";return l};var r=n(1979)},1979:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.upperCaseFirstChar=function(e){if(null==e)return"";return""+e.charAt(0).toUpperCase()+e.slice(1)},t.getAcronym=function(e){return null!=e?e.replace(/'s /g," ").replace(/\w+/g,(function(e){return e[0]})).replace(/\s/g,""):""},t.cssValueToNumber=function(e){var t=parseInt(e,10);return isNaN(t)?0:t},t.stripDiacritics=void 0;var r=/[\u0300-\u036f]/g;var a=null==String.prototype.normalize?function(e){return e}:function(e){return e.normalize("NFD").replace(r,"").normalize("NFC")};t.stripDiacritics=a},1991:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r;!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var f=r?Object.getOwnPropertyDescriptor(e,o):null;f&&(f.get||f.set)?Object.defineProperty(n,o,f):n[o]=e[o]}n.default=e,t&&t.set(e,n)}(n(4));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,f=arguments.length-3;if(t||0===f||(t={children:void 0}),1===f)t.children=a;else if(f>1){for(var u=new Array(f),l=0;l<f;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}t.default=function(e){var t=e.width,n=void 0===t?32:t,r=e.height,a=void 0===r?32:r,f=e.color,u=void 0===f?"currentColor":f;return o("svg",{width:n,height:a,viewBox:"0 0 32 32",fill:"none",className:e.className},void 0,o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z",fill:u,className:e.foreground}))}},2501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){switch(e){case o.default.WINDOWS:return a.Images.REFRESH_DOWNLOAD_WINDOWS;case o.default.MAC:return a.Images.REFRESH_DOWNLOAD_MAC;case o.default.ANDROID:return a.Images.REFRESH_DOWNLOAD_ANDROID;case o.default.IOS:return a.Images.REFRESH_DOWNLOAD_IOS;default:return a.Images.REFRESH_DOWNLOAD_LINUX}};var r,a=n(391),o=(r=n(70))&&r.__esModule?r:{default:r}},3246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;m(n(4));var r,a=n(26),o=v(n(70)),f=n(1833),u=n(1835),l=m(n(1832)),d=v(n(1895)),c=v(n(1843)),i=m(n(1844)),s=v(n(2501)),p=v(n(62)),b=v(n(1740));function v(e){return e&&e.__esModule?e:{default:e}}function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function y(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,f=arguments.length-3;if(t||0===f||(t={children:void 0}),1===f)t.children=a;else if(f>1){for(var u=new Array(f),l=0;l<f;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function O(){var e=(0,a.useStateFromStores)([o.default],(function(){return o.default.platform})),t=(0,d.default)(e,!1);return y(f.Grid,{className:b.default.outerContainer},void 0,y(i.default,{colorScheme:i.HeaderColorSchemes.WHITE}),y(f.Row,{className:b.default.container},void 0,y("div",{className:b.default.body},void 0,y("div",{className:b.default.text},void 0,y(u.H1,{},void 0,p.default.Messages.Download.HERO_TITLE),y(l.default,{className:b.default.subtitle,type:l.TextTypes.LARGE},void 0,p.default.Messages.Download.HERO_SUBTITLE)),y("div",{className:b.default.buttonContainer},void 0,y(c.default,{className:b.default.downloadButton,analyticsLocation:"Downloads Page"}),y(l.default,{className:b.default.infoText,type:l.TextTypes.SMALL},void 0,t.main.info))),y("div",{className:b.default.imageContainer},void 0,y("img",{className:b.default.image,src:(0,s.default)(e),alt:""}))))}O.displayName="Hero"},3247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=A;var r,a=w(n(4)),o=D(n(138)),f=n(26),u=D(n(70)),l=n(1834),d=n(1833),c=n(1835),i=D(n(1832)),s=n(1897),p=D(n(1991)),b=w(n(1895)),v=D(n(1900)),g=D(n(1899)),m=D(n(2501)),y=D(n(62)),O=D(n(1741));function D(e){return e&&e.__esModule?e:{default:e}}function _(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _=function(){return e},e}function w(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function N(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,f=arguments.length-3;if(t||0===f||(t={children:void 0}),1===f)t.children=a;else if(f>1){for(var u=new Array(f),l=0;l<f;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var h=[u.default.IOS,u.default.ANDROID,u.default.LINUX,u.default.WINDOWS,u.default.MAC];function M(e){return a.useMemo((function(){return h.filter((function(t){return t!==e}))}),[e])}function S(e){switch(e){case u.default.WINDOWS:return y.default.Messages.Download.WINDOWS;case u.default.MAC:return y.default.Messages.Download.MAC;case u.default.LINUX:return y.default.Messages.Download.LINUX;case u.default.ANDROID:return y.default.Messages.Download.ANDROID;case u.default.IOS:return y.default.Messages.Download.IOS;default:return"unknown FIXME"}}function P(e,t){var n=(0,b.getAppDetails)(e,t,!0);return n.main.hasPTBText?null==n.formats?[{key:t,name:S(t),link:n.url,onClick:function(){return(0,v.default)(t,!0,"Download Page",n.url)}}]:n.formats.map((function(e){var n=u.default.getDownloadLink(t,!0,e.value);return{key:""+t+e.label,name:S(t)+" "+e.label,link:n,onClick:function(){return(0,v.default)(t,!0,"Download Page",n)}}})):[]}function C(e){var t,n=e.className,r=e.platform,a=(0,b.default)(r);if(null!=a.formats){var f=a.formats.map((function(e){var t=u.default.getDownloadLink(r,!1,e.value);return{key:e.value,name:e.value,link:t,onClick:function(){return(0,v.default)(r,!1,"Download Page",t)}}}));t=N(g.default,{className:O.default.platformButton,items:f,color:l.ButtonColors.DARK,navId:r+"-dropdown"},void 0,y.default.Messages.Download.DOWNLOAD,N(p.default,{className:O.default.dropdownArrow,width:24,height:24}))}else t=N(l.LinkButton,{className:O.default.platformButton,color:l.ButtonColors.DARK,href:a.url,onClick:function(){return(0,v.default)(r,!1,"Download Page",a.url)},alt:a.other.header},void 0,y.default.Messages.Download.DOWNLOAD);return N("div",{className:(0,o.default)(O.default.card,n)},void 0,N("div",{className:O.default.cardTextContainer},void 0,N(c.H3,{className:O.default.platformName},void 0,S(r)),t),N("img",{className:O.default.platformImage,src:(0,m.default)(r),alt:""}))}function I(e){var t=e.current,n=M(t),r=(0,f.useStateFromStores)([u.default],(function(){return function(e,t,n){var r=P(e,t);return n.forEach((function(t){r=r.concat(P(e,t))})),r}(u.default,t,n)}),[t,n]);return N("div",{className:O.default.ptbCard},void 0,N(c.H3,{},void 0,y.default.Messages.Download.PUBLIC_TEST_BUILD_TITLE),N(i.default,{className:O.default.ptbSubtitle},void 0,y.default.Messages.Download.PUBLIC_TEST_BUILD_SUBTITLE),N(g.default,{color:l.ButtonColors.DARK,items:r,navId:"ptb-dropdown"},void 0,y.default.Messages.Download.PUBLIC_TEST_BUILD_DOWNLOAD,N(p.default,{className:O.default.dropdownArrow,width:24,height:24})))}function A(){var e=(0,f.useStateFromStores)([u.default],(function(){return u.default.platform})),t=M(e);return N(d.Grid,{className:O.default.container},void 0,N(d.Row,{},void 0,N("div",{className:O.default.cardContainer},void 0,t.map((function(e,t){return N(C,{className:(0,s.getClass)(O.default,"card"+t),platform:e},e)})),N(I,{current:e}))))}C.displayName="PlatformCard",I.displayName="PTBCard",A.displayName="OtherPlatforms"},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(4)),o=p(n(394)),f=n(391),u=n(140),l=p(n(1846)),d=p(n(1845)),c=p(n(3246)),i=p(n(3247)),s=p(n(62));function p(e){return e&&e.__esModule?e:{default:e}}function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function v(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,f=arguments.length-3;if(t||0===f||(t={children:void 0}),1===f)t.children=a;else if(f>1){for(var u=new Array(f),l=0;l<f;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var g=v(c.default,{}),m=v(i.default,{}),y=v(l.default,{});function O(){return v(d.default,{},void 0,a.createElement(o.default,(0,u.getMetadataRefresh)(s.default.Messages.Download,f.ImageMetaData.DOWNLOAD)),g,m,y)}O.displayName="Download"}}]);
//# sourceMappingURL=f84980602cac99cfd084.js.map