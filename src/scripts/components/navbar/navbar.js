import Styles from './navbar.css'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div className="col-xs-12">
				<nav className={ Styles.navbar + " navbar navbar-light bg-faded" }>
					<IndexLink to="/" className={ Styles.indexLink + " navbar-brand"}>Project Starter</IndexLink>
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<IndexLink to="/" activeClassName={ Styles.active }>Welcome</IndexLink>
						</li>
						<li className="nav-item">
							<Link to="about" activeClassName={ Styles.active }>About</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
})