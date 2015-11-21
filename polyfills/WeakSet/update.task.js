var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/WeakSet', 'weakset/weakset.js');
};
