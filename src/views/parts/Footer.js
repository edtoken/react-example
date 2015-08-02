import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<div className="container">
				<hr/>
				<h4>Footer</h4>
				<p>Ed. ReactJS example. <a href="http://edtoken.github.io" target="_blank">edtoken.github.io</a></p>
			</div>
		);
	}
}
