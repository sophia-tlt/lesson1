function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() { //отслеживаем изменение в полях ввода
		personsSum = +this.value; //отслеживаем значение input, this ссылается на persons
		total = (daysSum + personsSum)*4000; // 
		if (restDays.value == ''|| restDays.value == '+' || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') {
			totalValue.innerHTML = 0;
	} else {
		totalValue.innerHTML = total;
	}
	});

	restDays.addEventListener('change', function() { //то же самое для второго поля
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (persons.value == '' || persons.value == '+' || persons.value % 1 !== 0 || personsSum == '' || daysSum == '') {
		totalValue.innerHTML = 0;	
	} else {
		totalValue.innerHTML = total;
	}

	});

	place.addEventListener('change', function() {  //функция отслеживания за select
		if (restDays.value == '' || persons.value == '' || persons.value % 1 !== 0 || restDays.value % 1 !== 0 || personsSum == '' || daysSum == '') { //проверяем чтобы не считался коэфициент, пока не заполнены обязательные поля 
			totalValue.innerHTML = 0;
		} else { //общую стоимость умножаем на select с индексом конкретной опции 
			let a = total; //такая запись позволит только 1 раз изменять коэфициент а не постоянно умножать
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	restDays.addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });

    persons.addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });
}

module.exports = calc;