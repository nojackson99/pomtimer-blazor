import Timer from 'easytimer.js';

//* This is a example function testing JS interop with easytimer.js
// window.testTimer = (message) => {
// 	console.log(message);

// 	const timer = new Timer();
// 	timer.start();

// 	timer.addEventListener('secondsUpdated', function (e) {
// 		console.log(timer.getTimeValues().toString());
// 	});

// 	return;
// };

var timer = null;

window.startTimer = () => {
	console.log('Starting timer...');

	timer = new Timer();
	timer.start({ countdown: true, startValues: { minutes: 25 } });

	timer.addEventListener('secondsUpdated', function (e) {
		console.log(timer.getTimeValues().toString());
	});
};

window.handleTimerAction = () => {
	if (!timer) {
		window.startTimer();

		return 'Pause';
	}
	if (timer.isRunning()) {
		console.log('Pausing timer...');
		timer.pause();

		return 'Resume';
	} else {
		console.log('Resuming timer...');
		timer.start();

		return 'Pause';
	}
};
