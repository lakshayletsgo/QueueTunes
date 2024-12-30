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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var youtube_search_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! youtube-search-api */ \"(rsc)/./node_modules/youtube-search-api/index.js\");\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/utils */ \"(rsc)/./app/lib/utils.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n//@ts-expect-error This is to bypass youtube-search-api\n\n\n\nconst CreateStreamSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    creatorId: zod__WEBPACK_IMPORTED_MODULE_5__.z.string(),\n    url: zod__WEBPACK_IMPORTED_MODULE_5__.z.string()\n});\nconst MAX_QUEUE_LEN = 20;\nasync function POST(req) {\n    try {\n        const data = CreateStreamSchema.parse(await req.json());\n        const isYt = data.url.match(_app_lib_utils__WEBPACK_IMPORTED_MODULE_3__.YOUTUBE_REGEX);\n        if (!isYt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Wrong URL format\"\n            }, {\n                status: 411\n            });\n        }\n        const extractedId = data.url.split(\"?v=\")[1];\n        const res = await youtube_search_api__WEBPACK_IMPORTED_MODULE_2__.GetVideoDetails(extractedId);\n        const thumbnails = res.thumbnail.thumbnails;\n        thumbnails.sort((a, b)=>a.width < b.width ? -1 : 1);\n        const existingActiveStream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.count({\n            where: {\n                userId: data.creatorId\n            }\n        });\n        if (existingActiveStream > MAX_QUEUE_LEN) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Already at the limit\"\n            }, {\n                status: 411\n            });\n        }\n        const stream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.create({\n            data: {\n                userId: data.creatorId,\n                url: data.url,\n                extractedId,\n                type: \"Youtube\",\n                title: res.title ?? \"Can't find video\",\n                smallImg: (thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url) ?? \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\",\n                bigImg: thumbnails[thumbnails.length - 1].url ?? \"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            ...stream,\n            hasUpvoted: false,\n            upvotes: 0\n        });\n    } catch (e) {\n        console.log(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error while adding a stream\"\n        }, {\n            status: 411\n        });\n    }\n}\nasync function GET(req) {\n    const creatorId = req.nextUrl.searchParams.get(\"creatorId\");\n    console.log(\"Creator Id Is: \" + creatorId);\n    const sesssion = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)();\n    console.log(sesssion);\n    const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n        where: {\n            email: sesssion?.user?.email ?? \"\"\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Unauthenticated\"\n        }, {\n            status: 403\n        });\n    }\n    if (!creatorId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Error\"\n        }, {\n            status: 411\n        });\n    }\n    const [stream, activeStream] = await Promise.all([\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findMany({\n            where: {\n                userId: creatorId,\n                played: false\n            },\n            include: {\n                _count: {\n                    select: {\n                        upvotes: true\n                    }\n                },\n                upvotes: {\n                    where: {\n                        userId: user.id\n                    }\n                }\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.findFirst({\n            where: {\n                userId: creatorId\n            },\n            include: {\n                stream: true\n            }\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        streams: stream.map(({ _count, ...rest })=>({\n                ...rest,\n                upvotes: _count.upvotes,\n                haveUpvoted: rest.upvotes.length ? true : false\n            })),\n        activeStream\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUNKO0lBQ0EsSUFBRyxDQUFDRixNQUFLO1FBQ0wsT0FBT25ELHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFDckJHLFNBQVE7UUFDWixHQUFFO1lBQ0VDLFFBQU87UUFDWDtJQUNKO0lBQ0EsSUFBRyxDQUFDWixXQUFVO1FBQ1YsT0FBT1AscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUNyQkcsU0FBUTtRQUNaLEdBQUU7WUFDRUMsUUFBTztRQUNYO0lBQ0o7SUFDQSxNQUFNLENBQUNZLFFBQU91QixhQUFhLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFFO1FBQUMsTUFBTXpELHFEQUFZQSxDQUFDZ0MsTUFBTSxDQUFDMEIsUUFBUSxDQUFDO1lBQ2pGeEIsT0FBTTtnQkFDRkMsUUFBTzNCO2dCQUNQbUQsUUFBTztZQUNYO1lBQ0FDLFNBQVE7Z0JBQ0pDLFFBQU87b0JBQ0hDLFFBQU87d0JBQ0huQixTQUFRO29CQUNaO2dCQUNKO2dCQUNBQSxTQUFRO29CQUNKVCxPQUFNO3dCQUVGQyxRQUFPaUIsS0FBS1csRUFBRTtvQkFDbEI7Z0JBQ0o7WUFDSjtRQUNKO1FBQUcvRCxxREFBWUEsQ0FBQ2dFLGFBQWEsQ0FBQ1gsU0FBUyxDQUFDO1lBQ3BDbkIsT0FBTTtnQkFDRkMsUUFBTzNCO1lBQ1g7WUFDQW9ELFNBQVE7Z0JBQ0o1QixRQUFPO1lBQ1g7UUFDSjtLQUFHO0lBRUgsT0FBTy9CLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7UUFDckJpRCxTQUFRakMsT0FBT2tDLEdBQUcsQ0FBQyxDQUFDLEVBQUNMLE1BQU0sRUFBRSxHQUFHTSxNQUFLLEdBQUk7Z0JBQ3JDLEdBQUdBLElBQUk7Z0JBQ1B4QixTQUFRa0IsT0FBT2xCLE9BQU87Z0JBQ3RCeUIsYUFBWUQsS0FBS3hCLE9BQU8sQ0FBQ0gsTUFBTSxHQUFDLE9BQUs7WUFDekM7UUFDQWU7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVldWVfc2NoZWR1bGUvLi9hcHAvYXBpL3N0cmVhbXMvcm91dGUudHM/ZjVkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWFDbGllbnQgfSBmcm9tIFwiQC9hcHAvbGliL2RiXCI7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuLy9AdHMtZXhwZWN0LWVycm9yIFRoaXMgaXMgdG8gYnlwYXNzIHlvdXR1YmUtc2VhcmNoLWFwaVxyXG5pbXBvcnQgeW91dHViZXNlYXJjaGFwaSBmcm9tIFwieW91dHViZS1zZWFyY2gtYXBpXCJcclxuaW1wb3J0IHsgWU9VVFVCRV9SRUdFWCB9IGZyb20gXCJAL2FwcC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ3JlYXRlU3RyZWFtU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgY3JlYXRvcklkOnouc3RyaW5nKCksXHJcbiAgICB1cmw6ei5zdHJpbmcoKSxcclxufSlcclxuY29uc3QgTUFYX1FVRVVFX0xFTiA9IDIwXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTpOZXh0UmVxdWVzdCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IENyZWF0ZVN0cmVhbVNjaGVtYS5wYXJzZShhd2FpdCByZXEuanNvbigpKTtcclxuICAgICAgICBjb25zdCBpc1l0ID0gZGF0YS51cmwubWF0Y2goWU9VVFVCRV9SRUdFWCk7XHJcbiAgICAgICAgaWYoIWlzWXQpe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIldyb25nIFVSTCBmb3JtYXRcIlxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czo0MTEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RlZElkID0gZGF0YS51cmwuc3BsaXQoXCI/dj1cIilbMV07XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZXNlYXJjaGFwaS5HZXRWaWRlb0RldGFpbHMoZXh0cmFjdGVkSWQpXHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlscyA9IHJlcy50aHVtYm5haWwudGh1bWJuYWlsc1xyXG4gICAgICAgIHRodW1ibmFpbHMuc29ydCgoYTp7d2lkdGg6bnVtYmVyfSxiOnt3aWR0aDpudW1iZXJ9KT0+YS53aWR0aDxiLndpZHRoPy0xOjEpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQWN0aXZlU3RyZWFtID0gYXdhaXQgcHJpc21hQ2xpZW50LnN0cmVhbS5jb3VudCh7XHJcbiAgICAgICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgICAgIHVzZXJJZDpkYXRhLmNyZWF0b3JJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihleGlzdGluZ0FjdGl2ZVN0cmVhbT5NQVhfUVVFVUVfTEVOKXtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XCJBbHJlYWR5IGF0IHRoZSBsaW1pdFwiLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czo0MTFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0cmVhbT1hd2FpdCBwcmlzbWFDbGllbnQuc3RyZWFtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIHVzZXJJZDpkYXRhLmNyZWF0b3JJZCxcclxuICAgICAgICAgICAgICAgIHVybDpkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgIGV4dHJhY3RlZElkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTpcIllvdXR1YmVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOnJlcy50aXRsZT8/XCJDYW4ndCBmaW5kIHZpZGVvXCIsXHJcbiAgICAgICAgICAgICAgICBzbWFsbEltZzogKHRodW1ibmFpbHMubGVuZ3RoPjE/dGh1bWJuYWlsc1t0aHVtYm5haWxzLmxlbmd0aC0yXS51cmw6dGh1bWJuYWlsc1t0aHVtYm5haWxzLmxlbmd0aC0xXS51cmwpPz9cImh0dHBzOi8vYmxvb2R5LWRpc2d1c3RpbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA4L3Blbm55d2lzZS1zY2FyeS5qcGdcIixcclxuICAgICAgICAgICAgICAgIGJpZ0ltZzogdGh1bWJuYWlsc1t0aHVtYm5haWxzLmxlbmd0aC0xXS51cmw/P1wiaHR0cHM6Ly9ibG9vZHktZGlzZ3VzdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvcGVubnl3aXNlLXNjYXJ5LmpwZ1wiXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgLi4uc3RyZWFtLFxyXG4gICAgICAgICAgICBoYXNVcHZvdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICB1cHZvdGVzOjAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XCJFcnJvciB3aGlsZSBhZGRpbmcgYSBzdHJlYW1cIlxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzdGF0dXM6NDExLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6TmV4dFJlcXVlc3QpIHtcclxuICAgIGNvbnN0IGNyZWF0b3JJZCA9IHJlcS5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjcmVhdG9ySWRcIilcclxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRvciBJZCBJczogXCIrY3JlYXRvcklkKVxyXG4gICAgY29uc3Qgc2Vzc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZXNzc2lvbilcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgZW1haWw6c2Vzc3Npb24/LnVzZXI/LmVtYWlsPz9cIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmKCF1c2VyKXtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOlwiVW5hdXRoZW50aWNhdGVkXCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3RhdHVzOjQwM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZighY3JlYXRvcklkKXtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOlwiRXJyb3JcIlxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzdGF0dXM6NDExXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IFtzdHJlYW0sYWN0aXZlU3RyZWFtXSA9IGF3YWl0IFByb21pc2UuYWxsKCBbYXdhaXQgcHJpc21hQ2xpZW50LnN0cmVhbS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICB1c2VySWQ6Y3JlYXRvcklkLFxyXG4gICAgICAgICAgICBwbGF5ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY2x1ZGU6e1xyXG4gICAgICAgICAgICBfY291bnQ6e1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0OntcclxuICAgICAgICAgICAgICAgICAgICB1cHZvdGVzOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXB2b3Rlczp7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTp7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDp1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSxwcmlzbWFDbGllbnQuY3VycmVudFN0cmVhbS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgdXNlcklkOmNyZWF0b3JJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZTp7XHJcbiAgICAgICAgICAgIHN0cmVhbTp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSldKVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgc3RyZWFtczpzdHJlYW0ubWFwKCh7X2NvdW50LCAuLi5yZXN0fSk9Pih7XHJcbiAgICAgICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgICAgIHVwdm90ZXM6X2NvdW50LnVwdm90ZXMsXHJcbiAgICAgICAgICAgIGhhdmVVcHZvdGVkOnJlc3QudXB2b3Rlcy5sZW5ndGg/dHJ1ZTpmYWxzZVxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBhY3RpdmVTdHJlYW1cclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOlsicHJpc21hQ2xpZW50IiwiTmV4dFJlc3BvbnNlIiwieiIsInlvdXR1YmVzZWFyY2hhcGkiLCJZT1VUVUJFX1JFR0VYIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkNyZWF0ZVN0cmVhbVNjaGVtYSIsIm9iamVjdCIsImNyZWF0b3JJZCIsInN0cmluZyIsInVybCIsIk1BWF9RVUVVRV9MRU4iLCJQT1NUIiwicmVxIiwiZGF0YSIsInBhcnNlIiwianNvbiIsImlzWXQiLCJtYXRjaCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJleHRyYWN0ZWRJZCIsInNwbGl0IiwicmVzIiwiR2V0VmlkZW9EZXRhaWxzIiwidGh1bWJuYWlscyIsInRodW1ibmFpbCIsInNvcnQiLCJhIiwiYiIsIndpZHRoIiwiZXhpc3RpbmdBY3RpdmVTdHJlYW0iLCJzdHJlYW0iLCJjb3VudCIsIndoZXJlIiwidXNlcklkIiwiY3JlYXRlIiwidHlwZSIsInRpdGxlIiwic21hbGxJbWciLCJsZW5ndGgiLCJiaWdJbWciLCJoYXNVcHZvdGVkIiwidXB2b3RlcyIsImUiLCJjb25zb2xlIiwibG9nIiwiR0VUIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlc3NzaW9uIiwidXNlciIsImZpbmRGaXJzdCIsImVtYWlsIiwiYWN0aXZlU3RyZWFtIiwiUHJvbWlzZSIsImFsbCIsImZpbmRNYW55IiwicGxheWVkIiwiaW5jbHVkZSIsIl9jb3VudCIsInNlbGVjdCIsImlkIiwiY3VycmVudFN0cmVhbSIsInN0cmVhbXMiLCJtYXAiLCJyZXN0IiwiaGF2ZVVwdm90ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/streams/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/tailwind-merge","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/clsx","vendor-chunks/has-flag","vendor-chunks/youtube-search-api","vendor-chunks/follow-redirects","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Froute&page=%2Fapi%2Fstreams%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Froute.ts&appDir=D%3A%5CQueue%20Platform%5Cqueue_schedule%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQueue%20Platform%5Cqueue_schedule&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();