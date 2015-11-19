var installPolyfill = require('../../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('array.prototype.find/index.js', 'polyfills/Array/prototype/find');
};
