import Styles from './welcome.css'

export default React.createClass({
	render() {
		return (
			<article className={ Styles.container + " view container-fluid" }>
				<div className="view-content">
					<header className="text-center">
						<h2>Welcome!</h2>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi praesentium, harum unde tempora, distinctio eligendi vero, ratione veniam ad nesciunt aliquid iste temporibus ut. Dolorem error ut, ea. Esse, cum.</p>
				</div>
			</article>
		)
	}
})