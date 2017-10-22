//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Router, browserHistory} from 'react-router';

// Components
import "./style.css";
import ClientRoutes from './components/routes.js';
import Layout from './components/Layout';

import AuthComponent from './components/AuthComponent';

ReactDOM.render((
	
	<BrowserRouter basename="/">
		{/*<Layout>
			<ClientRoutes />
		</Layout>*/}

		<AuthComponent />
	</BrowserRouter>

	),
	document.getElementById('root')
);
