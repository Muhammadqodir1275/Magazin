import { useEffect, useState } from "react";
import './bildirishnoma.css'
import { useParams } from "react-router-dom";
import Footer from "../companent/Footer";
import Navbar from "../companent/navbar"
const Bildirishnomalar = () => {
  const [notices, setNotices] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bildirishnomalar")) || [];
    setNotices(data);
  }, []);

  const ochirish = (item) => {
    setNotices((prev) => {
      const yangiNotices = prev.filter((i) => i.time !== item.time);
      localStorage.setItem("bildirishnomalar", JSON.stringify(yangiNotices));
      return yangiNotices;
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px",}} className="bildirishnomalar">
        <h2 style={{marginBottom: "10px"}}><i className="fa-solid fa-bell"></i> Bildirishnomalar</h2>
        {notices.length === 0 ? (
          <p>Bildirishnoma mavjud emas</p>
        ) : (
          <ul>
            {notices.map((item, index) => (
              <div className="bildirishnomacard" key={index}>
                <li>
                  <strong>{item.title}</strong>
                  <p>{item.message}</p>
                  <small style={{ color: "gray" }}>{item.time}</small>
                </li>
                <button onClick={() => ochirish(item)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Bildirishnomalar;
