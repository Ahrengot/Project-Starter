import Styles from './todo-list.css'
import Item from './todo-item';

import Store from '../../stores/app-store';

export default React.createClass({
	onSubmitForm(e) {
		e.preventDefault();

		// Ignore empty submissions
		if ( !this.refs.input.value ) {
			return;
		}

		Store.dispatch({
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
					{ Store.getState().todos.map( item => {
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
		this.unsubscribe = Store.subscribe(() => {
			this.forceUpdate();
		});
	}
})