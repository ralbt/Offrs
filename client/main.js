$(function(){
  var delayInSeconds = 10;
var delayInMilliseconds = delayInSeconds*1000;

function startTimer () {
    timer.start();
    setTimeout(stopTimer,delayInMilliseconds);
}

function stopTimer () {
    timer.stop;
}

startTimer();
});
