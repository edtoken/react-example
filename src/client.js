import React from "react";
var HashHistory = require('react-router/lib/HashHistory');
import Router from 'react-router';
import {Route} from 'react-router';

import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Simply from "./views/Simply";

const dest = document.getElementById('content');

React.render((
	<Router history={new HashHistory}>
		<Route path="/" component={Index} />
		<Route path="/:year/:month" component={Index} />
		<Route path="#about" component={Simply} />
		<Route path="*" component={NotFound} />
	</Router>
), dest);