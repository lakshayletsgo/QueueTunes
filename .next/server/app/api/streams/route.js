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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var youtube_search_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! youtube-search-api */ \"(rsc)/./node_modules/youtube-search-api/index.js\");\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/utils */ \"(rsc)/./app/lib/utils.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n//@ts-expect-error This is to bypass youtube-search-api\n\n\n\nconst CreateStreamSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    creatorId: zod__WEBPACK_IMPORTED_MODULE_5__.z.string(),\n    url: zod__WEBPACK_IMPORTED_MODULE_5__.z.string()\n});\nconst MAX_QUEUE_LEN = 20;\nasync function POST(req) {\n    try {\n        const data = CreateStreamSchema.parse(await req.json());\n        const isYt = data.url.match(_app_lib_utils__WEBPACK_IMPORTED_MODULE_3__.YOUTUBE_REGEX);\n        if (!isYt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Wrong URL format\"\n            }, {\n                status: 411\n            });\n        }\n        const extractedId = data.url.split(\"?v=\")[1];\n        console.log(\"This is the extracted id: \" + extractedId);\n        const res = await youtube_search_api__WEBPACK_IMPORTED_MODULE_2__.GetVideoDetails(extractedId);\n        console.log(\"This is the response from the youtubesearchapi \");\n        console.log(res);\n        console.log(\"This is the res.thumbnails : \" + res.thumbnail);\n        const thumbnails = res.thumbnail.thumbnails;\n        // console.log(\"This is the res. : \"+res.thumbnail)\n        thumbnails.sort((a, b)=>a.width < b.width ? -1 : 1);\n        const existingActiveStream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.count({\n            where: {\n                userId: data.creatorId\n            }\n        });\n        if (existingActiveStream > MAX_QUEUE_LEN) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Already at the limit\"\n            }, {\n                status: 411\n            });\n        }\n        const stream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.create({\n            data: {\n                userId: data.creatorId,\n                url: data.url,\n                extractedId,\n                type: \"Youtube\",\n                title: res.title ?? \"Can't find video\",\n                smallImg: (thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url) ?? \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\",\n                bigImg: thumbnails[thumbnails.length - 1].url ?? \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            ...stream,\n            hasUpvoted: false,\n            upvotes: 0\n        });\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error while adding a stream\"\n        }, {\n            status: 411\n        });\n    }\n}\nasync function GET(req) {\n    const creatorId = req.nextUrl.searchParams.get(\"creatorId\");\n    console.log(\"Creator Id Is: \" + creatorId);\n    const sesssion = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)();\n    console.log(sesssion);\n    const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n        where: {\n            email: sesssion?.user?.email ?? \"\"\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Unauthenticated\"\n        }, {\n            status: 403\n        });\n    }\n    if (!creatorId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error\"\n        }, {\n            status: 411\n        });\n    }\n    const [stream, activeStream] = await Promise.all([\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findMany({\n            where: {\n                userId: creatorId,\n                played: false\n            },\n            include: {\n                _count: {\n                    select: {\n                        upvotes: true\n                    }\n                },\n                upvotes: {\n                    where: {\n                        userId: user.id\n                    }\n                }\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.findFirst({\n            where: {\n                userId: creatorId\n            },\n            include: {\n                stream: true\n            }\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        streams: stream.map(({ _count, ...rest })=>({\n                ...rest,\n                upvotes: _count.upvotes,\n                haveUpvoted: rest.upvotes.length ? true : false\n            })),\n        activeStream\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsT0FBTyxDQUFDSCxNQUFNLEdBQUMsT0FBSztZQUN6QztRQUNBYTtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWV1ZV9zY2hlZHVsZS8uL2FwcC9hcGkvc3RyZWFtcy9yb3V0ZS50cz9mNWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYUNsaWVudCB9IGZyb20gXCJAL2FwcC9saWIvZGJcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG4vL0B0cy1leHBlY3QtZXJyb3IgVGhpcyBpcyB0byBieXBhc3MgeW91dHViZS1zZWFyY2gtYXBpXHJcbmltcG9ydCB5b3V0dWJlc2VhcmNoYXBpIGZyb20gXCJ5b3V0dWJlLXNlYXJjaC1hcGlcIlxyXG5pbXBvcnQgeyBZT1VUVUJFX1JFR0VYIH0gZnJvbSBcIkAvYXBwL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBDcmVhdGVTdHJlYW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBjcmVhdG9ySWQ6ei5zdHJpbmcoKSxcclxuICAgIHVybDp6LnN0cmluZygpLFxyXG59KVxyXG5jb25zdCBNQVhfUVVFVUVfTEVOID0gMjBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOk5leHRSZXF1ZXN0KXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBkYXRhID0gQ3JlYXRlU3RyZWFtU2NoZW1hLnBhcnNlKGF3YWl0IHJlcS5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGlzWXQgPSBkYXRhLnVybC5tYXRjaChZT1VUVUJFX1JFR0VYKTtcclxuICAgICAgICBpZighaXNZdCl7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlwiV3JvbmcgVVJMIGZvcm1hdFwiXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOjQxMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdGVkSWQgPSBkYXRhLnVybC5zcGxpdChcIj92PVwiKVsxXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGV4dHJhY3RlZCBpZDogXCIrZXh0cmFjdGVkSWQpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZXNlYXJjaGFwaS5HZXRWaWRlb0RldGFpbHMoZXh0cmFjdGVkSWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSB5b3V0dWJlc2VhcmNoYXBpIFwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHJlcy50aHVtYm5haWxzIDogXCIrcmVzLnRodW1ibmFpbClcclxuICAgICAgICBjb25zdCB0aHVtYm5haWxzID0gcmVzLnRodW1ibmFpbC50aHVtYm5haWxzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSByZXMuIDogXCIrcmVzLnRodW1ibmFpbClcclxuXHJcbiAgICAgICAgdGh1bWJuYWlscy5zb3J0KChhOnt3aWR0aDpudW1iZXJ9LGI6e3dpZHRoOm51bWJlcn0pPT5hLndpZHRoPGIud2lkdGg/LTE6MSk7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdBY3RpdmVTdHJlYW0gPSBhd2FpdCBwcmlzbWFDbGllbnQuc3RyZWFtLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOmRhdGEuY3JlYXRvcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGV4aXN0aW5nQWN0aXZlU3RyZWFtPk1BWF9RVUVVRV9MRU4pe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIkFscmVhZHkgYXQgdGhlIGxpbWl0XCIsXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOjQxMVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtPWF3YWl0IHByaXNtYUNsaWVudC5zdHJlYW0uY3JlYXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOmRhdGEuY3JlYXRvcklkLFxyXG4gICAgICAgICAgICAgICAgdXJsOmRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdGVkSWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOlwiWW91dHViZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6cmVzLnRpdGxlPz9cIkNhbid0IGZpbmQgdmlkZW9cIixcclxuICAgICAgICAgICAgICAgIHNtYWxsSW1nOiAodGh1bWJuYWlscy5sZW5ndGg+MT90aHVtYm5haWxzW3RodW1ibmFpbHMubGVuZ3RoLTJdLnVybDp0aHVtYm5haWxzW3RodW1ibmFpbHMubGVuZ3RoLTFdLnVybCk/P1wiaHR0cHM6Ly9ibG9vZHktZGlzZ3VzdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvcGVubnl3aXNlLXNjYXJ5LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgYmlnSW1nOiB0aHVtYm5haWxzW3RodW1ibmFpbHMubGVuZ3RoLTFdLnVybD8/XCJodHRwczovL2Jsb29keS1kaXNndXN0aW5nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9wZW5ueXdpc2Utc2NhcnkuanBnXCJcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAuLi5zdHJlYW0sXHJcbiAgICAgICAgICAgIGhhc1Vwdm90ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHVwdm90ZXM6MCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTpcIkVycm9yIHdoaWxlIGFkZGluZyBhIHN0cmVhbVwiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHN0YXR1czo0MTEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTpOZXh0UmVxdWVzdCkge1xyXG4gICAgY29uc3QgY3JlYXRvcklkID0gcmVxLm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNyZWF0b3JJZFwiKVxyXG4gICAgY29uc29sZS5sb2coXCJDcmVhdG9yIElkIElzOiBcIitjcmVhdG9ySWQpXHJcbiAgICBjb25zdCBzZXNzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHNlc3NzaW9uKVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYUNsaWVudC51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICBlbWFpbDpzZXNzc2lvbj8udXNlcj8uZW1haWw/P1wiXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYoIXVzZXIpe1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XCJVbmF1dGhlbnRpY2F0ZWRcIlxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzdGF0dXM6NDAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKCFjcmVhdG9ySWQpe1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XCJFcnJvclwiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHN0YXR1czo0MTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3N0cmVhbSxhY3RpdmVTdHJlYW1dID0gYXdhaXQgUHJvbWlzZS5hbGwoIFthd2FpdCBwcmlzbWFDbGllbnQuc3RyZWFtLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIHVzZXJJZDpjcmVhdG9ySWQsXHJcbiAgICAgICAgICAgIHBsYXllZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZTp7XHJcbiAgICAgICAgICAgIF9jb3VudDp7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZXM6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cHZvdGVzOntcclxuICAgICAgICAgICAgICAgIHdoZXJlOntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOnVzZXIuaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLHByaXNtYUNsaWVudC5jdXJyZW50U3RyZWFtLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICB1c2VySWQ6Y3JlYXRvcklkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmNsdWRlOntcclxuICAgICAgICAgICAgc3RyZWFtOnRydWVcclxuICAgICAgICB9XHJcbiAgICB9KV0pXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICBzdHJlYW1zOnN0cmVhbS5tYXAoKHtfY291bnQsIC4uLnJlc3R9KT0+KHtcclxuICAgICAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICAgICAgdXB2b3RlczpfY291bnQudXB2b3RlcyxcclxuICAgICAgICAgICAgaGF2ZVVwdm90ZWQ6cmVzdC51cHZvdGVzLmxlbmd0aD90cnVlOmZhbHNlXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGFjdGl2ZVN0cmVhbVxyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6WyJwcmlzbWFDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJ6IiwieW91dHViZXNlYXJjaGFwaSIsIllPVVRVQkVfUkVHRVgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiQ3JlYXRlU3RyZWFtU2NoZW1hIiwib2JqZWN0IiwiY3JlYXRvcklkIiwic3RyaW5nIiwidXJsIiwiTUFYX1FVRVVFX0xFTiIsIlBPU1QiLCJyZXEiLCJkYXRhIiwicGFyc2UiLCJqc29uIiwiaXNZdCIsIm1hdGNoIiwibWVzc2FnZSIsInN0YXR1cyIsImV4dHJhY3RlZElkIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiR2V0VmlkZW9EZXRhaWxzIiwidGh1bWJuYWlsIiwidGh1bWJuYWlscyIsInNvcnQiLCJhIiwiYiIsIndpZHRoIiwiZXhpc3RpbmdBY3RpdmVTdHJlYW0iLCJzdHJlYW0iLCJjb3VudCIsIndoZXJlIiwidXNlcklkIiwiY3JlYXRlIiwidHlwZSIsInRpdGxlIiwic21hbGxJbWciLCJsZW5ndGgiLCJiaWdJbWciLCJoYXNVcHZvdGVkIiwidXB2b3RlcyIsImUiLCJHRVQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwic2Vzc3Npb24iLCJ1c2VyIiwiZmluZEZpcnN0IiwiZW1haWwiLCJhY3RpdmVTdHJlYW0iLCJQcm9taXNlIiwiYWxsIiwiZmluZE1hbnkiLCJwbGF5ZWQiLCJpbmNsdWRlIiwiX2NvdW50Iiwic2VsZWN0IiwiaWQiLCJjdXJyZW50U3RyZWFtIiwic3RyZWFtcyIsIm1hcCIsInJlc3QiLCJoYXZlVXB2b3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/streams/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/tailwind-merge","vendor-chunks/clsx","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/debug","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/has-flag","vendor-chunks/youtube-search-api","vendor-chunks/follow-redirects","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();