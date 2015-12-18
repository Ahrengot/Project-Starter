import './util/xlink-fix'
import 'react-fastclick'

// Redux
import Store from './stores/app-store'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'

// Routing
import { createHashHistory } from 'history'
import { Router, Route, IndexRoute } from 'react-router'

// Views
import Wrapper from 'view-wrapper/wrapper'
import Welcome from 'view-welcome/welcome'
import About from 'view-about/about'
import Todo from 'view-todo/todo'

const history = createHashHistory()
syncReduxAndRouter(history, Store);

ReactDOM.render((
	<Provider store={ Store }>
		<Router history={ history }>
			<Route path="/" component={ Wrapper }>
				<IndexRoute component={ Welcome } />
				<Route path="about" component={ About } />
				<Route path="to-do" component={ Todo } />
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));
