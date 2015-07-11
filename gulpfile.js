var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require( 'underscore' );

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var webpackProductionConfig = require("./webpack.production.config.js");

var touch = require('touch');
var map = require('map-stream');

// Load plugins
var $ = require( 'gulp-load-plugins' )();

// Helpers
var paths = {
	sass: './public/styles/sass',
	css: './public/styles/css',
	coffee: './public/scripts',
	app: './public'
}

/**
 * Compile sass and add vendor prefixes
 */
gulp.task('sass', function() {
	return gulp.src( paths.sass + '/**/*.scss' )
		.pipe( $.sass() )
		.pipe( $.autoprefixer( 'last 2 versions' ) )
		.pipe( gulp.dest( paths.css ) )
		.pipe( $.size({ title: "Compiled CSS", gzip: true }) )
		.pipe( map(function(a, cb) {
				if (devServer.invalidate) {
					devServer.invalidate();
				}
				cb();
			})
		);
});

/**
 * Configure Webpack for hot loading, production and
 * serving of assets
 */
gulp.task("webpack:build", ['sass'], function(callback) {
	webpack(webpackProductionConfig, function(err, stats) {
		if (err) {
			throw new gutil.PluginError("webpack:build", err);
		}
		gutil.log("[webpack:build]", stats.toString({colors: true}));
		callback();
	});
});


// Create a single instance of the compiler to allow caching.
var devCompiler = webpack(webpackConfig);
gulp.task("webpack:build-dev", ['sass'], function(callback) {
	devCompiler.run(function(err, stats) {
		if (err) {
			throw new gutil.PluginError("webpack:build-dev", err);
		}
		gutil.log("[webpack:build-dev]", stats.toString({colors: true}));
		callback();
	});
});

var devServer = {}
gulp.task("webpack-dev-server", ['sass'], function(callback) {
	touch.sync('./public/styles/css/main.css', {
		time: new Date(0)
	});

	// Start a webpack-dev-server.
	devServer = new WebpackDevServer(webpack(webpackConfig), {
		contentBase: './public/',
		hot: true,
		watchDelay: 100,
		noInfo: true
	});

	devServer.listen(8080, "0.0.0.0", function(err) {
		if (err) {
			throw new gutil.PluginError("webpack-dev-server", err);
		}
		gutil.log("[webpack-dev-server]", "http://localhost:8080");
		callback();
	});
});

/**
 * Compile assets and open url in browser
 */
gulp.task('serve', ['sass', 'webpack-dev-server'], function () {
	require( 'opn' )( 'http://localhost:8080' );
});

/**
 * Set up file watching and live browser reloading
 */
gulp.task('watch', ['webpack-dev-server'], function() {
	var server = $.livereload();

	// Watch for changes to compiled files
	gulp.watch([
		paths.app + '/*.html',
		paths.css + '/**/*.css',
	]).on('change', function(file) {
		server.changed(file.path);
	});

	gulp.watch( paths.sass + '/**/*.scss', ['sass'] );
});

/**
 * Default gulp task
 */
gulp.task( 'default', ['watch'] );