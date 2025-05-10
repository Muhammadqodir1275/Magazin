import React from "react";

import "./bildirishnoma.css";
import { useSavat } from "../context/SavatProvider";

const Bildirishnomalar = () => {
  const { user } = useSavat();

  if (!user) {
    return <h2>Iltimos, oldin tizimga kiring!</h2>;
  }

  const notifications = [
    { id: 1, text: "Buyurtmangiz qabul qilindi!", time: "10 daqiqa oldin" },
    { id: 2, text: "Buyurtmangiz jo'natildi!", time: "1 soat oldin" },
    { id: 3, text: "Bugun maxsus chegirmalar mavjud!", time: "3 soat oldin" },
  ];

  return (
    <div >
      <h2>Bildirishnomalar</h2>
      {notifications.length === 0 ? (
        <p>Hech qanday bildirishnoma yo‘q.</p>
      ) : (
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id}>
              <p>{notif.text}</p>
              <span>{notif.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bildirishnomalar;
