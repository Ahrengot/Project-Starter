module.exports = React.createClass
	displayName: 'HelloWorld'
	render: ->
		<div className="col-xs-12">
			<h1>Dummy Page</h1>
			<p>You're looking at a dummy page</p>
			<p><em>Here's a sweet table</em></p>
			<table className="table table-striped">
				<tr><td>Row #1</td></tr>
				<tr><td>Row #2</td></tr>
				<tr><td>Row #3</td></tr>
			</table>
		</div>