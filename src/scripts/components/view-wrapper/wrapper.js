import Navbar from 'navbar/navbar'

export default React.createClass({
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Navbar />
				</div>
				<div className="row">
					{ this.props.children }
				</div>
			</div>
		)
	}
})