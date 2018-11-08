webpackJsonp(["home"],{

/***/ "+E39":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZBp":
/*!*****************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popover = __webpack_require__(/*! ./popover */ "p06+");

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _popover2.default;

/***/ }),

/***/ "+ZMJ":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "+tPU":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "xGkn");
var global = __webpack_require__(/*! ./_global */ "7KvD");
var hide = __webpack_require__(/*! ./_hide */ "hJx8");
var Iterators = __webpack_require__(/*! ./_iterators */ "/bQp");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "/bQp":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "/n6Q":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "zQR9");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "+tPU");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "Kh4W").f('iterator');


/***/ }),

/***/ "04qB":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/src/pages/index.js';// internal dependencies
var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _loadMapboxAssemblyJs=__webpack_require__(/*! @mapbox/mapbox-batfish-helpers/browser/load-mapbox-assembly-js */ "kZVO");var _loadMapboxAssemblyJs2=_interopRequireDefault(_loadMapboxAssemblyJs);var _box=__webpack_require__(/*! ../components/box */ "yfhn");var _box2=_interopRequireDefault(_box);var _textbox=__webpack_require__(/*! ../components/textbox */ "tHMe");var _textbox2=_interopRequireDefault(_textbox);var _username=__webpack_require__(/*! ../components/username */ "qKe3");var _username2=_interopRequireDefault(_username);var _button=__webpack_require__(/*! ../components/button */ "p/S3");var _button2=_interopRequireDefault(_button);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class App extends _react2.default.PureComponent{componentDidMount(){(0,_loadMapboxAssemblyJs2.default)();}render(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:18},__self:this},_react2.default.createElement('div',{className:'flex-parent flex-parent--center-main flex-parent--center-cross viewport-full relative',__source:{fileName:_jsxFileName,lineNumber:19},__self:this},_react2.default.createElement(_box2.default,{__source:{fileName:_jsxFileName,lineNumber:20},__self:this},_react2.default.createElement(_username2.default,{__source:{fileName:_jsxFileName,lineNumber:21},__self:this}),_react2.default.createElement(_textbox2.default,{__source:{fileName:_jsxFileName,lineNumber:22},__self:this}),_react2.default.createElement(_button2.default,{__source:{fileName:_jsxFileName,lineNumber:23},__self:this}))));}}exports.default=App;

/***/ }),

/***/ "06OY":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "3Eo+")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
var has = __webpack_require__(/*! ./_has */ "D2L2");
var setDesc = __webpack_require__(/*! ./_object-dp */ "evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "0Orf":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node === this.doc.documentElement) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "1kS7":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2IY5":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/calculate-position-context.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePositionContext;

var _getWindow = __webpack_require__(/*! ../utils/get-window */ "mXZ2");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _constants = __webpack_require__(/*! ./constants */ "PYZJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapPlacementToPointerDirection = {};
mapPlacementToPointerDirection[_constants.PLACEMENT_TOP] = _constants.POINTER_DIRECTION_DOWNWARD;
mapPlacementToPointerDirection[_constants.PLACEMENT_BOTTOM] = _constants.POINTER_DIRECTION_UPWARD;
mapPlacementToPointerDirection[_constants.PLACEMENT_LEFT] = _constants.POINTER_DIRECTION_RIGHTWARD;
mapPlacementToPointerDirection[_constants.PLACEMENT_RIGHT] = _constants.POINTER_DIRECTION_LEFTWARD;

/**
 * @typedef {Object} PopoverPositionContext
 * @property {number} offsetFromEdge
 * @property {number} offsetFromAnchor
 * @property {number} availableWidth
 * @property {number} availableHeight
 * @property {number} documentTopOffset
 * @property {number} topBoundary
 * @property {number} bottomBoundary
 * @property {number} anchorRect
 * @property {number} bodyElementRect
 * @property {number} bodyElementWidthWithoutPadding
 * @property {number} bodyElementHeightWithoutPadding
 * @property {number} anchorAbsoluteTop
 * @property {number} anchorAbsoluteBottom
 * @property {number} anchorHorizontalCenter
 * @property {number} anchorVerticalCenter
 * @property {number} maxLeftOffset
 * @property {number} maxWidth
 * @property {number} maxHeight
 */

/**
 * @param {Object} options - See definition in calculatePosition.
 * @return {PopoverPositionContext}
 */
function calculatePositionContext(options) {
  var context = {};
  var win = (0, _getWindow2.default)();
  var docEl = win.document.documentElement;
  context.scrollY = win.pageYOffset;

  var anchor = options.getAnchorElement();
  if (!anchor) throw new Error('No anchor element provided');
  var containingElementRect = options.getContainingElement ? options.getContainingElement().getBoundingClientRect() : null;
  context.offsetFromEdge = options.offsetFromEdge !== undefined ? options.offsetFromEdge : containingElementRect ? 0 : 5;
  context.bodyOffsetFromAnchor = options.offsetFromAnchor + options.pointerAltitude;
  context.availableWidth = docEl.scrollWidth;

  // If the document element's top position has been manipulated, we'll need to adjust accordingly
  context.documentTopOffset = 0;
  var documentPosition = docEl.style.position;
  if (documentPosition === 'fixed' || documentPosition === 'absolute') {
    context.documentTopOffset = parseFloat(docEl.style.top);
  }

  context.availableHeight;
  if (options.containWithinViewport) {
    context.availableHeight = win.innerHeight;
  } else {
    context.availableHeight = docEl.scrollHeight;
  }

  context.topBoundary;
  if (containingElementRect) {
    context.topBoundary = containingElementRect.top + context.scrollY + context.offsetFromEdge;
  } else if (options.containWithinViewport === true) {
    context.topBoundary = context.scrollY + context.offsetFromEdge;
  } else {
    context.topBoundary = context.offsetFromEdge;
  }

  context.bottomBoundary;
  if (containingElementRect) {
    context.bottomBoundary = containingElementRect.bottom + context.scrollY - context.offsetFromEdge;
  } else if (options.containWithinViewport === true) {
    context.bottomBoundary = context.scrollY + context.availableHeight - context.offsetFromEdge;
  } else {
    context.bottomBoundary = context.availableHeight - context.offsetFromEdge;
  }

  context.anchorRect = anchor.getBoundingClientRect();
  var bodyElement = options.getPopoverElement();
  if (!bodyElement) throw new Error('No body element provided');
  context.bodyElementRect = bodyElement.getBoundingClientRect();
  context.bodyElementWidthWithoutPadding = context.bodyElementRect.width - parseInt(bodyElement.style.paddingLeft || 0) - parseInt(bodyElement.style.paddingRight || 0);
  context.bodyElementHeightWithoutPadding = context.bodyElementRect.height - parseInt(bodyElement.style.paddingTop || 0) - parseInt(bodyElement.style.paddingBottom || 0);
  context.anchorAbsoluteTop = context.anchorRect.top + context.scrollY;
  context.anchorAbsoluteBottom = context.anchorRect.bottom + context.scrollY;
  context.anchorHorizontalCenter = context.anchorRect.left + context.anchorRect.width / 2;
  context.anchorVerticalCenter = context.anchorAbsoluteTop + context.anchorRect.height / 2;
  context.maxLeftOffset = Math.max(context.availableWidth - context.offsetFromEdge - context.bodyElementRect.width, context.offsetFromEdge);
  context.maxWidth = context.availableWidth - 2 * context.offsetFromEdge;
  context.maxHeight = context.availableHeight - 2 * context.offsetFromEdge;

  return Object.freeze(context);
}

/***/ }),

/***/ "2sCe":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/calculate-position.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePopoverPosition;

var _xtend = __webpack_require__(/*! xtend */ "q+vg");

var _xtend2 = _interopRequireDefault(_xtend);

var _calculatePositionContext = __webpack_require__(/*! ./calculate-position-context */ "2IY5");

var _calculatePositionContext2 = _interopRequireDefault(_calculatePositionContext);

var _calculatePlacementAlignment = __webpack_require__(/*! ./calculate-placement-alignment */ "I0R0");

var _calculatePlacementAlignment2 = _interopRequireDefault(_calculatePlacementAlignment);

var _calculateBodyStyle = __webpack_require__(/*! ./calculate-body-style */ "WOO4");

var _calculateBodyStyle2 = _interopRequireDefault(_calculateBodyStyle);

var _calculatePointerStyle = __webpack_require__(/*! ./calculate-pointer-style */ "Tsto");

var _calculatePointerStyle2 = _interopRequireDefault(_calculatePointerStyle);

var _adjustStylesForAnchorVisibility = __webpack_require__(/*! ./adjust-styles-for-anchor-visibility */ "SO8a");

var _adjustStylesForAnchorVisibility2 = _interopRequireDefault(_adjustStylesForAnchorVisibility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Not currently designed to deal with
// - iframes
// - more than one level of sub-document scrolling
// - horizontal scrolling

/**
 * @typedef {Object} PopoverPositionData
 * @property {string} placement
 * @property {string} alignment
 * @property {Object} pointerPositioningStyle
 * @property {Object} bodyPositioningStyle
 */

/**
 * Calculate positioning for a popover. Returns PopoverPositionData.
 *
 * @param {Object} options
 * @param {'top' | 'bottom' | 'left' | 'right'} options.placement
 * @param {'top' | 'bottom' | 'left' | 'right' | 'center' } options.alignment
 * @param {Function} options.getAnchorElement - Returns anchor element.
 * @param {Function} options.getPopoverElement - Returns popover element.
 * @param {Function} [options.getContainingElement] - Returns containing element.
 * @param {number} [options.offsetFromAnchor=5]
 * @param {number} [options.offsetFromEdge]
 * @param {boolean} [options.containWithinViewport=false]
 * @param {Function} [options.getScrollableParentElement] - Returns scrollable parent element.
 * @param {boolean} [options.allowPlacementAxisChange=true]
 * @param {boolean} [options.hasPointer=true]
 * @param {number} [options.pointerBase=12]
 * @param {number} [options.pointerAltitude=6]
 * @param {string} [options.pointerColor='#fff']
 * @param {boolean} [options.hideWhenAnchorIsOffscreen=false]
 * @return {PopoverPositionData}
 */
function calculatePopoverPosition(options) {
  var defaultedOptions = (0, _xtend2.default)(options);
  defaultedOptions.offsetFromAnchor = def(options.offsetFromAnchor, 5);
  defaultedOptions.containWithinViewport = def(options.containWithinViewport, false);
  defaultedOptions.allowPlacementAxisChange = def(options.allowPlacementAxisChange, true);
  defaultedOptions.hasPointer = def(options.hasPointer, true);
  defaultedOptions.pointerAltitude = def(options.pointerAltitude, 6);
  defaultedOptions.pointerBase = def(options.pointerBase, 12);
  defaultedOptions.pointerColor = def(options.pointerColor, '#fff');
  defaultedOptions.hideWhenAnchorIsOffscreen = def(options.hideWhenAnchorIsOffscreen, false);
  if (!defaultedOptions.hasPointer) {
    defaultedOptions.pointerAltitude = 0;
    defaultedOptions.pointerBase = 0;
  }

  var context = (0, _calculatePositionContext2.default)(defaultedOptions);

  var _calculatePlacementAl = (0, _calculatePlacementAlignment2.default)(defaultedOptions, context),
      placement = _calculatePlacementAl.placement,
      alignment = _calculatePlacementAl.alignment;

  var baseBodyStyle = (0, _calculateBodyStyle2.default)(placement, alignment, defaultedOptions, context);

  var basePointerStyle = (0, _calculatePointerStyle2.default)(placement, defaultedOptions, context);

  var _adjustStylesForAncho = (0, _adjustStylesForAnchorVisibility2.default)(basePointerStyle, baseBodyStyle, placement, defaultedOptions, context),
      bodyStyle = _adjustStylesForAncho.bodyStyle,
      pointerStyle = _adjustStylesForAncho.pointerStyle;

  return {
    placement: placement,
    alignment: alignment,
    pointerPositioningStyle: pointerStyle,
    bodyPositioningStyle: bodyStyle
  };
}

function def(a, b) {
  return a === undefined ? b : a;
}

/***/ }),

/***/ "34hi":
/*!****************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/button/index.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _button = __webpack_require__(/*! ./button */ "sp0P");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),

/***/ "3Eo+":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "4mcu":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "52gC":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5QVw":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "BwfY"), __esModule: true };

/***/ }),

/***/ "5tBN":
/*!**********************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-file/index.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _controlFile = __webpack_require__(/*! ./control-file */ "BV5h");

var _controlFile2 = _interopRequireDefault(_controlFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _controlFile2.default;

/***/ }),

/***/ "6f/Z":
/*!*************************!*\
  !*** ./scripts/util.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.clickTweetButton=clickTweetButton;function clickTweetButton(){alert('Tweet is posted!');}

/***/ }),

/***/ "77Pl":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7KvD":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7UMu":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "880/":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "hJx8");


/***/ }),

/***/ "94VQ":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "Yobk");
var descriptor = __webpack_require__(/*! ./_property-desc */ "X8DO");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "hJx8")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "BV5h":
/*!*****************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-file/control-file.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = __webpack_require__(/*! ../utils/omit */ "BzSm");

var _omit2 = _interopRequireDefault(_omit);

var _tooltip = __webpack_require__(/*! ../tooltip */ "Hskl");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = __webpack_require__(/*! ../icon */ "TWwd");

var _icon2 = _interopRequireDefault(_icon);

var _controlLabel = __webpack_require__(/*! ../control-label */ "LhoH");

var _controlLabel2 = _interopRequireDefault(_controlLabel);

var _controlWrapper = __webpack_require__(/*! ../control-wrapper */ "PNeo");

var _controlWrapper2 = _interopRequireDefault(_controlWrapper);

var _iconText = __webpack_require__(/*! ../icon-text */ "S3U6");

