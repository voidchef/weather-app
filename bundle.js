/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/_lib/requiredArgs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/requiredArgs/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = requiredArgs;\n\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/toInteger/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/toInteger/index.js ***!
  \*******************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = toInteger;\n\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/fromUnixTime/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fromUnixTime/index.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = fromUnixTime;\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/toDate/index.js\"));\n\nvar _index2 = _interopRequireDefault(__webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/_lib/toInteger/index.js\"));\n\nvar _index3 = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/_lib/requiredArgs/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\nfunction fromUnixTime(dirtyUnixTime) {\n  (0, _index3.default)(1, arguments);\n  var unixTime = (0, _index2.default)(dirtyUnixTime);\n  return (0, _index.default)(unixTime * 1000);\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/toDate/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/toDate/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = toDate;\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/_lib/requiredArgs/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0, _index.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/toDate/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/components/weather.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ \"./src/components/search.js\");\n/* harmony import */ var _unitChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitChange */ \"./src/components/unitChange.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/components/utils.js\");\n\n\n\n\n\nconst render = (() => {\n  let data;\n\n  const current = () => {\n    const location = document.querySelector(\".location\");\n    const weatherDesc = document.querySelector(\".weatherDesc\");\n    const temp = document.querySelector(\".temp\");\n    const highLow = document.querySelector(\".highLow\");\n\n    location.innerHTML = _search__WEBPACK_IMPORTED_MODULE_1__.search.getInput();\n    weatherDesc.innerHTML = data.current.weather[0].main;\n    temp.innerHTML = `${data.current.temp}°`;\n    highLow.innerHTML = `H: ${\n      data.daily[0].temp.min\n    }° ${_unitChange__WEBPACK_IMPORTED_MODULE_2__.unitChange.getUnit()}<br />L: ${\n      data.daily[0].temp.max\n    }° ${_unitChange__WEBPACK_IMPORTED_MODULE_2__.unitChange.getUnit()}`;\n  };\n\n  const twentyFour = () => {\n    const container = document.querySelector(\".twentyFour\");\n    const offset = data.timezone_offset;\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.removeAllChildNodes(container);\n\n    for (const hour in data.hourly) {\n      const unix_time = data.hourly[hour].dt;\n      const icon = data.hourly[hour].weather[0].icon;\n      const temp = data.hourly[hour].temp;\n\n      const block = document.createElement(\"div\");\n      block.style.display = \"grid\";\n      block.style.gridTemplateRows = \"1fr 3fr 1fr\";\n      block.style.margin = \"10px\";\n\n      const timeBlock = document.createElement(\"div\");\n      timeBlock.innerHTML = _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.formatTime(unix_time, offset, \"hour\");\n\n      const iconBlock = document.createElement(\"div\");\n      iconBlock.innerHTML = `<img src=${_utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.getIcon(icon)}>`;\n\n      const tempBlock = document.createElement(\"div\");\n      tempBlock.innerHTML = temp;\n\n      block.appendChild(timeBlock);\n      block.appendChild(iconBlock);\n      block.appendChild(tempBlock);\n      container.appendChild(block);\n    }\n  };\n\n  const description = () => {\n    const description = document.querySelector(\".description\");\n\n    description.innerHTML = `Today: broken ${\n      data.current.weather[0].description\n    }. The high will be ${\n      data.daily[0].temp.min\n    }° ${_unitChange__WEBPACK_IMPORTED_MODULE_2__.unitChange.getUnit()}. The low tonight will be ${\n      data.daily[0].temp.max\n    }° ${_unitChange__WEBPACK_IMPORTED_MODULE_2__.unitChange.getUnit()}.`;\n  };\n\n  const weatherInfo = () => {\n    const container = document.querySelector(\".info\");\n    const requiredData = [\n      \"sunrise\",\n      \"sunset\",\n      \"feels_like\",\n      \"pressure\",\n      \"humidity\",\n      \"clouds\",\n      \"uvi\",\n      \"visibility\",\n      \"wind_speed\",\n      \"pop\",\n    ];\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.removeAllChildNodes(container);\n\n    for (const prop of requiredData) {\n      const infoCell = document.createElement(\"div\");\n      infoCell.classList.add(\"infoCell\");\n      const small = document.createElement(\"small\");\n      small.classList.add(\"small\");\n      const value = document.createElement(\"div\");\n      value.classList.add(\"value\");\n\n      if (prop == \"sunrise\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.formatTime(\n          data.current[prop],\n          data.timezone_offset,\n          \"full\"\n        );\n      }\n\n      if (prop == \"sunset\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.formatTime(\n          data.current[prop],\n          data.timezone_offset,\n          \"full\"\n        );\n      }\n\n      if (prop == \"feels_like\") {\n        small.innerHTML = \"FEELS LIKE\";\n        value.innerHTML = `${data.current[prop]}° ${_unitChange__WEBPACK_IMPORTED_MODULE_2__.unitChange.getUnit()}`;\n      }\n\n      if (prop == \"pressure\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = `${data.current[prop]} hPa`;\n      }\n\n      if (prop == \"humidity\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = data.current[prop];\n      }\n\n      if (prop == \"clouds\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = data.current[prop];\n      }\n\n      if (prop == \"uvi\") {\n        small.innerHTML = \"UV INDEX\";\n        value.innerHTML = data.current[prop];\n      }\n\n      if (prop == \"visibility\") {\n        small.innerHTML = prop.toUpperCase();\n        value.innerHTML = `${data.current[prop]} km`;\n      }\n\n      if (prop == \"wind_speed\") {\n        small.innerHTML = \"WIND\";\n        value.innerHTML = `${data.current[prop]} km/hr`;\n      }\n\n      if (prop == \"pop\") {\n        small.innerHTML = \"CHANCE OF RAIN\";\n        value.innerHTML = `${data.hourly[0].pop * 100}%`;\n      }\n\n      infoCell.appendChild(small);\n      infoCell.appendChild(value);\n      container.appendChild(infoCell);\n    }\n  };\n\n  const dailyWeather = () => {\n    const container = document.querySelector(\".daily\");\n    const dailyHeader = document.querySelector(\".dailyHeader\");\n\n    dailyHeader.remove();\n    _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.removeAllChildNodes(container);\n    container.appendChild(dailyHeader);\n\n    for (const day in data.daily) {\n      const unix_time = data.daily[day].dt;\n      const offset = data.timezone_offset;\n      const icon = data.daily[day].weather[0].icon;\n      const pop = data.daily[day].pop;\n      const humidity = data.daily[day].humidity;\n      const tempHigh = data.daily[day].temp.max;\n      const tempLow = data.daily[day].temp.min;\n\n      const dailyBlock = document.createElement(\"div\");\n      dailyBlock.classList.add(\"dailyBlock\");\n      dailyBlock.style.display = \"grid\";\n      dailyBlock.style.gridTemplateColumns = \"1fr 1fr 1fr 1fr 1fr\";\n      dailyBlock.style.borderBottom = \"1px solid #343a40\";\n\n      const dayCell = document.createElement(\"div\");\n      dayCell.classList.add(\"dailyCell\");\n      dayCell.innerHTML = _utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.formatDate(unix_time, offset, \"day\");\n\n      const iconCell = document.createElement(\"div\");\n      iconCell.classList.add(\"dailyCell\");\n      iconCell.innerHTML = `<img src=${_utils_js__WEBPACK_IMPORTED_MODULE_3__.helper.getIcon(icon)}>`;\n\n      const popCell = document.createElement(\"div\");\n      popCell.classList.add(\"dailyCell\");\n      popCell.innerHTML = `${pop}%`;\n\n      const humidityCell = document.createElement(\"div\");\n      humidityCell.classList.add(\"dailyCell\");\n      humidityCell.innerHTML = `${humidity}%`;\n\n      const tempCell = document.createElement(\"div\");\n      tempCell.classList.add(\"dailyCell\");\n      tempCell.innerHTML = `${tempHigh}° ${tempLow}°`;\n\n      container.appendChild(dailyBlock);\n      dailyBlock.appendChild(dayCell);\n      dailyBlock.appendChild(iconCell);\n      dailyBlock.appendChild(popCell);\n      dailyBlock.appendChild(humidityCell);\n      dailyBlock.appendChild(tempCell);\n    }\n  };\n\n  const renderPage = () => {\n    data = _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getData();\n    current();\n    twentyFour();\n    description();\n    weatherInfo();\n    dailyWeather();\n  };\n\n  return {\n    renderPage,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/render.js?");

