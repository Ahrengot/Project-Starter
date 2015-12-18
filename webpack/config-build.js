var _ = require('underscore');
var defaultConf = require ('./config');

var path = require("path");
var webpack = require("webpack");
var paths = require('../paths');

module.exports = _.extend(_.omit(defaultConf, 'debug', 'devtool', 'context', 'entry', 'plugins'), {
	output: {
		filename: 'combined.min.js'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			__ENV__: JSON.stringify('production'),
		}),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
    ]
});