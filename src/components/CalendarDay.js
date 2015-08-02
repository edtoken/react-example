import React, {Component} from 'react';
import DateHelper from './helpers/DateHelper';
import StylesHelper from './helpers/StylesHelper';

let styles = require('./CalendarDay.scss');

export default class CalendarDay extends Component {

	constructor(props){
		"use strict";
		super(props);

		this.state = {
			//disable:props.data.disable || false
			styles:{
				background:''
			}
		}
	}

	eventClickOnDay(){
		"use strict";

		if(!this.props.data.disable){
			var changeState = {
				styles:{
					background:StylesHelper.getRandomColor()
				}
			};
			this.setState(changeState);
		}

	}

	render(){
		"use strict";

		var classNameDay = (this.props.data.disable)? styles.dayDisable : styles.day;
		var date = this.props.data.date;
		var stylesCss = this.state.styles;
		var dayTitle = (this.props.data.disable)? 'Day off' : 'Click to change color';

		return (
			<span title={dayTitle} style={stylesCss} className={classNameDay} onClick={this.eventClickOnDay.bind(this)}>{date}</span>
		)
	}
}
