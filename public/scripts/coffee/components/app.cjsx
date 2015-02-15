define ['react', 'react-router', 'components/header', 'components/footer'], (React, Router, Header, Footer ) ->

	RouteHandler = Router.RouteHandler

	React.createClass
		render: ->
			<div className="app">
				<Header />
				<RouteHandler />
				<Footer />
			</div>