const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../wwwroot/js'),
		filename: 'index.bundle.js',
	},
};
