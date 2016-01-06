var installPolyfill = require('../../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/Array/prototype/findIndex', 'array.prototype.findindex/implementation.js');
};
