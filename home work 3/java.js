
const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');
const delay = document.getElementById('delay');
const timeList = document.getElementById('time-list'); 



let interval;
let i = 0;
let pausedTime = 0;


start.onclick = () => {
    start.disabled = true;
    interval = setInterval(() => {
        i+=0.01;
        time.textContent = i.toFixed(2);
    }, 10);
};

stop.onclick = () => {
    clearInterval(interval);
    start.disabled = false;
}
restart.onclick = () => {
    clearInterval(interval);
    start.disabled = false;
    i = 0;
    time.textContent = i;
    timeList.innerHTML = '';
}

delay.onclick = () => {
    const currentTime = i.toFixed(2); 
    const listItem = document.createElement('li'); 
    listItem.textContent = currentTime; 
    timeList.appendChild(listItem); 
}

