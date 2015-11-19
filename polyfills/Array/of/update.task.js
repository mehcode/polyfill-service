var installPolyfill = require('../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('array.of/array-of.js', 'polyfills/Array/of');
};
