import './util/xlink-fix'
import 'react-fastclick'

import Wrapper from 'view-wrapper/wrapper'
import Welcome from 'view-welcome/welcome'
import About from 'view-about/about'

import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render((
	<Router>
		<Route path="/" component={ Wrapper }>
			<IndexRoute component={ Welcome } />
			<Route path="about" component={ About } />
		</Route>
	</Router>
), document.getElementById('app'));
