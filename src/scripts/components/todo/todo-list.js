import { connect } from 'react-redux'

import Styles from './todo-list.css'
import Item from './todo-item';

let TodoList = React.createClass({
	propTypes: {
		todos: React.PropTypes.arrayOf(React.PropTypes.object),
		dispatch: React.PropTypes.func,
	},
	onSubmitForm(e) {
		e.preventDefault();

		// Ignore empty submissions
		if ( !this.refs.input.value ) {
			return;
		}

		this.props.dispatch({
			type: 'CREATE_TODO',
			title: this.refs.input.value,
		})

		// Reset input field
		this.refs.input.value = "";
	},
	render() {
		return (
			<div>
				<div>
					{ this.props.todos.map( item => {
						return <Item key={ item.id } { ...item } />;
					})}
				</div>

				<form className={ Styles.form } onSubmit={ this.onSubmitForm }>
					<input ref="input" className="form-control form-control-lg" placeholder="Type something and hit enter" />
				</form>
			</div>
		)
	},
	componentDidMount() {
		this.refs.input.focus();
	}
})

export default connect(state => {
	return {
		todos: state.todos
	}
})(TodoList)