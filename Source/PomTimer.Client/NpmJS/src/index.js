import Timer from 'easytimer.js';

var timer = null;
var indexRef = null;

window.setIndexReference = (ref) => {
	indexRef = ref;
};

// Start timer and set event listener to send values to C# side.
window.startTimer = (timerInMinutes) => {
	timer = new Timer();
	timer.start({ countdown: true, startValues: { minutes: timerInMinutes } });

	timer.addEventListener('secondsUpdated', function (e) {
		window.sendTimerValue(timer.getTimeValues());
	});
};

window.stopTimer = () => {
	console.log('in stopTimer');
	console.log(timer);
	if (timer) {
		console.log('in stopTimer if');
		timer.stop();
		timer = null;
	}
};

// Start stop and resume the timer.
window.handleTimerAction = (timerInMinutes) => {
	if (!timer) {
		window.startTimer(timerInMinutes);
		return 'Pause';
	}
	if (timer.isRunning()) {
		timer.pause();
		return 'Resume';
	} else {
		timer.start();
		return 'Pause';
	}
};

// Send timer value to C# side each second.
window.sendTimerValue = (timerValue) => {
	indexRef.invokeMethodAsync('ReceiveTimerValue', timerValue);
};
