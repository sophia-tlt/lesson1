function modal () {
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
}

module.exports = modal;