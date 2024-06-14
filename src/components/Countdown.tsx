/* src/components/Countdown.jsx */
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate, openingDetails }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="countdown-time mx-2">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center text-center my-12">
      <h2 className="countdown-title mb-4">Grand Opening:</h2>
      <div className="header__content-promo-text mb-4">
        Grand Opening:{" "}
        <b>
          <span className="text-blue-500">{openingDetails.date}</span>
        </b>{" "}
        @ {openingDetails.time}
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <a href="download.php" className="button">
        <i className="icon icon-battle"></i> Download Client
      </a>
    </div>
  );
};

export default Countdown;
