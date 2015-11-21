var installPolyfill = require('../../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/Array/prototype/find', 'array.prototype.find/index.js');
};
