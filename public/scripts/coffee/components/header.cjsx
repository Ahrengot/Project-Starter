define ['react', 'react-router'], (React, Router) ->

	Link = Router.Link;

	React.createClass
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