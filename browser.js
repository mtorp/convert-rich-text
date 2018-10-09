var toHtml = require('./lib/export/to_html');
var toInlineHtml = require('./lib/export/to_inline_html');
var toInternalHtml = require('./lib/export/to_internal_html');
var toPublicHtml = require('./lib/export/to_public_html');
var toPlaintext = require('./lib/export/to_plaintext');

module.exports = {
  toHtml: function(delta, formats, options) {
    options = Object.assign({}, options, { document: document });
    return toHtml(delta, formats, options);
  },
  toInlineHtml: function(delta, formats, options) {
    options = Object.assign({}, options, { document: document });
    return toInlineHtml(delta, formats, options);
  },
  toInternalHtml: function(delta, formats, options) {
    options = Object.assign({}, options, { document: document });
    return toInternalHtml(delta, formats, options);
  },
  toPublicHtml: function(delta, formats, options) {
    options = Object.assign({}, options, { document: document });
    return toPublicHtml(delta, formats, options);
  },
  toPlaintext: toPlaintext
};
