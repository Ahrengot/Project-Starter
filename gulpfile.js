// Gulp + gulp tools
var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require( 'gulp-load-plugins' )();
var del = require('del');
var replace = require('gulp-replace');

// Browsersync
var browserSync = require('browser-sync').create();

// Webpack
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var webpackConfig = require("./webpack/config.js");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackBuildConfig = require("./webpack/config-build.js");

// linting
var cool = require('cool-ascii-faces');
var chalk = require('chalk');

var path = require('path');
var paths = require('./paths');

var settings = {
	isBuild: false,
	openBrowser: false
};

/**
 * Tasks
 * ==========================================
 */

gulp.task('svg', function() {
	return gulp.src( paths.svg + '*.svg' )
		.pipe( $.svgmin(function(file) { // Minify and clean up svg files
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [
					{ cleanupIDs: { prefix: prefix + "-", minify: true } },
					{ removeDoctype: true },
					{ removeComments: true },
					{ cleanupNumericValues: { floatPrecision: 2 } },
					{ removeAttrs: { attrs: '(fill|stroke)' } }
				]
			}
		}) )
		.pipe( $.svgstore({ inlineSvg: true }) ) // Combine into 1 sprite sheet
		.pipe($.cheerio(function($) { // Modify resulting <svg> element
			$('svg').attr('style', 'display:none');
		}))
		.pipe( $.rename('combined.svg') )
		.pipe( gulp.dest( paths.dist + 'svg' ) )
});

gulp.task('img', function() {
	return gulp.src( paths.img + '**/*' )
		.pipe( $.imagemin({progressive: true}) )
		.pipe( gulp.dest( paths.dist + 'img' ) );
});

gulp.task('fonts', function() {
	return gulp.src( paths.fonts + '*' )
		.pipe( gulp.dest( paths.dist + 'fonts' ) );
});

//
// BUILD INDEX FILE
// Inject styles, scripts and compressed svg sprite.
// Minify if build task
// --------------------------------------------------
gulp.task('index', function() {
	var sources = [
		paths.dist + 'styles/main.css'
	];

	if (settings.isBuild) {
		sources.push(paths.dist + 'scripts/combined.min.js');
	}

	var stream = gulp.src( paths.base + 'index.html' )
		.pipe($.inject(gulp.src(sources, {read: false}), {
			read: false,
			addRootSlash: false,
			ignorePath: paths.dist
		}))
		.pipe( $.inject( gulp.src(paths.dist + 'svg/combined.svg'), {
			read: false,
			starttag: '<!-- inject:svg -->',
			transform: function (filePath, file) {
				// return file contents as string
				return file.contents.toString('utf8');
			}
		}))

	// Only minify when building
	if (settings.isBuild) {
		stream.pipe( $.htmlmin({
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			removeComments: true
		}) )
	}

	return stream.pipe( gulp.dest( paths.dist ) );
});

gulp.task('sass', function() {
	return gulp.src( paths.sass + 'main.scss' )
		.pipe( $.sourcemaps.init() )
		.pipe( $.sass({outputStyle: settings.isBuild ? 'compressed' : 'expanded'}).on('error', $.sass.logError) )
		.pipe( $.autoprefixer( 'last 2 versions' ) )
		.pipe( $.sourcemaps.write() )
		.pipe( gulp.dest( paths.css ) )
});

//
// WEBPACK
// --------------------------------------------------
gulp.task('webpack-build', function() {
	return gulp.src( paths.js + 'index.js' )
		.pipe( webpackStream(webpackBuildConfig, webpack) )
		.pipe( gulp.dest( paths.dist + 'scripts' ) )
});

//
// CLEAN OLD BUILD FILES
// --------------------------------------------------
gulp.task('clean', function () {
	return del( paths.dist + '*' );
});

//
// Revision assets for cache busting
// e.g. change combined.js -> combined-4847.js
// --------------------------------------------------
gulp.task('rev', function() {
	var resources = [
		paths.dist + '**/*.css',
		paths.dist + '**/*.js'
	];

	return gulp.src( resources )
		.pipe( $.rev() )
		.pipe( gulp.dest( paths.dist ) )
		.pipe( $.rev.manifest() )
		.pipe( gulp.dest( paths.dist ) );
});

gulp.task('rev-replace', ['rev'], function() {
	return gulp.src( paths.dist + '*.html' )
		.pipe(
			$.revReplace({
				manifest: gulp.src( paths.dist + 'rev-manifest.json' ),
				replaceInExtensions: ['.html']
			})
		)
		.pipe( gulp.dest( paths.dist ) );
});

//
// LINT
// Make sure JS and CSS follow best practises
// --------------------------------------------------
gulp.task('lint-js', function() {
	return gulp.src( paths.js + '**/*.js' )
		.pipe( $.jshint() )
		.pipe( $.jshint.reporter('jshint-stylish') )
		.pipe( $.jshint.reporter('fail') ).on('error', function() {
			console.log( chalk.green("\n\nYou messed up   ") + chalk.yellow(cool()) + "\n\n" );
		})
});

//
// SERVE
// Set up BrowserSync server and host local dev site
// --------------------------------------------------
gulp.task('browser-sync', function() {
	var webpackBunder = webpack(webpackConfig);

	browserSync.init({
		open: settings.openBrowser,
		server: {
			baseDir: 'dist'
		},
		middleware: [
			webpackDevMiddleware(webpackBunder, {
				// http://webpack.github.io/docs/webpack-dev-middleware.html
				publicPath: webpackConfig.output.publicPath,
				stats: { colors: true }
			}),
			// bundler should be the same as above
			webpackHotMiddleware(webpackBunder)
		],
		files: [
			paths.dist + 'styles/main.css',
			paths.dist + 'img/*',
			paths.dist + 'index.html'
		]
	});

	gulp.watch( paths.sass + '**/*.scss', ['sass'] );
	gulp.watch( paths.svg + '*.svg', ['svg', 'index'] );
	gulp.watch( paths.img + '**/*', ['img'] );
});

//
// DEV, SERVE AND BUILD
// --------------------------------------------------
gulp.task('serve', function () {
	settings.openBrowser = true;
	runSequence('dev');
});

gulp.task('dev', function(callback) {
	runSequence('clean', ['sass', 'svg', 'img', 'fonts'], 'index', 'browser-sync', callback);
});

gulp.task('build', function(callback) {
	settings.isBuild = true;
	runSequence('clean', ['sass', 'webpack-build', 'svg', 'img', 'fonts'], ['index'], 'rev-replace', callback);
})

gulp.task( 'default', ['dev'] );