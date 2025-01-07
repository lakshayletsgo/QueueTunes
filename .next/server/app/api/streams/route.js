"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/streams/route";
exports.ids = ["app/api/streams/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Queue_Platform_queue_schedule_app_api_streams_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/streams/route.ts */ \"(rsc)/./app/api/streams/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/streams/route\",\n        pathname: \"/api/streams\",\n        filename: \"route\",\n        bundlePath: \"app/api/streams/route\"\n    },\n    resolvedPagePath: \"D:\\\\Queue Platform\\\\queue_schedule\\\\app\\\\api\\\\streams\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Queue_Platform_queue_schedule_app_api_streams_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/streams/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJlYW1zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdHJlYW1zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3RyZWFtcyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUXVldWUlMjBQbGF0Zm9ybSU1Q3F1ZXVlX3NjaGVkdWxlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUXVldWUlMjBQbGF0Zm9ybSU1Q3F1ZXVlX3NjaGVkdWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVldWVfc2NoZWR1bGUvPzk4YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUXVldWUgUGxhdGZvcm1cXFxccXVldWVfc2NoZWR1bGVcXFxcYXBwXFxcXGFwaVxcXFxzdHJlYW1zXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdHJlYW1zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3RyZWFtc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3RyZWFtcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFF1ZXVlIFBsYXRmb3JtXFxcXHF1ZXVlX3NjaGVkdWxlXFxcXGFwcFxcXFxhcGlcXFxcc3RyZWFtc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3RyZWFtcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/streams/route.ts":
/*!**********************************!*\
  !*** ./app/api/streams/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var youtube_search_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! youtube-search-api */ \"(rsc)/./node_modules/youtube-search-api/index.js\");\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/utils */ \"(rsc)/./app/lib/utils.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n//@ts-expect-error This is to bypass youtube-search-api\n\n\n\nconst CreateStreamSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    creatorId: zod__WEBPACK_IMPORTED_MODULE_5__.z.string(),\n    url: zod__WEBPACK_IMPORTED_MODULE_5__.z.string()\n});\nconst MAX_QUEUE_LEN = 20;\n// let thumbnails = [\"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\",\"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\"]\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)();\n        const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n            where: {\n                email: session?.user?.email ?? \"\"\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Unauthenticated\"\n            }, {\n                status: 403\n            });\n        }\n        const data = CreateStreamSchema.parse(await req.json());\n        if (!data.url.trim) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"YouTube link cannot be empty\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(data);\n        const isYt = data.url.match(_app_lib_utils__WEBPACK_IMPORTED_MODULE_3__.YOUTUBE_REGEX);\n        if (!isYt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Wrong URL format\"\n            }, {\n                status: 411\n            });\n        }\n        const extractedId = data.url.split(\"?v=\")[1];\n        console.log(\"This is the extracted id: \" + extractedId);\n        const res = await youtube_search_api__WEBPACK_IMPORTED_MODULE_2__.GetVideoDetails(extractedId);\n        console.log(\"This is the response from the youtubesearchapi \");\n        console.log(res);\n        console.log(\"This is the res.thumbnails : \" + res.thumbnail);\n        let thumbnails = [];\n        if (res.thumbnail != undefined) {\n            thumbnails = res.thumbnail.thumbnails;\n            thumbnails.sort((a, b)=>a.width < b.width ? -1 : 1);\n        }\n        // console.log(\"This is the res. : \"+res.thumbnail)\n        const existingActiveStream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.count({\n            where: {\n                userId: data.creatorId\n            }\n        });\n        if (existingActiveStream > MAX_QUEUE_LEN) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Already at the limit\"\n            }, {\n                status: 411\n            });\n        }\n        const stream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.create({\n            data: {\n                userId: data.creatorId,\n                url: data.url,\n                extractedId: extractedId,\n                type: \"Youtube\",\n                title: res.title ?? \"Can't find video\",\n                smallImg: thumbnails.length > 0 ? (thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url) ?? \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\" : \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\",\n                bigImg: thumbnails.length > 0 ? thumbnails[thumbnails.length - 1].url ?? \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL7jwNO9j8GPlghW-v7x4ZGPZlNaxPkQ35A&s\" : \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL7jwNO9j8GPlghW-v7x4ZGPZlNaxPkQ35A&s\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            ...stream,\n            hasUpvoted: false,\n            upvotes: 0\n        });\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error while adding a stream\"\n        }, {\n            status: 411\n        });\n    }\n}\nasync function GET(req) {\n    const creatorId = req.nextUrl.searchParams.get(\"creatorId\");\n    console.log(\"Creator Id Is: \" + creatorId);\n    const sesssion = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)();\n    console.log(sesssion);\n    const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n        where: {\n            email: sesssion?.user?.email ?? \"\"\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Unauthenticated\"\n        }, {\n            status: 403\n        });\n    }\n    if (!creatorId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error\"\n        }, {\n            status: 411\n        });\n    }\n    const [stream, activeStream] = await Promise.all([\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findMany({\n            where: {\n                userId: creatorId,\n                played: false\n            },\n            include: {\n                _count: {\n                    select: {\n                        upvotes: true\n                    }\n                },\n                upvotes: {\n                    where: {\n                        userId: user.id\n                    }\n                }\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.findFirst({\n            where: {\n                userId: creatorId\n            },\n            include: {\n                stream: true\n            }\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        streams: stream.map(({ _count, ...rest })=>({\n                ...rest,\n                upvotes: _count.upvotes,\n                haveUpvoted: rest.upvotes.length ? true : false\n            })),\n        activeStream\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFFO1FBQUMsTUFBTTVELHFEQUFZQSxDQUFDeUMsTUFBTSxDQUFDb0IsUUFBUSxDQUFDO1lBQ2pGNUMsT0FBTTtnQkFDRjBCLFFBQU9uQztnQkFDUHNELFFBQU87WUFDWDtZQUNBQyxTQUFRO2dCQUNKQyxRQUFPO29CQUNIQyxRQUFPO3dCQUNIZCxTQUFRO29CQUNaO2dCQUNKO2dCQUNBQSxTQUFRO29CQUNKbEMsT0FBTTt3QkFFRjBCLFFBQU81QixLQUFLbUQsRUFBRTtvQkFDbEI7Z0JBQ0o7WUFDSjtRQUNKO1FBQUdsRSxxREFBWUEsQ0FBQ21FLGFBQWEsQ0FBQ25ELFNBQVMsQ0FBQztZQUNwQ0MsT0FBTTtnQkFDRjBCLFFBQU9uQztZQUNYO1lBQ0F1RCxTQUFRO2dCQUNKdEIsUUFBTztZQUNYO1FBQ0o7S0FBRztJQUVILE9BQU94QyxxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztRQUNyQmlELFNBQVEzQixPQUFPNEIsR0FBRyxDQUFDLENBQUMsRUFBQ0wsTUFBTSxFQUFFLEdBQUdNLE1BQUssR0FBSTtnQkFDckMsR0FBR0EsSUFBSTtnQkFDUG5CLFNBQVFhLE9BQU9iLE9BQU87Z0JBQ3RCb0IsYUFBWUQsS0FBS25CLE9BQU8sQ0FBQ0gsTUFBTSxHQUFDLE9BQUs7WUFDekM7UUFDQVU7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVldWVfc2NoZWR1bGUvLi9hcHAvYXBpL3N0cmVhbXMvcm91dGUudHM/ZjVkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWFDbGllbnQgfSBmcm9tIFwiQC9hcHAvbGliL2RiXCI7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuLy9AdHMtZXhwZWN0LWVycm9yIFRoaXMgaXMgdG8gYnlwYXNzIHlvdXR1YmUtc2VhcmNoLWFwaVxyXG5pbXBvcnQgeW91dHViZXNlYXJjaGFwaSBmcm9tIFwieW91dHViZS1zZWFyY2gtYXBpXCJcclxuaW1wb3J0IHsgWU9VVFVCRV9SRUdFWCB9IGZyb20gXCJAL2FwcC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ3JlYXRlU3RyZWFtU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgY3JlYXRvcklkOnouc3RyaW5nKCksXHJcbiAgICB1cmw6ei5zdHJpbmcoKSxcclxufSlcclxuY29uc3QgTUFYX1FVRVVFX0xFTiA9IDIwXHJcbi8vIGxldCB0aHVtYm5haWxzID0gW1wiaHR0cHM6Ly9ibG9vZHktZGlzZ3VzdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvcGVubnl3aXNlLXNjYXJ5LmpwZ1wiLFwiaHR0cHM6Ly9ibG9vZHktZGlzZ3VzdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvcGVubnl3aXNlLXNjYXJ5LmpwZ1wiXVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6TmV4dFJlcXVlc3Qpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYUNsaWVudC51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwgPz8gXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmF1dGhlbnRpY2F0ZWRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwM1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IENyZWF0ZVN0cmVhbVNjaGVtYS5wYXJzZShhd2FpdCByZXEuanNvbigpKTtcclxuICAgICAgICBpZighZGF0YS51cmwudHJpbSl7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdVR1YmUgbGluayBjYW5ub3QgYmUgZW1wdHlcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCBpc1l0ID0gZGF0YS51cmwubWF0Y2goWU9VVFVCRV9SRUdFWCk7XHJcbiAgICAgICAgaWYoIWlzWXQpe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIldyb25nIFVSTCBmb3JtYXRcIlxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czo0MTEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RlZElkID0gZGF0YS51cmwuc3BsaXQoXCI/dj1cIilbMV07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBleHRyYWN0ZWQgaWQ6IFwiK2V4dHJhY3RlZElkKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHlvdXR1YmVzZWFyY2hhcGkuR2V0VmlkZW9EZXRhaWxzKGV4dHJhY3RlZElkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgeW91dHViZXNlYXJjaGFwaSBcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSByZXMudGh1bWJuYWlscyA6IFwiK3Jlcy50aHVtYm5haWwpXHJcbiAgICAgICAgbGV0IHRodW1ibmFpbHM9W107XHJcbiAgICAgICAgaWYocmVzLnRodW1ibmFpbCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgIHRodW1ibmFpbHMgPSByZXMudGh1bWJuYWlsLnRodW1ibmFpbHNcclxuXHJcbiAgICAgICAgICAgICB0aHVtYm5haWxzLnNvcnQoKGE6e3dpZHRoOm51bWJlcn0sYjp7d2lkdGg6bnVtYmVyfSk9PmEud2lkdGg8Yi53aWR0aD8tMToxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSByZXMuIDogXCIrcmVzLnRodW1ibmFpbClcclxuXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdBY3RpdmVTdHJlYW0gPSBhd2FpdCBwcmlzbWFDbGllbnQuc3RyZWFtLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOmRhdGEuY3JlYXRvcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGV4aXN0aW5nQWN0aXZlU3RyZWFtPk1BWF9RVUVVRV9MRU4pe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIkFscmVhZHkgYXQgdGhlIGxpbWl0XCIsXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOjQxMVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtPWF3YWl0IHByaXNtYUNsaWVudC5zdHJlYW0uY3JlYXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOmRhdGEuY3JlYXRvcklkLFxyXG4gICAgICAgICAgICAgICAgdXJsOmRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdGVkSWQ6ZXh0cmFjdGVkSWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOlwiWW91dHViZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6cmVzLnRpdGxlPz9cIkNhbid0IGZpbmQgdmlkZW9cIixcclxuICAgICAgICAgICAgICAgIHNtYWxsSW1nOiB0aHVtYm5haWxzLmxlbmd0aD4wPygodGh1bWJuYWlscy5sZW5ndGg+MT90aHVtYm5haWxzW3RodW1ibmFpbHMubGVuZ3RoLTJdLnVybDp0aHVtYm5haWxzW3RodW1ibmFpbHMubGVuZ3RoLTFdLnVybCk/P1wiaHR0cHM6Ly9ibG9vZHktZGlzZ3VzdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvcGVubnl3aXNlLXNjYXJ5LmpwZ1wiKTpcImh0dHBzOi8vYmxvb2R5LWRpc2d1c3RpbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA4L3Blbm55d2lzZS1zY2FyeS5qcGdcIixcclxuICAgICAgICAgICAgICAgIGJpZ0ltZzogdGh1bWJuYWlscy5sZW5ndGg+MD8odGh1bWJuYWlsc1t0aHVtYm5haWxzLmxlbmd0aC0xXS51cmw/P1wiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGhMN2p3Tk85ajhHUGxnaFctdjd4NFpHUFpsTmF4UGtRMzVBJnNcIik6XCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUaEw3andOTzlqOEdQbGdoVy12N3g0WkdQWmxOYXhQa1EzNUEmc1wiLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIC4uLnN0cmVhbSxcclxuICAgICAgICAgICAgaGFzVXB2b3RlZDpmYWxzZSxcclxuICAgICAgICAgICAgdXB2b3RlczowLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOlwiRXJyb3Igd2hpbGUgYWRkaW5nIGEgc3RyZWFtXCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3RhdHVzOjQxMSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOk5leHRSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCBjcmVhdG9ySWQgPSByZXEubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY3JlYXRvcklkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0b3IgSWQgSXM6IFwiK2NyZWF0b3JJZClcclxuICAgIGNvbnN0IHNlc3NzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xyXG4gICAgY29uc29sZS5sb2coc2Vzc3Npb24pXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIGVtYWlsOnNlc3NzaW9uPy51c2VyPy5lbWFpbD8/XCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZighdXNlcil7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTpcIlVuYXV0aGVudGljYXRlZFwiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHN0YXR1czo0MDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoIWNyZWF0b3JJZCl7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTpcIkVycm9yXCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3RhdHVzOjQxMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBbc3RyZWFtLGFjdGl2ZVN0cmVhbV0gPSBhd2FpdCBQcm9taXNlLmFsbCggW2F3YWl0IHByaXNtYUNsaWVudC5zdHJlYW0uZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgdXNlcklkOmNyZWF0b3JJZCxcclxuICAgICAgICAgICAgcGxheWVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmNsdWRlOntcclxuICAgICAgICAgICAgX2NvdW50OntcclxuICAgICAgICAgICAgICAgIHNlbGVjdDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXB2b3Rlczp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwdm90ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6dXNlci5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkscHJpc21hQ2xpZW50LmN1cnJlbnRTdHJlYW0uZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIHVzZXJJZDpjcmVhdG9ySWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY2x1ZGU6e1xyXG4gICAgICAgICAgICBzdHJlYW06dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgIHN0cmVhbXM6c3RyZWFtLm1hcCgoe19jb3VudCwgLi4ucmVzdH0pPT4oe1xyXG4gICAgICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgICAgICB1cHZvdGVzOl9jb3VudC51cHZvdGVzLFxyXG4gICAgICAgICAgICBoYXZlVXB2b3RlZDpyZXN0LnVwdm90ZXMubGVuZ3RoP3RydWU6ZmFsc2VcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgYWN0aXZlU3RyZWFtXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbInByaXNtYUNsaWVudCIsIk5leHRSZXNwb25zZSIsInoiLCJ5b3V0dWJlc2VhcmNoYXBpIiwiWU9VVFVCRV9SRUdFWCIsImdldFNlcnZlclNlc3Npb24iLCJDcmVhdGVTdHJlYW1TY2hlbWEiLCJvYmplY3QiLCJjcmVhdG9ySWQiLCJzdHJpbmciLCJ1cmwiLCJNQVhfUVVFVUVfTEVOIiwiUE9TVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJlbWFpbCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiZGF0YSIsInBhcnNlIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJpc1l0IiwibWF0Y2giLCJleHRyYWN0ZWRJZCIsInNwbGl0IiwicmVzIiwiR2V0VmlkZW9EZXRhaWxzIiwidGh1bWJuYWlsIiwidGh1bWJuYWlscyIsInVuZGVmaW5lZCIsInNvcnQiLCJhIiwiYiIsIndpZHRoIiwiZXhpc3RpbmdBY3RpdmVTdHJlYW0iLCJzdHJlYW0iLCJjb3VudCIsInVzZXJJZCIsImNyZWF0ZSIsInR5cGUiLCJ0aXRsZSIsInNtYWxsSW1nIiwibGVuZ3RoIiwiYmlnSW1nIiwiaGFzVXB2b3RlZCIsInVwdm90ZXMiLCJlIiwiR0VUIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlc3NzaW9uIiwiYWN0aXZlU3RyZWFtIiwiUHJvbWlzZSIsImFsbCIsImZpbmRNYW55IiwicGxheWVkIiwiaW5jbHVkZSIsIl9jb3VudCIsInNlbGVjdCIsImlkIiwiY3VycmVudFN0cmVhbSIsInN0cmVhbXMiLCJtYXAiLCJyZXN0IiwiaGF2ZVVwdm90ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/streams/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismaClient: () => (/* binding */ prismaClient)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClient = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxlQUFlLElBQUlELHdEQUFZQSxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVldWVfc2NoZWR1bGUvLi9hcHAvbGliL2RiLnRzPzU4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hQ2xpZW50ID0gbmV3IFByaXNtYUNsaWVudCgpIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/utils.ts":
/*!**************************!*\
  !*** ./app/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   YOUTUBE_REGEX: () => (/* binding */ YOUTUBE_REGEX),\n/* harmony export */   cn: () => (/* binding */ cn)\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(rsc)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"(rsc)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n\n\nconst YOUTUBE_REGEX = /^(?:(?:https?:)?\\/\\/)?(?:www\\.)?(?:m\\.)?(?:youtu(?:be)?\\.com\\/(?:v\\/|embed\\/|watch(?:\\/|\\?v=))|youtu\\.be\\/)((?:\\w|-){11})(?:\\S+)?$/;\nfunction cn(...inputs) {\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3V0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDSjtBQUVqQyxNQUFNRSxnQkFBZ0IscUlBQXFJO0FBRTNKLFNBQVNDLEdBQUcsR0FBR0MsTUFBb0I7SUFDeEMsT0FBT0gsdURBQU9BLENBQUNELDBDQUFJQSxDQUFDSTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXVlX3NjaGVkdWxlLy4vYXBwL2xpYi91dGlscy50cz9jZDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgQ2xhc3NWYWx1ZSwgY2xzeCB9IGZyb20gXCJjbHN4XCJcclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiXHJcblxyXG5leHBvcnQgY29uc3QgWU9VVFVCRV9SRUdFWCA9IC9eKD86KD86aHR0cHM/Oik/XFwvXFwvKT8oPzp3d3dcXC4pPyg/Om1cXC4pPyg/OnlvdXR1KD86YmUpP1xcLmNvbVxcLyg/OnZcXC98ZW1iZWRcXC98d2F0Y2goPzpcXC98XFw/dj0pKXx5b3V0dVxcLmJlXFwvKSgoPzpcXHd8LSl7MTF9KSg/OlxcUyspPyQvO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XHJcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKVxyXG59Il0sIm5hbWVzIjpbImNsc3giLCJ0d01lcmdlIiwiWU9VVFVCRV9SRUdFWCIsImNuIiwiaW5wdXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/utils.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/tailwind-merge","vendor-chunks/@babel","vendor-chunks/clsx","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/jose","vendor-chunks/youtube-search-api","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/follow-redirects","vendor-chunks/zod","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();