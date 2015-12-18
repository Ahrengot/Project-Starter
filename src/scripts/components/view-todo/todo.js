import Styles from './todo-view.css'
import TodoList from 'todo/todo-list'

export default React.createClass({
	render() {
		return (
			<article className={ Styles.view + " view container-fluid" }>
				<div className="view-content">
					<h2>Redux example: <small>Todo list</small></h2>
					<TodoList />
				</div>
			</article>
		)
	}
})