import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Address.css";

const Address = () => {
  useEffect(() => {
    const container = L.DomUtil.get("map");

    // 💡 Если карта уже создана — удаляем, чтобы не было ошибки
    if (container !== null) {
      container._leaflet_id = null;
    }

    const map = L.map("map", {
      center: [42.8746, 74.5698],
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([42.8746, 74.5698]).addTo(map);
    marker.bindPopup("<b>Ресторан 'Aurora Hall'</b><br>ул. Исанова 85, Бишкек").openPopup();

    // 💥 Удаляем карту при размонтировании, чтобы React не ругался
    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="address-section">
      <div className="overlay"></div>
      <div className="content">
        <h2 className="title">Место проведения</h2>
        <p className="subtitle">Ресторан <strong>“Aurora Hall”</strong></p>
        <p className="address-text">г. Бишкек, ул. Исанова 85</p>

        <div id="map" className="map"></div>
      </div>
    </section>
  );
};

export default Address;
