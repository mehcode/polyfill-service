var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('whatwg-fetch/fetch.js', 'polyfills/fetch');
};
