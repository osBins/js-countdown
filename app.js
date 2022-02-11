const countdown = () => {
  const countDate = new Date("January 1, 2023, 00:00:00");
  // console.log(countDate.getTime());

  const nowDate = Date.now();
  // console.log(nowDate);

  let gap = countDate.getTime() - nowDate;

  //  console.log(gap);
  let second = 1000;
  let minute = 60 * second;
  let hour = 60 * minute;
  let day = 24 * hour;

  let textDay = Math.floor(gap / day);
  let textHour = Math.floor((gap % day) / hour);
  let textMinute = Math.floor((gap % hour) / minute);
  let textSecond = Math.floor((gap % minute) / second);

  // console.log(
  //   textDay +
  //     " Days " +
  //     textHour +
  //     " hours " +
  //     textMinute +
  //     " minutes " +
  //     textSecond +
  //     " seconds."
  // );
  document.querySelector('.days').innerHTML = textDay;
  document.querySelector('.hours').innerHTML = textHour;
  document.querySelector('.minutes').innerHTML = textMinute;
  document.querySelector('.seconds').innerHTML = textSecond;
};

setInterval(countdown, 1000);