"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-sanity/dist/visual-editing/VisualEditing.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/VisualEditing.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _sanity_visual_editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/visual-editing */ \"(ssr)/./node_modules/@sanity/visual-editing/dist/_chunks/index-CCPqf31P.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction a(a) {\n    const { zIndex: s } = a, i = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_0__.useRouter)(), p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(i), [l, d] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        p.current = i;\n    }, [\n        i\n    ]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const r = (0,_sanity_visual_editing__WEBPACK_IMPORTED_MODULE_2__.e)({\n            zIndex: s,\n            history: {\n                subscribe: (t)=>(d(()=>t), ()=>d(void 0)),\n                update: (t)=>{\n                    switch(t.type){\n                        case \"push\":\n                            return p.current.push(t.url);\n                        case \"pop\":\n                            return p.current.back();\n                        case \"replace\":\n                            return p.current.replace(t.url);\n                        default:\n                            throw new Error(\"Unknown update type: \".concat(t.type));\n                    }\n                }\n            }\n        });\n        return ()=>r();\n    }, [\n        s\n    ]);\n    const f = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_0__.usePathname)(), h = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_0__.useSearchParams)();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        l && l({\n            type: \"push\",\n            url: \"\".concat(f).concat((null == h ? void 0 : h.size) ? \"?\".concat(h) : \"\")\n        });\n    }, [\n        l,\n        f,\n        h\n    ]), null;\n}\n //# sourceMappingURL=VisualEditing.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC92aXN1YWwtZWRpdGluZy9WaXN1YWxFZGl0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTtBQUFBLFNBQXdCQSxFQUFjQyxDQUFBQTtJQUM5QixRQUFBQyxRQUFDQSxDQUFBQSxFQUFBQSxHQUFVRCxHQUVYRSxJQUFTQyw2REFBQUEsSUFDVEMsSUFBWUMsNkNBQUFBLENBQU9ILElBQUFBLENBQ2xCSSxHQUFVQyxFQUFBQSxHQUFlQywrQ0FBQ0E7SUFFakNDLGdEQUFBQSxDQUFVO1FBQ1JMLEVBQVVNLE9BQUFBLEdBQVVSO0lBQUEsR0FDbkI7UUFBQ0E7S0FBQUEsR0FDSk8sZ0RBQUFBLENBQVU7UUFDUixNQUFNRSxJQUFVQyx5REFBQUEsQ0FBb0I7WUFDbENYLFFBQUFBO1lBQ0FZLFNBQVM7Z0JBQ1BDLFdBQVlDLENBQUFBLElBQ1ZSLENBQUFBLEVBQVksSUFBTVEsSUFDWCxJQUFNUixFQUFBQSxLQUFZO2dCQUUzQlMsUUFBU0EsQ0FBQUE7b0JBQ1AsT0FBUUEsRUFBT0MsSUFBQUE7d0JBQ2IsS0FBSzs0QkFDSCxPQUFPYixFQUFVTSxPQUFBQSxDQUFRUSxJQUFBQSxDQUFLRixFQUFPRyxHQUFBQTt3QkFDdkMsS0FBSzs0QkFDSSxPQUFBZixFQUFVTSxPQUFBQSxDQUFRVSxJQUFBQTt3QkFDM0IsS0FBSzs0QkFDSCxPQUFPaEIsRUFBVU0sT0FBQUEsQ0FBUVcsT0FBQUEsQ0FBUUwsRUFBT0csR0FBQUE7d0JBQzFDOzRCQUNFLE1BQU0sSUFBSUcsTUFBTSx3QkFBd0JDLE1BQUFBLENBQUFQLEVBQU9DLElBQUFBO29CQUFBQTtnQkFDbkQ7WUFBQTtRQUFBO1FBSU4sT0FBTyxJQUFNTjtJQUFRLEdBQ3BCO1FBQUNWO0tBQUFBO0lBRUosTUFBTXVCLElBQVdDLCtEQUFBQSxJQUNYQyxJQUFlQyxtRUFBQUE7SUFVZCxPQVRQbEIsZ0RBQUFBLENBQVU7UUFDSkgsS0FDT0EsRUFBQTtZQUNQVyxNQUFNO1lBQ05FLEtBQUssR0FBR0ksTUFBQUEsQ0FBQUMsR0FBV0QsTUFBQUEsQ0FBQUEsQ0FBYyxRQUFBRyxJQUFBQSxLQUFBLElBQUFBLEVBQUFFLElBQUFBLElBQU8sSUFBSUwsTUFBQUEsQ0FBaUJHLEtBQUE7UUFBQTtJQUVqRSxHQUNDO1FBQUNwQjtRQUFVa0I7UUFBVUU7S0FBQUEsR0FFakI7QUFDVDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5jb21tb25vcmctYmxvZy8uLi8uLi9zcmMvdmlzdWFsLWVkaXRpbmcvVmlzdWFsRWRpdGluZy50c3g/ODFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHtcbiAgZW5hYmxlVmlzdWFsRWRpdGluZyxcbiAgdHlwZSBIaXN0b3J5QWRhcHRlck5hdmlnYXRlLFxuICB0eXBlIFZpc3VhbEVkaXRpbmdPcHRpb25zLFxufSBmcm9tICdAc2FuaXR5L3Zpc3VhbC1lZGl0aW5nJ1xuaW1wb3J0IHt1c2VQYXRobmFtZSwgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXN9IGZyb20gJ25leHQvbmF2aWdhdGlvbi5qcydcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlzdWFsRWRpdGluZ1Byb3BzIGV4dGVuZHMgT21pdDxWaXN1YWxFZGl0aW5nT3B0aW9ucywgJ2hpc3RvcnknPiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBUaGUgaGlzdG95IGFkYXB0ZXIgaXMgYWxyZWFkeSBpbXBsZW1lbnRlZFxuICAgKi9cbiAgaGlzdG9yeT86IG5ldmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpc3VhbEVkaXRpbmcocHJvcHM6IFZpc3VhbEVkaXRpbmdQcm9wcyk6IG51bGwge1xuICBjb25zdCB7ekluZGV4fSA9IHByb3BzXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qgcm91dGVyUmVmID0gdXNlUmVmKHJvdXRlcilcbiAgY29uc3QgW25hdmlnYXRlLCBzZXROYXZpZ2F0ZV0gPSB1c2VTdGF0ZTxIaXN0b3J5QWRhcHRlck5hdmlnYXRlIHwgdW5kZWZpbmVkPigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXJSZWYuY3VycmVudCA9IHJvdXRlclxuICB9LCBbcm91dGVyXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlID0gZW5hYmxlVmlzdWFsRWRpdGluZyh7XG4gICAgICB6SW5kZXgsXG4gICAgICBoaXN0b3J5OiB7XG4gICAgICAgIHN1YnNjcmliZTogKF9uYXZpZ2F0ZSkgPT4ge1xuICAgICAgICAgIHNldE5hdmlnYXRlKCgpID0+IF9uYXZpZ2F0ZSlcbiAgICAgICAgICByZXR1cm4gKCkgPT4gc2V0TmF2aWdhdGUodW5kZWZpbmVkKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6ICh1cGRhdGUpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHVwZGF0ZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlclJlZi5jdXJyZW50LnB1c2godXBkYXRlLnVybClcbiAgICAgICAgICAgIGNhc2UgJ3BvcCc6XG4gICAgICAgICAgICAgIHJldHVybiByb3V0ZXJSZWYuY3VycmVudC5iYWNrKClcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICByZXR1cm4gcm91dGVyUmVmLmN1cnJlbnQucmVwbGFjZSh1cGRhdGUudXJsKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHVwZGF0ZSB0eXBlOiAke3VwZGF0ZS50eXBlfWApXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiAoKSA9PiBkaXNhYmxlKClcbiAgfSwgW3pJbmRleF0pXG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRlKSB7XG4gICAgICBuYXZpZ2F0ZSh7XG4gICAgICAgIHR5cGU6ICdwdXNoJyxcbiAgICAgICAgdXJsOiBgJHtwYXRobmFtZX0ke3NlYXJjaFBhcmFtcz8uc2l6ZSA/IGA/JHtzZWFyY2hQYXJhbXN9YCA6ICcnfWAsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW25hdmlnYXRlLCBwYXRobmFtZSwgc2VhcmNoUGFyYW1zXSlcblxuICByZXR1cm4gbnVsbFxufVxuIl0sIm5hbWVzIjpbIlZpc3VhbEVkaXRpbmciLCJwcm9wcyIsInpJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInJvdXRlclJlZiIsInVzZVJlZiIsIm5hdmlnYXRlIiwic2V0TmF2aWdhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJkaXNhYmxlIiwiZW5hYmxlVmlzdWFsRWRpdGluZyIsImhpc3RvcnkiLCJzdWJzY3JpYmUiLCJfbmF2aWdhdGUiLCJ1cGRhdGUiLCJ0eXBlIiwicHVzaCIsInVybCIsImJhY2siLCJyZXBsYWNlIiwiRXJyb3IiLCJjb25jYXQiLCJwYXRobmFtZSIsInVzZVBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwic2l6ZSIsImEiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/visual-editing/VisualEditing.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ t),\n/* harmony export */   unstable__adapter: () => (/* reexport safe */ _sanity_client__WEBPACK_IMPORTED_MODULE_0__.adapter),\n/* harmony export */   unstable__environment: () => (/* reexport safe */ _sanity_client__WEBPACK_IMPORTED_MODULE_0__.environment)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(rsc)/./node_modules/@sanity/preview-kit/dist/client/createClient.js\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"(rsc)/./node_modules/get-it/dist/index.react-server.js\");\nfunction t(t){let{studioUrl:r=process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,encodeSourceMap:n=!1}=t;return\"auto\"===n&&\"preview\"===process.env.NEXT_PUBLIC_VERCEL_ENV&&(n=!0),(0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_1__.createClient)({...t,studioUrl:r,encodeSourceMap:n})}\n//# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEgsY0FBYyxJQUFJLDJFQUEyRSxHQUFHLHlFQUF5RSx3RUFBQyxFQUFFLG1DQUFtQyxFQUE0QjtBQUN6VyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuY29tbW9ub3JnLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanM/MTZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7Y3JlYXRlQ2xpZW50IGFzIGV9ZnJvbVwiQHNhbml0eS9wcmV2aWV3LWtpdC9jbGllbnRcIjtleHBvcnR7dW5zdGFibGVfX2FkYXB0ZXIsdW5zdGFibGVfX2Vudmlyb25tZW50fWZyb21cIkBzYW5pdHkvY2xpZW50XCI7ZnVuY3Rpb24gdCh0KXtsZXR7c3R1ZGlvVXJsOnI9cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwsZW5jb2RlU291cmNlTWFwOm49ITF9PXQ7cmV0dXJuXCJhdXRvXCI9PT1uJiZcInByZXZpZXdcIj09PXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYmJihuPSEwKSxlKHsuLi50LHN0dWRpb1VybDpyLGVuY29kZVNvdXJjZU1hcDpufSl9ZXhwb3J0e3QgYXMgY3JlYXRlQ2xpZW50fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/client.js\n");

/***/ })

};
;