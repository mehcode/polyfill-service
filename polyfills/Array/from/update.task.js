var installPolyfill = require('../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('array.from/array-from.js', 'polyfills/Array/from');
};
