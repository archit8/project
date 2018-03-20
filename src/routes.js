import React from 'react';
import App from './containers/App';
import {Route, IndexRedirect} from 'react-router';

export const routes = (
	<div>
		<Route path="/" component={App}>
		</Route>
	</div>
);