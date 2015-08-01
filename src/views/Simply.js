import React, {Component} from 'react';

import Header from "./parts/Header";
import Footer from "./parts/Footer";

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1>Simply page</h1>
					<p>Simply page</p>
				</div>
				<Footer />
			</div>
		);
	}
}
