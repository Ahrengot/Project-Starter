import TodoReducer from './todo-reducer';
import { combineReducers } from 'redux'


// Main wrapping reducer
export default combineReducers({
	todos: TodoReducer
})