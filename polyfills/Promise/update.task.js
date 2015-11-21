var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/Promise', 'es6-promises/promise.js');
};
