var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('audio-context-polyfill/AudioContext.js', 'polyfills/AudioContext');
};
