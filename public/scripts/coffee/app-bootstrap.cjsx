React = require 'react'
Router = require 'react-router'

App = require './components/app'
IndexPage = require './components/index-page'
DummyPage = require './components/dummy-page'

# Change this to destructured assignment
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