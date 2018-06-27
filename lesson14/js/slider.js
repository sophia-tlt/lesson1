function slider () {
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
}

module.exports = slider;