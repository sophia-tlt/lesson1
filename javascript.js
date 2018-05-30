var money = prompt ('Ваш бюджет на месяц?');
var name = prompt ('Название вашего магазина?');
var things1 = prompt ('Какой тип товаров будем продавать?');
var things2 = prompt ('Какой тип товаров будем продавать?');
var things3 = prompt ('Какой тип товаров будем продавать?');
let mainList = {
	moneyMonth: money,
	nameShop: name,
	shopGoods: [ things1, things2, things3 ],
		employers: {
				employers1:'Ivan',
				employers2:'Sergey',
				employers3:'Maria',
				employers4:'Dmitry',
		},
	open: true,
};

console.log('Твой магазин: '+ name);
console.log('Твой бюджет на 1 день: '+ money/30);
console.log('Мы продаем: ' + mainList.shopGoods[0] + ', '+ mainList.shopGoods[1] + ' и '+ mainList.shopGoods[2]);
