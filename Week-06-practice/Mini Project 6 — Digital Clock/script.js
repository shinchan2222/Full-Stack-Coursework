let clock = document.getElementById("clock");
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    clock.textContent = hours + ":" + minutes + ":" + seconds;
}
updateClock();
setInterval(updateClock, 1000);