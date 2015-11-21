var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/HTMLPictureElement', 'picturefill/dist/picturefill.min.js', 'picturefill/dist/plugins/mutation/pf.mutation.min.js');
};
