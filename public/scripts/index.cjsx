require "../styles/css/main.css"

# Assign React to Window so the Chrome React Dev Tools will work.
window.React = require 'react'

Router = require('react-router')
{ Route } = Router

# Require route views
HomeView = require './views/home'
DummyPageView = require './views/dummy-page'
AppWrapper = require './views/app-wrap'

routes =
	<Route handler={ AppWrapper }>
		<Route name="home" handler={ HomeView } path="/" />
		<Route name="dummy-page" handler={ DummyPageView } path="/dummy-page" />
	</Route>

Router.run routes, (Handler) ->
	React.render <Handler/>, document.body