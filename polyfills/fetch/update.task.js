var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/fetch', 'whatwg-fetch/fetch.js');
};
