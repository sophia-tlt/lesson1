
describe('Таймер', function(){
	it('Возвращает ли наша функция объект?', function() {
		assert.typeOf(getTimeRemaining(), 'object')
	});

	it('Устанавливаем таймер обратного отсчета', function(){
		assert.typeOf(setClock('timer',deadline), 'string')
	});

	describe('общая сумма', function() {
		it('изначально равен 0', function () {
			assert.equal(total,0)
		})
	});
});

