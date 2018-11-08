webpackJsonp(["not-found"],{

/***/ "inxR":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/default-not-found.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/default-not-found.js';var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ "KSGD");var _propTypes2=_interopRequireDefault(_propTypes);var _prefixUrl=__webpack_require__(/*! @mapbox/batfish/modules/prefix-url */ "QyVd");var _withLocation=__webpack_require__(/*! ./public/with-location */ "x/vf");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class DefaultNotFound extends _react2.default.Component{render(){return _react2.default.createElement('div',{style:{fontFamily:'Arial, sans-serif'},__source:{fileName:_jsxFileName,lineNumber:14},__self:this},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:15},__self:this},'Route not found'),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:16},__self:this},'Batfish can\'t find a route for',' ',_react2.default.createElement('span',{style:{color:'red',textDecoration:'underline'},__source:{fileName:_jsxFileName,lineNumber:18},__self:this},this.props.location.pathname),'.'),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:22},__self:this},_react2.default.createElement('a',{href:(0,_prefixUrl.prefixUrl)('/'),style:{fontWeight:'bold'},__source:{fileName:_jsxFileName,lineNumber:23},__self:this},'Go somewhere safe')),_react2.default.createElement('p',{style:{fontSize:'0.8em',marginTop:'2em'},__source:{fileName:_jsxFileName,lineNumber:27},__self:this},'This is Batfish\'s default ',_react2.default.createElement('em',{__source:{fileName:_jsxFileName,lineNumber:28},__self:this},'development only'),' 404 page.',_react2.default.createElement('br',{__source:{fileName:_jsxFileName,lineNumber:29},__self:this}),'It will not appear in production builds.'),_react2.default.createElement('div',{'aria-hidden':true,__source:{fileName:_jsxFileName,lineNumber:32},__self:this},_react2.default.createElement('code',{style:{fontSize:'3em'},__source:{fileName:_jsxFileName,lineNumber:33},__self:this},'(\u2022\u0301\uFE4F\u2022\u0300)')));}}DefaultNotFound.propTypes={location:_propTypes2.default.shape({pathname:_propTypes2.default.string.isRequired}).isRequired};exports.default=(0,_withLocation.withLocation)(DefaultNotFound);

/***/ }),

/***/ "rHgC":
/*!******************************!*\
  !*** ./_batfish_tmp/_404.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
let Page=__webpack_require__(/*! ./node_modules/@mapbox/batfish/dist/webpack/default-not-found.js */ "inxR");Page=Page.default||Page;module.exports={component:Page,props:{"frontMatter":{}}};

/***/ }),

/***/ "x/vf":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/batfish/dist/webpack/public/with-location.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/node_modules/@mapbox/batfish/dist/webpack/public/with-location.js';//      
exports.withLocation=withLocation;var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ "KSGD");var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function withLocation(Component){function WithLocation(props,context){return _react2.default.createElement(Component,_extends({location:context.location},props,{__source:{fileName:_jsxFileName,lineNumber:9},__self:this}));}WithLocation.contextTypes={location:_propTypes2.default.shape({pathname:_propTypes2.default.string.isRequired,hash:_propTypes2.default.string,search:_propTypes2.default.string}).isRequired};WithLocation.WrappedComponent=Component;return WithLocation;}

/***/ })

});
//# sourceMappingURL=not-found.chunk.js.map