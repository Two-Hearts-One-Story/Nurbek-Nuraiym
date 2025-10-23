import React from "react";
import "./Home.css";
import couplePhoto from "../assets/couple.jpeg"; // добавь фото в assets

function Home() {
  return (
    <section className="home">
      <div className="image-container">
        <img src={couplePhoto} alt="Шахида и Актан" className="home-image" />
        <div className="text-overlay">
          <h1 className="main-title">Нурбек Нурайым</h1>
          <p className="date">25 июня 2026</p>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="line"></span>
        <p>Прокрути вниз</p>
      </div>
    </section>
  );
}

export default Home;
