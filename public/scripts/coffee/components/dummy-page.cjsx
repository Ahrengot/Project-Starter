define ['react', 'underscore'], (React, _) ->

	React.createClass
		render: ->
			<div className="container-fluid">
				<div className="page-header">
					<h1>Dummy page</h1>
				</div>
				<div className="media">
					<div className="media-left">
						<img className="media-object" src="http://placekitten.com/g/200/300" width="200" height="300" />
					</div>
					<div className="media-body">
						<h4 className="media-heading">
							Lorem ipsum dolor sit amet
						</h4>
						<p>Consectetur adipisicing elit. Distinctio eum ipsum autem est. Odio laborum quibusdam quas assumenda voluptates, exercitationem iure in dolor similique tempora aut tempore neque, quisquam vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam autem tenetur odio molestias quas aliquam quisquam.</p>
						<p>Corporis deleniti cumque facilis natus aut rerum fuga illo odit! Perspiciatis, aperiam, ipsa!</p>
					</div>
				</div>
			</div>