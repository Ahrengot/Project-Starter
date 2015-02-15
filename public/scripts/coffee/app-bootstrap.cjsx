define ['react', 'react-router', 'components/app', 'components/index-page', 'components/dummy-page'], (React, Router, App, IndexPage, DummyPage) ->

	DefaultRoute = Router.DefaultRoute
	Route = Router.Route

	routes =
		<Route name="app" path="/" handler={ App }>
			<Route name="dummy-page" path="/dummy-page" handler={ DummyPage } />
			<DefaultRoute handler={ IndexPage } />
		</Route>

	# Start listening for route changes
	Router.run routes, (Handler) ->
		React.render( <Handler />, document.body )