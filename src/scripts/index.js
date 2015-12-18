import './util/xlink-fix'
import 'react-fastclick'

// Redux
import configreStore from './stores/configure-store'
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

let store = configreStore();
const history = createHashHistory()
syncReduxAndRouter(history, store);

// Redux dev tools
let DevTools = null;
if (process.env.NODE_ENV !== 'production') {
  DevTools = require('./components/devtools').default;
}

ReactDOM.render((
	<Provider store={ store }>
		<div>
			<Router history={ history }>
				<Route path="/" component={ Wrapper }>
					<IndexRoute component={ Welcome } />
					<Route path="about" component={ About } />
					<Route path="to-do" component={ Todo } />
				</Route>
			</Router>
			{ DevTools ? <DevTools /> : null }
		</div>
	</Provider>
), document.getElementById('app'));
