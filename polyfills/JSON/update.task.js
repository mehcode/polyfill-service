var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/JSON', 'json3/lib/json3.min.js');
};
