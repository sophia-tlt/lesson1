// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
};
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var array = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(array, myFunc));

describe('Сумма', function(){
	it('Возвращает ли наша функция булевое значение?', function() {
		assert.typeOf(sum(2,2), 'boolean')
	});
});

describe('Переменная num', function(){
	it('Равна ли переменная num значению 5?', function() {
		assert.equal(num, '5')
	});
});

describe('Функция each', function(){
	it('Является ли массив результатом функции each?', function() {
		assert.typeOf(each(array, myFunc), 'array')
	});

	it('Какова длина(length) результата функции each?', function() {
		assert.lengthOf(each(array, myFunc), 5, 'length of each: 5')
	});

	it('Результат функции each', function() {
		assert.deepEqual(each(array, myFunc), [8, 7, 6, 5, 4])
	});
});