var _iconText2 = _interopRequireDefault(_iconText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propNames = ['value', 'id', 'onChange', 'label', 'optional', 'aside', 'disabled', 'validationError', 'initialDisplayValue', 'themeControlFile', 'themeControlFileClear', 'themeControlWrapper', 'themeLabel',
// Passed when used with the Form component
'validator'];

var ControlFile = function (_React$Component) {
  (0, _inherits3.default)(ControlFile, _React$Component);

  function ControlFile() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ControlFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
      var fileList = e.target.files;
      if (!fileList.length) return;
      var filesArray = [];
      for (var i = 0, l = fileList.length; i < l; i++) {
        filesArray.push(fileList[i]);
      }
      return _this.props.onChange(filesArray, _this.props.id);
    }, _this.state = {
      displayValue: ''
    }, _this.onButtonClick = function () {
      if (!_this.props.disabled) {
        _this.refs.file.click();
      }
    }, _this.onClear = function () {
      _this.refs.file.value = '';
      return _this.props.onChange('', _this.props.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ControlFile.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextDisplayValue = !nextProps.value ? '' : nextProps.value.map(function (f) {
      return f.name;
    }).join(', ');
    if (nextDisplayValue !== this.state.displayValue) {
      this.setState({ displayValue: nextDisplayValue });
    }
  };

  ControlFile.prototype.render = function render() {
    var extraProps = (0, _omit2.default)(this.props, propNames);

    var _props = this.props,
        id = _props.id,
        label = _props.label,
        optional = _props.optional,
        aside = _props.aside,
        disabled = _props.disabled,
        validationError = _props.validationError,
        initialDisplayValue = _props.initialDisplayValue,
        themeControlFile = _props.themeControlFile,
        themeControlFileClear = _props.themeControlFileClear,
        themeControlWrapper = _props.themeControlWrapper,
        themeLabel = _props.themeLabel;


    var inputProps = {
      id: id,
      name: id,
      onChange: this.onChange,
      type: 'file',
      ref: 'file',
      disabled: disabled,
      className: 'absolute opacity0 top left',
      style: { height: '0', width: '0', zIndex: -1 },
      'aria-required': optional ? false : true,
      'data-test': id + '-input',
      tabIndex: -1
    };

    if (validationError) {
      inputProps['aria-invalid'] = true;
    }

    return _react2.default.createElement(
      _controlWrapper2.default,
      {
        themeControlWrapper: themeControlWrapper,
        id: id,
        validationError: validationError
      },
      label && _react2.default.createElement(_controlLabel2.default, {
        text: label,
        id: id,
        aside: aside,
        optional: optional,
        themeLabel: themeLabel
      }),
      _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-parent--center-cross clip' },
        _react2.default.createElement(
          'div',
          { className: 'flex-child flex-child--grow' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              'aria-hidden': true,
              disabled: disabled,
              className: themeControlFile + ' relative',
              onClick: this.onButtonClick
            },
            _react2.default.createElement(
              'span',
              { className: 'txt-truncate' },
              _react2.default.createElement(
                _iconText2.default,
                { iconBefore: 'harddrive' },
                this.state.displayValue || initialDisplayValue
              )
            )
          ),
          _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, extraProps))
        ),
        this.state.displayValue && _react2.default.createElement(
          'div',
          { className: 'flex-child' },
          _react2.default.createElement(
            _tooltip2.default,
            { content: 'Clear', block: true },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'block link link--gray relative bg-transparent py0 ' + themeControlFileClear,
                onClick: this.onClear,
                'data-test': 'control-file-clear'
              },
              _react2.default.createElement(_icon2.default, { name: 'trash' })
            )
          )
        )
      )
    );
  };

  return ControlFile;
}(_react2.default.Component);

ControlFile.propTypes = {
  /** Identifying value for input element. */
  id: _propTypes2.default.string.isRequired,
  /** Input value */
  value: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  })), _propTypes2.default.oneOf([''])]),
  /** Called during changes to the input element. Invoked with the array of
   selected files and the id of the input. */
  onChange: _propTypes2.default.func.isRequired,
  /** Value passed to the label element. */
  label: _propTypes2.default.string,
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: _propTypes2.default.bool,
  /** Additional content inserted alongside the label element. */
  aside: _propTypes2.default.node,
  /** Pass disabled attribute */
  disabled: _propTypes2.default.bool,
  /** If provided, the value of this propery displays as an error message. */
  validationError: _propTypes2.default.node,
  /** Overrides the "Select a file" label. */
  initialDisplayValue: _propTypes2.default.string,
  /** Assembly classes to apply to the button trigger element */
  themeControlFile: _propTypes2.default.string,
  /** Assembly classes to apply to the file clear element */
  themeControlFileClear: _propTypes2.default.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: _propTypes2.default.string,
  /** Assembly classes to apply to the input element */
  themeLabel: _propTypes2.default.string
};
ControlFile.defaultProps = {
  initialDisplayValue: 'Select a file',
  optional: false,
  disabled: false,
  themeControlFile: 'btn align-l bg-gray-faint py6 px12 round-full w-full txt-s link--gray txt-normal',
  themeControlFileClear: ''
};
exports.default = ControlFile;

/***/ }),

/***/ "BwfY":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "fWfb");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "M6a0");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "OYls");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "QWe/");
module.exports = __webpack_require__(/*! ../../modules/_core */ "FeBl").Symbol;


/***/ }),

/***/ "BzSm":
/*!**************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/utils/omit.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = omit;
function omit() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var omittedProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return Object.keys(source).reduce(function (result, key) {
    if (omittedProperties.indexOf(key) === -1) {
      result[key] = source[key];
    }
    return result;
  }, {});
}

/***/ }),

/***/ "D2L2":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "Dd8w":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "woOf");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "E00p":
/*!*******************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-label/control-label.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlLabel = function (_React$PureComponent) {
  (0, _inherits3.default)(ControlLabel, _React$PureComponent);

  function ControlLabel() {
    (0, _classCallCheck3.default)(this, ControlLabel);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
  }

  ControlLabel.prototype.render = function render() {
    var _props = this.props,
        text = _props.text,
        id = _props.id,
        aside = _props.aside,
        optional = _props.optional,
        themeLabel = _props.themeLabel;

    var labelClasses = 'inline-block ' + themeLabel;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: id, className: labelClasses },
        text,
        ' ',
        optional && _react2.default.createElement(
          'span',
          { className: 'txt-normal' },
          '(optional)'
        )
      ),
      aside && _react2.default.createElement(
        'span',
        { className: 'inline-block ml12' },
        aside
      )
    );
  };

  return ControlLabel;
}(_react2.default.PureComponent);

ControlLabel.propTypes = {
  /** Label text */
  text: _propTypes2.default.string.isRequired,
  /** Value should match the identifying id of the input element. */
  id: _propTypes2.default.string.isRequired,
  /** Additional content to provide aligned to the right of the label. */
  aside: _propTypes2.default.node,
  /** If true, label text adds (optional) alongside it. */
  optional: _propTypes2.default.bool,
  /** A space separated list of Assembly class names to override the existing presentation. */
  themeLabel: _propTypes2.default.string
};
ControlLabel.defaultProps = {
  themeLabel: 'txt-s txt-bold mb6'
};
exports.default = ControlLabel;

/***/ }),

/***/ "EGZi":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EqjI":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "FeBl":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "HW6M":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "Hskl":
/*!*****************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/tooltip/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tooltip = __webpack_require__(/*! ./tooltip */ "wakt");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),

/***/ "I0R0":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/calculate-placement-alignment.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePlacementAlignment;

var _constants = __webpack_require__(/*! ./constants */ "PYZJ");

/**
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {{ placement: string, alignment: string }}
 */
function calculatePlacementAlignment(options, context) {
  var desiredPlacement = options.placement;
  var desiredAlignment = options.alignment;
  var allowPlacementAxisChange = options.allowPlacementAxisChange === undefined ? true : options.allowPlacementAxisChange;
  var placement = desiredPlacement;
  var alignment = desiredAlignment;

  var spaceLeftOfAnchor = context.anchorRect.left - context.offsetFromEdge;
  var spaceRightOfAnchor = context.availableWidth - context.anchorRect.right - context.offsetFromEdge;
  var spaceAboveAnchor = context.anchorRect.top - context.offsetFromEdge;
  var spaceBelowAnchor = context.availableHeight - context.anchorRect.bottom - context.offsetFromEdge;
  var sufficientSpaceIfPlacedOnLeft = context.bodyElementWidthWithoutPadding + context.bodyOffsetFromAnchor <= spaceLeftOfAnchor;
  var sufficientSpaceIfPlacedOnRight = context.bodyElementWidthWithoutPadding + context.bodyOffsetFromAnchor <= spaceRightOfAnchor;
  var sufficientSpaceIfPlacedAbove = context.bodyElementHeightWithoutPadding + context.bodyOffsetFromAnchor <= spaceAboveAnchor;
  var sufficientSpaceIfPlacedBelow = context.bodyElementHeightWithoutPadding + context.bodyOffsetFromAnchor <= spaceBelowAnchor;

  if (desiredPlacement === _constants.PLACEMENT_TOP || desiredPlacement === _constants.PLACEMENT_BOTTOM) {
    if (desiredPlacement === _constants.PLACEMENT_BOTTOM && !sufficientSpaceIfPlacedBelow) {
      if (sufficientSpaceIfPlacedAbove) {
        return { placement: _constants.PLACEMENT_TOP, alignment: alignment };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        return { placement: _constants.PLACEMENT_LEFT, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        return { placement: _constants.PLACEMENT_RIGHT, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (spaceAboveAnchor > spaceBelowAnchor) {
        return { placement: _constants.PLACEMENT_TOP, alignment: alignment };
      }
    }

    if (desiredPlacement === _constants.PLACEMENT_TOP && !sufficientSpaceIfPlacedAbove) {
      if (sufficientSpaceIfPlacedBelow) {
        return { placement: _constants.PLACEMENT_BOTTOM, alignment: alignment };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        return { placement: _constants.PLACEMENT_LEFT, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        return { placement: _constants.PLACEMENT_RIGHT, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (spaceBelowAnchor > spaceAboveAnchor) {
        return { placement: _constants.PLACEMENT_BOTTOM, alignment: alignment };
      }
    }
  }

  if (desiredPlacement === _constants.PLACEMENT_LEFT || desiredPlacement === _constants.PLACEMENT_RIGHT) {
    if (desiredPlacement === _constants.PLACEMENT_LEFT && !sufficientSpaceIfPlacedOnLeft) {
      if (sufficientSpaceIfPlacedOnRight) {
        return { placement: _constants.PLACEMENT_RIGHT, alignment: alignment };
      }
      if (allowPlacementAxisChange && !sufficientSpaceIfPlacedBelow && sufficientSpaceIfPlacedAbove) {
        return { placement: _constants.PLACEMENT_TOP, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange) {
        return { placement: _constants.PLACEMENT_BOTTOM, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (spaceRightOfAnchor > spaceLeftOfAnchor) {
        return { placement: _constants.PLACEMENT_RIGHT, alignment: alignment };
      }
    }

    if (desiredPlacement === _constants.PLACEMENT_RIGHT && !sufficientSpaceIfPlacedOnRight) {
      if (sufficientSpaceIfPlacedOnLeft) {
        return { placement: _constants.PLACEMENT_LEFT, alignment: alignment };
      }
      if (allowPlacementAxisChange && !sufficientSpaceIfPlacedBelow && sufficientSpaceIfPlacedAbove) {
        return { placement: _constants.PLACEMENT_TOP, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange) {
        return { placement: _constants.PLACEMENT_BOTTOM, alignment: _constants.ALIGNMENT_CENTER };
      }
      if (spaceLeftOfAnchor > spaceRightOfAnchor) {
        return { placement: _constants.PLACEMENT_LEFT, alignment: alignment };
      }
    }
  }

  return { placement: placement, alignment: alignment };
}

/***/ }),

/***/ "Ibhu":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "D2L2");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "vFc/")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "Jmo5":
/*!***********************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/icon-text/icon-text.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = __webpack_require__(/*! ../icon */ "TWwd");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Put an icon next to some text.
 *
 * The icon and text will be vertically centered, with standard spacing between.
 */
var IconText = function (_React$Component) {
  (0, _inherits3.default)(IconText, _React$Component);

  function IconText() {
    (0, _classCallCheck3.default)(this, IconText);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  IconText.prototype.renderIcon = function renderIcon(icon) {
    if (typeof icon === 'string') {
      return _react2.default.createElement(_icon2.default, { name: icon });
    }
    return icon;
  };

  IconText.prototype.render = function render() {
    var props = this.props;

    var spacer = props.gap === 'small' ? '3' : '6';

    var before = !props.iconBefore ? null : _react2.default.createElement(
      'span',
      { className: 'flex-child mr' + spacer },
      this.renderIcon(props.iconBefore)
    );

    var after = !props.iconAfter ? null : _react2.default.createElement(
      'span',
      { className: 'flex-child ml' + spacer },
      this.renderIcon(props.iconAfter)
    );

    return _react2.default.createElement(
      'span',
      { className: 'flex-parent flex-parent--center-cross' },
      before,
      _react2.default.createElement(
        'span',
        { className: 'flex-child' },
        props.children
      ),
      after
    );
  };

  return IconText;
}(_react2.default.Component);

IconText.propTypes = {
  /**
   * The text. A string is recommended, but you can put an element in here if
   * you think it's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The size of the gap between the text and the icon: `"small"` or `"large"`.
   */
  gap: _propTypes2.default.oneOf(['small', 'large']),
  /**
   * An icon to place before the text. If the value is a string, it should name an
   * Assembly icon. If you bring your own SVG or want finer-grained control over
   * how the Icon component is used, pass an element.
   */
  iconBefore: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  /**
   * An icon to place after the text. See details documented for `iconBefore`.
   */
  iconAfter: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
};

IconText.defaultProps = {
  gap: 'small'
};

exports.default = IconText;

/***/ }),

/***/ "Kh4W":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "dSzd");


/***/ }),

/***/ "LKZe":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "NpIQ");
var createDesc = __webpack_require__(/*! ./_property-desc */ "X8DO");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "MmMw");
var has = __webpack_require__(/*! ./_has */ "D2L2");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "LhoH":
/*!***********************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-label/index.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _controlLabel = __webpack_require__(/*! ./control-label */ "E00p");

var _controlLabel2 = _interopRequireDefault(_controlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _controlLabel2.default;

/***/ }),

/***/ "M6a0":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),

/***/ "M6fy":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/popover-positioner.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDisplace = __webpack_require__(/*! react-displace */ "WDRl");

var _reactDisplace2 = _interopRequireDefault(_reactDisplace);

var _debounce = __webpack_require__(/*! debounce */ "HhAh");

var _debounce2 = _interopRequireDefault(_debounce);

var _calculatePosition = __webpack_require__(/*! ./calculate-position */ "2sCe");

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getScrollableParents = __webpack_require__(/*! ./get-scrollable-parents */ "lTAx");

var _getScrollableParents2 = _interopRequireDefault(_getScrollableParents);

var _createScrollListener = __webpack_require__(/*! ./create-scroll-listener */ "rItC");

var _createScrollListener2 = _interopRequireDefault(_createScrollListener);

var _getWindow = __webpack_require__(/*! ../utils/get-window */ "mXZ2");

var _getWindow2 = _interopRequireDefault(_getWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popoverPositionerList = [];

/**
 * Secretly mounts a popover and its pointer, calculates their positions, then repositions and exposes them.
 *
 * @param {ReactNode} children
 * @param {Function} getAnchorElement - Function that returns the popover's anchor element.
 * @param {'top' | 'bottom' | 'left' | 'right' } [placement] - See options for calculatePosition.
 * @param { 'top' | 'bottom' | 'left' | 'right' | 'center' } [alignment] - See options for calculatePosition.
 * @param {boolean} [hasPointer] - See options for calculatePosition.
 * @param {number} [pointerBase] - See options for calculatePosition.
 * @param {number} [pointerAltitude] - See options for calculatePosition.
 * @param {string} [pointerColor] - See options for calculatePosition.
 * @param {number} [offsetFromAnchor] - See options for calculatePosition.
 * @param {boolean} [hideWhenAnchorIsOffscreen] - See options for calculatePosition.
 * @param {boolean} [allowPlacementAxisChange] - See options for calculatePosition.
 * @param {boolean} [containWithinViewport] - See options for calculatePosition.
 * @param {Function} [getContainingElement] - See options for calculatePosition.
 * @param {Function} [onElement] - A function that receives the containing element.
 */

var PopoverPositioner = function (_React$PureComponent) {
  (0, _inherits3.default)(PopoverPositioner, _React$PureComponent);

  function PopoverPositioner() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverPositioner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getScrollableParentElement = function () {
      return _this.scrollableParents[0];
    }, _this.setPosition = function () {
      var _this2 = _this,
          props = _this2.props;


      var positionData = _this.props.calculatePosition({
        getScrollableParentElement: _this.getScrollableParentElement,
        getPopoverElement: _this.getPopoverElement,
        getAnchorElement: props.getAnchorElement,
        placement: props.placement,
        alignment: props.alignment,
        offsetFromAnchor: props.offsetFromAnchor,
        pointerBase: props.pointerBase,
        pointerAltitude: props.pointerAltitude,
        pointerColor: props.pointerColor,
        hideWhenAnchorIsOffscreen: props.hideWhenAnchorIsOffscreen,
        allowPlacementAxisChange: props.allowPlacementAxisChange,
        containWithinViewport: props.containWithinViewport,
        getContainingElement: props.getContainingElement
      });

      var bodyElement = _this.bodyElement;
      if (bodyElement) {
        bodyElement.style.setProperty('visibility', 'visible');
        for (var key in positionData.bodyPositioningStyle) {
          bodyElement.style.setProperty(key, positionData.bodyPositioningStyle[key]);
        }
      }

      var pointerElement = _this.pointerElement;
      if (pointerElement) {
        pointerElement.style.setProperty('visibility', 'visible');
        for (var _key2 in positionData.pointerPositioningStyle) {
          pointerElement.style.setProperty(_key2, positionData.pointerPositioningStyle[_key2]);
        }
      }
    }, _this.setBodyElement = function (element) {
      _this.bodyElement = element;
    }, _this.setContainerElement = function (element) {
      _this.containerElement = element;
      if (_this.props.onElement) _this.props.onElement(element);
    }, _this.getPopoverElement = function () {
      return _this.bodyElement;
    }, _this.setPointerElement = function (element) {
      _this.pointerElement = element;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PopoverPositioner.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    popoverPositionerList.push(this.setPosition);
    this.scrollableParents = this.props.getScrollableParents(this.props.getAnchorElement());
    this.handleResize = (0, _debounce2.default)(this.setPosition, 200);
    this.props.getWindow().addEventListener('resize', this.handleResize);
    this.scrollListeners = this.scrollableParents.map(function (scrollableParent) {
      var scrollListener = _this3.props.createScrollListener(scrollableParent, _this3.setPosition);
      scrollListener.start();
      return scrollListener;
    }, this);
    this.setPosition();
  };

  PopoverPositioner.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setPosition();
  };

  PopoverPositioner.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.getWindow().removeEventListener('resize', this.handleResize);
    this.scrollListeners.forEach(function (scrollListener) {
      scrollListener.stop();
    });
    popoverPositionerList.splice(popoverPositionerList.indexOf(this.setPosition), 1);
  };

  PopoverPositioner.prototype.render = function render() {
    var basicStyle = {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      visibility: 'hidden'
    };

    return _react2.default.createElement(
      'div',
      { ref: this.setContainerElement },
      _react2.default.createElement(
        'div',
        {
          'data-test': 'popover-body',
          ref: this.setBodyElement,
          style: basicStyle
        },
        this.props.children
      ),
      _react2.default.createElement('div', {
        'data-test': 'popover-pointer',
        ref: this.setPointerElement,
        style: basicStyle
      })
    );
  };

  return PopoverPositioner;
}(_react2.default.PureComponent);

PopoverPositioner.propTypes = {
  children: _propTypes2.default.node.isRequired,
  getAnchorElement: _propTypes2.default.func.isRequired,
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  alignment: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  pointerBase: _propTypes2.default.number,
  hasPointer: _propTypes2.default.bool,
  pointerAltitude: _propTypes2.default.number,
  pointerColor: _propTypes2.default.string,
  offsetFromAnchor: _propTypes2.default.number,
  hideWhenAnchorIsOffscreen: _propTypes2.default.bool,
  allowPlacementAxisChange: _propTypes2.default.bool,
  containWithinViewport: _propTypes2.default.bool,
  getContainingElement: _propTypes2.default.func,
  onElement: _propTypes2.default.func,
  // For mockery
  calculatePosition: _propTypes2.default.func,
  getScrollableParents: _propTypes2.default.func,
  createScrollListener: _propTypes2.default.func,
  getWindow: _propTypes2.default.func
};
PopoverPositioner.defaultProps = {
  calculatePosition: _calculatePosition2.default,
  getScrollableParents: _getScrollableParents2.default,
  createScrollListener: _createScrollListener2.default,
  getWindow: _getWindow2.default
};


var displaced = (0, _reactDisplace2.default)(PopoverPositioner);
displaced.recalculatePositions = function () {
  popoverPositionerList.forEach(function (recalcFn) {
    recalcFn();
  });
};

exports.default = displaced;

/***/ }),

/***/ "MU5D":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MmMw":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "NpIQ":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "O4g8":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
var document = __webpack_require__(/*! ./_global */ "7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OYls":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "crlp")('asyncIterator');


/***/ }),

/***/ "OvRC":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "oM7Q"), __esModule: true };

/***/ }),

/***/ "PNeo":
/*!*************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-wrapper/index.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _controlWrapper = __webpack_require__(/*! ./control-wrapper */ "tD78");

var _controlWrapper2 = _interopRequireDefault(_controlWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _controlWrapper2.default;

/***/ }),

/***/ "PYZJ":
/*!*********************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/constants.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var PLACEMENT_TOP = exports.PLACEMENT_TOP = 'top';
var PLACEMENT_BOTTOM = exports.PLACEMENT_BOTTOM = 'bottom';
var PLACEMENT_LEFT = exports.PLACEMENT_LEFT = 'left';
var PLACEMENT_RIGHT = exports.PLACEMENT_RIGHT = 'right';
var ALIGNMENT_TOP = exports.ALIGNMENT_TOP = 'top';
var ALIGNMENT_BOTTOM = exports.ALIGNMENT_BOTTOM = 'bottom';
var ALIGNMENT_LEFT = exports.ALIGNMENT_LEFT = 'left';
var ALIGNMENT_RIGHT = exports.ALIGNMENT_RIGHT = 'right';
var ALIGNMENT_CENTER = exports.ALIGNMENT_CENTER = 'center';
var POINTER_DIRECTION_DOWNWARD = exports.POINTER_DIRECTION_DOWNWARD = 'downward';
var POINTER_DIRECTION_UPWARD = exports.POINTER_DIRECTION_UPWARD = 'upward';
var POINTER_DIRECTION_LEFTWARD = exports.POINTER_DIRECTION_LEFTWARD = 'leftward';
var POINTER_DIRECTION_RIGHTWARD = exports.POINTER_DIRECTION_RIGHTWARD = 'rightward';

/***/ }),

/***/ "Pf15":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "kiBT");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "OvRC");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "PzxK":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "D2L2");
var toObject = __webpack_require__(/*! ./_to-object */ "sB3e");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "QRG4":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "QWe/":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "crlp")('observable');


/***/ }),

/***/ "R4wc":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "kM2E");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "To3L") });


/***/ }),

/***/ "R9M2":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "Rrel":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "S3U6":
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/icon-text/index.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iconText = __webpack_require__(/*! ./icon-text */ "Jmo5");

var _iconText2 = _interopRequireDefault(_iconText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _iconText2.default;

/***/ }),

/***/ "S82l":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SO8a":
/*!***********************************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/adjust-styles-for-anchor-visibility.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = adjustStylesForAnchorVisibility;

var _xtend = __webpack_require__(/*! xtend */ "q+vg");

var _xtend2 = _interopRequireDefault(_xtend);

var _getWindow = __webpack_require__(/*! ../utils/get-window */ "mXZ2");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _constants = __webpack_require__(/*! ./constants */ "PYZJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hideStyles = {
  visibility: 'hidden',
  zIndex: -1
};

var showStyles = {
  visibility: 'visible',
  zIndex: 1
};

/**
 * @param {Object} pointerStyle
 * @param {Object} bodyStyle
 * @param {string} placement
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {{ pointerStyle: Object, bodyStyle: Object }}
 */
function adjustStylesForAnchorVisibility(pointerStyle, bodyStyle, placement, options, context) {
  var hideThings = function hideThings() {
    var newPointerStyle = (0, _xtend2.default)(pointerStyle, hideStyles);
    var newBodyStyle = options.hideWhenAnchorIsOffscreen ? (0, _xtend2.default)(bodyStyle, hideStyles) : bodyStyle;
    return { pointerStyle: newPointerStyle, bodyStyle: newBodyStyle };
  };

  var showThings = function showThings() {
    var newPointerStyle = (0, _xtend2.default)(pointerStyle, showStyles);
    var newBodyStyle = options.hideWhenAnchorIsOffscreen ? (0, _xtend2.default)(bodyStyle, showStyles) : bodyStyle;
    return { pointerStyle: newPointerStyle, bodyStyle: newBodyStyle };
  };

  var win = (0, _getWindow2.default)();
  var scrollableParent = options.getScrollableParentElement !== undefined ? options.getScrollableParentElement() : null;

  if (!scrollableParent) {
    return { pointerStyle: pointerStyle, bodyStyle: bodyStyle };
  }

  var scrollY = win.pageYOffset;
  var scrollableParentTop = void 0;
  var scrollableParentBottom = void 0;
  if (scrollableParent === win) {
    scrollableParentTop = options.containWithinViewport ? scrollY : 0;
    scrollableParentBottom = options.containWithinViewport ? scrollY + win.innerHeight : context.availableHeight;
  } else {
    var scrollableParentRect = scrollableParent.getBoundingClientRect();
    scrollableParentTop = scrollableParentRect.top + scrollY;
    scrollableParentBottom = scrollableParentRect.bottom + scrollY;
  }

  var offsetFromScrollableParentTopEdge = Math.round(context.anchorVerticalCenter - options.pointerBase / 2) - 2;
  var offsetFromScrollableParentBottomEdge = Math.round(context.anchorVerticalCenter + options.pointerBase / 2) + 2;
  var onLeftOrRight = placement === _constants.PLACEMENT_LEFT || placement === _constants.PLACEMENT_RIGHT;

  if (placement === _constants.PLACEMENT_TOP && scrollableParentTop > context.anchorAbsoluteTop || placement === _constants.PLACEMENT_BOTTOM && scrollableParentBottom < context.anchorAbsoluteTop || !onLeftOrRight && scrollableParentBottom < context.anchorAbsoluteTop || !onLeftOrRight && scrollableParentTop > context.anchorAbsoluteBottom || onLeftOrRight && (
  // Offset the allowed top/bottom to prevent the pointer triangle from appearing
  // beyond the border curves
  scrollableParentTop + options.pointerBase / 2 + 1 > offsetFromScrollableParentTopEdge || scrollableParentBottom - options.pointerBase / 2 - 1 < offsetFromScrollableParentBottomEdge)) {
    return hideThings();
  } else {
    return showThings();
  }
}

/***/ }),

/***/ "SfB7":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "+E39") && !__webpack_require__(/*! ./_fails */ "S82l")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TWwd":
/*!**************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/icon/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _icon = __webpack_require__(/*! ./icon */ "iOEZ");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),

/***/ "TcQ7":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "MU5D");
var defined = __webpack_require__(/*! ./_defined */ "52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "TcQS":
/*!***************************!*\
  !*** ./_batfish_tmp/_.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
let Page=__webpack_require__(/*! ./src/pages/index.js */ "04qB");Page=Page.default||Page;module.exports={component:Page,props:{"frontMatter":{}}};

/***/ }),

/***/ "To3L":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "lktj");
var gOPS = __webpack_require__(/*! ./_object-gops */ "1kS7");
var pIE = __webpack_require__(/*! ./_object-pie */ "NpIQ");
var toObject = __webpack_require__(/*! ./_to-object */ "sB3e");
var IObject = __webpack_require__(/*! ./_iobject */ "MU5D");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "S82l")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "Tsto":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/calculate-pointer-style.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePointerStyle;

