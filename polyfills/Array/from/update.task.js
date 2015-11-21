var installPolyfill = require('../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/Array/from', 'array.from/array-from.js');
};
