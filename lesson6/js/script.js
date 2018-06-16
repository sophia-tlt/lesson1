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

for (i=0; i<getInputFunction.length;i++) {
			getInputFunction[i].setAttribute('disabled','disabled');
	};


/*if (getInputFunction.value == '') {
	for (i=0; i<getInputFunction.length;i++) {
			getInputFunction[i].disabled = true;
	};
} else {
		for (i=0; i<getInputFunction.length;i++) {
			getInputFunction[i].disabled = false;
	}
}*/

getInput.addEventListener('click', () => {
	money = prompt ('Ваш бюджет на месяц?','');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt ('Ваш бюджет на месяц?');
	}

	getBudgetValue.textContent = money;

	getNameValue.textContent = prompt ('Название вашего магазина?','').toUpperCase();

	for (i=0; i<getCategories.length;i++) {
			getCategories[i].disabled= false;
	}
});


getButtonGoods.addEventListener('click', () => {
	for (let i=0; i<getCategories.length; i++) {
		let a = getCategories[i].value;

		if ((typeof(a)) === 'string' && a !== null && a.length < 50 && a !=='') {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			getGoodsValue.textContent = mainList.shopGoods;
			getChoose.disabled = false;
		}else {
			alert('Это обязательное поле! Пожалуйста,заполни его!');
			getChoose.disabled = true;
				}
			}

});

getChoose.addEventListener('change', () => {
		let items = getChoose.value;

		if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		getItemsValue.textContent = mainList.shopItems;

		getTime.disabled = false;
}

});


getTime.addEventListener('change', () => {
	let time = getTime.value;
	if (time<0) {
		console.log('Такого просто не может быть!');
		mainList.open = false;
		getMoney.disabled = true;
	} else if (time > 8 && time < 20 ) {
		console.log('Время работать!');
		mainList.open = true;
		getMoney.disabled = false;
	} else if (time<24) {
		console.log('Уже слишком поздно');
		mainList.open = false;
		getMoney.disabled = true;
	} else {
		console.log('В сутках только 24 часа!');
		mainList.open = false;
		getMoney.disabled = true;
		}

	if (mainList.open == true) {
		getIsopenValue.style.backgroundColor = 'green';

	} else {
		getIsopenValue.style.backgroundColor = 'red';

		for (i=0; i<getInputFunction.length;i++) {
			getInputFunction[i].disabled = true;
	}
	}
});

getButtonBudget.addEventListener('click', () => {
	getMoney.value = money/30;
	for (i=0; i<getEmployers.length;i++) {
	getEmployers[i].disabled = false;
}
	});


getButtonEmployers.addEventListener('click', () => {
	for (let i=0; i<getEmployers.length; i++) {
		let name = getEmployers[i].value;
		mainList.employers[i] = name;
		getEmployersValue.textContent += mainList.employers[i] + ', ';
	}
});

getInput.addEventListener('click', () => {
	price = prompt ('Есть ли у Вас скидка? (Да/Нет)').toUpperCase();
		if (price == ('ДА')) {
			getDiscountValue.style.backgroundColor = 'green';
		} else {
			getDiscountValue.style.backgroundColor = 'red';
		}
});


