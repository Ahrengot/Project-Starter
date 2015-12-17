import TodoReducer from './todo-reducer';
import { combineReducers } from 'redux'


// Main wrapping reducer
export default combineReducers({
	todos: TodoReducer
})

/* The above is a helper that basically generates this:
export default (state = {}, action) => {
	return {
		todos: TodoReducer(state.todos, action)
	}
}*/