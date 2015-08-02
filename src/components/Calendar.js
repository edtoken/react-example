import React, {Component} from 'react';
import DateHelper from './helpers/DateHelper';
import CalendarDay from './CalendarDay';

let styles = require('./Calendar.scss');

export default class Calendar extends Component {

	constructor(props) {

		super(props);

		this.state = {
			activeMonth: new Date()
		};
	}

	/**
	 *
	 * нужно посчитать количество дней в месяце,
	 * а так же кусок дней предыдущего (и следующего) месяцев,
	 * что бы отобразить "полноценный квадрат"
	 *
	 * код рассчета в большей части скопирован из моего старого тестового для спбтв
	 * https://github.com/edtoken/calendar/blob/gh-pages/assets/js/app/models/month.js
	 * поэтому в подробности не вдавался
	 *
	 * @param date
	 */
	calcDays(date) {
		"use strict";

		// результат
		var data = {
			prev: [], // дни предыдущего месяца
			next: [], // дни следующего месяца
			current: [], // дни текущего месяца
			all: [] // все дни в одном массиве
		};

		var calcDay = date;
		var calcYear = date.getFullYear();
		var calcMonth = date.getUTCMonth();

		var prevMonthDaysCount;
		var nextMonthDaysCount;
		var daysCount;
		var firstDay;
		var prevStartDate;
		var dataObjPrev;
		var dataObjNext;

		// количество дней
		daysCount = 33 - new Date(calcYear, calcMonth, 33).getDate();

		// первый день
		firstDay = calcDay.getDay();

		// обработка дней предыдущего месяца
		if (firstDay !== 0) {
			prevMonthDaysCount = 33 - new Date(calcYear, calcMonth - 1, 33).getDate();
			prevStartDate = prevMonthDaysCount - firstDay + 1;

			dataObjPrev = {};
			dataObjPrev.month = (calcMonth === 0) ? 11 : calcMonth - 1;
			dataObjPrev.year = (calcMonth === 0) ? calcYear - 1 : calcYear;

			// складываю дни предыдущего месяца в массив для дальнейшей обработки
			for (var pi = prevStartDate; pi <= prevMonthDaysCount; pi++) {
				data.prev.push({
					disable: true,
					date: pi,
					month: dataObjPrev.month,
					year: dataObjPrev.year
				});
			}
		}

		// обработка дней текущего месяца
		for (var i = 1; i <= daysCount; i++) {
			data.current.push({
				date: i,
				month: calcMonth,
				year: calcYear
			});
		}

		// обработка дней следующего месяца
		// это число нужно, что бы понять сколько дней "слудющего месяца"
		// я зацепил, что бы отрисованный квадрат был квадратом :)
		nextMonthDaysCount = (7 * Math.ceil((data.prev.length + data.current.length) / 7)) - (data.prev.length + data.current.length);
		if (nextMonthDaysCount > 0) {

			dataObjNext = {};
			dataObjNext.month = (calcMonth === 11) ? 0 : calcMonth + 1;
			dataObjNext.year = (calcMonth === 11) ? calcYear + 1 : calcYear;

			for (var ni = 1; ni <= nextMonthDaysCount; ni++) {
				// складываю дни следующего месяца
				data.next.push({
					disable: true,
					date: ni,
					month: dataObjNext.month,
					year: dataObjNext.year
				});
			}
		}

		// сортирую числа всех месяцев (предыдущий, текущий, следующий)
		data.current.sort(function (a, b) {
			if (a.date < b.date) {
				return -1;
			}
			return 1;
		});
		data.prev.sort(function (a, b) {
			if (a.date < b.date) {
				return -1;
			}
			return 1;
		});
		data.next.sort(function (a, b) {
			if (a.date < b.date) {
				return -1;
			}
			return 1;
		});

		// для удобства складываю все дни в 1 массив
		data.all = data.all.concat(data.prev, data.current, data.next);

		// теперь считаю неделю не помню для чего я это делал
		// вспомнил, что бы окошко добавления таска появлялось с правильной стороны
		// сейчас это не нужно
		//data.all = data.all.map(function(item){
		//	var week = new Date(item.year, item.month, item.date).getDay();
		//	item.dir = (week < 3) ? 0 : 1;
		//	return item;
		//});

		return data;
	}

	goToPrevMonth() {
		"use strict";

		var activeMonth = this.state.activeMonth;
		var nextMonth = DateHelper.getPrevMonthByDate(activeMonth);

		this.setState({
			activeMonth: nextMonth
		});
		return false;
	}

	goToNextMonth() {
		"use strict";

		var activeMonth = this.state.activeMonth;
		var nextMonth = DateHelper.getNextMonthByDate(activeMonth);

		this.setState({
			activeMonth: nextMonth
		});
		return false;
	}

	//events
	eventClickPrevMonth(){
		"use strict";
		return this.goToPrevMonth();
	}

	eventClickNextMonth(){
		"use strict";
		return this.goToNextMonth();
	}


	render() {

		var currentDay = this.state.activeMonth;
		var currentMonthTitle = currentDay.getFullYear() + '/' + this.props.monthNames[currentDay.getMonth()];

		var days = [];
		var weeksList = [];
		var daysData = this.calcDays(currentDay);

		for (var i in daysData.all) {
			days.push(<CalendarDay data={daysData.all[i]} />);
		}
		for(var w in this.props.weeks){
			weeksList.push(<li className={styles.weeksListItem}>{this.props.weeks[w]}</li>)
		}


		return (
			<div className={styles.calendarWidget}>

				<div className="container">

					<div className={styles.header}>

						<div className="row">
							<h3 className="col-sm-3">{currentMonthTitle}</h3>

							<div className="col-sm-9">
								<ul className={styles.navigation}>
									<li><a href="#" className="btn btn-primary" onClick={this.eventClickPrevMonth.bind(this)}>Prev
										Month</a></li>
									<li><a href="#" className="btn btn-primary" onClick={this.eventClickNextMonth.bind(this)}>Next
										Month</a></li>
								</ul>
							</div>
						</div>

						<ul className={styles.weeksList}>
							{weeksList}
						</ul>

					</div>

					<div className={styles.daysList}>
						{days}
					</div>
				</div>
			</div>
		);
	}
}

Calendar.defaultProps = {
	monthNames: ["January", "February", "March", "April", "May",
		"June", "July", "August", "September", "October", "November", "December"],
	weeks:['SUN', 'MON','TUES', 'WED', 'THU', 'FRI', 'SAT']
};

