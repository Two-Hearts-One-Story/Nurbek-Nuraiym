import React from "react";
import "./Home.css";
import couplePhoto from "../assets/couple.jpeg"; // добавь фото в assets

function Home() {
  return (
    <section className="home">
 <div className="image-container">
  <img src={couplePhoto} alt="Нурбек и Нурайым" className="home-image" />

  {/* SVG с множеством волн для эффекта растекания */}
  <svg className="drip-svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
     <path fill="#7a623d" d="
      M0,80 
      C180,150 360,50 540,120 
      C720,180 900,70 1080,130 
      C1260,180 1440,90 1440,100 
      L1440,200 L0,200 Z
    "></path>
    <path fill="#463e32ff" d="
      M0,100 
      C200,180 400,60 600,140 
      C800,200 1000,90 1200,150 
      C1400,200 1440,120 1440,140 
      L1440,200 L0,200 Z
    "></path>
    <path fill="rgba(49, 47, 47, 0.3)" d="
      M0,120 
      C150,190 350,80 500,160 
      C650,200 850,100 1000,170 
      C1150,200 1300,120 1440,160 
      L1440,200 L0,200 Z
    "></path>
  </svg>

  <div className="text-overlay">
    <h1 className="main-title">Нурбек Нурайым</h1>
    <p className="date">25 июня 2026</p>
  </div>
</div>

    </section>
  );
}

export default Home;
