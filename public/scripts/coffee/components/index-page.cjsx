React = require 'react'

IndexPage = React.createClass
	render: ->
		<div className="container-fluid">
			<div className="jumbotron">
				<h1>React project starter</h1>
				<p>Branched version of the plain project starter that will give you a quick starting point for React.js apps</p>
				<p><em>&mdash; To get started run these commands:</em></p>
				<ol>
					<li><code>$ npm install</code></li>
					<li><code>$ bower install</code></li>
					<li><code>$ gulp</code></li>
				</ol>
				<p>Then head to <code>coffee/app-bootstrap.cjsx</code> to set up some routes and add your views, pages and components to the <em>coffee/components</em> folder.</p>
			</div>
		</div>

module.exports = IndexPage