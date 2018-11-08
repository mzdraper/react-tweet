webpackJsonp(["app"],{

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./node_modules/@mapbox/batfish/dist/webpack/render-batfish-app.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/render-batfish-app.js */"f42N");


/***/ }),

/***/ "3OFu":
/*!*****************************************!*\
  !*** ./_batfish_tmp/batfish-context.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});const batfishContext=exports.batfishContext={selectedConfig:{siteBasePath:'',siteOrigin:'',hijackLinks:true,manageScrollRestoration:true},routes:[{path:'/',getPage:()=>__webpack_require__.e/* import() */("home"/*! home */).then(__webpack_require__.bind(null, /*! ./_batfish_tmp/_.js */ "TcQS"))},{path:'/404/',getPage:()=>__webpack_require__.e/* import() */("not-found"/*! not-found */).then(__webpack_require__.bind(null, /*! ./_batfish_tmp/_404.js */ "rHgC")),is404:true}],notFoundRoute:{path:'/404/',getPage:()=>__webpack_require__.e/* import() */("not-found"/*! not-found */).then(__webpack_require__.bind(null, /*! ./_batfish_tmp/_404.js */ "rHgC")),is404:true}};

/***/ }),

/***/ "5e9p":
/*!**********************************************************!*\
  !*** ./node_modules/@mapbox/batfish/modules/route-to.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.routeToPrefixed=exports.routeTo=undefined;var _prefixUrl=__webpack_require__(/*! ./prefix-url */ "QyVd");var delayed=void 0;var routeToHandler=void 0;function routeTo(url){if(delayed){return;}if(!routeToHandler){delayed=url;return;}routeToHandler(url);}function routeToPrefixed(url){routeTo((0,_prefixUrl.prefixUrl)(url));}// Used by the Router to provide the function that actually does the routing.
// This slight awkwardness is just to enable the user to
// `require('@mapbox/batfish/modules/route-to')`.
routeTo._setRouteToHandler=function(handler){routeToHandler=handler;if(delayed){routeToHandler(delayed);delayed=null;}};// For tests.
routeTo._clearRouteToHandler=function(){routeToHandler=null;};exports.routeTo=routeTo;exports.routeToPrefixed=routeToPrefixed;

/***/ }),

/***/ "Abdp":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/modules/route-change-listeners.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invokeCallbacks=invokeCallbacks;exports.addRouteChangeStartListener=addRouteChangeStartListener;exports.removeRouteChangeStartListener=removeRouteChangeStartListener;exports.addRouteChangeEndListener=addRouteChangeEndListener;exports.removeRouteChangeEndListener=removeRouteChangeEndListener;exports._invokeRouteChangeStartCallbacks=_invokeRouteChangeStartCallbacks;exports._invokeRouteChangeEndCallbacks=_invokeRouteChangeEndCallbacks;var _prefixUrl=__webpack_require__(/*! ./prefix-url */ "QyVd");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ALL_PATHS='*';var startListeners=_defineProperty({},ALL_PATHS,[]);var endListeners=_defineProperty({},ALL_PATHS,[]);function normalizePathname(pathname){if(pathname!==ALL_PATHS&&!(0,_prefixUrl.isUrlPrefixed)(pathname)){pathname=(0,_prefixUrl.prefixUrl)(pathname);}return pathname.replace(/\/$/,'');}function addListener(pathnameOrListener,maybeListener,registry,remover){var listener=void 0;var pathname=void 0;if(typeof pathnameOrListener==='function'){listener=pathnameOrListener;pathname=ALL_PATHS;}else{listener=maybeListener;pathname=pathnameOrListener;}pathname=normalizePathname(pathname);if(!registry[pathname]){registry[pathname]=[];}registry[pathname].push(listener||noop);return function(){return remover(pathname,listener);};}function removeListener(pathnameOrListener,maybeListener,registry){var listener=void 0;var pathname=void 0;if(typeof pathnameOrListener==='function'||!pathnameOrListener){listener=pathnameOrListener;pathname=ALL_PATHS;}else{listener=maybeListener;pathname=pathnameOrListener;}pathname=normalizePathname(pathname);if(!listener){registry[pathname]=[];return;}var listeners=registry[pathname];for(var i=0,l=listeners.length;i<l;i++){if(listeners[i]===listener){listeners.splice(i,1);return;}}}function invokeCallbacks(nextPathname,registery){nextPathname=normalizePathname(nextPathname);var promisesToKeep=[Promise.resolve()];if(registery[nextPathname]){registery[nextPathname].forEach(function(callback){promisesToKeep.push(Promise.resolve(callback(nextPathname)));});}registery[ALL_PATHS].forEach(function(callback){promisesToKeep.push(Promise.resolve(callback(nextPathname)));});return Promise.all(promisesToKeep);}function addRouteChangeStartListener(pathnameOrListener,maybeListener){return addListener(pathnameOrListener,maybeListener,startListeners,removeRouteChangeStartListener);}function removeRouteChangeStartListener(pathnameOrListener,maybeListener){removeListener(pathnameOrListener,maybeListener,startListeners);}function addRouteChangeEndListener(pathnameOrListener,maybeListener){return addListener(pathnameOrListener,maybeListener,endListeners,removeRouteChangeEndListener);}function removeRouteChangeEndListener(pathnameOrListener,maybeListener){removeListener(pathnameOrListener,maybeListener,endListeners);}function _invokeRouteChangeStartCallbacks(nextPathname){return invokeCallbacks(nextPathname,startListeners);}function _invokeRouteChangeEndCallbacks(nextPathname){return invokeCallbacks(nextPathname,endListeners);}function noop(){}

