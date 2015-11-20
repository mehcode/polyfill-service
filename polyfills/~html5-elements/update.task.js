var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('html5shiv/dist/html5shiv.min.js', 'polyfills/~html5-elements');
};
