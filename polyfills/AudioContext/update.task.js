var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('polyfills/AudioContext', 'audio-context-polyfill/AudioContext.js');
};
