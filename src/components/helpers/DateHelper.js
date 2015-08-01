
module.exports = {

	/**
	 * добавить/убрать (если days отрицательный) дни к дате
	 * @param date
	 * @param days
	 */
	addDaysToDate: function(date, days){
		"use strict";
		var outDate = new Date(date);
		outDate.setDate(date.getDate() + days);
		return outDate;
	},

	/**
	 * добавить 1 день к дате
	 * @param date
	 * @returns {*}
	 */
	addOneDayToDate:function(date){
		"use strict";
		return this.addDaysToDate(date, 1);
	},

	removeOneDayToDate:function(date){
		"use strict";
		return this.addDaysToDate(date, -1);
	},

	/**
	 * добавить/убрать месяцы к дате
	 * @param date
	 * @param months
	 */
	addMonthsToDate:function(date, months){
		"use strict";
		var outDate = new Date(date);
		outDate.setMonth(date.getMonth() + months);
		return outDate;
	},

	/**
	 * получить дату в следующем месяце по переданной
	 * @param date
	 * @returns {*}
	 */
	getNextMonthByDate:function(date){
		"use strict";
		return this.addMonthsToDate(date, 1);
	},

	/**
	 * получить дату в предыдущем месяце по переданной
	 * @param date
	 * @returns {*}
	 */
	getPrevMonthByDate:function(date){
		"use strict";
		return this.addMonthsToDate(date, -1);
	}

};