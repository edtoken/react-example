import React, {Component} from 'react';


import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Calendar from "../components/Calendar";

export default class Index extends Component {

	//mixins : [Router.Navigation],

	render() {
		return (
			<div>
				<Header />
					<Calendar />
				<Footer />
			</div>
		);
	}
}
