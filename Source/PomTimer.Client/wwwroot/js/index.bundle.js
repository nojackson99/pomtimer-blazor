/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/easytimer.js/dist/easytimer.js":
/*!*****************************************************!*\
  !*** ./node_modules/easytimer.js/dist/easytimer.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("/**\n * easytimer.js\n * Generated: 2023-08-28\n * Version: 4.6.0\n */\n\n(function (global, factory) {\n   true ? factory(exports) :\n  0;\n})(this, (function (exports) { 'use strict';\n\n  function ownKeys(e, r) {\n    var t = Object.keys(e);\n    if (Object.getOwnPropertySymbols) {\n      var o = Object.getOwnPropertySymbols(e);\n      r && (o = o.filter(function (r) {\n        return Object.getOwnPropertyDescriptor(e, r).enumerable;\n      })), t.push.apply(t, o);\n    }\n    return t;\n  }\n  function _objectSpread2(e) {\n    for (var r = 1; r < arguments.length; r++) {\n      var t = null != arguments[r] ? arguments[r] : {};\n      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {\n        _defineProperty(e, r, t[r]);\n      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {\n        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));\n      });\n    }\n    return e;\n  }\n  function _typeof(o) {\n    \"@babel/helpers - typeof\";\n\n    return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n      return typeof o;\n    } : function (o) {\n      return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n    }, _typeof(o);\n  }\n  function _defineProperty(obj, key, value) {\n    key = _toPropertyKey(key);\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n    return obj;\n  }\n  function _toPrimitive(input, hint) {\n    if (typeof input !== \"object\" || input === null) return input;\n    var prim = input[Symbol.toPrimitive];\n    if (prim !== undefined) {\n      var res = prim.call(input, hint || \"default\");\n      if (typeof res !== \"object\") return res;\n      throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n    }\n    return (hint === \"string\" ? String : Number)(input);\n  }\n  function _toPropertyKey(arg) {\n    var key = _toPrimitive(arg, \"string\");\n    return typeof key === \"symbol\" ? key : String(key);\n  }\n\n  function leftPadding(string, padLength, character) {\n    var i;\n    var characters = '';\n    string = typeof string === 'number' ? String(string) : string;\n    if (string.length > padLength) {\n      return string;\n    }\n    for (i = 0; i < padLength; i = i + 1) {\n      characters += String(character);\n    }\n    return (characters + string).slice(-characters.length);\n  }\n\n  function TimeCounter() {\n    this.reset();\n  }\n\n  /**\n   * [toString convert the counted values on a string]\n   * @param  {array} units           [array with the units to display]\n   * @param  {string} separator       [separator of the units]\n   * @param  {number} leftZeroPadding [number of zero padding]\n   * @return {string}                 [result string]\n   */\n  TimeCounter.prototype.toString = function () {\n    var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['hours', 'minutes', 'seconds'];\n    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';\n    var leftZeroPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n    units = units || ['hours', 'minutes', 'seconds'];\n    separator = separator || ':';\n    leftZeroPadding = leftZeroPadding || 2;\n    var arrayTime = [];\n    var i;\n    for (i = 0; i < units.length; i = i + 1) {\n      if (this[units[i]] !== undefined) {\n        if (units[i] === 'secondTenths') {\n          arrayTime.push(this[units[i]]);\n        } else {\n          arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, '0'));\n        }\n      }\n    }\n    return arrayTime.join(separator);\n  };\n\n  /**\n   * [reset reset counter]\n   */\n  TimeCounter.prototype.reset = function () {\n    this.secondTenths = 0;\n    this.seconds = 0;\n    this.minutes = 0;\n    this.hours = 0;\n    this.days = 0;\n  };\n\n  function EventEmitter() {\n    this.events = {};\n  }\n  EventEmitter.prototype.on = function (event, listener) {\n    var _this = this;\n    if (!Array.isArray(this.events[event])) {\n      this.events[event] = [];\n    }\n    this.events[event].push(listener);\n    return function () {\n      return _this.removeListener(event, listener);\n    };\n  };\n  EventEmitter.prototype.removeListener = function (event, listener) {\n    if (Array.isArray(this.events[event])) {\n      var eventIndex = this.events[event].indexOf(listener);\n      if (eventIndex > -1) {\n        this.events[event].splice(eventIndex, 1);\n      }\n    }\n  };\n  EventEmitter.prototype.removeAllListeners = function (event) {\n    if (!event) {\n      this.events = {};\n    } else if (Array.isArray(this.events[event])) {\n      this.events[event] = [];\n    }\n  };\n  EventEmitter.prototype.emit = function (event) {\n    var _this2 = this;\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n    if (Array.isArray(this.events[event])) {\n      this.events[event].forEach(function (listener) {\n        return listener.apply(_this2, args);\n      });\n    }\n  };\n\n  /*\n   * General functions, variables and constants\n   */\n  var SECOND_TENTHS_PER_SECOND = 10;\n  var SECONDS_PER_MINUTE = 60;\n  var MINUTES_PER_HOUR = 60;\n  var HOURS_PER_DAY = 24;\n  var SECOND_TENTHS_POSITION = 0;\n  var SECONDS_POSITION = 1;\n  var MINUTES_POSITION = 2;\n  var HOURS_POSITION = 3;\n  var DAYS_POSITION = 4;\n  var SECOND_TENTHS = 'secondTenths';\n  var SECONDS = 'seconds';\n  var MINUTES = 'minutes';\n  var HOURS = 'hours';\n  var DAYS = 'days';\n  var VALID_INPUT_VALUES = [SECOND_TENTHS, SECONDS, MINUTES, HOURS, DAYS];\n  var unitsInMilliseconds = {\n    secondTenths: 100,\n    seconds: 1000,\n    minutes: 60000,\n    hours: 3600000,\n    days: 86400000\n  };\n  var groupedUnits = {\n    secondTenths: SECOND_TENTHS_PER_SECOND,\n    seconds: SECONDS_PER_MINUTE,\n    minutes: MINUTES_PER_HOUR,\n    hours: HOURS_PER_DAY\n  };\n  function mod(number, module) {\n    return (number % module + module) % module;\n  }\n\n  /**\n   * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.\n   * Can update time values with different time intervals: tenth of seconds,\n   * seconds, minutes and hours.]\n   */\n  function Timer() {\n    var defaultParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    /*\n    * PRIVATE variables and Functions\n    */\n    var counters = new TimeCounter();\n    var totalCounters = new TimeCounter();\n    var intervalId;\n    var eventEmitter = new EventEmitter();\n    var running = false;\n    var paused = false;\n    var precision;\n    var timerTypeFactor;\n    var customCallback;\n    var timerConfig = {};\n    var currentParams;\n    var targetValues;\n    var startValues;\n    var countdown;\n    var startingDate;\n    var targetDate;\n    var eventData = {\n      detail: {\n        timer: this\n      }\n    };\n    setParams(defaultParams);\n    function updateCounters(precision, roundedValue) {\n      var unitsPerGroup = groupedUnits[precision];\n      totalCounters[precision] = roundedValue;\n      if (precision === DAYS) {\n        counters[precision] = Math.abs(roundedValue);\n      } else if (roundedValue >= 0) {\n        counters[precision] = mod(roundedValue, unitsPerGroup);\n      } else {\n        counters[precision] = mod(unitsPerGroup - mod(roundedValue, unitsPerGroup), unitsPerGroup);\n      }\n    }\n    function updateDays(value) {\n      return updateUnitByPrecision(value, DAYS);\n    }\n    function updateHours(value) {\n      return updateUnitByPrecision(value, HOURS);\n    }\n    function updateMinutes(value) {\n      return updateUnitByPrecision(value, MINUTES);\n    }\n    function updateSeconds(value) {\n      return updateUnitByPrecision(value, SECONDS);\n    }\n    function updateSecondTenths(value) {\n      return updateUnitByPrecision(value, SECOND_TENTHS);\n    }\n    function updateUnitByPrecision(value, precision) {\n      var previousValue = totalCounters[precision];\n      updateCounters(precision, calculateIntegerUnitQuotient(value, unitsInMilliseconds[precision]));\n      return totalCounters[precision] !== previousValue;\n    }\n    function stopTimerAndResetCounters() {\n      stopTimer();\n      resetCounters();\n    }\n    function stopTimer() {\n      clearInterval(intervalId);\n      intervalId = undefined;\n      running = false;\n      paused = false;\n    }\n    function setParamsAndStartTimer(params) {\n      if (!isPaused()) {\n        setParams(params);\n      } else {\n        startingDate = calculateStartingDate();\n        targetValues = setTarget(currentParams.target);\n      }\n      startTimer();\n    }\n    function startTimer() {\n      var interval = unitsInMilliseconds[precision];\n      if (isTargetAchieved(roundTimestamp(Date.now()))) {\n        return;\n      }\n      intervalId = setInterval(updateTimerAndDispatchEvents, interval);\n      running = true;\n      paused = false;\n    }\n    function calculateStartingDate() {\n      return roundTimestamp(Date.now()) - totalCounters.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;\n    }\n    function updateTimerAndDispatchEvents() {\n      var currentTime = roundTimestamp(Date.now());\n      var valuesUpdated = updateTimer();\n      dispatchEvents(valuesUpdated);\n      customCallback(eventData.detail.timer);\n      if (isTargetAchieved(currentTime)) {\n        stop();\n        dispatchEvent('targetAchieved', eventData);\n      }\n    }\n    function updateTimer() {\n      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roundTimestamp(Date.now());\n      var elapsedTime = timerTypeFactor > 0 ? currentTime - startingDate : startingDate - currentTime;\n      var valuesUpdated = {};\n      valuesUpdated[SECOND_TENTHS] = updateSecondTenths(elapsedTime);\n      valuesUpdated[SECONDS] = updateSeconds(elapsedTime);\n      valuesUpdated[MINUTES] = updateMinutes(elapsedTime);\n      valuesUpdated[HOURS] = updateHours(elapsedTime);\n      valuesUpdated[DAYS] = updateDays(elapsedTime);\n      return valuesUpdated;\n    }\n    function roundTimestamp(timestamp) {\n      return Math.floor(timestamp / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];\n    }\n    function dispatchEvents(valuesUpdated) {\n      if (valuesUpdated[SECOND_TENTHS]) {\n        dispatchEvent('secondTenthsUpdated', eventData);\n      }\n      if (valuesUpdated[SECONDS]) {\n        dispatchEvent('secondsUpdated', eventData);\n      }\n      if (valuesUpdated[MINUTES]) {\n        dispatchEvent('minutesUpdated', eventData);\n      }\n      if (valuesUpdated[HOURS]) {\n        dispatchEvent('hoursUpdated', eventData);\n      }\n      if (valuesUpdated[DAYS]) {\n        dispatchEvent('daysUpdated', eventData);\n      }\n    }\n    function isTargetAchieved(currentDate) {\n      return targetValues instanceof Array && currentDate >= targetDate;\n    }\n    function resetCounters() {\n      counters.reset();\n      totalCounters.reset();\n    }\n    function setParams(params) {\n      params = params || {};\n      precision = checkPrecision(params.precision);\n      customCallback = typeof params.callback === 'function' ? params.callback : function () {};\n      countdown = params.countdown === true;\n      timerTypeFactor = countdown === true ? -1 : 1;\n      if (_typeof(params.startValues) === 'object') {\n        setStartValues(params.startValues);\n      } else {\n        startValues = null;\n      }\n      startingDate = calculateStartingDate();\n      updateTimer();\n      if (_typeof(params.target) === 'object') {\n        targetValues = setTarget(params.target);\n      } else if (countdown) {\n        params.target = {\n          seconds: 0\n        };\n        targetValues = setTarget(params.target);\n      } else {\n        targetValues = null;\n      }\n      timerConfig = {\n        precision: precision,\n        callback: customCallback,\n        countdown: _typeof(params) === 'object' && params.countdown === true,\n        target: targetValues,\n        startValues: startValues\n      };\n      currentParams = params;\n    }\n    function checkPrecision(precision) {\n      precision = typeof precision === 'string' ? precision : SECONDS;\n      if (!isValidInputValue(precision)) {\n        throw new Error(\"Error in precision parameter: \".concat(precision, \" is not a valid value\"));\n      }\n      return precision;\n    }\n    function isValidInputValue(value) {\n      return VALID_INPUT_VALUES.indexOf(value) >= 0;\n    }\n    function configInputValues(inputValues) {\n      var values;\n      if (_typeof(inputValues) === 'object') {\n        if (inputValues instanceof Array) {\n          if (inputValues.length !== 5) {\n            throw new Error('Array size not valid');\n          }\n          values = inputValues;\n        } else {\n          for (var value in inputValues) {\n            if (VALID_INPUT_VALUES.indexOf(value) < 0) {\n              throw new Error(\"Error in startValues or target parameter: \".concat(value, \" is not a valid input value\"));\n            }\n          }\n          values = [inputValues.secondTenths || 0, inputValues.seconds || 0, inputValues.minutes || 0, inputValues.hours || 0, inputValues.days || 0];\n        }\n      }\n      values = values.map(function (value) {\n        return parseInt(value, 10);\n      });\n      var secondTenths = values[SECOND_TENTHS_POSITION];\n      var seconds = values[SECONDS_POSITION] + calculateIntegerUnitQuotient(secondTenths, SECOND_TENTHS_PER_SECOND);\n      var minutes = values[MINUTES_POSITION] + calculateIntegerUnitQuotient(seconds, SECONDS_PER_MINUTE);\n      var hours = values[HOURS_POSITION] + calculateIntegerUnitQuotient(minutes, MINUTES_PER_HOUR);\n      var days = values[DAYS_POSITION] + calculateIntegerUnitQuotient(hours, HOURS_PER_DAY);\n      values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;\n      values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;\n      values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;\n      values[HOURS_POSITION] = hours % HOURS_PER_DAY;\n      values[DAYS_POSITION] = days;\n      return values;\n    }\n    function calculateIntegerUnitQuotient(unit, divisor) {\n      var quotient = unit / divisor;\n      return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);\n    }\n    function setTarget(inputTarget) {\n      if (!inputTarget) {\n        return;\n      }\n      targetValues = configInputValues(inputTarget);\n      var targetCounter = calculateTotalCounterFromValues(targetValues);\n      targetDate = startingDate + targetCounter.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;\n      return targetValues;\n    }\n    function setStartValues(inputStartValues) {\n      startValues = configInputValues(inputStartValues);\n      counters.secondTenths = startValues[SECOND_TENTHS_POSITION];\n      counters.seconds = startValues[SECONDS_POSITION];\n      counters.minutes = startValues[MINUTES_POSITION];\n      counters.hours = startValues[HOURS_POSITION];\n      counters.days = startValues[DAYS_POSITION];\n      totalCounters = calculateTotalCounterFromValues(startValues, totalCounters);\n    }\n    function calculateTotalCounterFromValues(values, outputCounter) {\n      var total = outputCounter || {};\n      total.days = values[DAYS_POSITION];\n      total.hours = total.days * HOURS_PER_DAY + values[HOURS_POSITION];\n      total.minutes = total.hours * MINUTES_PER_HOUR + values[MINUTES_POSITION];\n      total.seconds = total.minutes * SECONDS_PER_MINUTE + values[SECONDS_POSITION];\n      total.secondTenths = total.seconds * SECOND_TENTHS_PER_SECOND + values[[SECOND_TENTHS_POSITION]];\n      return total;\n    }\n\n    /*\n     * PUBLIC functions\n     */\n\n    /**\n     * [stop stops the timer and resets the counters. Dispatch stopped event]\n     */\n    function stop() {\n      stopTimerAndResetCounters();\n      dispatchEvent('stopped', eventData);\n    }\n\n    /**\n     * [stop stops and starts the timer. Dispatch stopped event]\n     */\n    function reset() {\n      stopTimerAndResetCounters();\n      setParamsAndStartTimer(currentParams);\n      dispatchEvent('reset', eventData);\n    }\n\n    /**\n     * [start starts the timer configured by the params object. Dispatch started event]\n     * @param  {object} params [Configuration parameters]\n     */\n    function start() {\n      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      params = _objectSpread2(_objectSpread2({}, defaultParams), params);\n      if (isRunning()) {\n        return;\n      }\n      setParamsAndStartTimer(params);\n      dispatchEvent('started', eventData);\n    }\n\n    /**\n     * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.\n     * Dispatch paused event]\n     * @return {type} [description]\n     */\n    function pause() {\n      stopTimer();\n      paused = true;\n      dispatchEvent('paused', eventData);\n    }\n\n    /**\n     * [addEventListener Adds event listener to the timer]\n     * @param {string} eventType      [event to listen]\n     * @param {function} listener   [the event listener function]\n     */\n    function addEventListener(eventType, listener) {\n      eventEmitter.on(eventType, listener);\n    }\n\n    /**\n     * [removeEventListener Removes event listener to the timer]\n     * @param  {string} eventType    [event to remove listener]\n     * @param  {function} listener [listener to remove]\n     */\n    function removeEventListener(eventType, listener) {\n      eventEmitter.removeListener(eventType, listener);\n    }\n\n    /**\n     * [removeAllEventListeners Removes all events listeners for the given type, no type to remove all types]\n     * @param  {string} [eventType]  [event to remove listener]\n     */\n    function removeAllEventListeners(eventType) {\n      eventEmitter.removeAllListeners(eventType);\n    }\n\n    /**\n     * [dispatchEvent dispatches an event]\n     * @param  {string} eventType [event to dispatch]\n     * @param data\n     */\n    function dispatchEvent(eventType, data) {\n      eventEmitter.emit(eventType, data);\n    }\n\n    /**\n     * [isRunning return true if the timer is running]\n     * @return {Boolean}\n     */\n    function isRunning() {\n      return running;\n    }\n\n    /**\n     * [isPaused returns true if the timer is paused]\n     * @return {Boolean}\n     */\n    function isPaused() {\n      return paused;\n    }\n\n    /**\n     * [getTimeValues returns the counter with the current timer values]\n     * @return {TimeCounter}\n     */\n    function getTimeValues() {\n      return counters;\n    }\n\n    /**\n     * [getTotalTimeValues returns the counter with the current timer total values]\n     * @return {TimeCounter}\n     */\n    function getTotalTimeValues() {\n      return totalCounters;\n    }\n\n    /**\n     * [getConfig returns the configuration parameters]\n     * @return {type}\n     */\n    function getConfig() {\n      return timerConfig;\n    }\n\n    /**\n     * Public API\n     * Definition of Timer instance public functions\n     */\n    if (typeof this !== 'undefined') {\n      this.start = start;\n      this.pause = pause;\n      this.stop = stop;\n      this.reset = reset;\n      this.isRunning = isRunning;\n      this.isPaused = isPaused;\n      this.getTimeValues = getTimeValues;\n      this.getTotalTimeValues = getTotalTimeValues;\n      this.getConfig = getConfig;\n      this.addEventListener = addEventListener;\n      this.on = addEventListener;\n      this.removeEventListener = removeEventListener;\n      this.removeAllEventListeners = removeAllEventListeners;\n      this.off = removeEventListener;\n    }\n  }\n\n  exports.Timer = Timer;\n  exports.default = Timer;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n}));\n\n\n//# sourceURL=webpack://npmjs/./node_modules/easytimer.js/dist/easytimer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var easytimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easytimer.js */ \"./node_modules/easytimer.js/dist/easytimer.js\");\n/* harmony import */ var easytimer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easytimer_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar timer = null;\nvar indexRef = null;\n\nwindow.setIndexReference = (ref) => {\n\tindexRef = ref;\n};\n\n// Start timer and set event listener to send values to C# side.\nwindow.startTimer = () => {\n\ttimer = new (easytimer_js__WEBPACK_IMPORTED_MODULE_0___default())();\n\ttimer.start({ countdown: true, startValues: { minutes: 25 } });\n\n\ttimer.addEventListener('secondsUpdated', function (e) {\n\t\twindow.sendTimerValue(timer.getTimeValues());\n\t});\n};\n\n// Start stop and resume the timer.\nwindow.handleTimerAction = () => {\n\tif (!timer) {\n\t\twindow.startTimer();\n\t\treturn 'Pause';\n\t}\n\tif (timer.isRunning()) {\n\t\ttimer.pause();\n\t\treturn 'Resume';\n\t} else {\n\t\ttimer.start();\n\t\treturn 'Pause';\n\t}\n};\n\n// Send timer value to C# side each second.\nwindow.sendTimerValue = (timerValue) => {\n\tindexRef.invokeMethodAsync('ReceiveTimerValue', timerValue);\n};\n\n\n//# sourceURL=webpack://npmjs/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;