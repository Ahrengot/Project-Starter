React = require 'react'
Router = require 'react-router'
Header = require './header'
Footer = require './footer'

RouteHandler = Router.RouteHandler

App = React.createClass
	render: ->
		<div className="app">
			<Header />
			<RouteHandler />
			<Footer />
		</div>

module.exports = App