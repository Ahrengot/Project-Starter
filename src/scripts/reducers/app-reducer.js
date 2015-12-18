import TodoReducer from './todo-reducer';
import { routeReducer } from 'redux-simple-router'
import { combineReducers } from 'redux'


// Main wrapping reducer
export default combineReducers({
	todos: TodoReducer,
	routing: routeReducer
})