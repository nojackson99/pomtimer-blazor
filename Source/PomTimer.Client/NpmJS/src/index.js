import Timer from 'easytimer.js';

window.testTimer = (message) => {
	console.log(message);

	const timer = new Timer();
	timer.start();

	timer.addEventListener('secondsUpdated', function (e) {
		console.log(timer.getTimeValues().toString());
	});

	return;
};
