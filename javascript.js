let money,
	name,
	time,
	price

function start () {

	function moneyDay () {
	let moneyMonth = prompt ('Ваш бюджет на месяц?','');
	money = moneyMonth/30;
}
moneyDay();

	while (isNaN(money) || money == '' || money == null) {
		money = prompt ('Ваш бюджет на месяц?');
	}

	name = prompt ('Название вашего магазина?','').toUpperCase();
	time = 19;
}

start();


let mainList = {
	moneyMonth: money,
	nameShop: name,
	shopGoods: [ ],
		employers: {

		},
	open: false,
	discount: true,
	shopItems: [],

	whoIsEmployers: function whoIsEmployers () {
						for (let i=1; i<4; i++) {
							let em = prompt('Как зовут Вашего сотрудника?','');
								mainList.employers[i] = em;
							}
					},

	chooseGoods: function chooseGoods() {
					for (let i=0; i<5; i++) {
						let a = prompt ('Какой тип товаров будем продавать?','');

						if ((typeof(a)) === 'string' && a !== null && a !='' && a.length < 50 ) {
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
						} else {
							alert('Это обязательное поле! Пожалуйста,заполни его!');
							i--;
						}
					}
				},

	workTime: function workTime(time) {
				if (time<0) {
					console.log('Такого просто не может быть!');
				} else if (time > 8 && time < 20 ) {
					console.log('Время работать!');
					mainList.open = true;
					} else if (time<24) {
						console.log('Уже слишком поздно');
					} else {
						console.log('В сутках только 24 часа!');

					}
			},

	discountSystem: function discountSystem () {
						price = prompt ('Сколько стоит ' + mainList.shopGoods[0] + '?','');
						if (mainList.discount) {
							console.log('Твоя цена со скидкой: ' + price * 0.8);
						}
						else {
							console.log(price);
						}
					},

	chooseShopItems: function chooseShopItems() {
		let items
		for (let i=1; i<2; i++) {
			items = prompt('Перечислите через запятую Ваши товары','');
			if ((typeof(items)) === 'string' && items !== null && items !='' ) {
				console.log('Все верно!');
				mainList.chooseShopItems[i] = items;
					} else {
						alert('Заполните это поле верно!');
						i--;
						}
		}

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Напишите еще',''));
		mainList.shopItems.sort();

		mainList.shopItems.forEach (function (item, i) {

				console.log("У нас вы можете купить: " + (i+1) + ': ' + item);
		})

			for (let key in mainList) {
			console.log("Наш магазин включает в себя: " + key);
		}

	}
};


console.log(mainList);
//console.log('Твой магазин: '+ name);
//console.log('Твой бюджет на 1 день: '+ money);
//console.log('Мы продаем: ' + mainList.shopGoods[0] + ', '+ mainList.shopGoods[1] + ' и '+ mainList.shopGoods[2] + ',а так же ' + mainList.shopGoods[3] + ', ' + mainList.shopGoods[4]);
//console.log('Наши сотрудники: '+ '1 - ' + mainList.employers[1] + ', 2 - ' + mainList.employers[2] + ', 3 - ' + mainList.employers[3] + ', 4 - ' + mainList.employers[4]);
