import Styles from './welcome.css'

export default React.createClass({
	render() {
		return (
			<article className="view container-fluid">
				<div className="view-content">
					<header>
						<h2>Welcome!</h2>
						<h3 style={{ marginBottom: '2rem' }}>
							<small>You now have the following available</small>
						</h3>
					</header>
					<ul className={ Styles['feature-list'] }>
						<li>Hot module replacement</li>
						<li>Redux + Redux dev tools</li>
						<li>React.js</li>
						<li>React Router</li>
						<li>PostCSS loader for JS</li>
						<li>SVG Sprites</li>
						<li>Webpack</li>
						<li>Browserify (easy debugging on multiple devices)</li>
						<li>Bootstrap 4 alpha (Sass version)</li>
					</ul>
				</div>
			</article>
		)
	}
})