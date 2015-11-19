var installPolyfill = require('../../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('array.prototype.findindex/index.js', 'polyfills/Array/prototype/findIndex');
};
