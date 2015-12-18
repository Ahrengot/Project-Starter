import _ from 'underscore'
import { connect } from 'react-redux'

import Styles from './todo-list.css'

let TodoItem = React.createClass({
	propTypes: {
		dispatch: React.PropTypes.func,
		disabled: React.PropTypes.bool,
		title: React.PropTypes.string,
	},
	onClick() {
		this.props.dispatch({
			type: 'UPDATE_TODO',
			id: this.props.id,
			disabled: !this.props.disabled,
			title: this.props.title.split('').reverse().join('')
		})
	},
	onClickDelete() {
		this.props.dispatch({
			type: 'DELETE_TODO',
			id: this.props.id
		})
	},
	render() {
		let className = Styles.todo;
		if ( this.props.disabled ) {
			className += (" " + Styles.disabled)
		}

		return (
			<li className={ className } onClick={ this.onClick } data-disabled={ this.props.disabled }>
				{ this.props.title }
				<span className={ Styles.deleteBtn } onClick={ this.onClickDelete }>&times;</span>
			</li>
		)
	}
})

export default connect(state => {
	return {}
})(TodoItem)