var _prefix = __webpack_require__(/*! prefix */ "vuZI");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLACEMENT_TOP = 'top';
var PLACEMENT_BOTTOM = 'bottom';
var PLACEMENT_LEFT = 'left';
var PLACEMENT_RIGHT = 'right';
var POINTER_DIRECTION_DOWNWARD = 'downward';
var POINTER_DIRECTION_UPWARD = 'upward';
var POINTER_DIRECTION_LEFTWARD = 'leftward';
var POINTER_DIRECTION_RIGHTWARD = 'rightward';

var mapPlacementToPointerDirection = {};
mapPlacementToPointerDirection[PLACEMENT_TOP] = POINTER_DIRECTION_DOWNWARD;
mapPlacementToPointerDirection[PLACEMENT_BOTTOM] = POINTER_DIRECTION_UPWARD;
mapPlacementToPointerDirection[PLACEMENT_LEFT] = POINTER_DIRECTION_RIGHTWARD;
mapPlacementToPointerDirection[PLACEMENT_RIGHT] = POINTER_DIRECTION_LEFTWARD;

/**
 * @param {string} placement
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {Object}
 */
function calculatePointerStyle(placement, options, context) {
  var _ref4;

  var verticalPointerLeftOffset = Math.round(context.anchorHorizontalCenter - options.pointerBase / 2);
  var horizontalPointerTopOffset = Math.round(context.anchorVerticalCenter - options.pointerBase / 2);
  var helperBorder = options.pointerBase / 2 + 'px solid transparent';
  var coloredBorder = options.pointerAltitude + 'px solid ' + options.pointerColor;
  var pointerDirection = mapPlacementToPointerDirection[placement];
  var prefixedTransform = _prefix2.default.dash('transform');

  if (options.hasPointer === false) {
    return { display: 'none' };
  }

  if (pointerDirection === POINTER_DIRECTION_UPWARD) {
    var _ref;

    return _ref = {}, _ref[prefixedTransform] = 'translate3d(' + verticalPointerLeftOffset + 'px, ' + Math.round(context.anchorAbsoluteTop + context.anchorRect.height + options.offsetFromAnchor - context.documentTopOffset) + 'px, 0)', _ref['border-top'] = 0, _ref['border-bottom'] = coloredBorder, _ref['border-left'] = helperBorder, _ref['border-right'] = helperBorder, _ref;
  }
  if (pointerDirection === POINTER_DIRECTION_DOWNWARD) {
    var _ref2;

    return _ref2 = {}, _ref2[prefixedTransform] = 'translate3d(' + verticalPointerLeftOffset + 'px, ' + Math.round(context.anchorAbsoluteTop - options.offsetFromAnchor - options.pointerAltitude - context.documentTopOffset) + 'px, 0)', _ref2['border-top'] = coloredBorder, _ref2['border-bottom'] = 0, _ref2['border-left'] = helperBorder, _ref2['border-right'] = helperBorder, _ref2;
  }
  if (pointerDirection === POINTER_DIRECTION_LEFTWARD) {
    var _ref3;

    return _ref3 = {}, _ref3[prefixedTransform] = 'translate3d(' + Math.round(context.anchorRect.right + options.offsetFromAnchor) + 'px, ' + (horizontalPointerTopOffset - context.documentTopOffset) + 'px, 0)', _ref3['border-top'] = helperBorder, _ref3['border-bottom'] = helperBorder, _ref3['border-left'] = 0, _ref3['border-right'] = coloredBorder, _ref3;
  }
  return _ref4 = {}, _ref4[prefixedTransform] = 'translate3d(' + Math.round(context.anchorRect.left - options.offsetFromAnchor - options.pointerAltitude) + 'px, ' + (horizontalPointerTopOffset - context.documentTopOffset) + 'px, 0)', _ref4['border-top'] = helperBorder, _ref4['border-bottom'] = helperBorder, _ref4['border-left'] = coloredBorder, _ref4['border-right'] = 0, _ref4;
}

/***/ }),

/***/ "UuGF":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "V3tA":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "R4wc");
module.exports = __webpack_require__(/*! ../../modules/_core */ "FeBl").Object.assign;


/***/ }),

/***/ "WDRl":
/*!******************************************************!*\
  !*** ./node_modules/react-displace/dist/displace.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "GiK3");
var ReactDOM = __webpack_require__(/*! react-dom */ "O27J");

// React 16+ supports Portals.
var canUsePortals = !!ReactDOM.createPortal;

function displace(WrappedComponent, options) {
  if (!global.document) {
    return function (_React$Component) {
      _inherits(EmptyDisplace, _React$Component);

      function EmptyDisplace() {
        _classCallCheck(this, EmptyDisplace);

        return _possibleConstructorReturn(this, (EmptyDisplace.__proto__ || Object.getPrototypeOf(EmptyDisplace)).apply(this, arguments));
      }

      _createClass(EmptyDisplace, [{
        key: 'render',
        value: function render() {
          return false;
        }
      }]);

      return EmptyDisplace;
    }(React.Component);
  }

  options = options || {};

  var Displaced = function (_React$Component2) {
    _inherits(Displaced, _React$Component2);

    function Displaced() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, Displaced);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Displaced.__proto__ || Object.getPrototypeOf(Displaced)).call.apply(_ref, [this].concat(args))), _this2), _this2.renderDisplaced = function () {
        ReactDOM.unstable_renderSubtreeIntoContainer(_this2, React.createElement(WrappedComponent, _this2.props, _this2.props.children), _this2.container);
      }, _this2.removeDisplaced = function () {
        ReactDOM.unmountComponentAtNode(_this2.container);
      }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Displaced, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.container = function () {
          if (!options.renderTo) {
            var result = document.createElement('div');
            document.body.appendChild(result);
            return result;
          } else if (typeof options.renderTo === 'string') {
            return document.querySelector(options.renderTo);
          } else {
            return options.renderTo;
          }
        }();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (canUsePortals) return;
        if (this.props.mounted) {
          this.renderDisplaced();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (canUsePortals) return;
        if (prevProps.mounted && !this.props.mounted) {
          ReactDOM.unmountComponentAtNode(this.container);
        } else if (this.props.mounted) {
          this.renderDisplaced();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!canUsePortals) {
          ReactDOM.unmountComponentAtNode(this.container);
        }
        if (!options.renderTo) {
          this.container.parentNode.removeChild(this.container);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (!canUsePortals || this.props.mounted === false) {
          return null;
        }
        return ReactDOM.createPortal(React.createElement(WrappedComponent, this.props, this.props.children), this.container);
      }
    }]);

    return Displaced;
  }(React.Component);

  Displaced.defaultProps = {
    mounted: true
  };
  Displaced.WrappedComponent = WrappedComponent;


  return Displaced;
}

module.exports = displace;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "DuR2")))

/***/ }),

/***/ "WOO4":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/calculate-body-style.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculateBodyStyle;

var _prefix = __webpack_require__(/*! prefix */ "vuZI");

var _prefix2 = _interopRequireDefault(_prefix);

var _constants = __webpack_require__(/*! ./constants */ "PYZJ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} placement
 * @param {string} alignment
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {Object}
 */
function calculateBodyStyle(placement, alignment, options, context) {
  var _style;

  var topOffset = void 0;
  var leftOffset = void 0;
  if (placement === _constants.PLACEMENT_TOP) {
    topOffset = context.anchorAbsoluteTop - context.bodyElementHeightWithoutPadding - context.bodyOffsetFromAnchor;
  } else if (placement === _constants.PLACEMENT_BOTTOM) {
    topOffset = context.anchorAbsoluteBottom + context.bodyOffsetFromAnchor;
  } else if (alignment === _constants.ALIGNMENT_TOP) {
    topOffset = context.anchorAbsoluteTop;
  } else if (alignment === _constants.ALIGNMENT_BOTTOM) {
    topOffset = context.anchorAbsoluteBottom - context.bodyElementHeightWithoutPadding;
  } else {
    // Only situation left is left/right placed with alignment center
    topOffset = context.anchorAbsoluteTop + context.anchorRect.height / 2 - context.bodyElementHeightWithoutPadding / 2;
  }
  topOffset = Math.max(context.offsetFromEdge, Math.round(topOffset));
  // topOffset = Math.min(maxTopOffset, topOffset);
  if (topOffset < context.topBoundary) topOffset = context.topBoundary;
  if (topOffset + context.bodyElementHeightWithoutPadding > context.bottomBoundary) topOffset = context.bottomBoundary - context.bodyElementHeightWithoutPadding;
  topOffset -= context.documentTopOffset;

  if (placement === _constants.PLACEMENT_LEFT) {
    leftOffset = context.anchorRect.left - context.bodyElementWidthWithoutPadding - context.bodyOffsetFromAnchor;
  } else if (placement === _constants.PLACEMENT_RIGHT) {
    leftOffset = context.anchorRect.right + context.bodyOffsetFromAnchor;
  } else if (alignment === _constants.ALIGNMENT_LEFT) {
    leftOffset = context.anchorRect.left;
  } else if (alignment === _constants.ALIGNMENT_RIGHT) {
    leftOffset = context.anchorRect.right - context.bodyElementWidthWithoutPadding;
  } else {
    // Only situation left is top/bottom placed with alignment center
    leftOffset = context.anchorRect.left + context.anchorRect.width / 2 - context.bodyElementWidthWithoutPadding / 2;
  }
  leftOffset = Math.max(context.offsetFromEdge, Math.round(leftOffset));
  leftOffset = Math.min(context.maxLeftOffset, leftOffset);

  var prefixedTransform = _prefix2.default.dash('transform');

  var style = (_style = {}, _style[prefixedTransform] = 'translate3d(' + leftOffset + 'px, ' + topOffset + 'px, 0)', _style['max-width'] = context.maxWidth + 'px', _style['max-height'] = context.maxHeight + 'px', _style);

  return style;
}

/***/ }),

/***/ "X8DO":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Xc4G":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "lktj");
var gOPS = __webpack_require__(/*! ./_object-gops */ "1kS7");
var pIE = __webpack_require__(/*! ./_object-pie */ "NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "XlTX":
/*!**************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/utils/maybe-add-period.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = maybeAddPeriod;
function maybeAddPeriod(text) {
  if (!text) return text;
  var trimmedText = text.trim();
  var lastChar = trimmedText[trimmedText.length - 1];
  if (lastChar === '.' || lastChar === '!' || lastChar === '?') return trimmedText;
  return trimmedText + '.';
}

/***/ }),

/***/ "Y9HL":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/is-element-scrolled-into-view.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isElementScrolledIntoView;

var _getScrollableParents = __webpack_require__(/*! ./get-scrollable-parents */ "lTAx");

var _getScrollableParents2 = _interopRequireDefault(_getScrollableParents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a boolean indicating whether an element is scrolled into
 * view. If it has no scrollable parent, this just means it's within
 * the viewport. If it does have a scrollable parent, this means that
 * both window and parent are scrolled such that the element is visible.
 *
 * Assumes there's only one level of sub-document scrolling involved,
 * i.e. one scrollable parent.
 *
 * @param {HTMLElement} element
 * @return {Boolean}
 */
function isElementScrolledIntoView(element) {
  var scrollableParents = (0, _getScrollableParents2.default)(element).filter(function (parent) {
    return parent !== window;
  });

  var elementRect = element.getBoundingClientRect();
  if (scrollableParents.length > 0) {
    var scrollableParentRect = scrollableParents[0].getBoundingClientRect();
    if (scrollableParentRect.top > elementRect.top || scrollableParentRect.bottom < elementRect.bottom) {
      return false;
    }
  }

  var bodyTop = document.body.scrollTop;
  if (bodyTop > elementRect.top + bodyTop) return false;
  return bodyTop + window.innerHeight > elementRect.bottom + bodyTop;
}

/***/ }),

/***/ "Yobk":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "77Pl");
var dPs = __webpack_require__(/*! ./_object-dps */ "qio6");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "xnc9");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "ZaQb":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
var anObject = __webpack_require__(/*! ./_an-object */ "77Pl");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "+ZMJ")(Function.call, __webpack_require__(/*! ./_object-gopd */ "LKZe").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Zrlr":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Zzip":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "/n6Q"), __esModule: true };

/***/ }),

/***/ "ax3d":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "e8AB")('keys');
var uid = __webpack_require__(/*! ./_uid */ "3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "crlp":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "7KvD");
var core = __webpack_require__(/*! ./_core */ "FeBl");
var LIBRARY = __webpack_require__(/*! ./_library */ "O4g8");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "Kh4W");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "dSzd":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "e8AB")('wks');
var uid = __webpack_require__(/*! ./_uid */ "3Eo+");
var Symbol = __webpack_require__(/*! ./_global */ "7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "e6n0":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "evD5").f;
var has = __webpack_require__(/*! ./_has */ "D2L2");
var TAG = __webpack_require__(/*! ./_wks */ "dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "FeBl");
var global = __webpack_require__(/*! ./_global */ "7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "O4g8") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "eDq/":
/*!*************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover-trigger/index.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popoverTrigger = __webpack_require__(/*! ./popover-trigger */ "vJkS");

var _popoverTrigger2 = _interopRequireDefault(_popoverTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _popoverTrigger2.default;

/***/ }),

/***/ "evD5":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "77Pl");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "SfB7");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "exh5":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "kM2E");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "ZaQb").set });


/***/ }),

