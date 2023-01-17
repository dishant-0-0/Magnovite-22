const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date("April 22 2022 09:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText =
      Math.floor(distance / day) + "\ndays";
    document.getElementById("hours").innerText =
      Math.floor((distance % day) / hour) + "\nhours";
    document.getElementById("minutes").innerText =
      Math.floor((distance % hour) / minute) + "\nminutes";
    document.getElementById("seconds").innerText =
      Math.floor((distance % minute) / second) + "\nseconds";

    //do something later when date is reached
    if (distance < -172800000) {
      document.getElementById("days").innerHTML = "See";
      document.getElementById("hours").innerHTML = "You";
      document.getElementById("minutes").innerHTML = "Next";
      document.getElementById("seconds").innerHTML = "Time! 😢";
    } else if (distance < 0) {
      document.getElementById("days").innerHTML = "Let";
      document.getElementById("hours").innerHTML = "The ";
      document.getElementById("minutes").innerHTML = "Fun";
      document.getElementById("seconds").innerHTML = "Begin!! 🥳🎉";
    }
  }, second);