/***/ }),

/***/ "BlTj":
/*!*****************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/get-window.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getWindow=getWindow;//      
function getWindow(){if(typeof window==='undefined'){throw new Error('Do not call getWindow in code that will run during the static build.');}return window;}

/***/ }),

/***/ "GtWy":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/change-page.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.changePage=changePage;var _scrollRestorer=__webpack_require__(/*! @mapbox/scroll-restorer */ "PI9A");var _scrollRestorer2=_interopRequireDefault(_scrollRestorer);var _findMatchingRoute=__webpack_require__(/*! ./find-matching-route */ "TnGC");var _scrollToFragment=__webpack_require__(/*! ./scroll-to-fragment */ "lbyH");var _routeChangeListeners=__webpack_require__(/*! @mapbox/batfish/modules/route-change-listeners */ "Abdp");var _getCurrentLocation=__webpack_require__(/*! ./get-current-location */ "NMXM");var _getWindow=__webpack_require__(/*! ./get-window */ "BlTj");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//      
function changePage(nextLocation,setRouterState){let options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};let onFinish=arguments[3];const win=(0,_getWindow.getWindow)();const matchingRoute=(0,_findMatchingRoute.findMatchingRoute)(nextLocation.pathname);const nextUrl=[nextLocation.pathname,nextLocation.hash,nextLocation.search].join('');// Call the change-start callbacks immediately, not after the page chunk
// has already been fetched.
const startChange=(0,_routeChangeListeners._invokeRouteChangeStartCallbacks)(nextLocation.pathname);return matchingRoute.getPage().then(pageModule=>{return startChange.then(()=>pageModule);}).then(pageModule=>{if(options.pushState){win.history.pushState({},null,nextUrl);}const nextState={path:matchingRoute.path,PageComponent:pageModule.component,pageProps:pageModule.props,location:(0,_getCurrentLocation.getCurrentLocation)()};setRouterState(nextState,()=>{if(nextLocation.hash){(0,_scrollToFragment.scrollToFragment)();}else if(options.scrollToTop){win.scrollTo(0,0);}else if(_scrollRestorer2.default.getSavedScroll()){_scrollRestorer2.default.restoreScroll();}if(onFinish)onFinish();(0,_routeChangeListeners._invokeRouteChangeEndCallbacks)(nextLocation.pathname);});});}

/***/ }),

