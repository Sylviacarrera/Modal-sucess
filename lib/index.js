"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./examples/App"));
require("./index.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const root = (0, _client.createRoot)(document.getElementById('root'));
root.render(/*#__PURE__*/_react.default.createElement(_App.default, null));