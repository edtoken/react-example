import React, {Component} from 'react';

import Header from "./parts/Header";
import Footer from "./parts/Footer";

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1>Doh! 404!</h1>
					<p>These are <em>not</em> the droids you are looking for!</p>
				</div>
				<Footer />
			</div>
		);
	}
}
