import Timer from 'easytimer.js';

var timer = null;
var indexRef = null;

window.setIndexReference = (ref) => {
	indexRef = ref;
};

// Start timer and set event listener to send values to C# side.
window.startTimer = () => {
	timer = new Timer();
	timer.start({ countdown: true, startValues: { minutes: 25 } });

	timer.addEventListener('secondsUpdated', function (e) {
		window.sendTimerValue(timer.getTimeValues());
	});
};

// Start stop and resume the timer.
window.handleTimerAction = () => {
	if (!timer) {
		window.startTimer();
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
