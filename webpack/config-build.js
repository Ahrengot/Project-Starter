var _ = require('underscore');
var defaultConf = require ('./config');

var path = require("path");
var webpack = require("webpack");
var paths = require('../paths');

module.exports = _.extend(_.omit(defaultConf, 'debug', 'devtool', 'context', 'entry'), {
	output: {
		filename: 'combined.min.js'
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
    plugins: defaultConf.plugins.concat([
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {'NODE_ENV': '"production"'}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
    ])
});