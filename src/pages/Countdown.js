import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const weddingDate = new Date("2025-11-23T18:00:00"); // 💖 своя дата

  const calcTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  const [prevTime, setPrevTime] = useState(calcTimeLeft());
  const [flipping, setFlipping] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calcTimeLeft();
      setPrevTime(timeLeft);
      setTimeLeft(newTime);

      // определяем, что изменилось
      const changed = {};
      Object.keys(newTime).forEach((key) => {
        changed[key] = newTime[key] !== timeLeft[key];
      });
      setFlipping(changed);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <section className="countdown">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">До нашего особенного дня </h1>
        <div className="timer">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="time-block">
              <span className={`flip ${flipping[unit] ? "active" : ""}`}>
                {timeLeft[unit].toString().padStart(2, "0")}
              </span>
              <p>
                {unit === "days"
                  ? "Дней"
                  : unit === "hours"
                  ? "Часов"
                  : unit === "minutes"
                  ? "Минут"
                  : "Секунд"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
