window.addEventListener('DOMContentLoaded',function(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

 //функция скрытия табов
		function hideTabContent (a) {              
			for (let i = a; i<tabContent.length;i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1);


 //функция показывания табов
		function showTabContent (b) {
			if (tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}


 //при помощи делегирования мы назначили на каждый таб событие
		info.addEventListener('click', function(event) {
			let target = event.target; //объявляем событие что мы куда то кликнули
			if (target.className == 'info-header-tab') { //событие - это нажатие на вкладку(таб)
				for (let i=0;i<tab.length; i++) { //делаем счетчик для перебора всех вкладок которые у нас есть
					if (target == tab[i]) { //проверяем на какую именно вкладку кликнули.То есть событие target сопоставляем с вкладкой
						showTabContent(i);  // если на эту вкладку кликнули, тогда показываем наш контент
						break; //останавливаем наш цикл перебора
					}
				}
			}
		});

//Timer
let deadline = '2018-06-19'//дата на которой заканчивается таймер

function getTimeRemaining(endTime) {  //функция которая будет расчитывать сколько осталось до дедлайна
	let timeZone = new Date().getTimezoneOffset()/60;
	let t = Date.parse(endTime) - Date.parse(new Date()), //разница между дедлайном и текущей датой. метод parse передает значение в миллисекундах
		seconds = Math.floor( (t/1000) %60 ), // переводим в сек, а потом остаток деления на целые минуты(то есть остануться лишние сек)
		minutes = Math.floor( (t/1000/60) %60 ) // точно также переводим в минуты
		hours = Math.floor( (t/(1000*60*60) + timeZone) );

		return {  //функция может возвращать объект
			'total': t, //сколько всего милисекунд осталось
			'hours': hours,
			'minutes':minutes, //удобней через объект потому что легко получим через .любой объект
			'seconds':seconds
		};
		};

function setClock (id, endTime) { //функция которая будет запускать наши часы,в параметрах передается ID таймера и наш deadline
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'), //мы можем называть переменные так же потому что они внутри функции а за ее пределами их не существует
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock,1000);  //повторение обновления таймера

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
	};

	updateClock(); //запускаем функцию

};

setClock('timer', deadline);


}); 

 