/***/ "fWfb":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "7KvD");
var has = __webpack_require__(/*! ./_has */ "D2L2");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "+E39");
var $export = __webpack_require__(/*! ./_export */ "kM2E");
var redefine = __webpack_require__(/*! ./_redefine */ "880/");
var META = __webpack_require__(/*! ./_meta */ "06OY").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "S82l");
var shared = __webpack_require__(/*! ./_shared */ "e8AB");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "e6n0");
var uid = __webpack_require__(/*! ./_uid */ "3Eo+");
var wks = __webpack_require__(/*! ./_wks */ "dSzd");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "Kh4W");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "crlp");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "Xc4G");
var isArray = __webpack_require__(/*! ./_is-array */ "7UMu");
var anObject = __webpack_require__(/*! ./_an-object */ "77Pl");
var isObject = __webpack_require__(/*! ./_is-object */ "EqjI");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "MmMw");
var createDesc = __webpack_require__(/*! ./_property-desc */ "X8DO");
var _create = __webpack_require__(/*! ./_object-create */ "Yobk");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "Rrel");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "LKZe");
var $DP = __webpack_require__(/*! ./_object-dp */ "evD5");
var $keys = __webpack_require__(/*! ./_object-keys */ "lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "NpIQ").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fkB2":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "h65t":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "UuGF");
var defined = __webpack_require__(/*! ./_defined */ "52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hJx8":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "evD5");
var createDesc = __webpack_require__(/*! ./_property-desc */ "X8DO");
module.exports = __webpack_require__(/*! ./_descriptors */ "+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "i/C/":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "exh5");
module.exports = __webpack_require__(/*! ../../modules/_core */ "FeBl").Object.setPrototypeOf;


/***/ }),

/***/ "iOEZ":
/*!*************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/icon/icon.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getWindow = __webpack_require__(/*! ../utils/get-window */ "mXZ2");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _shallowEqualObjects = __webpack_require__(/*! ../utils/shallow-equal-objects */ "xUq2");

var _shallowEqualObjects2 = _interopRequireDefault(_shallowEqualObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Display an Assembly icon.
 *
 * Besides providing a convenient shortcut, this component does the following:
 *
 * - Sets some accessibility props.
 * - Provides an `inline` mode that automatically sizes icons to match their
 *   surrounding text.
 */
var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setIconElement = function (element) {
      _this.iconElement = element;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Icon.prototype.componentDidMount = function componentDidMount() {
    this.setHeight();
  };

  Icon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _shallowEqualObjects2.default)(this.props, nextProps, ['passthroughProps']);
  };

  Icon.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setHeight();
  };

  Icon.prototype.setHeight = function setHeight() {
    if (this.props.inline && this.iconElement) {
      var lineHeight = (0, _getWindow2.default)().getComputedStyle(this.iconElement)['line-height'];
      this.iconElement.style.height = lineHeight;
    }
  };

  Icon.prototype.render = function render() {
    var props = this.props;


    var iconClasses = 'events-none icon';
    if (props.inline) {
      iconClasses += ' inline-block align-t';
    }

    var svgStyle = props.passthroughProps.style || {};
    if (!svgStyle.width && props.size) {
      svgStyle.width = props.size;
    }
    if (!svgStyle.height && props.size) {
      svgStyle.height = props.size;
    }

    var iconContent = _react2.default.createElement(
      'svg',
      (0, _extends3.default)({
        ref: this.setIconElement,
        role: 'presentation',
        focusable: 'false',
        className: iconClasses
      }, props.passthroughProps, {
        style: svgStyle
      }),
      _react2.default.createElement('use', {
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        xlinkHref: '#icon-' + props.name
      })
    );

    return iconContent;
  };

  return Icon;
}(_react2.default.Component);

exports.default = Icon;


Icon.propTypes = {
  /**
   * The name of the [Assembly icon](https://www.mapbox.com/assembly/icons/) that
   * you want to display.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * The width and height of the icon. All icons fill up a square space,
   * so this value will be applied to both width and height.
   *
   * If `inline: true`, the technical height will be controlled by the
   * line-height of the container, but the appearance of the icon will still
   * be in accordance with your `size` value (because it's limited by the
   * width).
   */
  size: _propTypes2.default.number,
  /**
   * If `true`, the icon will be adjusted after mounting so that its height
   * matches the line-height of its container. The result of this is that
   * the icon will not displace the text's established line-height and
   * will be vertically centered with the text alongside it.
   *
   * This is most useful when you are inserting the icon within multiline text,
   * so you can't use a flexbox layout to vertically center the icon and text.
   *
   * Be aware that there are edge cases that can cause problems with this
   * setting. For example, it won't work well if you don't have a `line-height`
   * set to a pixel value, or if there are dynamic adjustments to the
   * line-height.
   */
  inline: _propTypes2.default.bool,
  /**
   * Props to pass directly to the `<svg>` element.
   */
  passthroughProps: _propTypes2.default.object
};

Icon.defaultProps = {
  inline: false,
  passthroughProps: {},
  size: 18
};

/***/ }),

/***/ "kM2E":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "7KvD");
var core = __webpack_require__(/*! ./_core */ "FeBl");
var ctx = __webpack_require__(/*! ./_ctx */ "+ZMJ");
var hide = __webpack_require__(/*! ./_hide */ "hJx8");
var has = __webpack_require__(/*! ./_has */ "D2L2");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "kZVO":
/*!****************************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-batfish-helpers/browser/load-mapbox-assembly-js.js ***!
  \****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Ignored by ESLint because of the dynamic import.

module.exports = function loadMapboxAssemblyJs() {
  // Create an async chunk with Webpack by loading this with a dynamic import.
  if (typeof window !== 'undefined') {
    __webpack_require__.e/* import() */("assembly-js"/*! assembly-js */).then(__webpack_require__.bind(null, /*! @mapbox/mbx-assembly/dist/assembly.js */ "ycB/"));
  }
};


/***/ }),

/***/ "kiBT":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "i/C/"), __esModule: true };

/***/ }),

/***/ "lOnJ":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lTAx":
/*!**********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/get-scrollable-parents.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getScrollableParents;
// Adapted from https://github.com/HubSpot/tether/blob/master/src/js/utils.js
function getScrollableParents(element) {
  var position = getComputedStyle(element).position;
  if (position === 'fixed') return [];

  var parents = [];
  var parent = element.parentElement;

  while (parent) {
    var parentStyle = getComputedStyle(parent);

    var allOverflows = parentStyle.overflow + parentStyle.overflowY;
    if (/(auto|scroll|overlay)/.test(allOverflows)) {
      if (position !== 'absolute' || /(relative|absolute|fixed)/.test(parentStyle.position)) {
        parents.push(parent);
      }
      if (parentStyle.position === 'fixed') return parents;
    }

    parent = parent.parentElement;
  }

  parents.push(window);
  return parents;
}

/***/ }),

/***/ "lktj":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "Ibhu");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "mXZ2":
/*!********************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/utils/get-window.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = getWindow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For the purposes of correctly mocking the window object in Jest,
// this is a safe way of returning it for tests to work as expected.
function getWindow() {
  if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === undefined) {
    throw new Error('window not available');
  }

  return window;
}

/***/ }),

/***/ "n0T6":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "Ibhu");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "oM7Q":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "sF+V");
var $Object = __webpack_require__(/*! ../../modules/_core */ "FeBl").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "p/S3":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/src/components/button.js';var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);var _controlFile=__webpack_require__(/*! @mapbox/mr-ui/control-file */ "5tBN");var _controlFile2=_interopRequireDefault(_controlFile);var _util=__webpack_require__(/*! ../../scripts/util */ "6f/Z");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class Box extends _react2.default.Component{constructor(props){super(props);this.onClickingTweetButton=()=>{(0,_util.clickTweetButton)();};this.state={previewUrl:''};this.handleChange=this.handleChange.bind(this);}handleChange(filesArray){console.log(filesArray);const url=URL.createObjectURL(filesArray[0]);this.setState({previewUrl:url});}render(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:29},__self:this},_react2.default.createElement('div',{className:'flex-parent flex-parent--space-between-main pt12',__source:{fileName:_jsxFileName,lineNumber:30},__self:this},_react2.default.createElement('div',{className:'flex-child',__source:{fileName:_jsxFileName,lineNumber:31},__self:this},_react2.default.createElement(_controlFile2.default,{id:'name',initialDisplayValue:'Add Photo',themeControlFile:'btn',type:'file',onChange:this.handleChange,__source:{fileName:_jsxFileName,lineNumber:32},__self:this})),_react2.default.createElement('div',{className:'flex-child',__source:{fileName:_jsxFileName,lineNumber:40},__self:this},_react2.default.createElement('button',{className:'btn',onClick:this.onClickingTweetButton,__source:{fileName:_jsxFileName,lineNumber:41},__self:this},'Tweet'))),_react2.default.createElement('div',{className:'pt24',__source:{fileName:_jsxFileName,lineNumber:48},__self:this},_react2.default.createElement('img',{src:this.state.previewUrl,__source:{fileName:_jsxFileName,lineNumber:49},__self:this})));}}exports.default=Box;

/***/ }),

/***/ "p06+":
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/popover.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusTrap = __webpack_require__(/*! focus-trap */ "sHdP");

var _focusTrap2 = _interopRequireDefault(_focusTrap);

var _tabbable = __webpack_require__(/*! tabbable */ "0Orf");

var _tabbable2 = _interopRequireDefault(_tabbable);

var _isElementScrolledIntoView = __webpack_require__(/*! ./is-element-scrolled-into-view */ "Y9HL");

var _isElementScrolledIntoView2 = _interopRequireDefault(_isElementScrolledIntoView);

var _popoverPositioner = __webpack_require__(/*! ./popover-positioner */ "M6fy");

var _popoverPositioner2 = _interopRequireDefault(_popoverPositioner);

var _querySelectorContainsNode = __webpack_require__(/*! @mapbox/query-selector-contains-node */ "Q3/6");

var _querySelectorContainsNode2 = _interopRequireDefault(_querySelectorContainsNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popoverCounter = 0; // Incremented on creation

/**
 * Display a popover. The popover is positioned relative to an anchor element,
 * and the preferred position determined by props is adjusted according to the
 * available space.
 *
 * **Usually you won't need to use this low-level component.** You should have
 * a look at [Tooltip](#tooltip) and [PopoverTrigger](#popovertrigger).
 *
 * If you are using this component directly, you need to manage its open-closed
 * state. Use `onExit` to do that.
 *
 * The static function `Popover.repositionPopovers()` can be used to
 * automatically reposition *all the popovers that are currently open*. This is
 * useful if some state change other than a scroll or resize may have caused
 * the popover's anchor to move or the space available to the
 * popover to change.
 */

var Popover = function (_React$Component) {
  (0, _inherits3.default)(Popover, _React$Component);

  function Popover(props) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    popoverCounter += 1;
    _this.popoverId = popoverCounter;
    return _this;
  }

  Popover.prototype.componentWillMount = function componentWillMount() {
    // For focus management: focus will return to this element
    // when the popover is closed
    this.previouslyFocusedElement = document.activeElement;
  };

  Popover.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.hackListenerRemovers = [];
    if ('ontouchstart' in document.documentElement) {
      // Prevent a full-screen flash when there's a click.
      document.documentElement.style.WebkitTapHighlightColor = 'transparent';
      var bodyChildren = document.body.childNodes;

      var _loop = function _loop(i, l) {
        var node = bodyChildren[i];
        // Hack to fix click event bubbling in iOS
        // cf. https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        // Without this, a tap in iOS outside the popover will not close it.
        node.addEventListener('mouseover', noop);
        _this2.hackListenerRemovers.push(function () {
          node.removeEventListener('mouseover', noop);
        });
      };

      for (var i = 0, l = bodyChildren.length; i < l; i++) {
        _loop(i, l);
      }
    }
    // Listen for mousedown rather than click in the case that the Popover
    // trigger is an input. This ensures that onDocumentMousedown is called
    // first and does not unintentionally remove focus from the popover.
    document.addEventListener('mousedown', this.onDocumentMousedown);
    // Delay this focus because of
    // https://github.com/mapbox/www2.mapbox.com/issues/283
    // If you go from one popover to another, we need focus to
    // hit the first popover's trigger and *then* enter this popover's body
    this.focusBodyTimer = setTimeout(function () {
      _this2.maybeFocusPopover();
    }, 10);
  };

  Popover.prototype.componentDidUpdate = function componentDidUpdate() {
    // This is necessary if, for example, you've hovered over
    // a PopoverTrigger and *then* clicked it: it's already mounted
    // but only *now* should receive focus. Logic within maybeFocusPopover
    // will prevent us from re-focusing if we've already focused.
    this.maybeFocusPopover();
  };

  Popover.prototype.componentWillUnmount = function componentWillUnmount() {
    this.hackListenerRemovers.forEach(function (r) {
      return r();
    });
    document.removeEventListener('mousedown', this.onDocumentMousedown);
    if (this.focusBodyTimer) clearTimeout(this.focusBodyTimer);

    if (this.focusTrap) {
      this.focusTrap.deactivate();
      var previouslyFocusedElement = this.previouslyFocusedElement;
      // We must defer this call in order for a parent popover's
      // onBodyFocus method to pick up on the programmatic focus
      // https://github.com/facebook/react/issues/7835

      setTimeout(function () {
        // Only focus if it's visible, to avoid semi-mysterious scroll bouncing
        if (previouslyFocusedElement && (0, _isElementScrolledIntoView2.default)(previouslyFocusedElement)) {
          previouslyFocusedElement.focus();
        }
      }, 0);
    }
  };

  Popover.prototype.render = function render() {
    var props = this.props;

    var colors = getColors(props.coloring);
    var bodyClasses = (0, _classnames2.default)(colors.textClass + ' shadow-darken25 round', {
      'px12 py12': props.padding === 'medium',
      'px12 py6': props.padding === 'small'
    });

    return _react2.default.createElement(
      _popoverPositioner2.default,
      {
        getAnchorElement: props.getAnchorElement,
        hasPointer: props.hasPointer,
        placement: props.placement,
        alignment: props.alignment,
        pointerColor: colors.background,
        hideWhenAnchorIsOffscreen: props.hideWhenAnchorIsOffscreen,
        allowPlacementAxisChange: props.allowPlacementAxisChange,
        containWithinViewport: props.containWithinViewport,
        getContainingElement: props.getContainingElement,
        offsetFromAnchor: props.offsetFromAnchor,
        onElement: this.setPopoverElement
      },
      _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          key: 'body',
          style: { backgroundColor: colors.background },
          className: bodyClasses,
          onKeyDown: this.onBodyKeyDown,
          onFocus: this.onBodyFocus,
          'data-popover-id': this.popoverId,
          tabIndex: -1,
          role: 'dialog'
        }, props.passthroughProps),
        props.children
      )
    );
  };

  return Popover;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.maybeFocusPopover = function () {
    if (!_this3.bodyElement) return;
    var props = _this3.props;


    if (!_this3.focusTrap && props.trapFocus) {
      _this3.focusTrap = (0, _focusTrap2.default)(_this3.bodyElement, {
        escapeDeactivates: props.escapeCloses,
        clickOutsideDeactivates: props.clickOutsideCloses,
        returnFocusOnDeactivate: false,
        initialFocus: props.getInitialFocus ? props.getInitialFocus() : undefined,
        fallbackFocus: _this3.bodyElement
      });
      _this3.focusTrap.activate();
      return;
    }

    if (!_this3.hasReceivedFocus && props.receiveFocus) {
      _this3.hasReceivedFocus = true;
      var initialFocusNode = void 0;
      if (props.getInitialFocus) {
        initialFocusNode = props.getInitialFocus();
      } else {
        var tabbableNodes = (0, _tabbable2.default)(_this3.bodyElement, {
          includeContainer: true
        });
        initialFocusNode = tabbableNodes[0];
      }
      if (initialFocusNode && initialFocusNode.focus) {
        initialFocusNode.focus();
      }
    }
  };

  this.onDocumentMousedown = function (event) {
    var onExit = _this3.props.onExit;

    if (!_this3.bodyElement || !onExit) return;
    if (_this3.bodyElement.contains(event.target)) return;
    if (_this3.elementIsWithinChildPopover(event.target)) return;
    if (event.button === 2) return; // Ignore right-click mouse operation
    if ((0, _querySelectorContainsNode2.default)('[data-popover-ignore-clicks]', event.target)) return;
    if (_this3.props.ignoreClickWithinElement && _this3.props.ignoreClickWithinElement(event.target)) {
      return;
    }
    onExit();
  };

  this.onBodyKeyDown = function (event) {
    if (_this3.props.onExit && _this3.props.escapeCloses && event.key === 'Escape') {
      _this3.props.onExit();
    }
  };

  this.onBodyFocus = function () {
    if (!_this3.bodyElement) return;
    if (_this3.focusTrap) {
      _this3.focusTrap.unpause();
    }
  };

  this.elementIsWithinChildPopover = function (element) {
    var elementPopoverId = element.getAttribute('data-popover-id');
    if (elementPopoverId) {
      return Number(elementPopoverId) > _this3.popoverId;
    } else if (element.parentElement && element.parentElement !== document) {
      return _this3.elementIsWithinChildPopover(element.parentElement);
    }
    return false;
  };

  this.setPopoverElement = function (element) {
    _this3.bodyElement = element;
    if (_this3.props.onElement) _this3.props.onElement(element);
  };
};

