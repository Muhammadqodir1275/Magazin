import { useEffect, useState } from "react";
import "../style/Page.css";
import Navbar from "../companent/navbar";
import Footer from "../companent/footer";
import { Link, useParams } from "react-router-dom";
import { useSavat } from "../context/SavatProvider";
import data from "../companent/data/data";

const Page = () => {
  const { toggleSaralangan, addToSavat, saralangan,rasmiylashtirish } = useSavat();
  const { id } = useParams();
  const mahsulotId = parseInt(id);

  const tanlanganMahsulot = data.find((item) => item.id === mahsulotId);
  const filter = data.filter((item) => item.id !== mahsulotId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [ovozlar, setOvozlar] = useState({});
  const [reytinglar, setReytinglar] = useState({});
  const [sharhlar, setSharhlar] = useState({});
  const [komment, setKomment] = useState("");

  if (!tanlanganMahsulot) {
    return <h2>Mahsulot topilmadi ❌</h2>;
  }

  const ovozBerish = () => {
    setOvozlar((old) => {
      const newOvoz = {};
      for (let key in old) newOvoz[key] = old[key];
      newOvoz[mahsulotId] = old[mahsulotId] ? 0 : 1;
      return newOvoz;
    });
  };

  const reytingniOzgartirish = (yangiReyting) => {
    setReytinglar((old) => {
      const newReyting = {};
      for (let key in old) newReyting[key] = old[key];
      newReyting[mahsulotId] = yangiReyting;
      return newReyting;
    });
  };

  const sharhniYuborish = () => {
    if (komment.trim()) {
      setSharhlar((old) => {
        const newSharhlar = {};
        for (let key in old) newSharhlar[key] = old[key];
        if (!newSharhlar[mahsulotId]) {
          newSharhlar[mahsulotId] = [];
        }
        newSharhlar[mahsulotId].push({
          matn: komment,
          baho: reytinglar[mahsulotId] || 0,
        });
        return newSharhlar;
      });
      setKomment("");
    }
  };

  return (
    <div className="mahsulot-container">
      <Navbar />
      <div className="mahsulot-wrapper">
        <div className="mahsulot-nomi">
          <img src={tanlanganMahsulot.img} alt={tanlanganMahsulot.nomi} />
          <i
            className={`fa-heart ${
              saralangan.some((liked) => liked.nomi === tanlanganMahsulot.nomi)
                ? "fa-solid liked"
                : "fa-regular"
            }`}
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
                  className={`fa-star ${
                    yulduz <= (reytinglar[mahsulotId] || 0) ? "fa-solid" : "fa-regular"
                  }`}
                  onClick={() => reytingniOzgartirish(yulduz)}
                ></i>
              ))}
            </div>

            <div className="sharhlar">
              {(sharhlar[mahsulotId] || []).map((sharh, index) => (
                <div key={index} className="sharh">
                  <p>{sharh.matn}</p>
                  <div className="sharh-reyting">
                    {Array(sharh.baho).fill(0).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {(reytinglar[mahsulotId] || 0) > 0 && (
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
            <button
              className="savatga-qoshish"
              onClick={() => addToSavat(tanlanganMahsulot)}
            >
              <i className="fa-solid fa-shopping-cart"></i> Savatga qo‘shish
            </button>
            <button
              className="sotib-olish"
              onClick={rasmiylashtirish}
            >
              Bir marta bosish bilan sotib olish
            </button>
          </div>

          <div className="mahsulot-ovoz-berish">
            <h1>Ovoz Berish:</h1>
            <div className="ovoz-berish">
              <i
                className={`fa-solid fa-thumbs-up ${
                  ovozlar[mahsulotId] ? "liked" : ""
                }`}
                onClick={ovozBerish}
              ></i>
              <h4>Men tavsiya qilaman</h4>
              <p>{ovozlar[mahsulotId] || 0} ta ovoz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-container">
        {filter.map((item) => (
          <div className="Cards" key={item.id}>
            <Link to={`/page/${item.id}`} style={{ textDecoration: "none" }}>
              <div className="card-img">
                <img src={item.img} alt={item.nomi} />
              </div>
              <div className="name">
                <h4>{item.nomi}</h4>
              </div>
            </Link>
            <div className="maney">
              <p>{item.pul.toLocaleString()} so‘m</p>
              <i
                className="fa-solid fa-shopping-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  addToSavat(item);
                }}
              >
                +
              </i>
            </div>
            <div className="saralash">
              <i
                className={`fa-heart ${
                  saralangan.some((likedItem) => likedItem.nomi === item.nomi)
                    ? "fa-solid liked"
                    : "fa-regular"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSaralangan(item);
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
