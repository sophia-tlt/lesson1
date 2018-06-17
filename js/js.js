window.addEventListener('DOMContentLoaded',function() {

	Watch();
	function Watch() {

	let	timer = document.getElementById('timer'),
		date = new Date(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();

	function Time (a) {
			if (a < 10) {
				a = "0" + a;
			}
		return a;
};
		hour = Time(hour);
		min = Time(min);
		sec = Time(sec);

			timer.innerHTML = hour + ' : ' + min +' : ' + sec;
			setTimeout(Watch, 1);
			isetInterval(Watch(), 1000);
		}
});