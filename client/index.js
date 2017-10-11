//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Router, browserHistory} from 'react-router';

// Components
import ClientRoutes from './components/routes.js';
import Layout from './components/Layout';

ReactDOM.render((
	
	<BrowserRouter basename="/">
		<Layout>
			<ClientRoutes />
		</Layout>
	</BrowserRouter>

	),
	document.getElementById('root')
);
