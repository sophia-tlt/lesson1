(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() { //╨╛╤В╤Б╨╗╨╡╨╢╨╕╨▓╨░╨╡╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╨▓ ╨┐╨╛╨╗╤П╤Е ╨▓╨▓╨╛╨┤╨░
		personsSum = +this.value; //╨╛╤В╤Б╨╗╨╡╨╢╨╕╨▓╨░╨╡╨╝ ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ input, this ╤Б╤Б╤Л╨╗╨░╨╡╤В╤Б╤П ╨╜╨░ persons
		total = (daysSum + personsSum)*4000; // 
		if (restDays.value == ''|| restDays.value == '+' || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') {
			totalValue.innerHTML = 0;
	} else {
		totalValue.innerHTML = total;
	}
	});

	restDays.addEventListener('change', function() { //╤В╨╛ ╨╢╨╡ ╤Б╨░╨╝╨╛╨╡ ╨┤╨╗╤П ╨▓╤В╨╛╤А╨╛╨│╨╛ ╨┐╨╛╨╗╤П
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (persons.value == '' || persons.value == '+' || persons.value % 1 !== 0 || personsSum == '' || daysSum == '') {
		totalValue.innerHTML = 0;	
	} else {
		totalValue.innerHTML = total;
	}

	});

	place.addEventListener('change', function() {  //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨╛╤В╤Б╨╗╨╡╨╢╨╕╨▓╨░╨╜╨╕╤П ╨╖╨░ select
		if (restDays.value == '' || persons.value == '' || persons.value % 1 !== 0 || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') { //╨┐╤А╨╛╨▓╨╡╤А╤П╨╡╨╝ ╤З╤В╨╛╨▒╤Л ╨╜╨╡ ╤Б╤З╨╕╤В╨░╨╗╤Б╤П ╨║╨╛╤Н╤Д╨╕╤Ж╨╕╨╡╨╜╤В, ╨┐╨╛╨║╨░ ╨╜╨╡ ╨╖╨░╨┐╨╛╨╗╨╜╨╡╨╜╤Л ╨╛╨▒╤П╨╖╨░╤В╨╡╨╗╤М╨╜╤Л╨╡ ╨┐╨╛╨╗╤П 
			totalValue.innerHTML = 0;
		} else { //╨╛╨▒╤Й╤Г╤О ╤Б╤В╨╛╨╕╨╝╨╛╤Б╤В╤М ╤Г╨╝╨╜╨╛╨╢╨░╨╡╨╝ ╨╜╨░ select ╤Б ╨╕╨╜╨┤╨╡╨║╤Б╨╛╨╝ ╨║╨╛╨╜╨║╤А╨╡╤В╨╜╨╛╨╣ ╨╛╨┐╤Ж╨╕╨╕ 
			let a = total; //╤В╨░╨║╨░╤П ╨╖╨░╨┐╨╕╤Б╤М ╨┐╨╛╨╖╨▓╨╛╨╗╨╕╤В ╤В╨╛╨╗╤М╨║╨╛ 1 ╤А╨░╨╖ ╨╕╨╖╨╝╨╡╨╜╤П╤В╤М ╨║╨╛╤Н╤Д╨╕╤Ж╨╕╨╡╨╜╤В ╨░ ╨╜╨╡ ╨┐╨╛╤Б╤В╨╛╤П╨╜╨╜╨╛ ╤Г╨╝╨╜╨╛╨╢╨░╤В╤М
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
}

module.exports = calc;
},{}],2:[function(require,module,exports){
function contact () {
	let contact = new Object();
	contact.loading = "╨Ч╨░╨│╤А╤Г╨╢╨░╨╡╨╝";
	contact.success = "╨Т╨░╤И╨╕ ╨║╨╛╨╜╤В╨░╨║╤В╤Л ╤Б╨╛╤Е╤А╨░╨╜╨╡╨╜╤Л!";
	contact.failure = "╨Ю╤И╨╕╨▒╨║╨░ ╨▓ ╨╖╨░╨┐╨╕╤Б╨╕";

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
}

module.exports = contact;
},{}],3:[function(require,module,exports){
function form () {
	let message = new Object();
	message.loading = "╨Ч╨░╨│╤А╤Г╨╖╨║╨░...";
	message.success = "╨б╨┐╨░╤Б╨╕╨▒╨╛! ╨б╨║╨╛╤А╨╛ ╨╝╤Л ╤Б ╨Т╨░╨╝╨╕ ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П!";
	message.failure = "╨з╤В╨╛ ╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║...";

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
				// ╨┤╨╛╨▒╨░╨▓╨╗╤П╨╡╨╝ ╨║╨╛╨╜╤В╨╡╨╜╤В ╨╜╨░ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Г
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
	}

	for (let i = 0; i< input.length; i++) {
		input[i].value = '';
		//╨╛╤З╨╕╤Й╨░╨╡╨╝ ╨┐╨╛╨╗╤П ╨▓╨▓╨╛╨┤╨░
	}
});
}

