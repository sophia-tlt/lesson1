function contact () {
	let contact = new Object();
	contact.loading = "Загружаем";
	contact.success = "Ваши контакты сохранены!";
	contact.failure = "Ошибка в записи";

let contactForm = document.getElementById('form'),
	contactInput = contactForm.getElementsByTagName('input'),
	statusContact = document.createElement('div');
	statusContact.classList.add('statuscont');

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	contactForm.appendChild(statusContact);

	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(contactForm);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4 ) {
			statusContact.innerHTML = contact.loading;
		} else if(request.readyState === 4 ) {
			if (request.status == 200 && request.status < 300) {
				statusContact.innerHTML = contact.success;
			}
			else {
				statusContact.innerHTML = contact.failure;
			}
		}
	}

	for (let i = 0; i < contactInput.length; i++) {
		contactInput[i].value = '';
	}
});
}

module.exports = contact;