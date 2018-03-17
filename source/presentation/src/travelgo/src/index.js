import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();