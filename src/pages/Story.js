import React, { useEffect, useRef } from "react";
import "./Story.css";

function Story() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 80;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 235, 200, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return React.createElement(
    "section",
    { className: "story" },
    React.createElement("canvas", { ref: canvasRef, className: "particle-canvas" }),

    React.createElement(
      "div",
      { className: "story-content" },
      React.createElement(
        "h2",
        { className: "story-title animate-type" },
        "Когда судьбы переплетаются, рождается история…"
      ),
      React.createElement(
        "p",
        { className: "story-text animate-fade" },
        "Мы прошли путь из тысяч мелких моментов — от смеха до тишины, от случайных встреч до бесконечных разговоров. Каждая минута вместе — это маленькое чудо, которое теперь стало нашей реальностью."
      ),
      React.createElement(
        "div",
        { className: "story-invite animate-pop" },
        React.createElement("h3", null, "Приглашаем вас разделить с нами этот день"),
        React.createElement(
          "p",
          null,
          "Торжество состоится ",
          React.createElement("strong", null, "25 июня 2026"),
          React.createElement("br"),
          "в ",
          React.createElement("em", null, "Park Resort, г. Бишкек")
        )
      )
    )
  );
}

export default Story;
