import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
	render() {

		return (
			<div>
				<div className="container">
					<h1>ReactJS test Example</h1>
					<nav className="navbar navbar-inverse">
						<div className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><Link to="/">Index</Link></li>
								<li><Link to="#about">About</Link></li>
								<li><Link to="#404">404</Link></li>
							</ul>
						</div>
					</nav>

				</div>
			</div>

		);
	}
}
