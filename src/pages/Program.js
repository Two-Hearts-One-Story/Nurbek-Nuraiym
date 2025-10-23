import React from "react";
import "./Program.css";

function Program() {
  const events = [
    { time: "15:00", title: "Сбор гостей", desc: "Встречаем вас с улыбкой, бокалом шампанского и живой музыкой." },
    { time: "16:00", title: "Церемония", desc: "Самый трепетный момент — клятвы, кольца и первое 'да'." },
    { time: "17:00", title: "Фотосессия", desc: "Немного волшебства перед объективом — пусть память останется навсегда." },
    { time: "18:00", title: "Ужин и танцы", desc: "Вкусная еда, смех, музыка и танцы до самого вечера." },
    { time: "22:00", title: "Салют и завершение", desc: "Завершаем этот день под звуки музыки и сияние огней." },
  ];

  return (
    <section className="program">
      <div className="program-container">
        <h2 className="program-title animate-fade-up">
          Программа свадьбы
        </h2>
        <p className="program-subtitle animate-fade-up delay-1">
          Пусть этот день станет началом новой, красивой истории...
        </p>

        <div className="timeline">
          {events.map((event, index) => (
            <div
              className={`timeline-item animate-fade-up delay-${index + 2}`}
              key={index}
            >
              <div className="time">{event.time}</div>
              <div className="details">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Program;
