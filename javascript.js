let money = prompt ('Ваш бюджет на месяц?');
let name = prompt ('Название вашего магазина?');
let time = 19;


let mainList = {
	moneyMonth: money,
	nameShop: name,
	shopGoods: [ ],
		employers: {
				employers1:'Ivan',
				employers2:'Sergey',
				employers3:'Maria',
				employers4:'Dmitry',
		},
	open: true,
};

for (let i=0; i<5; i++) {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50 ) {
	console.log('Все верно!');
	mainList.shopGoods[i] = a;
	} else {
		alert('Это обязательное поле! Пожалуйста,заполни его!');
		i=a;
	}
}

/* let i=0;
while (i<5) {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50 ) {
	console.log('Все верно!');
	mainList.shopGoods[i] = a;
	} else {
		alert('Это обязательное поле! Пожалуйста,заполни его!');
		i=a;
	}

	i++
}

let i = 0;
do {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50 ) {
	console.log('Все верно!');
	mainList.shopGoods[i] = a;
	} else {
		alert('Это обязательное поле! Пожалуйста,заполни его!');
		i=a;
	}

	i++
}
while (i<5);
*/

if (time<0) {
	console.log('Такого просто не может быть!');
} else if (time > 8 && time < 20 ) {
	console.log('Время работать!');
	} else if (time<24) {
		console.log('Уже слишком поздно');
	} else {
		console.log('В сутках только 24 часа!');

	}

console.log('Твой магазин: '+ name);
console.log('Твой бюджет на 1 день: '+ money/30);
console.log('Мы продаем: ' + mainList.shopGoods[0] + ', '+ mainList.shopGoods[1] + ' и '+ mainList.shopGoods[2]);

console.log();