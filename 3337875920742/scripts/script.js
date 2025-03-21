const swiper = new Swiper('.es-swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.es-swiper-pagination',
  },

  navigation: {
    nextEl: '.es-swiper-button-next',
    prevEl: '.es-swiper-button-prev',
  },
});

let countDownDate = new Date("Feb 16, 2025 23:59:59").getTime();

let x = setInterval(function () {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days + "";
  if (days == 1) {
    ocument.getElementById("days-text").innerHTML = "dzień";
  } else {
    document.getElementById("days-text").innerHTML = "dni";
  }
  document.getElementById("hours").innerHTML = hours + "";

  if (hours == 2 || hours == 3 || hours == 4 || hours == 22 || hours == 23) {
    document.getElementById("hours-text").innerHTML = "godziny";
  } else if (hours == 1) {
    document.getElementById("hours-text").innerHTML = "godzina";
  }
  else {
    document.getElementById("hours-text").innerHTML = "godzin";
  }

  document.getElementById("minutes").innerHTML = minutes + "";

  if (minutes == 2 || minutes == 3 || minutes == 4 || minutes == 22 || minutes == 23 || minutes == 24 || minutes == 32 || minutes == 33 || minutes == 34 || minutes == 42 || minutes == 43 || minutes == 44 || minutes == 52 || minutes == 53 || minutes == 54) {
    document.getElementById("minutes-text").innerHTML = "minuty";
  } else if (minutes == 1) {
    document.getElementById("minutes-text").innerHTML = "minuta";
  }
  else {
    document.getElementById("minutes-text").innerHTML = "minut";
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("days-text").innerHTML = "dni";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("hours-text").innerHTML = "godzin";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("minutes-text").innerHTML = "minut";
  }
}, 0.1);

let countDownDate2 = new Date("Feb 16, 2025 23:59:59").getTime();

let x2 = setInterval(function () {

  let now2 = new Date().getTime();

  let distance2 = countDownDate2 - now2;

  let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days-2").innerHTML = days2 + "";
  if (days2 == 1) {
    ocument.getElementById("days-text-2").innerHTML = "dzień";
  } else {
    document.getElementById("days-text-2").innerHTML = "dni";
  }
  document.getElementById("hours-2").innerHTML = hours2 + "";

  if (hours2 == 2 || hours2 == 3 || hours2 == 4 || hours2 == 22 || hours2 == 23) {
    document.getElementById("hours-text-2").innerHTML = "godziny";
  } else if (hours == 1) {
    document.getElementById("hours-text-2").innerHTML = "godzina";
  }
  else {
    document.getElementById("hours-text-2").innerHTML = "godzin";
  }

  document.getElementById("minutes-2").innerHTML = minutes2 + "";

  if (minutes2 == 2 || minutes2 == 3 || minutes2 == 4 || minutes2 == 22 || minutes2 == 23 || minutes2 == 24 || minutes2 == 32 || minutes2 == 33 || minutes2 == 34 || minutes2 == 42 || minutes2 == 43 || minutes2 == 44 || minutes2 == 52 || minutes2 == 53 || minutes2 == 54) {
    document.getElementById("minutes-text-2").innerHTML = "minuty";
  } else if (minutes2 == 1) {
    document.getElementById("minutes-text-2").innerHTML = "minuta";
  }
  else {
    document.getElementById("minutes-text-2").innerHTML = "minut";
  }

  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("days-2").innerHTML = "0";
    document.getElementById("days-text-2").innerHTML = "dni";
    document.getElementById("hours-2").innerHTML = "0";
    document.getElementById("hours-text-2").innerHTML = "godzin";
    document.getElementById("minutes-2").innerHTML = "0";
    document.getElementById("minutes-text-2").innerHTML = "minut";
  }
}, 0.1);
