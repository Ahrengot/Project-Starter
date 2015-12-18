import Styles from './navbar.css'
import { Link, IndexLink } from 'react-router'

let links = [
	{ path: "to-do", label: "Todo list" },
	{ path: "about", label: "About" },
]

export default React.createClass({
	renderLink(link) {
		return (
			<li className="nav-item" key={ link.path }>
				<Link to={ link.path } activeClassName={ Styles.active }>{ link.label }</Link>
			</li>
		)
	},
	render() {
		return (
			<div className="col-xs-12">
				<nav className={ Styles.navbar + " navbar navbar-light bg-faded" }>
					<IndexLink to="/" className={ Styles.indexLink + " navbar-brand"}>Project Starter</IndexLink>
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<IndexLink to="/" activeClassName={ Styles.active }>Welcome</IndexLink>
						</li>
						{ links.map( this.renderLink ) }
					</ul>
				</nav>
			</div>
		)
	}
})