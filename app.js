const secondHands = document.querySelectorAll('.second-hand');
  const minsHands = document.querySelectorAll('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const londonHourHand = document.querySelector('.london-hour-hand');
  const tokioHourHand = document.querySelector('.tokio-hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    for(let secondHand of secondHands)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    for(let minsHand of minsHands)
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    const londonHourDegrees = hourDegrees - 60;
    const tokioHourDegrees = hourDegrees + 210;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    londonHourHand.style.transform = `rotate(${londonHourDegrees}deg)`;
    tokioHourHand.style.transform = `rotate(${tokioHourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();

  
  