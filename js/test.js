//let assert = require('chai').assert;

describe('Таймер', function(){
	it('Возвращает ли наша функция объект?', function() {
		assert.typeOf(getTimeRemaining(), 'object')
	})
})