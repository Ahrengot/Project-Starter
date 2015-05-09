React = require 'react'
Router = require 'react-router'

Link = Router.Link;

Header = React.createClass
	render: ->
		<header>
			<div className="container-fluid">
				<nav className="navbar navbar-default">
					<ul className="nav navbar-nav">
						<li>
							<Link className="header-link" to="/">Index</Link>
						</li>
						<li>
							<Link className="header-link" to="/dummy-page">Dummy page</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>

module.exports = Header