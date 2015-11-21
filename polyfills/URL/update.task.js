var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/URL', 'js-polyfills/url.js');
};
