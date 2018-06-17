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
}); 