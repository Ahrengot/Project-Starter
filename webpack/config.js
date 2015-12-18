var path = require("path");
var webpack = require("webpack");
var paths = require('../paths');

module.exports = {
	debug: true,
	devtool: "source-map",
	context: path.join(__dirname, '../'),
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./src/scripts/index'
	],
	output: {
		path: path.join(__dirname, 'dist/scripts'),
		publicPath: '/scripts',
		filename: 'combined.js'
	},
	module: {
    	loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[hash:base64:5]!postcss-loader']
			},
			{
				test: /\.html$/,
				loaders: ['html']
			}
    	]
    },
    resolve: {
		modulesDirectories: ['node_modules', 'components']
	},
    postcss: [
		require('autoprefixer-core')
	],
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			__ENV__: JSON.stringify('development'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		})
	]
};