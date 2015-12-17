import _ from 'underscore';

let createItem = (title) => {
	return {
		id: _.uniqueId(),
		title: title
	}
}

let updateTodo = (todo, props) => {
	return _.extend(todo, props);
}

let defaultState = [
	createItem('Add your first task'),
]

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'CREATE_TODO':
			return state.concat(createItem(action.title));
		case 'DELETE_TODO':
			return state.filter((todo) => {
				return (todo.id !== action.id);
			})
		case 'UPDATE_TODO':
			return state.map((todo) => {
				if (todo.id !== action.id) {
					return todo;
				}

				return updateTodo(todo, _.omit(action, 'type', 'id'));
			})
		default:
			console.warn("Unrecognized action: ", action);
			return state;
	}
}