import Express from 'express';
import React from 'react';
import path from 'path';
import httpProxy from 'http-proxy';
import config from '../config/default';
import Html from './components/system/Html';

const app = new Express();
const proxy = httpProxy.createProxyServer({
	target: 'http://localhost:' + config.apiPort
});

app.use(require('serve-static')(path.join(__dirname, '..', 'static')));

let webpackStats;
webpackStats = require('../webpack-stats.json');

app.use((req, res) => {
	res.send('<!doctype html>\n' +
		React.renderToString(<Html webpackStats={webpackStats} component={<div/>} />));
});

if (config.port) {
	app.listen(config.port, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.info('==> ✅  Server is listening');
			console.info('==> 🌎  %s running on port %s, API on port %s', config.app.name, config.port, config.apiPort);
			console.info('----------\n==> 💻  Open http://localhost:%s in a browser to view the app.', config.port);
		}
	});
} else {
	console.error('==>     ERROR: No PORT environment variable has been specified');
}
