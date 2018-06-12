
let firstItem = document.querySelectorAll('.menu-item')[2],
	secondItem = document.querySelectorAll('.menu-item')[1],
	parentItem = document.querySelector('.menu'),
	menuItem = parentItem.insertBefore(firstItem, secondItem);

let newLi = document.createElement('li'),
	parentLi = document.querySelector('.menu');
	newLi.classList.add('menu-item');
	newLi.textContent = 'Пятый пункт';
	parentLi.appendChild(newLi);


	document.body.style.background ='url(./img/apple_true.jpg) center no-repeat';


let deleteElem = document.querySelector('.adv'),
	parentDelete = document.querySelectorAll('.column');
	parentDelete[1].removeChild(deleteElem);



let parentText = document.getElementById('title'),  
	newTitle = document.createElement('div'),  
	text = document.createTextNode('Мы продаем только подлинную технику Apple');
	newTitle.classList.add('title');
	parentDelete[1].appendChild(newTitle); 
	newTitle.appendChild(text); 
	parentDelete[1].replaceChild(newTitle,parentText);


let apple = prompt('Как Вы относитесь к технике Apple?'),
	getPrompt = document.getElementById('prompt');
	getPrompt.innerHTML = apple;
	