/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst search = (() => {\n  const searchBar = document.querySelector(\".searchBar\");\n  const searchBtn = document.querySelector(\".searchBtn\");\n  let input = \"Delhi\";\n\n  searchBtn.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    input = searchBar.value;\n    _index__WEBPACK_IMPORTED_MODULE_0__.webAppStart.start();\n  });\n\n  const getInput = () => {\n    return input;\n  };\n\n  return {\n    getInput,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/search.js?");

/***/ }),

/***/ "./src/components/unitChange.js":
/*!**************************************!*\
  !*** ./src/components/unitChange.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unitChange\": () => (/* binding */ unitChange)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst unitChange = (() => {\n  const unitBtn = document.querySelector(\".unitBtn\");\n  let unit = \"celsius\";\n  let scale = \"metric\";\n\n  unitBtn.addEventListener(\"click\", () => {\n    if (unit == \"celsius\") {\n      unit = \"fahrenheit\";\n      scale = \"imperial\";\n      unitBtn.innerHTML = \"°C/<b>°F</b>\";\n    } else {\n      unit = \"celsius\";\n      scale = \"metric\";\n      unitBtn.innerHTML = \"<b>°C</b>/°F\";\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__.webAppStart.start();\n  });\n\n  const getUnit = () => {\n    return unit;\n  };\n\n  const getScale = () => {\n    return scale;\n  };\n\n  return {\n    getUnit,\n    getScale,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/unitChange.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helper\": () => (/* binding */ helper)\n/* harmony export */ });\n/* harmony import */ var date_fns_fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime/index.js */ \"./node_modules/date-fns/fromUnixTime/index.js\");\n/* harmony import */ var date_fns_fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst helper = (() => {\n  function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  const formatDate = (unix, offset, dateFormat = \"full\") => {\n    const date = date_fns_fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_0___default()(unix + offset).toUTCString();\n    let dayOfWeek = date.slice(0, 3);\n    let dayOfMonth = date.slice(5, 7);\n    const month = date.slice(8, 11);\n    const year = date.slice(14, 16);\n    let suffix;\n\n    // change 01 to 1 etc\n    if (dayOfMonth < 10) {\n      dayOfMonth = dayOfMonth.slice(1);\n    }\n\n    // generate correct date suffix\n    if (dayOfMonth.slice(-1) === \"1\") {\n      suffix = \"st\";\n    } else if (dayOfMonth.slice(-1) === \"2\") {\n      suffix = \"nd\";\n    } else if (dayOfMonth.slice(-1) === \"3\") {\n      suffix = \"rd\";\n    } else {\n      suffix = \"th\";\n    }\n\n    // those pesky 11, 12, 13 ths\n    if (dayOfMonth > 3 && dayOfMonth < 21) {\n      suffix = \"th\";\n    }\n\n    // convert short day name to full day name\n    if (dayOfWeek === \"Mon\") {\n      dayOfWeek = \"Monday\";\n    } else if (dayOfWeek === \"Tue\") {\n      dayOfWeek = \"Tuesday\";\n    } else if (dayOfWeek === \"Wed\") {\n      dayOfWeek = \"Wednesday\";\n    } else if (dayOfWeek === \"Thu\") {\n      dayOfWeek = \"Thursday\";\n    } else if (dayOfWeek === \"Fri\") {\n      dayOfWeek = \"Friday\";\n    } else if (dayOfWeek === \"Sat\") {\n      dayOfWeek = \"Saturday\";\n    } else if (dayOfWeek === \"Sun\") {\n      dayOfWeek = \"Sunday\";\n    }\n\n    // return only the day of week\n    if (dateFormat === \"day\") {\n      return dayOfWeek;\n    }\n\n    // return full date string\n    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} '${year}`;\n  };\n\n  // convert utc string to format of 8:30 pm / 8:30 am\n  // return just 9pm or 9am with timeFormat=\"hour\"\n  const formatTime = (unix, offset, timeFormat = \"full\") => {\n    const date = date_fns_fromUnixTime_index_js__WEBPACK_IMPORTED_MODULE_0___default()(unix + offset).toUTCString();\n    let hour = date.slice(17, 19);\n    const minute = date.slice(20, 22);\n    let amOrPm;\n\n    if (hour > 11) {\n      amOrPm = \"pm\";\n    } else {\n      amOrPm = \"am\";\n    }\n\n    // change 24hr to 12hr time\n    if (hour > 12) {\n      hour -= 12;\n    }\n\n    // change am times to 12hr time\n    if (hour < 10 && amOrPm === \"am\") {\n      hour = hour.slice(1, 2);\n    }\n\n    // midnight formating\n    if (hour === \"0\") {\n      hour = 12;\n    }\n\n    // return just the hour\n    if (timeFormat === \"hour\") {\n      return `${hour} ${amOrPm}`;\n    }\n    return `${hour}:${minute} ${amOrPm}`;\n  };\n\n  const getIcon = (name) => {\n    let code = name.split(\" \", 2);\n    let meridian = name.split(2, \" \");\n\n    return `http://openweathermap.org/img/wn/${code}${meridian}@2x.png`;\n  };\n\n  return {\n    removeAllChildNodes,\n    formatDate,\n    formatTime,\n    getIcon,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/utils.js?");

/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weather\": () => (/* binding */ weather)\n/* harmony export */ });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/components/search.js\");\n/* harmony import */ var _unitChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitChange */ \"./src/components/unitChange.js\");\n\n\n\nconst weather = (() => {\n  const apiKey = \"\";\n\n  let lon;\n  let lat;\n\n  const getPos = async () => {\n    const city = _search__WEBPACK_IMPORTED_MODULE_0__.search.getInput();\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,\n      { mode: \"cors\" }\n    );\n    const data = await response.json();\n    lon = data.coord.lon;\n    lat = data.coord.lat;\n  };\n\n  let data;\n  const getWeather = async () => {\n    const scale = _unitChange__WEBPACK_IMPORTED_MODULE_1__.unitChange.getScale();\n    await getPos();\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${scale}&appid=${apiKey}`,\n      { mode: \"cors\" }\n    );\n    data = await response.json();\n  };\n\n  const getData = () => {\n    return data;\n  };\n\n  return {\n    getWeather,\n    getData,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/components/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webAppStart\": () => (/* binding */ webAppStart)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather */ \"./src/components/weather.js\");\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n\n\n\n\n\nconst webAppStart = (() => {\n  const start = async () => {\n    await _components_weather__WEBPACK_IMPORTED_MODULE_1__.weather.getWeather();\n    _components_render__WEBPACK_IMPORTED_MODULE_2__.render.renderPage();\n  };\n\n  return { start };\n})();\n\nwebAppStart.start();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;