exports.default = Popover;


Popover.propTypes = {
  /**
   * A function that returns the DOM node to which this Popover should be
   * anchored. `placement` and `alignment` values are related to this anchor.
   */
  getAnchorElement: _propTypes2.default.func.isRequired,
  /**
   * The content of the popover.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Preferred placement of the popover in relation to the anchor.
   * Adjusted according to available space.
   */
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Alignment of the popover relative to the side of the anchor on which
   * it's placed. If `placement` is `left` or `right`, meaningful `alignment`
   * values are `top`, `bottom`, and `center`. If `placement` is `top` or
   * `bottom`, meaningful `alignment` values are `left`, `right`, and `center`.
   * Adjusted according to available space.
   */
  alignment: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  /**
   * `'light'`, `'dark'`, or `'warning'`.
   */
  coloring: _propTypes2.default.oneOf(['light', 'dark', 'warning']),
  /**
   * `'medium'`, `'small'`, or `'none'`.
   */
  padding: _propTypes2.default.oneOf(['medium', 'small', 'none']),
  /**
   * Whether or not the popover has a triangle pointer.
   */
  hasPointer: _propTypes2.default.bool,
  /**
   * If `true`, the popover will hide when its anchor is scrolled offscreen.
   * By default, the popover will follow its anchor wherever it goes.
   *
   * If your anchor is within an  internally scrolling area, you may want to
   * use `true`, so the popover doesn't existing in a disembodied state after
   * its anchor is scrolled away.
   */
  hideWhenAnchorIsOffscreen: _propTypes2.default.bool,
  /**
   * If `false`, the popover is *not* allowed to change axes on the anchor when
   * modifying its position to fit available space. By default, popovers on the
   * `left` and `right`, for example, might change to `bottom` is there is
   * neither space on the left nor the right.
   */
  allowPlacementAxisChange: _propTypes2.default.bool,
  /**
   * If `false`, the tooltip is allowed to leave the viewport.
   * By default, it will stick to the edge of the viewport as its anchor
   * scrolls out of sight.
   */
  containWithinViewport: _propTypes2.default.bool,
  /**
   * If `false`, clicking outside the popver will not close it.
   * By default, it does.
   */
  clickOutsideCloses: _propTypes2.default.bool,
  /**
   * If `false`, hitting Escape will not close the popover. By default, it does.
   */
  escapeCloses: _propTypes2.default.bool,
  /**
   * If `true`, the popover will not receive focus when it opens.
   */
  receiveFocus: _propTypes2.default.bool,
  /**
   * If `true`, the popover will receive *and trap* focus when it opens.
   */
  trapFocus: _propTypes2.default.bool,
  /**
   * A function called when popover is dismissed. You need to use this callback
   * to remove the Popover from the rendered page.
   */
  onExit: _propTypes2.default.func,
  /**
   * A function to call as soon as popover element is rendered. Returns the DOM
   * node of the popover body.
   */
  onElement: _propTypes2.default.func,
  /**
   * A function that returns a DOM node. Use to specify which element should
   * receive focus when popover is first rendered.
   */
  getInitialFocus: _propTypes2.default.func,
  /**
   * A function called when an element within the popover is clicked.
   */
  ignoreClickWithinElement: _propTypes2.default.func,
  /**
   * A function that returns a DOM node that should contain the popover within
   * it. The popover's position will be calculated relative to this container,
   * rather than the viewport.
   */
  getContainingElement: _propTypes2.default.func,
  /**
   * Number of pixels by which the popover should be offset from its anchor.
   */
  offsetFromAnchor: _propTypes2.default.number,
  /**
   * Props to pass directly to the `<div>` that will wrap your popover content.
   */
  passthroughProps: _propTypes2.default.object
};

Popover.defaultProps = {
  coloring: 'light',
  placement: 'right',
  alignment: 'top',
  padding: 'medium',
  hasPointer: true,
  hideWhenAnchorIsOffscreen: false,
  allowPlacementAxisChange: true,
  containWithinViewport: true,
  clickOutsideCloses: true,
  escapeCloses: true,
  receiveFocus: true,
  trapFocus: false
};

Popover.repositionPopovers = _popoverPositioner2.default.recalculatePositions;

function noop() {}

function getColors(coloring) {
  if (coloring === 'dark') {
    return {
      background: '#273d56', // gray-dark
      textClass: 'color-white'
    };
  }
  if (coloring === 'warning') {
    return {
      background: '#FFF5A0', // yellow-light
      textClass: 'color-text'
    };
  }
  return {
    background: '#fff',
    textClass: 'color-text'
  };
}

/***/ }),

/***/ "pFYg":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "Zzip");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "5QVw");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "qKe3":
/*!************************************!*\
  !*** ./src/components/username.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Users/madisondraper/work-repos/react-tweet/src/components/username.js";var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// internal dependencies
class Box extends _react2.default.Component{render(){return _react2.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:8},__self:this},_react2.default.createElement("div",{className:"flex-child py12 px2",__source:{fileName:_jsxFileName,lineNumber:9},__self:this},_react2.default.createElement("div",{className:"txt-bold",__source:{fileName:_jsxFileName,lineNumber:10},__self:this},"Ash Ketchum"),_react2.default.createElement("div",{className:"txt-normal",__source:{fileName:_jsxFileName,lineNumber:13},__self:this},"@pokemonMaster")));}}exports.default=Box;

/***/ }),

/***/ "qio6":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "evD5");
var anObject = __webpack_require__(/*! ./_an-object */ "77Pl");
var getKeys = __webpack_require__(/*! ./_object-keys */ "lktj");

module.exports = __webpack_require__(/*! ./_descriptors */ "+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "rItC":
/*!**********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover/create-scroll-listener.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createScrollListener;
/**
 * Create a scroll listener debounced by requestAnimationFrame.
 *
 * @param {HTMLElement} element
 * @param {Function} callback
 * @return {Object} An object with `start()` and `stop()` functions.
 */
function createScrollListener(element, callback) {
  var ticking = false;

  function update() {
    ticking = false;
    callback();
  }

  function onScroll() {
    if (!ticking) requestAnimationFrame(update);
    ticking = true;
  }

  return {
    start: function start() {
      element.addEventListener('scroll', onScroll);
    },
    stop: function stop() {
      element.removeEventListener('scroll', onScroll);
    }
  };
}

/***/ }),

/***/ "sB3e":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "sF+V":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "kM2E");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "Yobk") });


/***/ }),

/***/ "sHdP":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "0Orf");
var xtend = __webpack_require__(/*! xtend */ "q+vg");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active || listeningFocusTrap !== trap) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "sp0P":
/*!*****************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/button/button.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(/*! classnames */ "HW6M");

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _xtend = __webpack_require__(/*! xtend */ "q+vg");

var _xtend2 = _interopRequireDefault(_xtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A good-looking button!
 *
 * The rendered element will be a `<button>` or an `<a>`, depending on whether
 * you provide an `href` prop or not. (You can also use the `component` prop to
 * render a different element altogether.)
 *
 * If you'd like to put an icon before or after the text of your button,
 * use [IconText](#icontext) for the content.
 */
var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Button.prototype.render = function render() {
    var _classnames;

    var props = applyVariant(this.props);

    var sizeSmall = props.size === 'small';
    var sizeMedium = props.size === 'medium';
    var sizeLarge = props.size === 'large';
    var widthFull = props.width === 'full';
    var widthSmall = props.width === 'small';
    var widthMedium = props.width === 'medium';
    var widthLarge = props.width === 'large';

    var classes = (0, _classnames3.default)('btn', (_classnames = {}, _classnames['btn--' + props.color] = props.color, _classnames['btn--stroke'] = props.outline, _classnames['btn--stroke--2'] = props.outline && !sizeSmall, _classnames.round = props.corners, _classnames['round-full'] = !props.corners, _classnames.h24 = sizeSmall, _classnames.py12 = sizeLarge, _classnames.py6 = sizeMedium, _classnames.px6 = widthSmall && sizeSmall, _classnames.px12 = widthMedium && sizeSmall || widthSmall && !sizeSmall, _classnames.px24 = widthLarge && sizeSmall || widthMedium && !sizeSmall, _classnames.px36 = !sizeSmall && widthLarge, _classnames['w-full block'] = widthFull, _classnames.block = props.block, _classnames['txt-s'] = !sizeSmall, _classnames['py3 txt-xs'] = sizeSmall, _classnames));

    var universalProps = (0, _xtend2.default)({
      className: classes,
      onClick: props.onClick,
      children: props.children
    }, props.passthroughProps);

    // "disabled" is not a valid attributes for anchors.
    var buttonProps = (0, _xtend2.default)(universalProps, { disabled: props.disabled });

    if (props.component) {
      return _react2.default.createElement(props.component, buttonProps);
    }

    if (props.href) {
      return _react2.default.createElement('a', (0, _extends3.default)({ href: props.href }, universalProps));
    }

    return _react2.default.createElement('button', (0, _extends3.default)({ type: 'button' }, buttonProps));
  };

  return Button;
}(_react2.default.Component);

var defaults = {
  color: 'blue',
  corners: false,
  outline: false,
  size: 'large',
  width: 'medium'
};
function applyVariant(props) {
  switch (props.variant) {
    case 'primary':
      return (0, _xtend2.default)(defaults, props);
    case 'secondary':
      return (0, _xtend2.default)(defaults, {
        outline: true
      }, props);
    case 'discouraging':
      return (0, _xtend2.default)(defaults, {
        color: 'gray',
        outline: true
      }, props);
    case 'destructive':
      return (0, _xtend2.default)(defaults, {
        color: 'red'
      }, props);
    case 'appPrimary':
      return (0, _xtend2.default)(defaults, {
        color: 'gray',
        size: 'small',
        width: 'small',
        corners: true
      }, props);
    case 'appSecondary':
      return (0, _xtend2.default)(defaults, {
        color: 'gray',
        size: 'small',
        width: 'small',
        corners: true,
        outline: true
      }, props);
  }
}

Button.propTypes = {
  /**
   * The button's content. A string is recommended, but you can put an element
   * in here if you think that's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s. ([IconText](#icontext) is
   * inline-level.)
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * A keyword identifying the standard button styling variant to use.
   *
   * *The variant is a starting point*: all of the other styling props can be
   * used to override details.
   *
   * The following variants are available:
   *
   * - `"primary"`: For primary actions.
   * - `"secondary"`: For secondary actions.
   * - `"discouraging"`: For downplayed actions, the ones people shouldn't
   *   usually want to perform, like cancelling instead of confirming.
   * - `"destructive"`: For destructive actions, like deleting something.
   * - `"appPrimary"`: For primary actions in dense apps.
   * - `"appSecondary"`: For secondary actions in dense apps.
   */
  variant: _propTypes2.default.oneOf(['primary', 'secondary', 'discouraging', 'destructive', 'appPrimary', 'appSecondary']),
  /**
   * A callback that receives the click event.
   *
   * You definitely need this if you don't use `href`; but you can also provide
   * both `onClick` and `href`, and `onClick` will be called when the `<a>` is
   * clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * A URL. If `href` is provided, the button will be an `<a>`.
   */
  href: _propTypes2.default.string,
  /**
   * The size of the button: `"small"`, `"medium"`, or `"large"`.
   *
   * This accounts for height, outline thickness, text size, and other details.
   *
   * This will override whichever defaults are set by your `variant` of choice.
   */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  /**
   * The width of the button: `"small"`, `"medium"`, `"large"`, or `"full"`.
   * For every option but `"full"` this prop determines horizontal padding.
   * `"full"` sets the button to fill the width of its container.
   *
   * This is distinguished from `size` because buttons of the same general size
   * can vary by width.
   *
   * This will override whichever defaults are set by your `variant` of choice.
   */
  width: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full']),
  /**
   * If `true`, the button will be outlined instead of filled with color.
   */
  outline: _propTypes2.default.bool,
  /**
   * The Assembly color of the button.
   */
  color: _propTypes2.default.string,
  /**
   * If `true`, the button will have (slightly rounded) corners instead of
   * the full curve they have by default.
   */
  corners: _propTypes2.default.bool,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout, if you don't
   * want the extra line-height that wraps inline elements. Typically, you
   * should only set `block` to `true` if the parent element is controlling
   * width (in a layout that uses flexbox, absolute positioning, or floats).
   */
  block: _propTypes2.default.bool,
  /**
   * Is it disabled?
   */
  disabled: _propTypes2.default.bool,
  /**
   * An alternate component to render in the style of a button. If the value is
   * a string, it must refer to a DOM element, like `"div"`. Otherwise, it
   * can be a React component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  /**
   * An object of props that you want to pass through to the element that
   * Button renders. This can be useful if you want to disable
   * the button, assign an ID for testing, add an ARIA attribute, toss in some
   * custom style properties, etc.
   */
  passthroughProps: _propTypes2.default.object
};

Button.defaultProps = {
  variant: 'primary',
  block: false,
  disabled: false
};

exports.default = Button;

/***/ }),

/***/ "tD78":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/control-wrapper/control-wrapper.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _maybeAddPeriod = __webpack_require__(/*! ../utils/maybe-add-period */ "XlTX");

var _maybeAddPeriod2 = _interopRequireDefault(_maybeAddPeriod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlWrapper = function (_React$PureComponent) {
  (0, _inherits3.default)(ControlWrapper, _React$PureComponent);

  function ControlWrapper() {
    (0, _classCallCheck3.default)(this, ControlWrapper);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
  }

  ControlWrapper.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        themeControlWrapper = _props.themeControlWrapper,
        validationError = _props.validationError;


    var errorEl = null;
    if (validationError) {
      var validationErrorId = this.props.id + '-error';
      var errorBody = typeof validationError === 'string' ? (0, _maybeAddPeriod2.default)(validationError) : validationError;
      errorEl = _react2.default.createElement(
        'div',
        {
          className: 'bg txt-s mt3 py6 px12 bg-red-faint round border border--red color-red',
          id: validationErrorId,
          'data-test': validationErrorId
        },
        errorBody
      );
    }

    var wrapperClasses = 'relative ' + themeControlWrapper;

    return _react2.default.createElement(
      'div',
      { className: wrapperClasses },
      children,
      _react2.default.createElement(
        'div',
        { role: 'alert' },
        errorEl
      )
    );
  };

  return ControlWrapper;
}(_react2.default.PureComponent);

ControlWrapper.propTypes = {
  /** Should correspond to the identifier of the input. */
  id: _propTypes2.default.string.isRequired,
  /**
   * If provided, the value of this property will show up as an error message.
   * Strings will end with periods.
   */
  validationError: _propTypes2.default.node,
  /** The contents the controlWrapper contains */
  children: _propTypes2.default.node,
  /** A space separated list of Assembly class names to override the existing presentation. */
  themeControlWrapper: _propTypes2.default.string
};
ControlWrapper.defaultProps = {
  themeControlWrapper: ''
};
exports.default = ControlWrapper;

/***/ }),

/***/ "tHMe":
/*!***********************************!*\
  !*** ./src/components/textbox.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Users/madisondraper/work-repos/react-tweet/src/components/textbox.js';var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// internal dependencies
class Box extends _react2.default.Component{render(){return _react2.default.createElement('div',{className:'txt-em txt-light',__source:{fileName:_jsxFileName,lineNumber:8},__self:this},_react2.default.createElement('textarea',{placeholder:'How many pokemon did you see today?',className:'textarea',__source:{fileName:_jsxFileName,lineNumber:9},__self:this}));}}exports.default=Box;

/***/ }),

/***/ "vFc/":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");
var toLength = __webpack_require__(/*! ./_to-length */ "QRG4");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "vIB/":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "O4g8");
var $export = __webpack_require__(/*! ./_export */ "kM2E");
var redefine = __webpack_require__(/*! ./_redefine */ "880/");
var hide = __webpack_require__(/*! ./_hide */ "hJx8");
var Iterators = __webpack_require__(/*! ./_iterators */ "/bQp");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "94VQ");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "e6n0");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "PzxK");
var ITERATOR = __webpack_require__(/*! ./_wks */ "dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "vJkS":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/popover-trigger/popover-trigger.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _hoverintent = __webpack_require__(/*! hoverintent */ "vscU");

var _hoverintent2 = _interopRequireDefault(_hoverintent);

var _popover = __webpack_require__(/*! ../popover */ "+ZBp");

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';

/**
 * A smart trigger for managing the state of a [Popover](#popover).
 *
 * If you want to manage the open-closed state of the Popover yourself,
 * use [Popover](#popover) directly.
 *
 * `respondsToClick`, `respondsToHover`, and `respondsToFocus` props determine
 * the means of opening and closing the Popover with interactions. If you open
 * the Popover with a hover or focus, you can also close it by hovering away or
 * blurring. If, however, you open the Popover with a click, you can only close
 * it with another click, on the trigger or outside the Popover. If you
 * open the Popover with a hover and *then* you click, this is equivalent to
 * opening it with a click directly, so it will only close with another
 * click (not from just hovering away).
 */

var PopoverTrigger = function (_React$Component) {
  (0, _inherits3.default)(PopoverTrigger, _React$Component);

  function PopoverTrigger() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: false,
      activeTriggerType: null
    }, _this.openPopover = function (trigger, callback) {
      var alreadyOpen = !!_this.state.visible;
      _this.setState({
        visible: true,
        activeTriggerType: trigger
      }, function () {
        if (!alreadyOpen && _this.props.onPopoverOpen) {
          _this.props.onPopoverOpen();
        }
        if (callback) callback();
      });
    }, _this.closePopover = function (callback) {
      var alreadyClosed = !_this.state.visible;
      _this.setState({
        visible: false,
        activeTriggerType: null
      }, function () {
        if (!alreadyClosed && _this.props.onPopoverClose) {
          _this.props.onPopoverClose();
        }
        if (callback) callback();
      });
    }, _this.onAnyClick = function (event) {
      // If the trigger responds to focus but not click and you *first*
      // focus *then* click, that click closes the popover instead of
      // leaving it open even when the mouse moves away.
      if (!_this.props.respondsToClick && _this.state.visible && _this.state.activeTriggerType === TRIGGER_FOCUS) {
        _this.hide();
        return;
      }

      if (!_this.hoverIsBlocked && (_this.props.disabled || !_this.props.respondsToClick)) {
        return;
      }

      // A trigger click always takes precedence over hover or focus interactions.
      // If the popover is already open by hover or focus, a click will change its
      // priorities, so it stays open even if you mouseleave or blur
      if (_this.state.visible && _this.state.activeTriggerType === TRIGGER_CLICK && (!_this.popoverElement || !_this.popoverElement.contains(event.target))) {
        _this.hide();
      } else {
        _this.showBecauseClick();
      }
    }, _this.blockHover = function () {
      if (!_this.hoverIsBlocked) {
        _this.hoverIsBlocked = true;
        _this.addMouseMoveUnblockTimeout = setTimeout(function () {
          document.addEventListener('mousemove', _this.unblockHover);
        }, 100);
      }
    }, _this.unblockHover = function () {
      if (_this.hoverIsBlocked) {
        _this.hoverIsBlocked = false;
        document.removeEventListener('mousemove', _this.unblockHover);
      }
    }, _this.onTriggerMouseEnter = function () {
      if (_this.props.disabled || !_this.props.respondsToHover || _this.state.activeTriggerType && _this.state.activeTriggerType !== TRIGGER_HOVER || _this.hoverIsBlocked) {
        return;
      }

      _this.showBecauseHover();
    }, _this.onTriggerMouseLeave = function (event) {
      if (_this.props.disabled || !_this.props.respondsToHover || _this.state.activeTriggerType !== TRIGGER_HOVER || _this.hoverIsBlocked) {
        return;
      }

      // When you hover over the popover, you do not want to disappear from beneath
      // your cursor. This keeps the popover open when your cursor is within it.
      if (!_this.popoverElement || !_this.popoverElement.contains(event.relatedTarget)) {
        _this.hideBecauseHover();
      }
    }, _this.onPopoverMouseLeave = function (event) {
      if (_this.props.disabled || !_this.props.respondsToHover || _this.state.activeTriggerType !== TRIGGER_HOVER || _this.hoverIsBlocked) {
        return;
      }

      if (!_this.triggerElement || !_this.triggerElement.contains(event.relatedTarget)) {
        _this.hideBecauseHover();
      }
    }, _this.onTriggerFocus = function () {
      if (_this.props.disabled || !_this.props.respondsToFocus || _this.state.visible || _this.triggerFocusIsBlocked) {
        return;
      }

      _this.showBecauseTriggerFocus();
    }, _this.onTriggerBlur = function () {
      if (_this.props.disabled || !_this.props.respondsToFocus || !_this.state.visible || _this.state.activeTriggerType !== TRIGGER_FOCUS) {
        return;
      }

      _this.hide();
    }, _this.onTriggerKeyDown = function (event) {
      var escapeCloses = _this.props.popoverProps.escapeCloses;
      if (escapeCloses === false) return;
      if (event.key === 'Escape') {
        _this.hide();
      }
    }, _this.showBecauseClick = function () {
      _this.clearTimeouts();
      _this.removePopoverListeners();
      _this.openPopover(TRIGGER_CLICK);
    }, _this.showBecauseHover = function () {
      _this.openPopover(TRIGGER_HOVER);
    }, _this.showBecauseTriggerFocus = function () {
      _this.clearTimeouts();
      _this.removePopoverListeners();
      _this.openPopover(TRIGGER_FOCUS);
    }, _this.hideBecauseHover = function () {
      _this.hide();
    }, _this.hide = function () {
      if (!_this.state.visible) return;
      _this.clearTimeouts();
      _this.removePopoverListeners();
      _this.closePopover();

      // If focus was inside the popover, after the popover closes focus will
      // return to the trigger. We need to prevent that from re-opening the
      // trigger.
      _this.triggerFocusIsBlocked = true;
      _this.cancelTriggerFocusIsBlockedTimeout = setTimeout(function () {
        _this.triggerFocusIsBlocked = false;
      }, 100);
    }, _this.removePopoverListeners = function () {
      var _this2 = _this,
          popoverElement = _this2.popoverElement;

      if (!popoverElement) return;
      popoverElement.removeEventListener('mouseleave', _this.onPopoverMouseLeave);
    }, _this.ignoreClickWithinElement = function (element) {
      if (_this.triggerElement && _this.triggerElement.contains(element)) return true;
      var ignoreClickWithinElement = _this.props.popoverProps.ignoreClickWithinElement;
      if (ignoreClickWithinElement) {
        return ignoreClickWithinElement(element);
      }
      return false;
    }, _this.getAnchorElement = function () {
      var getAnchorElement = _this.props.popoverProps.getAnchorElement;
      if (getAnchorElement) {
        return getAnchorElement();
      }
      return _this.triggerElement.firstChild;
    }, _this.setTriggerElement = function (element) {
      _this.triggerElement = element;
    }, _this.setPopoverElement = function (element) {
      _this.popoverElement = element;
    }, _this.getPopoverContent = function () {
      var content = _this.props.content;

      if (typeof content === 'function') {
        return content();
      } else {
        return content;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PopoverTrigger.prototype.componentDidMount = function componentDidMount() {
    if (!this.triggerElement) return;
    this.triggerElement.addEventListener('touchstart', this.blockHover);
    this.triggerElement.addEventListener('mouseout', this.onTriggerMouseLeave);
    this.hoverListener = (0, _hoverintent2.default)(this.triggerElement, this.onTriggerMouseEnter, function () {});
  };

  PopoverTrigger.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var popoverElement = this.popoverElement;

    var justOpened = prevState.visible === false && this.state.visible === true;

    if (justOpened && popoverElement &&
    // If the popover was opened by hover, pay attention to hovering
    // within the popover itself
    this.state.activeTriggerType === TRIGGER_HOVER) {
      popoverElement.addEventListener('mouseleave', this.onPopoverMouseLeave);
    }

    if (!prevProps.disabled && this.props.disabled) {
      this.hide();
    }
  };

  PopoverTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.hoverListener.remove();
    this.triggerElement.removeEventListener('touchstart', this.blockHover);
    document.removeEventListener('mousemove', this.unblockHover);
    this.clearTimeouts();
  };

  // We need to prevent a touch-tap on the trigger from triggering the hover
  // interaction. So if you touchstart, we immediately block responses to hover
  // interactions; then after a short delay (to allow the event to flush?), we
  // re-allow hover interactions —— in case you're a crazy person and switch
  // from a touchscreen to a mouse.


  // Hover and focus interactions do not overlap: if the popover opened because
  // of a hover (and no clicking), it will only close when you mouseleave;
  // and if it opened because of a focus (and no clicking), it will only close
  // when you blur.

  // This can override a popover-hover trigger type because you might mouseleave
  // the popover onto the trigger


  PopoverTrigger.prototype.clearTimeouts = function clearTimeouts() {
    if (this.cancelTriggerFocusIsBlockedTimeout) clearTimeout(this.cancelTriggerFocusIsBlockedTimeout);
    if (this.addMouseMoveUnblockTimeout) clearTimeout(this.addMouseMoveUnblockTimeout);
  };

  PopoverTrigger.prototype.render = function render() {
    var props = this.props,
        state = this.state;


    var popover = null;
    if (state.visible) {
      // Only send focus inside if we've clicked to open
      var receiveFocus = props.receiveFocus && state.activeTriggerType === TRIGGER_CLICK;
      var trapFocus = props.trapFocus && state.activeTriggerType === TRIGGER_CLICK;

      popover = _react2.default.createElement(
        _popover2.default,
        (0, _extends3.default)({
          onExit: this.hide
        }, props.popoverProps, {
          getAnchorElement: this.getAnchorElement,
          ignoreClickWithinElement: this.ignoreClickWithinElement,
          receiveFocus: receiveFocus,
          trapFocus: trapFocus,
          onElement: this.setPopoverElement
        }),
        this.getPopoverContent()
      );
    }

    // Tooltips need to the popover content to be present in the DOM
    // with the appropriate id, so aria-labelledby will work
    var hiddenContent = null;
    if (!state.visible && props.renderHiddenContent) {
      hiddenContent = _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: 'hide-visually'
        }, this.props.popoverProps.passthroughProps || {}),
        this.getPopoverContent()
      );
    }

    var classes = (0, _classnames2.default)({
      block: props.block,
      'inline-block': !props.block
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({
        ref: this.setTriggerElement,
        className: classes
      }, props.passthroughTriggerProps, {
        onClick: this.onAnyClick,
        onFocus: this.onTriggerFocus,
        onBlur: this.onTriggerBlur,
        onKeyDown: this.onTriggerKeyDown
      }),
      props.children,
      hiddenContent,
      popover
    );
  };

  return PopoverTrigger;
}(_react2.default.Component);

