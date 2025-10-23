import React, { useState } from "react";
import "./Confirm.css";

const Confirm = () => {
  const [formData, setFormData] = useState({ name: "", guests: "1", attending: "yes" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // тут потом можно подключить отправку на сервер, если нужно
  };

  return (
    <section className="confirm-section">
      <div className="overlay"></div>
      <div className="content">
        {!submitted ? (
          <>
            <h2 className="title">Подтвердите своё участие</h2>
            <p className="subtitle">
              Мы будем счастливы видеть вас на нашем торжестве 💕
            </p>

            <form className="confirm-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите имя"
                  required
                />
              </div>

              <div className="form-group">
                <label>Количество гостей</label>
                <select name="guests" value={formData.guests} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="form-group radio-group">
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === "yes"}
                    onChange={handleChange}
                  />
                  Приду обязательно 💍
                </label>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === "no"}
                    onChange={handleChange}
                  />
                  К сожалению, не смогу 😢
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Отправить
              </button>
            </form>
          </>
        ) : (
          <div className="thanks-message">
            <h2>Спасибо, {formData.name || "друг"}!</h2>
            <p>Ваш ответ принят. Мы с нетерпением ждём встречи 💐</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Confirm;
