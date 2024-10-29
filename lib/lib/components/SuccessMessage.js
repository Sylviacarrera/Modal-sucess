"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../components/SuccessMessage.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ModalSuccessMessage = _ref => {
  let {
    isDisplayed,
    onClose,
    message
  } = _ref;
  // Fonction pour fermer la modale
  const handleOverlayClick = e => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `modal-overlay ${isDisplayed ? 'show' : ''}`,
    onClick: handleOverlayClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-close-icon",
    onClick: onClose
  }, "\u2716"), " "), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-message"
  }, message)));
};
var _default = exports.default = ModalSuccessMessage;