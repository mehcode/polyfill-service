var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var crypto = require('crypto');

function hash (contents) {
	return crypto.createHash('md5').update(contents).digest("hex");
}

module.exports = function(polyfillSourcePath, polyfillOutputFolder) {
	var polyfillOutputPath = path.join(polyfillOutputFolder, 'polyfill.js');
	var polyfillAlreadyExists = fs.accessSync(polyfillOutputPath);
	var polyfillSourcePath = require.resolve(polyfillSourcePath);

	console.log('Importing polyfill from ' + polyfillSourcePath);
	var newPolyfill = fs.readFileSync(polyfillSourcePath);

	if (polyfillAlreadyExists) {
		var currentPolyfill = fs.readFileSync(polyfillOutputPath);
		var currentPolyfillHash = hash(currentPolyfill);
		var newPolyfillHash = hash(newPolyfill);

		if (newPolyfillHash === currentPolyfillHash) {
			console.log('Polyfill has not changed.');
			return;
		} else {
			fs.unlinkSync(polyfillOutputPath);
		}
  }

	fs.writeFileSync(polyfillOutputPath, newPolyfill);
	console.log('Polyfill imported successfully');

};
