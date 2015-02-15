var gulp = require( 'gulp' );

// Load plugins
var $ = require( 'gulp-load-plugins' )();

// Helpers
var paths = {
	sass: './public/styles/sass',
	css: './public/styles/css',
	coffee: './public/scripts/coffee',
	js: './public/scripts/js',
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
		.pipe( $.size({ title: "Compiled CSS", gzip: true }) );
});

/**
 * Compile CoffeeScript
 */
gulp.task('coffee', function() {
	return gulp.src( paths.coffee + '/**/*.cjsx' )
		.pipe( $.cjsx({bare: true}) ).on('error', function(err) {
			console.log("\n" + err.name + ": " + err.message + " in ", err.filename, "\n");
			console.log("\nLines: " + err.location.first_line + "-" + err.location.last_line + " // Columns: " + err.location.first_column + "-" + err.location.last_column);
			console.log("Stack trace: ", err.stack);
			this.emit( 'end' );
		})
		.pipe( gulp.dest( paths.js ) )
		.pipe( $.size({ title: "Compiled JavaScript", gzip: true }) );
});

/**
 * Tiny HTTP server with connect
 */
gulp.task('connect', function () {
	var connect = require('connect');
	var app = connect()
		.use( require('connect-livereload')({ port: 35729 }) )
		.use( connect.static( paths.app ) )
		.use( connect.directory( paths.app ) );

	require('http').createServer(app).listen( 9000 ).on('listening', function () {
		console.log('Started connect web server on http://localhost:9000');
	});
});

/**
 * Compile assets and open url in browser
 */
gulp.task('serve', ['sass', 'coffee', 'connect'], function () {
	require( 'opn' )( 'http://localhost:9000' );
});

/**
 * Set up file watching and live browser reloading
 */
gulp.task('watch', ['serve'], function() {
	var server = $.livereload();

	// Watch for changes to compiled files
	gulp.watch([
		paths.app + '/*.html',
		paths.css + '/**/*.css',
		paths.js + '/**/*.js',
	]).on('change', function(file) {
		server.changed(file.path);
	});

	gulp.watch( paths.sass + '/**/*.scss', ['sass'] );
	gulp.watch( paths.coffee + '/**/*.cjsx', ['coffee'] );
});

/**
 * Default gulp task
 */
gulp.task( 'default', ['watch'] );