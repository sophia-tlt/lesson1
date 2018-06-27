function timer () {
	let deadline = '2018-07-10'//дата на которой заканчивается таймер

function getTimeRemaining(endTime) {  //функция которая будет расчитывать сколько осталось до дедлайна
	let t = Date.parse(endTime) - Date.parse(new Date()), //разница между дедлайном и текущей датой. метод parse передает значение в миллисекундах
		seconds = Math.floor( (t/1000) %60 ), // переводим в сек, а потом остаток деления на целые минуты(то есть остануться лишние сек)
		minutes = Math.floor( (t/1000/60) %60 ) // точно также переводим в минуты
		hours = Math.floor( (t/(1000*60*60)) );

		return {  //функция может возвращать объект
			'total': t, //сколько всего милисекунд осталось
			'hours': hours,
			'minutes':minutes, //удобней через объект потому что легко получим через .любой объект
			'seconds':seconds
		};
		}

function setClock (id, endTime) { //функция которая будет запускать наши часы,в параметрах передается ID таймера и наш deadline
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'), //мы можем называть переменные так же потому что они внутри функции а за ее пределами их не существует
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock,1000)  //повторение обновления таймера

	function updateClock() {   //функция которая будет обновлять наш таймер каждую секунду
		let t = getTimeRemaining(endTime);  //результат функции расчета времени до дедлайна.Сюда запишется объект.Параметр endTime из функции setClock
		hours.innerHTML = t.hours; //запишется в span в разметку
			if (t.hours<10) {
				hours.innerHTML = '0'+ t.hours;
			};
		minutes.innerHTML = t.minutes;
			if (t.minutes<10) {
				minutes.innerHTML = '0'+t.minutes;
			};
		seconds.innerHTML = t.seconds;
			if (t.seconds<10) {
				seconds.innerHTML = '0'+t.seconds;
			};

		if (t.total <=0) {
			clearInterval(timeInterval);
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}
	}

	updateClock(); //запускаем функцию

}

setClock('timer', deadline)
}

module.exports = timer;