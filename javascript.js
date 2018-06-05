let money,
	name,
	time,
	price

function start () {

	function moneyDay () {
	let moneyMonth = prompt ('Ваш бюджет на месяц?');
	money = moneyMonth/30;
}
moneyDay();

	while (isNaN(money) || money == '' || money == null) {
		money = prompt ('Ваш бюджет на месяц?');
	}

	name = prompt ('Название вашего магазина?').toUpperCase();
	time = 19;
}

start();


let mainList = {
	moneyMonth: money,
	nameShop: name,
	shopGoods: [ ],
		employers: {

		},
	open: true,
	discount: true
};

function whoIsEmployers () {
	for (let i=1; i<4; i++) {
		let em = prompt('Как зовут Вашего сотрудника?');
		mainList.employers[i] = em;
	}
}
whoIsEmployers();

function chooseGoods() {
	for (let i=0; i<5; i++) {
		let a = prompt ('Какой тип товаров будем продавать?');

		if ((typeof(a)) === 'string' && a !== null && a !='' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		} else {
			alert('Это обязательное поле! Пожалуйста,заполни его!');
			i--;
		}
	}
}
chooseGoods();

/* let i=0;
while (i<5) {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++
	} else {
		alert('Это обязательное поле! Пожалуйста,заполни его!');
	}
}

let i = 0;
do {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Это обязательное поле! Пожалуйста,заполни его!');
	}

}
while (i<5);
*/
function workTime(time) {
	if (time<0) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20 ) {
		console.log('Время работать!');
		} else if (time<24) {
			console.log('Уже слишком поздно');
		} else {
			console.log('В сутках только 24 часа!');

		}
}
workTime(18);

function discountSystem () {
	price = prompt ('Сколько стоит ' + mainList.shopGoods[0] + '?');
	if (mainList.discount) {
		console.log('Твоя цена со скидкой: ' + price * 0.8);
	}
	else {
		console.log(price);
	}
}
discountSystem();


console.log('Твой магазин: '+ name);
console.log('Твой бюджет на 1 день: '+ money);
console.log('Мы продаем: ' + mainList.shopGoods[0] + ', '+ mainList.shopGoods[1] + ' и '+ mainList.shopGoods[2] + ',а так же ' + mainList.shopGoods[3] + ', ' + mainList.shopGoods[4]);
console.log('Наши сотрудники: '+ '1 - ' + mainList.employers[0] + ', 2 - ' + mainList.employers[1] + ', 3 - ' + mainList.employers[2] + ', 4 - ' + mainList.employers[3]);