import React, {Component} from 'react';
import DateHelper from './helpers/DateHelper';

let styles = require('./CalendarDay.scss');

export default class CalendarDay extends Component {

	//constructor(props){
	//	"use strict";
	//	super(props);
	//}

	render(){
		"use strict";

		var classNameDay = (this.props.data.hidden) ? styles.dayDisable : styles.day;
		var date = this.props.data.date;

		return (
			<span className={classNameDay}>{date}</span>
		)
	}
}
