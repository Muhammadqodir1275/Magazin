import { useState } from "react";
import { useSavat } from "./context/SavatProvider";
import "./Page.css";
import Navbar from "./navbar"
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Page = () => {
  const { tanlanganMahsulot, toggleSaralangan, addToSavat, saralangan,setTanlanganMahsulot } = useSavat();
  const [ovozlar, setOvozlar] = useState({});

  const location = useLocation();
  const mahsulotlar = (location.state?.mahsulotlar || []).filter(
    (item) => tanlanganMahsulot?.id && item.id !== tanlanganMahsulot.id
  );
  const mahsulotniOchish = (mahsulot) => {
    setTanlanganMahsulot(mahsulot); 
    navigate("/page",{ state: { mahsulotlar ,mahsulot } }); 
  }
  
  console.log(tanlanganMahsulot);

  const ovozBerish = (mahsulotId) => {
    setOvozlar((oldingiOvozlar) => {
      let yangiOvozlar = {};

      for (let id in oldingiOvozlar) {
        yangiOvozlar[id] = oldingiOvozlar[id];
      }

      if (yangiOvozlar[mahsulotId]) {
        delete yangiOvozlar[mahsulotId];
      } else {
        yangiOvozlar[mahsulotId] = 1;
      }

      return yangiOvozlar;
    });
  };

  const [reyting, setReyting] = useState(0);
  const [komment, setKomment] = useState("");
  const [sharhlar, setSharhlar] = useState([]);

  if (!tanlanganMahsulot) {
    return <h2>Mahsulot topilmadi ❌</h2>;
  }

  const reytingniOzgartirish = (yangiReyting) => {
    setReyting(yangiReyting);
  };

  const sharhniYuborish = () => {
    if (komment.trim()) {
      let yangiSharhlar = [];

      for (let i = 0; i < sharhlar.length; i++) {
        yangiSharhlar[i] = sharhlar[i];
      }

      yangiSharhlar[yangiSharhlar.length] = { matn: komment, baho: reyting };

      setSharhlar(yangiSharhlar);

      setKomment("");
    }
  };



  if (!tanlanganMahsulot) {
    return <h2>Mahsulot topilmadi ❌</h2>;
  }

  return (
    <div className="mahsulot-container">
      <Navbar/>
      <div className="mahsulot-wrapper">
        <div className="mahsulot-nomi">
          <img src={tanlanganMahsulot.img} alt={tanlanganMahsulot.nomi} />
          <i
            className={`fa-heart ${saralangan.some((likedItem) => likedItem.nomi === tanlanganMahsulot.nomi) ? "fa-solid liked" : "fa-regular"}`}
            onClick={() => toggleSaralangan(tanlanganMahsulot)}
          ></i>
        </div>

        <div className="mahsulot-malumotlari">
          <h2>{tanlanganMahsulot.nomi}</h2>
          <p className="mahsulot-narx">{tanlanganMahsulot.pul.toLocaleString()} so‘m</p>
          <p className="mahsulot-tavsif">{tanlanganMahsulot.tavsif}</p>

          <div className="reyting">
            <div className="yulduzlar">
              {[1, 2, 3, 4, 5].map((yulduz) => (
                <i
                  key={yulduz}
                  className={`fa-star ${yulduz <= reyting ? "fa-solid" : "fa-regular"}`}
                  onClick={() => reytingniOzgartirish(yulduz)}
                ></i>
              ))}
            </div>
            <div className="sharhlar">
              {sharhlar.map((sharh, index) => {
                const yulduzlar = [];
                for (let i = 0; i < sharh.baho; i++) {
                  yulduzlar.push(<i key={i} className="fa-solid fa-star"></i>);
                }

                return (
                  <div key={index} className="sharh">
                    <p>{sharh.matn}</p>
                    <div className="sharh-reyting">{yulduzlar}</div>
                  </div>
                );
              })}
            </div>

          </div>

          {reyting > 0 && (
            <div className="sharh-qismi">
              <div className="sharh-input">
                <textarea
                  placeholder="Sharhingizni yozing..."
                  value={komment}
                  onChange={(e) => setKomment(e.target.value)}
                ></textarea>
                <button onClick={sharhniYuborish}>
                  <i className="fa-solid fa-paper-plane"></i> Yuborish
                </button>
              </div>
            </div>
          )}

          <div className="mahsulot-savat">
            <button className="savatga-qoshish" onClick={() => addToSavat(tanlanganMahsulot)}>
              <i className="fa-solid fa-shopping-cart"></i> Savatga qo‘shish
            </button>
            <button className="sotib-olish" onClick={()=>{
                alert("Rasmiylashtirildi")
              }
            }>Bir marta bosish bilan sotib olish</button>
          </div>

          <div className="mahsulot-ovoz-berish">
            <h1>Ovoz Berish:</h1>
            <div className="ovoz-berish">
              <i
                className={`fa-solid fa-thumbs-up ${ovozlar[tanlanganMahsulot.id] ? "liked" : ""}`}
                onClick={() => ovozBerish(tanlanganMahsulot.id)}
              ></i>
              <h4>Men tavsiya qilaman</h4>
              <p>{ovozlar[tanlanganMahsulot.id] || 0} ta ovoz</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
      {mahsulotlar.map((item) => (
        <div className="Cards" key={item.id}>
          <div className="card-img" onClick={() => mahsulotniOchish(item)}>
            <img src={item.img} alt={item.nomi} />
          </div>
          <div className="name">
            <h4>{item.nomi}</h4>
          </div>
          <div className="maney">
            <p>{item.pul.toLocaleString()} so‘m</p>
            <i className="fa-solid fa-shopping-cart" onClick={() => addToSavat(item)}> +</i>
          </div>
          <div className="saralash">
            <i
              className={`fa-heart ${saralangan.some((likedItem) => likedItem.nomi === item.nomi) ? "fa-solid liked" : "fa-regular"}`}
              onClick={() => toggleSaralangan(item)}
            ></i>
          </div>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
