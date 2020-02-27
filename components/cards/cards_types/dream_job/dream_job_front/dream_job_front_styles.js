"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _ref;

  var spacing = theme.miscellaneous.spacing;
  return _ref = {
    container: {
      flexDirection: 'column'
    },
    logo: {
      marginBottom: spacing * 4,
      '& path': {
        fill: ['currentColor', '!important']
      }
    },
    typography: {
      fontSize: 36,
      lineHeight: 1.3
    }
  }, (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    logo: {
      '& path': {
        fill: ['currentColor', '!important']
      }
    },
    typography: {
      maxWidth: 'unset',
      fontSize: 28,
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      maxHeight: 28 * 1.3 * 2 + spacing * 2 * 2
    }
  }), (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    typography: {
      fontSize: 24
    }
  }), _ref;
};

exports.styles = styles;