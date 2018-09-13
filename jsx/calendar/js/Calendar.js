
const WEEKS  = ['Воскресенье', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота', 'Понедельник'];


class CalendarBuild {
	constructor(date) {
		this.date = date;
	}

	daysInMonth(date){
		return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
	}

	beginningMonth() {
		let weekday = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
		weekday.setDate(1);

		let day = weekday.getDay() -1,
				dayDate = [],
				now = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()),
				counter;
		
		now.setMonth(this.date.getMonth() - 1);
		counter  = this.daysInMonth(now);
		dayDate.push(counter);
		
		if (day == 0) day = 7;

		for(let i = 0; i < day; i++){
			--counter;
			dayDate.push(counter)
		}
		

		dayDate.splice(dayDate.length - 1, 1);
		
		return dayDate.reverse();
		
	}
	
	get declinationMonth(){
		let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		
		return month[this.date.getMonth()].toUpperCase();
	}

	get capitalLetterDate() {
		let month = this.date.toLocaleDateString('ru', {month: 'long'}).split('');
		month[0] = this.date.toLocaleDateString('ru', {month: 'long'})[0].toUpperCase();
		
		return month.join('');
	}

	get day() {
		let item = [];

		for(let i = 1; i <= this.daysInMonth(this.date); i++) {
			item.push(i);
		}

		return item;
	}

	weeks() {
		let week = [];
		
		for(let i = 0; i < 6; i++) {
			week.push({['item' + (i + 1)]: []})
		}
		
		return week;
	}

	showCalendar() {
		let numberDay = [...this.day],
				lastMonth = this.weeks().slice(),
				day = 7 - this.beginningMonth().length,
				i = 0;
		
		while(i < day) {
			++i;
			lastMonth[0].item1.push(Number(numberDay.splice(0, 1).join('')));
		}

		lastMonth.forEach((el, index) => {
			let item = Object.keys(el)[0]
			if(item === 'item2' || item === 'item3' || item === 'item4' || item === 'item5' || item === 'item6') {
				for(let i = 0; i < 7; i++) {
					if(numberDay.length !== 0) {
						el[item].push({
							classItem: '',
							element: Number(numberDay.splice(0, 1).join(''))
						})
					}
				}
			}
		});
		

		if(lastMonth[4].item5.length !== 0 && lastMonth[5].item6.length === 0) {
			let longItem5 = 7 - lastMonth[4].item5.length;
			
			for(let i = 1; i <= longItem5; i++){
				lastMonth[4].item5.push({
					classItem: 'ui-datepicker-other-month',
					element: i
				})
			}
		}

		if(lastMonth[5].item6.length !== 0) {
			let longItem6 = 7 - lastMonth[5].item6.length;
			
			for(let i = 1; i <= longItem6; i++){
				lastMonth[5].item6.push({
					classItem: 'ui-datepicker-other-month',
					element: i
				})
			}
		}
		
		return lastMonth;
	}
}


const Calendar = ({date}) => {

	return (
			<div className="ui-datepicker">
			  <div className="ui-datepicker-material-header">
			    <div className="ui-datepicker-material-day">{WEEKS[date.getDay()-1]}</div>
			    <div className="ui-datepicker-material-date">
			      <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
			      <div className="ui-datepicker-material-month">{new CalendarBuild(date).declinationMonth}</div>
			      <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
			    </div>
			  </div>
			  <div className="ui-datepicker-header">
			    <div className="ui-datepicker-title">
			      <span className="ui-datepicker-month">{new CalendarBuild(date).capitalLetterDate}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
			    </div>
			  </div>
			  <table className="ui-datepicker-calendar">
			    <colgroup>
			      <col/>
			      <col/>
			      <col/>
			      <col/>
			      <col/>
			      <col className="ui-datepicker-week-end"/>
			      <col className="ui-datepicker-week-end"/>
			    </colgroup>
			    <thead>
			      <tr>
			      <th scope="col" title="Понедельник">Пн</th>
			      <th scope="col" title="Вторник">Вт</th>
			      <th scope="col" title="Среда">Ср</th>
			      <th scope="col" title="Четверг">Чт</th>
			      <th scope="col" title="Пятница">Пт</th>
			      <th scope="col" title="Суббота">Сб</th>
			      <th scope="col" title="Воскресенье">Вс</th>
			      </tr>
			    </thead>
			    <tbody>
				    <tr>
				    	{new CalendarBuild(date).beginningMonth().map((el, index) => <td className='ui-datepicker-other-month'  key ={index}>{el}</td>)}
				    	{new CalendarBuild(date).showCalendar()[0].item1.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} key={index}>{el}</td>)}
				    </tr>
				    <tr>
				    	{new CalendarBuild(date).showCalendar()[1].item2.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} key={index}>{el.element}</td>)}
				    </tr>
				    <tr>
				    	{new CalendarBuild(date).showCalendar()[2].item3.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} key={index}>{el.element}</td>)}
				    </tr>
				    <tr>
				    	{new CalendarBuild(date).showCalendar()[3].item4.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} key={index}>{el.element}</td>)}
				    </tr>
				    <tr>
				    	{new CalendarBuild(date).showCalendar()[4].item5.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} className={el.classItem === 'ui-datepicker-other-month' ? 'ui-datepicker-other-month' : ''} key={index}>{el.element}</td>)}

				    </tr>
				    <tr>
				    	{new CalendarBuild(date).showCalendar()[5].item6.map((el, index)=> <td className={el === date.getDate() ? 'ui-datepicker-today' : ''} className={el.classItem === 'ui-datepicker-other-month' ? 'ui-datepicker-other-month' : ''} key={index}>{el.element}</td>)}
				    </tr>
			    </tbody>
			  </table>
			</div>
	)
}

