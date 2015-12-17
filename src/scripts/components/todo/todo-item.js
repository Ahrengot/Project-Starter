import _ from 'underscore'

import Styles from './todo-list.css'
import Store from '../../stores/app-store'

export default React.createClass({
	onClick() {
		Store.dispatch({
			type: 'UPDATE_TODO',
			id: this.props.id,
			disabled: !this.props.disabled,
			title: this.props.title.split('').reverse().join('')
		})
	},
	render() {
		let className = Styles.todo;
		if ( this.props.disabled ) {
			className += (" " + Styles.disabled)
		}

		return (
			<li className={ className } onClick={ this.onClick } data-disabled={ this.props.disabled }>{ this.props.title }</li>
		)
	}
})