const hourElement = document.querySelector('.timer__hour');
const minuteElement = document.querySelector('.timer__minute');
const secondElement = document.querySelector('.timer__second');
const millisecElement = document.querySelector('.timer__millisec');
const resultElement = document.querySelector('.results');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resultBtn = document.querySelector('.result');

startBtn.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(startTimer, 10)
})

pauseBtn.addEventListener('click', () => {
   clearInterval(interval)
})

stopBtn.addEventListener('click', () => {
   clearInterval(interval);
   clearFields();
})

resultBtn.addEventListener('click', () => {
   clearInterval(interval);
   counter++;
   const itemRes = document.createElement('p');
   itemRes.classList.add('results__block');
   itemRes.innerText = `Результат ${counter} -- ${hour}: ${minute}: ${second}: ${millisec}`;
   resultElement.append(itemRes)
   clearFields();
})

let hour = 00;
let minute = 00;
let second = 00;
let millisec = 00;
let interval;
let counter = 0;

function startTimer() {
   millisec++;
   if (millisec <= 9) {
      millisecElement.innerText = '0' + millisec;
   }
   if (millisec > 9) {
      millisecElement.innerText = millisec;
   }
   if (millisec >= 99) {
      second++;
      secondElement.innerText = '0' + second;
      millisec = 0;
      millisecElement.innerText = '0' + millisec;
   }

   if (second > 9) {
      secondElement.innerText = second;
   }
   if (second > 59) {
      minute++;
      minuteElement.innerText = '0' + minute;
      second = 0;
      secondElement.innerText = '0' + second;
   }

   if (minute > 9) {
      minuteElement.innerText = minute;
   }
   if (minute > 59) {
      hour++;
      hourElement.innerText = '0' + hour;
      minute = 0;
      minuteElement.innerText = '0' + minute;
   }
   if (hour > 23) {
      hourElement.innerText = '0';
      hour = 0;
   }
}
function clearFields() {
   hour = 00;
   minute = 00;
   second = 00;
   secondElement.innerText = '00';
   minuteElement.innerText = '00';
   hourElement.innerText = '00';
   millisecElement.innerText = '00';
}