Router = require 'react-router'

{ Link, RouteHandler } = Router

# Provides global navigation for app e.g. the "Hello | Styleguide" at the top.
module.exports = React.createClass
	displayName: 'HelloWorld'
	render: ->
		<div className="container">
			<header className="col-xs-12">
				<Link to="home">Home page</Link> | <Link to="dummy-page">Dummy page</Link>
			</header>
			<RouteHandler />
		</div>