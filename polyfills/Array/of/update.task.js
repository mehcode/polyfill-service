var installPolyfill = require('../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/Array/of', 'array.of/array-of.js');
};