/***/ "NMXM":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/get-current-location.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getCurrentLocation=getCurrentLocation;var _getWindow=__webpack_require__(/*! ./get-window */ "BlTj");function getCurrentLocation(){const win=(0,_getWindow.getWindow)();let pathname=win.location.pathname;if(!/\/$/.test(pathname))pathname+='/';return{pathname,hash:win.location.hash,search:win.location.search};}//

/***/ }),

/***/ "PAXK":
/*!********************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/empty-application-wrapper.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=EmptyApplicationWrapper;//      
// When the user's config does not provide applicationWrapperPath, we use this.
function EmptyApplicationWrapper(props){return props.children;}

/***/ }),

/***/ "Q3/6":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/query-selector-contains-node/index.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function querySelectorContainsNode(selector, node) {
  var candidates = document.querySelectorAll(selector);
  var i;
  var l = candidates.length;
  for (i = 0; i < l; i++) {
    if (candidates[i] === node || candidates[i].contains(node)) {
      return true;
    }
  }
  return false;
};


/***/ }),

/***/ "QyVd":
/*!************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/modules/prefix-url.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});// This weirdness, combined with the _configure function below, exists because
// we don't want a public module to import 'batfish-internal/context' directly.
// That will make any files that use it incapable of executing outside of
// Batfish (e.g. they won't work in unit tests).
var siteBasePath='';var siteOrigin=void 0;// Crude heuristic but probably ok.
function isAbsoluteUrl(url){return /^https?:/.test(url);}function prefixUrl(url){if(isAbsoluteUrl(url)){return url;}if(siteBasePath&&url.indexOf(siteBasePath)===0){return url;}if(!/^\//.test(url))url='/'+url;return siteBasePath+url;}function prefixUrlAbsolute(url){if(isAbsoluteUrl(url)){return url;}if(!siteOrigin){if(true){throw new Error('The siteOrigin property is not specified in your Batfish configuration. Unable to prefix with absolute path.');}return url;}if(!/^\//.test(url))url='/'+url;return siteOrigin+siteBasePath+url;}function isUrlPrefixed(url){return url.indexOf(siteBasePath)===0;}prefixUrl._configure=function(a,b){siteBasePath=a||'';siteOrigin=b;};exports.prefixUrl=prefixUrl;exports.prefixUrlAbsolute=prefixUrlAbsolute;exports.isUrlPrefixed=isUrlPrefixed;

/***/ }),

