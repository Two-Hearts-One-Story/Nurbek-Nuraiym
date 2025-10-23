import React from "react";
import "./Story.css";

function Story() {
  return (
    <section className="story">
      <div className="story-content">
        <h2 className="story-intro animate-fade-up">
          Когда судьбы переплетаются, рождается история…
        </h2>

        <p className="story-text animate-fade-up delay-1">
          Мы прошли путь из тысяч мелких моментов — от смеха до тишины, от
          случайных встреч до бесконечных разговоров.  
          Каждая минута вместе — это маленькое чудо, которое теперь стало нашей
          реальностью.
        </p>

        <div className="invite-block animate-fade-up delay-2">
          <h3 className="invite-title">Приглашаем вас разделить с нами этот день</h3>
          <p className="invite-text">
            Торжество состоится <strong>25 июня 2026</strong>  
            <br />в <em>Park Resort, г. Бишкек</em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
