import React, {Component} from 'react';

import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Calendar from "../components/Calendar";

export default class Index extends Component {
	render() {
		return (
			<div>
				<Header />
					<div className="container">
						<h1>Index page</h1>
						<p>index page</p>
					</div>
					<Calendar />
				<Footer />
			</div>
		);
	}
}