/***/ "TjUu":
/*!*************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/router.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.Router=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/router.js';//      
var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ "KSGD");var _propTypes2=_interopRequireDefault(_propTypes);var _linkHijacker=__webpack_require__(/*! @mapbox/link-hijacker */ "UARh");var _linkHijacker2=_interopRequireDefault(_linkHijacker);var _scrollRestorer=__webpack_require__(/*! @mapbox/scroll-restorer */ "PI9A");var _scrollRestorer2=_interopRequireDefault(_scrollRestorer);var _linkToLocation=__webpack_require__(/*! @mapbox/link-to-location */ "Ur14");var _linkToLocation2=_interopRequireDefault(_linkToLocation);var _querySelectorContainsNode=__webpack_require__(/*! @mapbox/query-selector-contains-node */ "Q3/6");var _querySelectorContainsNode2=_interopRequireDefault(_querySelectorContainsNode);var _context=__webpack_require__(/*! batfish-internal/context */ "3OFu");var _routeTo=__webpack_require__(/*! @mapbox/batfish/modules/route-to */ "5e9p");var _prefixUrl=__webpack_require__(/*! @mapbox/batfish/modules/prefix-url */ "QyVd");var _findMatchingRoute=__webpack_require__(/*! ./find-matching-route */ "TnGC");var _scrollToFragment=__webpack_require__(/*! ./scroll-to-fragment */ "lbyH");var _getWindow=__webpack_require__(/*! ./get-window */ "BlTj");var _changePage=__webpack_require__(/*! ./change-page */ "GtWy");var _getCurrentLocation=__webpack_require__(/*! ./get-current-location */ "NMXM");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _batfishContext$selec=_context.batfishContext.selectedConfig;const siteBasePath=_batfishContext$selec.siteBasePath,siteOrigin=_batfishContext$selec.siteOrigin,manageScrollRestoration=_batfishContext$selec.manageScrollRestoration,hijackLinks=_batfishContext$selec.hijackLinks;// See explanation for this weirdness in prefix-url.js.
// This happens outside the component lifecycle so it can be used during
// rendering of HTML.
_prefixUrl.prefixUrl._configure(siteBasePath,siteOrigin);class Router extends _react2.default.PureComponent{constructor(props){super(props);this.routeTo=input=>{const win=(0,_getWindow.getWindow)();const targetLocation=(0,_linkToLocation2.default)(input);if((0,_findMatchingRoute.findMatchingRoute)(targetLocation.pathname).is404){return win.location.assign(input);}(0,_changePage.changePage)(targetLocation,this.setState.bind(this),{pushState:true,scrollToTop:win.location.pathname!==targetLocation.pathname||!targetLocation.hash});};const location={pathname:this.props.startingPath};if(typeof window!=='undefined'){const win=(0,_getWindow.getWindow)();location.search=win.location.search;location.hash=win.location.hash;}this.state={path:this.props.startingPath,PageComponent:this.props.startingComponent,pageProps:this.props.startingProps,location};}getChildContext(){return{location:this.state.location};}componentDidMount(){if(manageScrollRestoration){_scrollRestorer2.default.start({autoRestore:false});}const win=(0,_getWindow.getWindow)();if(!win.location.hash&&manageScrollRestoration){_scrollRestorer2.default.restoreScroll();}else{(0,_scrollToFragment.scrollToFragment)();}_routeTo.routeTo._setRouteToHandler(this.routeTo);win.addEventListener('popstate',event=>{event.preventDefault();(0,_changePage.changePage)({pathname:win.location.pathname,search:win.location.search,hash:win.location.hash},this.setState.bind(this));});if(hijackLinks){_linkHijacker2.default.hijack({skipFilter:link=>(0,_querySelectorContainsNode2.default)('[data-batfish-no-hijack]',link)},this.routeTo);}this.setState({location:(0,_getCurrentLocation.getCurrentLocation)()});}// Converts input to a location object.
// If it matches a route, go there dynamically and scroll to the top of the viewport.
// If it doesn't match a route, go there non-dynamically.
render(){const PageComponent=this.state.PageComponent;if(!PageComponent)return null;return _react2.default.createElement(PageComponent,_extends({location:this.state.location},this.state.pageProps,{__source:{fileName:_jsxFileName,lineNumber:127},__self:this}));}}Router.childContextTypes={location:_propTypes2.default.shape({pathname:_propTypes2.default.string.isRequired,hash:_propTypes2.default.string,search:_propTypes2.default.string}).isRequired};exports.Router=Router;

/***/ }),

/***/ "TnGC":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/find-matching-route.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.findMatchingRoute=findMatchingRoute;var _context=__webpack_require__(/*! batfish-internal/context */ "3OFu");// Returns an array of regular expressions that are used to check whether a URL
// path matches one of the routes.
function createPathRegExps(routes){return routes.reduce((result,route)=>{// Pages with internal routing aren't just exact matches.
const ending=route.internalRouting?'(/.+)?$':'$';// ? because the last slash is optional
result[route.path]=new RegExp(`^${route.path.replace(/\//g,'[/]')}?${ending}`);return result;},{});}//      
let pathRegExpsCache;let urlPathsCache={};// Find the route data that matches a URL path.
//
// Returns the matching route, or the not-found route if no matching route exists.
function findMatchingRoute(urlPath,options){options=options||{};const useCache=options.useCache===undefined?true:options.useCache;if(useCache&&urlPathsCache[urlPath]){return urlPathsCache[urlPath];}let pathRegExps;if(useCache&&pathRegExpsCache){pathRegExps=pathRegExpsCache;}else{pathRegExps=createPathRegExps(_context.batfishContext.routes);pathRegExpsCache=pathRegExps;}let result;for(let i=0;i<_context.batfishContext.routes.length;i++){const route=_context.batfishContext.routes[i];if(pathRegExps[route.path].test(urlPath)){result=route;break;}}if(!result){result=_context.batfishContext.notFoundRoute;}urlPathsCache[urlPath]=result;return result;}

