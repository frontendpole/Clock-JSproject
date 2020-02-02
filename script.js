const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const midHand = document.querySelector('.mid-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60 * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minutesDegrees = (mins / 60 * 360) + 90;
    midHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12 * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(seconds);
}
setInterval(setDate, 1000);