let timer = document.querySelector(".timer");

const timerCounter = (days, hrs, mins, seconds) => {
  let time = `<div class="count">
  <div class="timer_action">
    <div class="top"></div>
    <div class="bottom"></div>
    <p id="days">${days}</p>
  </div>
  <p class="timer_text">Days</p>
</div>
<div class="count">
  <div class="timer_action">
    <div class="top"></div>
    <div class="bottom"></div>
    <p id="hrs">${hrs}</p>
  </div>
  <p class="timer_text">Hours</p>
</div>
<div class="count">
  <div class="timer_action">
    <div class="top"></div>
    <div class="bottom"></div>
    <p id="mins">${mins}</p>
  </div>
  <p class="timer_text">Minutes</p>
</div>
<div class="count">
  <div id="count" class="timer_action">
    <div class="top"></div>
    <div class="bottom"></div>
    <p id="seconds">${seconds}</p>
  </div>
  <p class="timer_text">Seconds</p>
</div>`;
  timer.innerHTML = time;
};

let completeTimer = () => {
  clearInterval(x);
  const display_message = `
  <p  style="font-size:30px;font-weight: bold; color: white;">
 Time Expired!
  </p>
  `;
  timer.innerHTML = display_message;
};

let displayTime = () => {
  let now = new Date().getTime();
  let countDownDate = new Date("Jan 5, 2023 00:00:00").getTime();
  let time_difference = countDownDate - now;
  let days_count = Math.floor(time_difference / (1000 * 60 * 60 * 24));
  let hours_count = Math.floor(
    (time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes_count = Math.floor(
    (time_difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds_count = Math.floor((time_difference % (1000 * 60)) / 1000);

  time_difference > 0
    ? timerCounter(days_count, hours_count, minutes_count, seconds_count)
    : completeTimer();
};

let x = setInterval(displayTime, 1000);
