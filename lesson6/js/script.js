let getInput = document.getElementById('open-btn'),

	getNameValue = document.getElementsByClassName('name-value')[0],
	getBudgetValue = document.getElementsByClassName('budget-value')[0],
	getGoodsValue = document.getElementsByClassName('goods-value')[0],
	getItemsValue = document.getElementsByClassName('items-value')[0],
	getEmployersValue = document.getElementsByClassName('employers-value')[0],
	getDiscountValue = document.getElementsByClassName('discount-value')[0],
	getIsopenValue = document.getElementsByClassName('isopen-value')[0],

	getCategories = document.getElementsByClassName('goods-item'),
	getButtonGoods = document.getElementsByTagName('button')[1],
	getButtonBudget = document.getElementsByTagName('button')[2],
	getButtonEmployers = document.getElementsByTagName('button')[3],
	getChoose = document.querySelector('#items'),
	getTime = document.querySelector('#time'),
	getMoney = document.querySelector('#budget'),
	getEmployers = document.querySelectorAll('input.hire-employers-item'),
	getInputFunction = document.querySelectorAll('input'),
	money,
	discount = false,
	price;
let mainList = {
	moneyMonth: money,
	nameShop: name,
	shopGoods: [ ],
		employers: {

		},
	open: false,
	shopItems: [],
}

console.log(getInputFunction);

getInput.addEventListener('click', () => {
	money = prompt ('Ваш бюджет на месяц?','');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt ('Ваш бюджет на месяц?');
	}
	getBudgetValue.textContent = money;

	getNameValue.textContent = prompt ('Название вашего магазина?','').toUpperCase();
});


getButtonGoods.addEventListener('click', () => {
	for (let i=0; i<getCategories.length; i++) {
		let a = getCategories[i].value;

		if ((typeof(a)) === 'string' && a !== null && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			getGoodsValue.textContent = mainList.shopGoods;
		} else {
			alert('Это обязательное поле! Пожалуйста,заполни его!');
			i--;
				}
	}
});

getChoose.addEventListener('change', () => {
		let items = getChoose.value;

		if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		getItemsValue.textContent = mainList.shopItems;
}
});


getTime.addEventListener('change', () => {
	let time = getTime.value;
	if (time<0) {
		console.log('Такого просто не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20 ) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time<24) {
		console.log('Уже слишком поздно');
		mainList.open = false;
	} else {
		console.log('В сутках только 24 часа!');
		mainList.open = false;
		}

	if (mainList.open == true) {
		getIsopenValue.style.backgroundColor = 'green';

	} else {
		getIsopenValue.style.backgroundColor = 'red';

		for (i=0; i<getInputFunction.length;i++) {
			getInputFunction[i].setAttribute('disabled','disabled');
	}
	}
});

getButtonBudget.addEventListener('click', () => {
	getMoney.value = money/30;
	});


getButtonEmployers.addEventListener('click', () => {
	for (let i=0; i<getEmployers.length; i++) {
		let name = getEmployers[i].value;
		mainList.employers[i] = name;
		getEmployersValue.textContent += mainList.employers[i] + ', ';
	}
});

getInput.addEventListener('click', () => {
	price = prompt ('Есть ли у Вас скидка? (Да/Нет)');
		if (price == ('Да' || 'да')) {
			getDiscountValue.style.backgroundColor = 'green';
		} else {
			getDiscountValue.style.backgroundColor = 'red';
		}
});


