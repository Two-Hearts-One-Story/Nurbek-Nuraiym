import React, { useEffect, useRef } from "react";
import "./Program.css";

function Program() {
  const events = [
    {
      time: "15:00",
      title: "Сбор гостей",
      desc: "Встречаем вас с улыбкой, бокалом шампанского и живой музыкой.",
    },
    {
      time: "16:00",
      title: "Церемония",
      desc: "Самый трепетный момент — клятвы, кольца и первое «да».",
    },
    {
      time: "17:00",
      title: "Фотосессия",
      desc: "Немного волшебства перед объективом — пусть память останется навсегда.",
    },
    {
      time: "18:00",
      title: "Ужин и танцы",
      desc: "Вкусная еда, смех, музыка и танцы до самого вечера.",
    },
    {
      time: "22:00",
      title: "Салют и завершение",
      desc: "Закрываем вечер под сияние огней и музыку.",
    },
  ];

  const sectionRef = useRef(null);

  // скролл-анимация появления блоков
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal-on-scroll");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    items.forEach((el) => io.observe(el));
    return () => {
      items.forEach((el) => io.unobserve(el));
    };
  }, []);

  return (
    <section className="program-section" ref={sectionRef}>
      {/* акварельные пятна / блики */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      {/* плавающие лепестки */}
      <div className="petal petal-1" />
      <div className="petal petal-2" />
      <div className="petal petal-3" />
      <div className="petal petal-4" />

      <div className="program-wrapper">
        <header className="program-header reveal-on-scroll">
          <h2 className="program-heading">
            Программа дня
            <span className="heading-underline" />
          </h2>
          <p className="program-subtitle">
            Этот день — не просто расписание. Это маленький фильм про нас и про
            людей, которых мы любим.
          </p>
        </header>

        <div className="timeline">
          <div className="timeline-line" />

          {events.map((event, index) => (
            <div
              className={`timeline-row reveal-on-scroll ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="timeline-card">
                <div className="time-pill">
                  <span>{event.time}</span>
                </div>

                <div className="text-box">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.desc}</p>
                </div>

                <div className="card-glow" />
              </div>
            </div>
          ))}
        </div>

        <footer className="program-footer reveal-on-scroll">
          <p className="footer-note">
            Спасибо, что вы с нами в этот момент. Всё остальное — просто
            счастье.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Program;