module.exports = form;
},{}],4:[function(require,module,exports){
function modal () {
	let more = document.querySelector('.more'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨║╨╜╨╛╨┐╨║╤Г "╤Г╨╖╨╜╨░╤В╤М ╨▒╨╛╨╗╤М╤И╨╡"
	overlay = document.querySelector('.overlay'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨▓╤Б╨╡ ╨╜╨░╤И╨╡ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ╤Б ╨┐╨╛╨┤╨╗╨╛╨╢╨║╨╛╨╣ ╤Б╨╜╨╕╨╖╤Г
	close = document.querySelector('.popup-close'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨║╨╜╨╛╨┐╨║╤Г ╨║╤А╨╡╤Б╤В╨╕╨║ "╨╖╨░╨║╤А╤Л╤В╤М"
	description = document.querySelectorAll('.description-btn');

more.addEventListener('click', function() { //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨║╨╛╤В╨╛╤А╨░╤П ╨┐╨╛╨║╨░╨╢╨╡╤В ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden'; //╨╖╨░╨┐╤А╨╡╤В ╨┐╤А╨╛╨║╤А╤Г╤В╨║╨╕ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л ╨┐╨╛╨║╨░ ╨╛╤В╨║╤А╤Л╤В╨╛ ╨╛╨║╨╜╨╛
})

close.addEventListener('click', function() { //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╤Б╨║╤А╤Л╤В╨╕╤П ╨╛╨║╨╜╨░ ╨║╤А╨╡╤Б╤В╨╕╨║╨╛╨╝
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

 
function animate (draw,duration) {  //╨▓ ╨╖╨╜╨░╤З╨╡╨╜╨╕╤П╤Е 1-╤З╤В╨╛ ╨╜╤Г╨╢╨╜╨╛ ╤Б╨┤╨╡╨╗╨░╤В╤М, 2-╨╖╨░ ╨║╨░╨║╨╛╨╡ ╨▓╤А╨╡╨╝╤П
	let start = performance.now();  // ╤Б╨║╨╛╨╗╤М╨║╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨┐╤А╨╛╤И╨╗╨╛ ╤Б ╤В╨╛╨│╨╛ ╨╝╨╛╨╝╨╡╨╜╤В╨░ ╨║╨░╨║ ╤Г╨┤╨░╨╗╨╕╨╗╨░╤Б╤М ╨┐╤А╨╡╨┤╤Л╨┤╤Г╤Й╨░╤П ╤Б╤В╤А╨░╨╜╨╕╤Ж╨░ ╨╕ ╨╜╨░╤З╨░╨╗╨░ ╨╛╤В╤А╨╕╤Б╨╛╨▓╤Л╨▓╨░╤В╤М╤Б╤П ╤В╨╡╨║╤Г╤Й╨░╤П ╤Б╤В╤А╨░╨╜╨╕╤Ж╨░
	requestAnimationFrame(function animate(time) { //╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ ╤Н╤В╨╛ ╤Б╨║╨╛╨╗╤М╨║╨╛ ╨┐╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨╕╨┤╨╡╤В ╨░╨╜╨╕╨╝╨░╤Ж╨╕╤П
		let timePassed = time - start; //╨┐╨╛╨║╨░╨╖╤Л╨▓╨░╨╡╤В ╤Б╨║╨╛╨╗╤М╨║╨╛ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨┐╤А╨╛╤И╨╗╨╛ ╤Б ╤Б╨╛╨▒╤Л╤В╨╕╤П(╨╜╨░╨╢╨░╤В╨╕╤П ╨╜╨░ ╨║╨╜╨╛╨┐╨║╤Г)

		if (timePassed > duration) {  //╨┐╤А╨╛╤И╨╡╨┤╤И╨╡╨╡ ╤Б ╤Б╨╛╨▒╤Л╤В╨╕╤П ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨▒╨╛╨╗╤М╤И╨╡ ╨┤╨╗╨╕╤В╨╡╨╗╤М╨╜╨╛╤Б╤В╨╕ ╨░╨╜╨╕╨╝╨░╤Ж╨╕╨╕, ╤В╨╛╨│╨┤╨░ ╨┐╤А╨╡╤А╤Л╨▓╨░╨╡╨╝ ╨░╨╜╨╕╨╝╨░╤Ж╨╕╤О
			timePassed = duration;
		}
		draw(timePassed);


		if (timePassed < duration) { //╨╡╤Б╨╗╨╕ ╨░╨╜╨╕╨╝╨░╤Ж╨╕╤П ╨╡╤Й╨╡ ╨╜╨╡ ╨╖╨░╨║╨╛╨╜╤З╨╕╨╗╨░╤Б╤М, ╨▓╤Л╨╖╤Л╨▓╨░╨╡╨╝ request
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
}

module.exports = modal;
},{}],5:[function(require,module,exports){
window.addEventListener('DOMContentLoaded',function(){
	let tabs = require('./tabs.js');
	let modal = require('./modal.js');
	let form = require('./form.js');
	let contact = require('./contact.js');
	let slider = require('./slider.js');
	let calc = require('./calc.js');
	let timer = require('./timer.js');

tabs();
modal();
form();
contact();
slider();
calc();
timer();
});

},{"./calc.js":1,"./contact.js":2,"./form.js":3,"./modal.js":4,"./slider.js":6,"./tabs.js":7,"./timer.js":8}],6:[function(require,module,exports){
function slider () {
	let slideIndex = 1, //╨╕╨╜╨┤╨╡╨║╤Б ╨║╨╛╤В╨╛╤А╤Л╨╣ ╨▒╤Г╨┤╨╡╤В ╨┐╨╛╨║╨░╨╖╤Л╨▓╨░╤В╤М ╨┐╨╡╤А╨▓╤Л╨╣ ╤Б╨╗╨░╨╣╨┤
	slides = document.getElementsByClassName('slider-item'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨╜╨░╤И╨╕ ╨║╨░╤А╤В╨╕╨╜╨║╨╕-╤Б╨╗╨░╨╣╨┤╤Л
	prev = document.querySelector('.prev'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨║╨╜╨╛╨┐╨║╤Г "╨╜╨░╨╖╨░╨┤"
	next = document.querySelector('.next'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨║╨╜╨╛╨┐╨║╤Г "╨▓╨┐╨╡╤А╨╡╨┤"
	dotsWrap = document.querySelector('.slider-dots'), //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨▒╨╗╨╛╨║ ╤Б ╤В╨╛╤З╨║╨░╨╝╨╕
	dots = document.getElementsByClassName('dot'); //╨┐╨╛╨╗╤Г╤З╨░╨╡╨╝ ╤В╨╛╤З╨║╨╕ ╨┐╨╛╨┤ ╤Б╨╗╨░╨╣╨┤╨╡╤А╨╛╨╝


showSlides(slideIndex);

function showSlides (n) {  //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨┐╨╛╨║╨░╨╖╨░ ╤В╨╡╨║╤Г╤Й╨╡╨│╨╛ ╤Б╨╗╨░╨╣╨┤╨░

	if (n > slides.length) {
		slideIndex = 1;
	};
	if (n < 1) {
		slideIndex = slides.length;
	};

	for (let i=0; i < slides.length; i++) {  //╤Б╨║╤А╤Л╨▓╨░╨╡╨╝ ╨╜╨╡╨╜╤Г╨╢╨╜╤Л╨╡ ╤Б╨╗╨░╨╣╨┤╤Л
		slides[i].style.display = 'none';
	};

	for (let i = 0; i < dots.length; i++) { // ╤Б╨╜╨╕╨╝╨░╨╡╨╝ ╨║╨╗╨░╤Б╤Б╤Л ╤Б ╤В╨╛╤З╨╡╨║
		dots[i].classList.remove('dot-active');
	};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add ('dot-active');

}


function plusSlides (n) { //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨║╨╛╤В╨╛╤А╨░╤П ╨▒╤Г╨┤╨╡╤В ╨╛╤В╨╜╨╕╨╝╨░╤В╤М ╨╕╨╗╨╕ ╨┐╤А╨╕╨▒╨░╨▓╨╗╤П╤В╤М ╨║╨╛╨╗╨╕╤З╨╡╤Б╤В╨▓╨╛ ╤Б╨╗╨░╨╣╨┤╨╛╨▓
	showSlides(slideIndex += n) //╨▓ ╤Н╤В╨╛╨╣ ╨╖╨░╨┐╨╕╤Б╨╕ ╨╡╤Б╨╗╨╕ ╨╜╨░╨╢╨╕╨╝╨░╨╡╤В╤Б╤П ╨▓╨┐╨╡╤А╨╡╨┤, ╤Б╨╗╨░╨╣╨┤ ╨┤╨╡╨╗╨░╨╡╤В ╤И╨░╨│ +1, ╨╡╤Б╨╗╨╕ ╨╜╨░╨╖╨░╨┤ ╤В╨╛ -1
}

function currentSlide (n) {
	showSlides(slideIndex = n) //╨┐╨╛╨╗╤Г╤З╨╕╨╝ ╨╜╨░╤И ╤В╨╡╨║╤Г╤Й╨╕╨╣ ╨╕╨╜╨┤╨╡╨║╤Б
}

prev.addEventListener('click', function(){ //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨┤╨╗╤П ╨║╨╜╨╛╨┐╨║╨╕ ╨╜╨░╨╖╨░╨┤
	plusSlides(-1); //╨┐╨╡╤А╨╡╨┤╨░╨╡╨╝ -1 ╤З╤В╨╛╨▒╤Л ╤Б╨┤╨╡╨╗╨░╤В╤М ╤И╨░╨│ ╨╜╨░╨╖╨░╨┤
});

next.addEventListener('click', function(){ //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨┤╨╗╤П ╨║╨╜╨╛╨┐╨║╨╕ ╨╜╨░╨╖╨░╨┤
	plusSlides(1); //╨┐╨╡╤А╨╡╨┤╨░╨╡╨╝ -1 ╤З╤В╨╛╨▒╤Л ╤Б╨┤╨╡╨╗╨░╤В╤М ╤И╨░╨│ ╨╜╨░╨╖╨░╨┤
});

dotsWrap.addEventListener('click', function(event) { //╨╝╨╡╤В╨╛╨┤ ╨┤╨╡╨╗╨╡╨│╨╕╤А╨╛╨▓╨░╨╜╨╕╤П
	for (let i=0; i < dots.length+1; i++) { //╨┐╤А╨╕╨▒╨░╨▓╨╗╤П╨╡╨╝ +1
		if (event.target.classList.contains('dot') && event.target == dots[i-1]) { //╨┐╤А╨╛╨▓╨╡╤А╤П╨╡╨╝ ╨╡╤Б╤В╤М ╨╗╨╕ ╨║╨╗╨░╤Б╤Б ╤Г ╤В╨╛╨│╨╛ ╤З╤В╨╛ ╨║╨╗╨╕╨║╨╜╤Г╨╗╨╕ ╨╕ ╤Б╤А╨░╨▓╨╜╨╕╨▓╨░╨╡╨╝ ╨╕╨╜╨┤╨╡╨║╤Б ╨╜╨░╤И╨╡╨╣ ╤В╨╛╤З╨║╨╕
			currentSlide(i); //╤В╨╛╨│╨┤╨░ ╨▓╤Л╨╖╤Л╨▓╨░╨╡╨╝ ╤Д╤Г╨╜╨║╤Ж╨╕╤О ╨┐╨╡╤А╨╡╨║╨╗╤О╤З╨╡╨╜╨╕╤П
		}
	}
});
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tabs () {
		let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

 //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╤Б╨║╤А╤Л╤В╨╕╤П ╤В╨░╨▒╨╛╨▓
		function hideTabContent (a) {              
			for (let i = a; i<tabContent.length;i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1)


 //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨┐╨╛╨║╨░╨╖╤Л╨▓╨░╨╜╨╕╤П ╤В╨░╨▒╨╛╨▓
		function showTabContent (b) {
			if (tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}


 //╨┐╤А╨╕ ╨┐╨╛╨╝╨╛╤Й╨╕ ╨┤╨╡╨╗╨╡╨│╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╝╤Л ╨╜╨░╨╖╨╜╨░╤З╨╕╨╗╨╕ ╨╜╨░ ╨║╨░╨╢╨┤╤Л╨╣ ╤В╨░╨▒ ╤Б╨╛╨▒╤Л╤В╨╕╨╡
		info.addEventListener('click', function(event) {
			let target = event.target; //╨╛╨▒╤К╤П╨▓╨╗╤П╨╡╨╝ ╤Б╨╛╨▒╤Л╤В╨╕╨╡ ╤З╤В╨╛ ╨╝╤Л ╨║╤Г╨┤╨░ ╤В╨╛ ╨║╨╗╨╕╨║╨╜╤Г╨╗╨╕
			if (target.className == 'info-header-tab') { //╤Б╨╛╨▒╤Л╤В╨╕╨╡ - ╤Н╤В╨╛ ╨╜╨░╨╢╨░╤В╨╕╨╡ ╨╜╨░ ╨▓╨║╨╗╨░╨┤╨║╤Г(╤В╨░╨▒)
				for (let i=0;i<tab.length; i++) { //╨┤╨╡╨╗╨░╨╡╨╝ ╤Б╤З╨╡╤В╤З╨╕╨║ ╨┤╨╗╤П ╨┐╨╡╤А╨╡╨▒╨╛╤А╨░ ╨▓╤Б╨╡╤Е ╨▓╨║╨╗╨░╨┤╨╛╨║ ╨║╨╛╤В╨╛╤А╤Л╨╡ ╤Г ╨╜╨░╤Б ╨╡╤Б╤В╤М
					if (target == tab[i]) { //╨┐╤А╨╛╨▓╨╡╤А╤П╨╡╨╝ ╨╜╨░ ╨║╨░╨║╤Г╤О ╨╕╨╝╨╡╨╜╨╜╨╛ ╨▓╨║╨╗╨░╨┤╨║╤Г ╨║╨╗╨╕╨║╨╜╤Г╨╗╨╕.╨в╨╛ ╨╡╤Б╤В╤М ╤Б╨╛╨▒╤Л╤В╨╕╨╡ target ╤Б╨╛╨┐╨╛╤Б╤В╨░╨▓╨╗╤П╨╡╨╝ ╤Б ╨▓╨║╨╗╨░╨┤╨║╨╛╨╣
						showTabContent(i);  // ╨╡╤Б╨╗╨╕ ╨╜╨░ ╤Н╤В╤Г ╨▓╨║╨╗╨░╨┤╨║╤Г ╨║╨╗╨╕╨║╨╜╤Г╨╗╨╕, ╤В╨╛╨│╨┤╨░ ╨┐╨╛╨║╨░╨╖╤Л╨▓╨░╨╡╨╝ ╨╜╨░╤И ╨║╨╛╨╜╤В╨╡╨╜╤В
						break; //╨╛╤Б╤В╨░╨╜╨░╨▓╨╗╨╕╨▓╨░╨╡╨╝ ╨╜╨░╤И ╤Ж╨╕╨║╨╗ ╨┐╨╡╤А╨╡╨▒╨╛╤А╨░
					}
				}
			}
		})
}

module.exports = tabs;
},{}],8:[function(require,module,exports){
function timer () {
	let deadline = '2018-07-10'//╨┤╨░╤В╨░ ╨╜╨░ ╨║╨╛╤В╨╛╤А╨╛╨╣ ╨╖╨░╨║╨░╨╜╤З╨╕╨▓╨░╨╡╤В╤Б╤П ╤В╨░╨╣╨╝╨╡╤А

function getTimeRemaining(endTime) {  //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨║╨╛╤В╨╛╤А╨░╤П ╨▒╤Г╨┤╨╡╤В ╤А╨░╤Б╤З╨╕╤В╤Л╨▓╨░╤В╤М ╤Б╨║╨╛╨╗╤М╨║╨╛ ╨╛╤Б╤В╨░╨╗╨╛╤Б╤М ╨┤╨╛ ╨┤╨╡╨┤╨╗╨░╨╣╨╜╨░
	let t = Date.parse(endTime) - Date.parse(new Date()), //╤А╨░╨╖╨╜╨╕╤Ж╨░ ╨╝╨╡╨╢╨┤╤Г ╨┤╨╡╨┤╨╗╨░╨╣╨╜╨╛╨╝ ╨╕ ╤В╨╡╨║╤Г╤Й╨╡╨╣ ╨┤╨░╤В╨╛╨╣. ╨╝╨╡╤В╨╛╨┤ parse ╨┐╨╡╤А╨╡╨┤╨░╨╡╤В ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ ╨▓ ╨╝╨╕╨╗╨╗╨╕╤Б╨╡╨║╤Г╨╜╨┤╨░╤Е
		seconds = Math.floor( (t/1000) %60 ), // ╨┐╨╡╤А╨╡╨▓╨╛╨┤╨╕╨╝ ╨▓ ╤Б╨╡╨║, ╨░ ╨┐╨╛╤В╨╛╨╝ ╨╛╤Б╤В╨░╤В╨╛╨║ ╨┤╨╡╨╗╨╡╨╜╨╕╤П ╨╜╨░ ╤Ж╨╡╨╗╤Л╨╡ ╨╝╨╕╨╜╤Г╤В╤Л(╤В╨╛ ╨╡╤Б╤В╤М ╨╛╤Б╤В╨░╨╜╤Г╤В╤М╤Б╤П ╨╗╨╕╤И╨╜╨╕╨╡ ╤Б╨╡╨║)
		minutes = Math.floor( (t/1000/60) %60 ) // ╤В╨╛╤З╨╜╨╛ ╤В╨░╨║╨╢╨╡ ╨┐╨╡╤А╨╡╨▓╨╛╨┤╨╕╨╝ ╨▓ ╨╝╨╕╨╜╤Г╤В╤Л
		hours = Math.floor( (t/(1000*60*60)) );

		return {  //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨╝╨╛╨╢╨╡╤В ╨▓╨╛╨╖╨▓╤А╨░╤Й╨░╤В╤М ╨╛╨▒╤К╨╡╨║╤В
			'total': t, //╤Б╨║╨╛╨╗╤М╨║╨╛ ╨▓╤Б╨╡╨│╨╛ ╨╝╨╕╨╗╨╕╤Б╨╡╨║╤Г╨╜╨┤ ╨╛╤Б╤В╨░╨╗╨╛╤Б╤М
			'hours': hours,
			'minutes':minutes, //╤Г╨┤╨╛╨▒╨╜╨╡╨╣ ╤З╨╡╤А╨╡╨╖ ╨╛╨▒╤К╨╡╨║╤В ╨┐╨╛╤В╨╛╨╝╤Г ╤З╤В╨╛ ╨╗╨╡╨│╨║╨╛ ╨┐╨╛╨╗╤Г╤З╨╕╨╝ ╤З╨╡╤А╨╡╨╖ .╨╗╤О╨▒╨╛╨╣ ╨╛╨▒╤К╨╡╨║╤В
			'seconds':seconds
		};
		}

function setClock (id, endTime) { //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨║╨╛╤В╨╛╤А╨░╤П ╨▒╤Г╨┤╨╡╤В ╨╖╨░╨┐╤Г╤Б╨║╨░╤В╤М ╨╜╨░╤И╨╕ ╤З╨░╤Б╤Л,╨▓ ╨┐╨░╤А╨░╨╝╨╡╤В╤А╨░╤Е ╨┐╨╡╤А╨╡╨┤╨░╨╡╤В╤Б╤П ID ╤В╨░╨╣╨╝╨╡╤А╨░ ╨╕ ╨╜╨░╤И deadline
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'), //╨╝╤Л ╨╝╨╛╨╢╨╡╨╝ ╨╜╨░╨╖╤Л╨▓╨░╤В╤М ╨┐╨╡╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╡ ╤В╨░╨║ ╨╢╨╡ ╨┐╨╛╤В╨╛╨╝╤Г ╤З╤В╨╛ ╨╛╨╜╨╕ ╨▓╨╜╤Г╤В╤А╨╕ ╤Д╤Г╨╜╨║╤Ж╨╕╨╕ ╨░ ╨╖╨░ ╨╡╨╡ ╨┐╤А╨╡╨┤╨╡╨╗╨░╨╝╨╕ ╨╕╤Е ╨╜╨╡ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╨╡╤В
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock,1000)  //╨┐╨╛╨▓╤В╨╛╤А╨╡╨╜╨╕╨╡ ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╤П ╤В╨░╨╣╨╝╨╡╤А╨░

	function updateClock() {   //╤Д╤Г╨╜╨║╤Ж╨╕╤П ╨║╨╛╤В╨╛╤А╨░╤П ╨▒╤Г╨┤╨╡╤В ╨╛╨▒╨╜╨╛╨▓╨╗╤П╤В╤М ╨╜╨░╤И ╤В╨░╨╣╨╝╨╡╤А ╨║╨░╨╢╨┤╤Г╤О ╤Б╨╡╨║╤Г╨╜╨┤╤Г
		let t = getTimeRemaining(endTime);  //╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В ╤Д╤Г╨╜╨║╤Ж╨╕╨╕ ╤А╨░╤Б╤З╨╡╤В╨░ ╨▓╤А╨╡╨╝╨╡╨╜╨╕ ╨┤╨╛ ╨┤╨╡╨┤╨╗╨░╨╣╨╜╨░.╨б╤О╨┤╨░ ╨╖╨░╨┐╨╕╤И╨╡╤В╤Б╤П ╨╛╨▒╤К╨╡╨║╤В.╨Я╨░╤А╨░╨╝╨╡╤В╤А endTime ╨╕╨╖ ╤Д╤Г╨╜╨║╤Ж╨╕╨╕ setClock
		hours.innerHTML = t.hours; //╨╖╨░╨┐╨╕╤И╨╡╤В╤Б╤П ╨▓ span ╨▓ ╤А╨░╨╖╨╝╨╡╤В╨║╤Г
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

	updateClock(); //╨╖╨░╨┐╤Г╤Б╨║╨░╨╡╨╝ ╤Д╤Г╨╜╨║╤Ж╨╕╤О

}

setClock('timer', deadline)
}

module.exports = timer;
},{}]},{},[5]);