exports.default = PopoverTrigger;


PopoverTrigger.propTypes = {
  /**
   * The trigger content. This can either be a string or valid JSX.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout.
   */
  block: _propTypes2.default.bool,
  /**
   * The popover content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  /**
   * **You will not need to use this.** This prop is used by
   * [Tooltip](#tooltip) for improved accessbility.
   *
   * If `true`, the popover will always be rendered *but it will be visually
   * hidden when inactive*.
   *
   * By default, the popover is added to and removed from the DOM dynamically.
   */
  renderHiddenContent: _propTypes2.default.bool,
  /**
   * Whether or not the popover receives focus when it opens.
   *
   * This will *only* happen if the trigger is opened with a click.
   */
  receiveFocus: _propTypes2.default.bool,
  /**
   * Whether or not the popover receives *and traps* focus when it opens.
   *
   * This will *only* happen if the trigger is opened with a click.
   */
  trapFocus: _propTypes2.default.bool,
  /**
   * Whether or not the trigger responds to clicks.
   *
   * **Warning**: You probably don't want to use `respondsToClick` and
   * `receivesFocus` *and* `respondsToFocus` all together, because they can
   * have clashing interactions. For example, when the popover that trapped
   * focus closes, it returns focus to the trigger, which then causes the
   * popover to open again.
   */
  respondsToClick: _propTypes2.default.bool,
  /**
   * Whether or not the trigger responds to `mouseenter` and `mouseleave` events.
   */
  respondsToHover: _propTypes2.default.bool,
  /**
   * Whether or not the trigger responds to `focus` and `blur` events.
   */
  respondsToFocus: _propTypes2.default.bool,
  /**
   * Whether or not the trigger is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Props to pass directly to the [Popover](#popover) component. See Popover's
   * documentation for details.
   */
  popoverProps: _propTypes2.default.object,
  /**
   * Props to pass directly to the `<div>` that will wrap your trigger content.
   */
  passthroughTriggerProps: _propTypes2.default.object,
  /**
   * Callback that is invoked when the popover opens.
   */
  onPopoverOpen: _propTypes2.default.func,
  /**
   * Callback that is invoked when the popover closes.
   */
  onPopoverClose: _propTypes2.default.func
};

PopoverTrigger.defaultProps = {
  block: false,
  disabled: false,
  renderHiddenContent: false,
  receiveFocus: true,
  trapFocus: false,
  respondsToClick: true,
  respondsToHover: false,
  respondsToFocus: false,
  popoverProps: {}
};

/***/ }),

/***/ "vscU":
/*!*******************************************!*\
  !*** ./node_modules/hoverintent/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(el, onOver, onOut) {
  var x, y, pX, pY;
  var h = {},
    state = 0,
    timer = 0;

  var options = {
    sensitivity: 7,
    interval: 100,
    timeout: 0
  };

  function delay(el, e) {
    if (timer) timer = clearTimeout(timer);
    state = 0;
    return onOut.call(el, e);
  }

  function tracker(e) {
    x = e.clientX;
    y = e.clientY;
  }

  function compare(el, e) {
    if (timer) timer = clearTimeout(timer);
    if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
      state = 1;
      return onOver.call(el, e);
    } else {
      pX = x;
      pY = y;
      timer = setTimeout(function() {
        compare(el, e);
      }, options.interval);
    }
  }

  // Public methods
  h.options = function(opt) {
    options = Object.assign({}, options, opt);
    return h;
  };

  function dispatchOver(e) {
    if (timer) timer = clearTimeout(timer);
    el.removeEventListener('mousemove', tracker, false);

    if (state !== 1) {
      pX = e.clientX;
      pY = e.clientY;

      el.addEventListener('mousemove', tracker, false);

      timer = setTimeout(function() {
        compare(el, e);
      }, options.interval);
    }

    return this;
  }

  function dispatchOut(e) {
    if (timer) timer = clearTimeout(timer);
    el.removeEventListener('mousemove', tracker, false);

    if (state === 1) {
      timer = setTimeout(function() {
        delay(el, e);
      }, options.timeout);
    }

    return this;
  }

  h.remove = function() {
    if (!el) return;
    el.removeEventListener('mouseover', dispatchOver, false);
    el.removeEventListener('mouseout', dispatchOut, false);
  };

  if (el) {
    el.addEventListener('mouseover', dispatchOver, false);
    el.addEventListener('mouseout', dispatchOut, false);
  }

  return h;
};


/***/ }),

/***/ "vuZI":
/*!**************************************!*\
  !*** ./node_modules/prefix/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// check document first so it doesn't error in node.js
var style = typeof document != 'undefined'
  ? document.createElement('p').style
  : {}

var prefixes = ['O', 'ms', 'Moz', 'Webkit']
var upper = /([A-Z])/g
var memo = {}

/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefix(key){
  // Camel case
  key = key.replace(/-([a-z])/g, function(_, char){
    return char.toUpperCase()
  })

  // Without prefix
  if (style[key] !== undefined) return key

  // With prefix
  var Key = key.charAt(0).toUpperCase() + key.slice(1)
  var i = prefixes.length
  while (i--) {
    var name = prefixes[i] + Key
    if (style[name] !== undefined) return name
  }

  return key
}

/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixMemozied(key){
  return key in memo
    ? memo[key]
    : memo[key] = prefix(key)
}

/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixDashed(key){
  key = prefix(key)
  if (upper.test(key)) {
    key = '-' + key.replace(upper, '-$1')
    upper.lastIndex = 0
  }
  return key.toLowerCase()
}

module.exports = prefixMemozied
module.exports.dash = prefixDashed


/***/ }),

/***/ "wakt":
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/tooltip/tooltip.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "GiK3");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(/*! ../button */ "34hi");

var _button2 = _interopRequireDefault(_button);

var _popoverTrigger = __webpack_require__(/*! ../popover-trigger */ "eDq/");

var _popoverTrigger2 = _interopRequireDefault(_popoverTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tooltipCounter = 0;

/**
 * Wrap a trigger element so that when it is hovered or focused a tooltip
 * appears.
 *
 * Tooltip extends [PopoverTrigger](#popovertrigger) and configures the
 * popover and trigger for accessibility.
 */

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: false,
      tooltipId: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tooltip.prototype.componentDidMount = function componentDidMount() {
    // Save the application for the random generated id until after mount
    // so that it doesn't mess up the relation of static/dynamic React code.
    // Generating unique ids for server-rendered code without breaking
    // the checksum is very hard!
    tooltipCounter += 1;
    this.setState({ tooltipId: 'tooltip-' + tooltipCounter });
  };

  Tooltip.prototype.getContent = function getContent() {
    var content = this.props.content;

    if (typeof content === 'function') {
      return content();
    } else {
      return content;
    }
  };

  Tooltip.prototype.renderTrigger = function renderTrigger() {
    var _props = this.props,
        children = _props.children,
        testId = _props.testId;
    var tooltipId = this.state.tooltipId;


    if (!children) {
      return null;
    }

    var triggerProps = { 'aria-describedby': tooltipId };
    if (testId) {
      triggerProps['data-test'] = testId + '-trigger';
    }

    if (typeof children === 'function') {
      return children(triggerProps);
    }
    if (children.type && typeof children.type === 'string') {
      return _react2.default.cloneElement(children, triggerProps);
    }
    if (children.type && children.type === _button2.default) {
      return _react2.default.cloneElement(children, { passthroughProps: triggerProps });
    }
    throw new Error('Tooltip requires a child that is a function, a regular DOM node, or a Button. If your trigger is a different custom component, pass a function as the child.');
  };

  Tooltip.prototype.render = function render() {
    var props = this.props,
        state = this.state;


    var popoverPassthroughProps = {
      id: state.tooltipId,
      // Override the "dialog" role set by popover
      role: 'tooltip'
    };

    if (props.testId) {
      popoverPassthroughProps['data-test'] = props.testId + '-tooltip';
    }

    var bodyClasses = (0, _classnames2.default)({
      'txt-s': props.textSize === 's',
      'txt-xs': props.textSize === 'xs',
      wmax120: props.maxWidth === 'small',
      wmax240: props.maxWidth === 'medium'
    });

    var content = _react2.default.createElement(
      'div',
      { className: bodyClasses },
      this.getContent()
    );

    return _react2.default.createElement(
      _popoverTrigger2.default,
      {
        content: content,
        renderHiddenContent: true,
        disabled: props.disabled,
        block: props.block,
        respondsToClick: props.respondsToClick,
        respondsToHover: true,
        respondsToFocus: true,
        receiveFocus: false,
        popoverProps: {
          hasPointer: true,
          placement: props.placement,
          alignment: props.alignment,
          coloring: props.coloring,
          padding: props.padding,
          hideWhenAnchorIsOffscreen: true,
          passthroughProps: popoverPassthroughProps
        }
      },
      this.renderTrigger()
    );
  };

  return Tooltip;
}(_react2.default.Component);

exports.default = Tooltip;


Tooltip.propTypes = {
  /**
   * The trigger element.
   *
   * If your element is a DOM element
   * (e.g. `<button>`, `<a>`, `<span>`, `<div>`),
   * you can pass it directly and it will have accessibility-related props
   * automatically added to it.
   *
   * If your element is a custom React component, you need to provide a
   * function as the child. The function will be invoked with a `triggerProps`
   * object, and you need to apply those `triggerProps` in such a way that
   * they end up on the DOM element of the trigger.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]).isRequired,
  /**
   * The tooltip content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]).isRequired,
  /**
   * Placement of the tooltip in relation to the trigger element.
   */
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Alignment of the tooltip's edge in relation to the trigger element.
   */
  alignment: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  /**
   * If `true`, the tooltip will not appear.
   */
  disabled: _propTypes2.default.bool,
  /**
   * `'light'`, `'dark'`, or `'warning'`.
   */
  coloring: _propTypes2.default.oneOf(['light', 'dark', 'warning']),
  /**
   * `'xs'` (extra small), `'s'` (small), or `'none'` (no size class).
   */
  textSize: _propTypes2.default.oneOf(['xs', 's', 'none']),
  /**
   * `'small'`, `'medium'`, or `'none'` (no `wmax*` class).
   */
  maxWidth: _propTypes2.default.oneOf(['small', 'medium', 'none']),
  /**
   * `'small'` or `'none'`.
   */
  padding: _propTypes2.default.oneOf(['small', 'none']),
  /**
   * If `true`, tooltip can be opened with a mouse click.
   */
  respondsToClick: _propTypes2.default.bool,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout, if you don't
   * want the extra line-height that wraps inline elements. Typically, you
   * should only set `block` to `true` if the parent element is controlling
   * width (in a layout that uses flexbox, absolute positioning, or floats).
   */
  block: _propTypes2.default.bool,
  /**
   * Added as `data-test` to the tooltip element.
   */
  testId: _propTypes2.default.string
};

Tooltip.defaultProps = {
  placement: 'top',
  alignment: 'center',
  coloring: 'light',
  disabled: false,
  respondsToClick: false,
  padding: 'small',
  block: false,
  textSize: 's',
  maxWidth: 'medium'
};

/***/ }),

/***/ "woOf":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "V3tA"), __esModule: true };

/***/ }),

/***/ "xGkn":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "4mcu");
var step = __webpack_require__(/*! ./_iter-step */ "EGZi");
var Iterators = __webpack_require__(/*! ./_iterators */ "/bQp");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "xUq2":
/*!*******************************************************************!*\
  !*** ./node_modules/@mapbox/mr-ui/utils/shallow-equal-objects.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = shallowEqualObjects;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shallowEqualObjects(objA, objB) {
  var allowedObjectKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    var aVal = objA[key];
    var bVal = objB[key];
    if (allowedObjectKeys.indexOf(key) !== -1) {
      return shallowEqualObjects(aVal, bVal);
    }

    if ((typeof aVal === 'undefined' ? 'undefined' : (0, _typeof3.default)(aVal)) === 'object') {
      throw new Error('shallowEqualObjects can only compare objects whose values are primitives or functions, unless you allow for an object value with the allowedObjectKeys argument');
    }
    if (aVal !== bVal) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "xnc9":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "yfhn":
/*!*******************************!*\
  !*** ./src/components/box.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Users/madisondraper/work-repos/react-tweet/src/components/box.js";var _react=__webpack_require__(/*! react */ "GiK3");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class Box extends _react2.default.Component{constructor(){var _temp;return _temp=super(...arguments),this.render=()=>{return _react2.default.createElement("div",{className:"flex-child round shadow-darken10 px12 py12 txt-s bg-blue-faint w600",__source:{fileName:_jsxFileName,lineNumber:6},__self:this},this.props.children);},_temp;}}exports.default=Box;

/***/ }),

/***/ "zQR9":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "zwoO":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ })

});
//# sourceMappingURL=home.chunk.js.map