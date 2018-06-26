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

		hideTabContent(1)


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
		})
});
//Timer
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


//modal

let more = document.querySelector('.more'), //получаем кнопку "узнать больше"
	overlay = document.querySelector('.overlay'), //получаем все наше модальное окно с подложкой снизу
	close = document.querySelector('.popup-close'), //получаем кнопку крестик "закрыть"
	description = document.querySelectorAll('.description-btn');

more.addEventListener('click', function() { //функция которая покажет модальное окно
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden'; //запрет прокрутки страницы пока открыто окно
})

close.addEventListener('click', function() { //функция скрытия окна крестиком
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
})

for (let i=0; i<description.length; i++) {
	description[i].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
})
} 

 
function animate (draw,duration) {  //в значениях 1-что нужно сделать, 2-за какое время
	let start = performance.now();  // сколько времени прошло с того момента как удалилась предыдущая страница и начала отрисовываться текущая страница
	requestAnimationFrame(function animate(time) { //значение это сколько по времени идет анимация
		let timePassed = time - start; //показывает сколько времени прошло с события(нажатия на кнопку)

		if (timePassed > duration) {  //прошедшее с события времени больше длительности анимации, тогда прерываем анимацию
			timePassed = duration;
		}
		draw(timePassed);


		if (timePassed < duration) { //если анимация еще не закончилась, вызываем request
			requestAnimationFrame(animate);
		}
	})
}

let navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', function(event){
	event.preventDefault();

	animate(function(timePassed){
		let target = event.target;
		let section = document.getElementById(target.getAttribute('href').slice(1) );
		window.scrollBy( 0, section.getBoundingClientRect().top/20-3);
	},1500)
})

//Form
let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся!";
	message.failure = "Что то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	form.appendChild(statusMessage);

	//Ajax
	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4 ) {
			statusMessage.innerHTML = message.loading;
		} else if(request.readyState === 4 ) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
				// добавляем контент на страницу
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
	}

	for (let i = 0; i< input.length; i++) {
		input[i].value = '';
		//очищаем поля ввода
	}
});

//contact
let contact = new Object();
	contact.loading = "Загружаем";
	contact.success = "Ваши контакты сохранены!";
	contact.failure = "Ошибка в записи";

let contactForm = document.getElementById('form'),
	contactInput = contactForm.getElementsByTagName('input'),
	statusContact = document.createElement('div');
	statusContact.classList.add('statuscont');

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	contactForm.appendChild(statusContact);

	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(contactForm);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4 ) {
			statusContact.innerHTML = contact.loading;
		} else if(request.readyState === 4 ) {
			if (request.status == 200 && request.status < 300) {
				statusContact.innerHTML = contact.success;
			}
			else {
				statusContact.innerHTML = contact.failure;
			}
		}
	}

	for (let i = 0; i < contactInput.length; i++) {
		contactInput[i].value = '';
	}
});

//slider 
let slideIndex = 1, //индекс который будет показывать первый слайд
	slides = document.getElementsByClassName('slider-item'), //получаем наши картинки-слайды
	prev = document.querySelector('.prev'), //получаем кнопку "назад"
	next = document.querySelector('.next'), //получаем кнопку "вперед"
	dotsWrap = document.querySelector('.slider-dots'), //получаем блок с точками
	dots = document.getElementsByClassName('dot'); //получаем точки под слайдером


showSlides(slideIndex);

function showSlides (n) {  //функция показа текущего слайда

	if (n > slides.length) {
		slideIndex = 1;
	};
	if (n < 1) {
		slideIndex = slides.length;
	};

	for (let i=0; i < slides.length; i++) {  //скрываем ненужные слайды
		slides[i].style.display = 'none';
	};

	for (let i = 0; i < dots.length; i++) { // снимаем классы с точек
		dots[i].classList.remove('dot-active');
	};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add ('dot-active');

}


function plusSlides (n) { //функция которая будет отнимать или прибавлять количество слайдов
	showSlides(slideIndex += n) //в этой записи если нажимается вперед, слайд делает шаг +1, если назад то -1
}

function currentSlide (n) {
	showSlides(slideIndex = n) //получим наш текущий индекс
}

prev.addEventListener('click', function(){ //функция для кнопки назад
	plusSlides(-1); //передаем -1 чтобы сделать шаг назад
});

next.addEventListener('click', function(){ //функция для кнопки назад
	plusSlides(1); //передаем -1 чтобы сделать шаг назад
});

dotsWrap.addEventListener('click', function(event) { //метод делегирования
	for (let i=0; i < dots.length+1; i++) { //прибавляем +1
		if (event.target.classList.contains('dot') && event.target == dots[i-1]) { //проверяем есть ли класс у того что кликнули и сравниваем индекс нашей точки
			currentSlide(i); //тогда вызываем функцию переключения
		}
	}
});

//calc
let persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() { //отслеживаем изменение в полях ввода
		personsSum = +this.value; //отслеживаем значение input, this ссылается на persons
		total = (daysSum + personsSum)*4000; // 
		if (restDays.value == ''|| restDays.value == '+' || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') {
			totalValue.innerHTML = 0;
	} else {
		totalValue.innerHTML = total;
	}
	});

	restDays.addEventListener('change', function() { //то же самое для второго поля
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (persons.value == '' || persons.value == '+' || persons.value % 1 !== 0 || personsSum == '' || daysSum == '') {
		totalValue.innerHTML = 0;	
	} else {
		totalValue.innerHTML = total;
	}

	});

	place.addEventListener('change', function() {  //функция отслеживания за select
		if (restDays.value == '' || persons.value == '' || persons.value % 1 !== 0 || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') { //проверяем чтобы не считался коэфициент, пока не заполнены обязательные поля 
			totalValue.innerHTML = 0;
		} else { //общую стоимость умножаем на select с индексом конкретной опции 
			let a = total; //такая запись позволит только 1 раз изменять коэфициент а не постоянно умножать
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	restDays.addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });

    persons.addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });