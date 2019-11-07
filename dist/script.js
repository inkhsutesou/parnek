/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_styles_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/styles.less */ \"./src/css/styles.less\");\n/* harmony import */ var _src_css_styles_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_css_styles_less__WEBPACK_IMPORTED_MODULE_0__);\nvar characters = __webpack_require__( /*! json-loader!yaml-loader!./data/characters.yaml */ \"./node_modules/json-loader/index.js!./node_modules/yaml-loader/index.js!./data/characters.yaml\" );\r\n\r\n\r\n\r\nconsole.log( characters );\r\n\r\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/styles.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/styles.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"*,\\n*:before,\\n*:after {\\n  --color-black: #222;\\n  --color-grey: #aaa;\\n  --color-bg: #e2d9cf;\\n}\\nbody {\\n  display: block;\\n  background-color: var(--color-bg);\\n}\\nli,\\nh3,\\nh4,\\nh5,\\nh2:not(.all) {\\n  height: 0;\\n  padding: 0;\\n  position: absolute;\\n  overflow: hidden;\\n}\\nul {\\n  padding-left: 3rem;\\n}\\nchore-node {\\n  white-space: pre;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  padding: 1vmax;\\n  background-color: rgba(255, 255, 255, 0.5);\\n}\\n.KE .kelaria-brightleaf,\\n.VY .vyse-vosenhaut,\\n.MU .mugnila-coppice,\\n.AD .adamah-machinist-ii,\\n.ALPHA .party-alpha,\\n.OMEGA .party-omega,\\n.DM li,\\n.DM h2,\\n.DM h3,\\n.DM h4,\\n.all + * li {\\n  height: auto;\\n  position: relative;\\n  overflow: visible;\\n}\\nimg.avatar {\\n  width: 1rem;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\ndmhero-image {\\n  display: block;\\n  width: 260px;\\n  height: 350px;\\n  overflow: hidden;\\n}\\ndmhero-image .imgFG {\\n  display: none;\\n}\\ndmhero-image > img {\\n  position: absolute;\\n}\\nimg[alt][title] {\\n  width: 50vw;\\n  margin: auto;\\n  display: block;\\n}\\n.toggle:hover > toggle-text {\\n  color: #ffbf00;\\n  cursor: pointer;\\n}\\n.toggle:hover > ul {\\n  color: initial;\\n  cursor: default;\\n}\\n.toggle[data-is-expand='false']:before {\\n  content: '[+]';\\n}\\nli.toggle[data-is-expand='false'] > ul {\\n  display: none;\\n}\\nh1.toggle[data-is-expand='false'] + div,\\nh2.toggle[data-is-expand='false'] + div,\\nh3.toggle[data-is-expand='false'] + div,\\nh4.toggle[data-is-expand='false'] + div,\\nh5.toggle[data-is-expand='false'] + div {\\n  display: none;\\n}\\n.toggle[data-is-expand='true']:before {\\n  content: '[-]';\\n}\\nli.toggle[data-is-expand='true'] > ul {\\n  display: list-item;\\n}\\nh1.toggle[data-is-expand='true'] + div,\\nh2.toggle[data-is-expand='true'] + div,\\nh3.toggle[data-is-expand='true'] + div,\\nh4.toggle[data-is-expand='true'] + div,\\nh5.toggle[data-is-expand='true'] + div {\\n  display: block;\\n}\\n.voice-icon:before {\\n  content: '💬';\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/styles.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/json-loader/index.js!./node_modules/yaml-loader/index.js!./data/characters.yaml":
/*!************************************************************************************!*\
  !*** ./node_modules/json-loader!./node_modules/yaml-loader!./data/characters.yaml ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"const\":[\"Kelaria Brightleaf\",\"Vorux Elk\",\"Adamah / Machinist II\",\"Ashe Gillain / Abelas Elgara\",\"Vyse Vosenhaut\",\"Mugnila Coppice\",\"Din Kthyr\"],\"characters\":[{\"name\":\"template\",\"tags\":[\"race\",\"job\",\"history\"],\"seen\":\"location\",\"notes\":\"didAThing\\nknownForThis\"},{\"name\":\"Viona Vosenhaut\",\"tags\":[\"human\",\"fighter\",\"nobility\"],\"seen\":\"Orn'tal\",\"notes\":\"Fiona Fox Endtrot\"},{\"name\":\"Bemela Cobbelin\",\"tags\":[\"human\",\"cobbelin\",\"nobility\"],\"seen\":\"Orn'tal\",\"notes\":\"- Eldest Sister (1st)\\n- Fierce Warrior\"},{\"name\":\"Imaena Cobbelin\",\"tags\":[\"human\",\"cobbelin\",\"nobility\"],\"seen\":\"Orn'tal\",\"notes\":\"- Younger Sister (2nd)\\nBetrothed to Vyse Vosenhaut\"},{\"name\":\"Velene Balefrost\",\"tags\":[\"Elf\",\"Bookbinder\",\"Telehorn Outpost\"],\"seen\":\"Telehorn Outpost\",\"notes\":\"Turned to dust, and made into a pile\"},{\"name\":\"Kelaria Brightleaf\",\"url\":\"https://cdn.discordapp.com/attachments/615943709225123891/627980788520189967/Kelaria_commission_2_merge1_final.png\",\"events\":[{\"limit\":\"Kelaria Brightleaf\"},{\"Prelude\":[\"Brightleafs stayed in Marigrun since it was destroyed\",{\"block\":\"Kelaria Brightleaf\"},\"Know that this is Boldrei's place of power\",\"Keep secret for enemies of Boldrei\",{\"allow\":\"Kelaria Brightleaf\"},\"Established a clinic, treat injured, take donations\",\"Family is networked, friends, relatives\",\"Mother moved to Tierbern, became farmer\",\"Met father became Tavenkeeper\"]},{\"12 Years\":[\"Felt Connection with Boldrei\",\" I wish you were never born \",\"Prayed for Kaliopa's return\",\"Vision of Kaliopa in a cave\",\"Kidnapped by Criminals\",\"Healed sister\"]}],\"spoilers\":[\"sister is the chosen one\",\"kelaria is accused of witchcraft\",\"sister is killed\",\"boldrei reveals history\",\"dragon is waking\"]},{\"name\":\"Kaliopa Brightleaf\",\"tags\":[\"halfling\",\"cleric\",\"brightleaf\"],\"seen\":\"marigrun\",\"events\":[{\"limit\":\"Kelaria Brightleaf\"},{\"7 Years\":[\"Argued with Kelaria\",\" I wish you were never born \",\"Ran away\",\"2 Nights\",{\"block\":\"Kelaria Brightleaf\"},\"Kidnapped by the cult of Kankit Gilgeam Yei`yoot\",\"Possessed by Demon, given charm of praise\",{\"allow\":\"Kelaria Brightleaf\"}]}],\"notes\":\"\"},{\"name\":\"Vorux Elk\",\"tags\":[\"elf\",\"criminal\"],\"events\":[{\"limit\":\"Vorux Elk\"}]},{\"name\":\"Mariria Zethergyll\",\"tags\":[\"human\",\"prostitute\",\"criminal\"],\"seen\":\"thornwell\",\"events\":[{\"limit\":\"Vorux Elk\"},\"Slept with Vorux\",\"Tries to pay off her whoremonger for freedom\"]},{\"name\":\"Beattle Beattle, the Bornescht Beetle\",\"tags\":[\"alchemy\",\"orc\"],\"notes\":\"Bred and Trained for the entertainment of Orcs\\nBeattle dominated the arena near Griffinfire Hamlet\\nWinning his Orc many bets, he was captured by\\n*alp\\nAnd now finds adventure with his new allies\"},{\"name\":\"Detla Kamice\",\"tags\":[\"ranger\"]},{\"name\":\"Anton Filbersh\",\"tags\":[\"prarios\",\"ranger\"],\"notes\":\"Running away from heartbreak with Detla Kamice\"},{\"name\":\"Jeritt Vambala\",\"tags\":[\"criminal\",\"murderer\",\"redeemed\"]},{\"name\":\"Jeritt Vambala\",\"tags\":[\"criminal\",\"murderer\",\"redeemed\"]},{\"name\":\"Kadu Kalanar\",\"tags\":[\"royalty\",\"kalanar\",\"mainland\",\"hunter\"],\"seen\":\"Loremoss Woods\",\"events\":[\"attacks bear\",\"party stops\"]},{\"name\":\"Aevan Armanci\",\"tags\":[\"criminal\",\"bandit\",\"dead\"],\"seen\":\"Constable Tower\"},{\"name\":\"Boldrei, Goddess of Protection\",\"tags\":[\"deity\",\"protection\",\"boldrei\"],\"notes\":\"Followers wear Blue / Orange\"},{\"name\":\"Kankit Gilgeam Yei`yoot\",\"tags\":[\"patron\",\"demon\"],\"spoilers\":null},{\"name\":\"Markus Lynchfield\",\"tags\":[\"human\",\"tinkerer\",\"mentor\"],\"seen\":\"orn'tal\",\"events\":[\"purchased / revived adamah\",\"hacked to only use machinist\",\"taught vosenhaut children science\"]},{\"name\":\"Theo ???\"},{\"name\":\"Adamah / Machinist II\",\"tags\":[\"artificer\"],\"data\":[\"Warforged\"],\"spoilers\":[\"Finds memory banks\",\"Other OS takes over when unconscious\",\"Realizes Vyse Vosenhaut is not manufacturer\",\"Theo is a small warforged and saves him\"]},{\"name\":\"Alarcion Stormwolf\",\"tags\":[\"royalty\",\"ravensong fort\",\"orn'tal\"],\"data\":[\"Elf, Male\",\"King of Ravensong Fort\",\"Falls in Love with Lagazi Elgara\",\"Impregnates\"]},{\"name\":\"Caerlos Fletcher\",\"data\":[\"Scribe\",\"Failed Adventurer\",[\"Brought\",\"bookCaHe\",\"to Din Kthyr\"]]},{\"name\":\"Lagazi Elgara\",\"data\":[\"Elf, Female\",\"Royal Concubine of Ravensong Fort\",\"Falls in Love with Alarcion Stormwolf\",\"Pregnant\",\"Leaves Ravensong Fort due to Political Toxicity\",\"Gives birth to Ashe Gillain\",\"Passes daughter to Myla Gillain\"]},{\"name\":\"Myla Gillain\",\"data\":[\"Elf, Female\",\"Soldier of Ravensong Fort\",\"Ashe Gillain's adoptive mother\"]},{\"name\":\"Snorre Umbermoor\",\"data\":[\"Human, Male\",\"Marries Myla Gillain\",\"Dies saving Ashe Gillain\"]},{\"name\":\"Haesoe Umbermoor, the Half-elf Brother\",\"data\":[\"5 Years younger\"]},{\"name\":\"Ashe Gillain / Abelas Elgara\",\"alias\":[\"Abelas Elgara\",\"Sorrow of the Sun\"],\"tags\":[\"player\"],\"data\":null,\"spoilers\":[\"Finds Cult, and brother\",\"Brother is Evil\",\"Cult is looking for Viona Vosenhaut\",\"Is offered Warlock Pact by the Ear\"],\"notes\":\"\"},{\"name\":\"Vyse Vosenhaut\",\"skills\":[{\"smile\":4}],\"spoilers\":[\"middle sister contacts in a dream\"]},{\"name\":\"Mugnila Coppice\",\"skills\":[{\"healing word\":[7,\"+1hr\",\"-1hd\"]}],\"goods\":[\"Rememberance Stone\"],\"spoilers\":[\"grandmother isn't dead\",\"join moon hemlock\",\"blood required to sleep the dragon\"]},{\"name\":\"Theodorus Kathyr\"},{\"name\":\"Sophya Kathyr\"},{\"name\":\"Daemiin Vrye\"},{\"name\":\"Din Kthyr\",\"tags\":[\"player\"],\"data\":null,\"spoilers\":[\"Meets with undead Din\",\"Finds parents\",\"Comes upon the temple in Marigrun\",\"Knows all languages required\",\"Ends up having to choose between parents and releasing the Dins\"],\"notes\":\"\"}]}\n\n//# sourceURL=webpack:///./data/characters.yaml?./node_modules/json-loader!./node_modules/yaml-loader");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/styles.less":
/*!*****************************!*\
  !*** ./src/css/styles.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./styles.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/styles.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/styles.less?");

/***/ })

/******/ });