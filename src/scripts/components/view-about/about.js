import styles from './about.css'
import Avatar from 'avatar/avatar';

export default React.createClass({
	render() {
		return (
			<article className="view container-fluid">
				<div className="view-content">
					<header className="text-center">
						<Avatar src="http://lorempixel.com/200/200/people/" />
						<h2>Wakka wakka</h2>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem praesentium ullam nulla explicabo exercitationem, a id quas quam sit quia aperiam in ducimus cumque eos tempore quaerat libero, facilis, obcaecati.</p>
				</div>
			</article>
		)
	}
})