/***/ }),

/***/ "Ur14":
/*!********************************************************!*\
  !*** ./node_modules/@mapbox/link-to-location/index.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Convert a link (HTMLAnchorElement or URL) to an abbreviated Location object.
 *
 * @param {HTMLAnchorElement | string} input - Either an anchor node or a URL.
 * @return {Object} - An abbreviated Location object.
 */
module.exports = function (input) {
  var link = input;
  // Take advantage of the browser's built-in URL parsing by creating
  // an anchor and then reading its properties.
  if (typeof input === 'string') {
    // Remove credentials, which cause problems in IE11.
    // http://bit.ly/2rvtfN4
    input = input.replace(/^\S+?@/, '');

    link = document.createElement('a');
    link.href = input;
    // IE doesn't populate all link properties when setting href with a
    // relative URL. However, href will return an absolute URL which then can
    // be used on itself to populate these additional fields.
    // https://stackoverflow.com/a/13405933/2284669
    if (location.host === '') {
      location.href = location.href;
    }
  }

  return {
    pathname: link.pathname,
    hash: link.hash,
    search: link.search
  };
};


/***/ }),

/***/ "e080":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/batfish-app.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.BatfishApp=undefined;var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/batfish-app.js';//      
var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _router=__webpack_require__(/*! ./router */ "TjUu");var _applicationWrapper=__webpack_require__(/*! batfish-internal/application-wrapper */ "PAXK");var _applicationWrapper2=_interopRequireDefault(_applicationWrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class BatfishApp extends _react2.default.Component{shouldComponentUpdate(){return false;}render(){return _react2.default.createElement(_applicationWrapper2.default,{__source:{fileName:_jsxFileName,lineNumber:21},__self:this},_react2.default.createElement(_router.Router,{startingPath:this.props.startingPath,startingComponent:this.props.pageModule.component,startingProps:this.props.pageModule.props,__source:{fileName:_jsxFileName,lineNumber:22},__self:this}));}}exports.BatfishApp=BatfishApp;

/***/ }),

/***/ "f42N":
/*!*************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/render-batfish-app.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/render-batfish-app.js';//      
var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _findMatchingRoute=__webpack_require__(/*! ./find-matching-route */ "TnGC");var _renderAppIntoDom=__webpack_require__(/*! ./render-app-into-dom */ "pz/s");var _batfishApp=__webpack_require__(/*! ./batfish-app */ "e080");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// The initialization of any Batfish app.
// Get the current page and render it, wrapped in the user's ApplicationWrapper
// component.
const startingPath=window.location.pathname;const matchingRoute=(0,_findMatchingRoute.findMatchingRoute)(startingPath);matchingRoute.getPage().then(pageModule=>{(0,_renderAppIntoDom.renderAppIntoDom)(_react2.default.createElement(_batfishApp.BatfishApp,{startingPath:startingPath,pageModule:pageModule,__source:{fileName:_jsxFileName,lineNumber:15},__self:undefined}));});

/***/ }),

/***/ "lbyH":
/*!*************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/scroll-to-fragment.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.scrollToFragment=scrollToFragment;//      
// Check the current location for a hash, and if there is one try to scroll to it.
function scrollToFragment(){const fragment=window.location.hash;if(!fragment)return;const element=document.getElementById(fragment.replace('#',''));if(element){element.scrollIntoView();}}

/***/ }),

/***/ "pz/s":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/render-app-into-dom.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.renderAppIntoDom=renderAppIntoDom;var _reactDom=__webpack_require__(/*! react-dom */ "O27J");var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function renderAppIntoDom(AppElement){const container=document.getElementById('batfish-content');if(!container)return;// React 16 has ReactDOM.hydrate for hydrating server-rendered markdup.
const render= true?_reactDom2.default.render:_reactDom2.default.hydrate;render(AppElement,container);}//

/***/ })

},[0]);
//# sourceMappingURL=app.js.map