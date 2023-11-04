const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../wwwroot/js'),
		filename: 'index.bundle.js',
	},
	// FIXME []: This is a hack to prevent caching, need to fix to only prevent caching on dev
	cache: false,
};
