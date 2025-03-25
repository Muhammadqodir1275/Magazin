import React, { useState } from "react";
import "./nav.css";
import Carusel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
// import magazin from "./img/mega-store.webp";
import { Link } from "react-router-dom";
import { useSavat } from "./context/SavatProvider";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { user, setUser, searchQuery, setSearchQuery } = useSavat();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    setUser(null);
    navigate("/login");
  };

  const toggleProfile = () => {
    setIsProfileOpen((previousState) => {
      if (previousState === true) {
        return false;
      } else {
        return true;
      }
    });
  };


  return (
    <div className="continer">
      <nav>
        <div className="nav">
          <div className="navbar">
            <div className="nomi">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK59CsMWhurgZEjxDuKp5fGCLz75qf2Vgww&s" alt="Logo" />
              <h1>Onlayn magazin</h1>
            </div>

            <div className="input">
              <input type="text" placeholder="Mahsulotlar izlash"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-search"></i>
            </div>

            <div className="saralanganlar">
              <Link to="/saralangan" style={{ textDecoration: "none" }}>
                <button>
                  <i className="fa-solid fa-heart"></i> Saralanganlar
                </button>
              </Link>
            </div>

            <div className="savat">
              <Link to="/savat" style={{ textDecoration: "none" }}>
                <button>
                  <i className="fa-solid fa-shopping-cart"></i> Savat
                </button>
              </Link>
            </div>

            {user ? (
              <div className="user-profile">
                {user.rasm ? (
                  <img
                    src={user.rasm}
                    alt="Profil rasmi"
                    className="profile-img"
                    onClick={toggleProfile}
                  />
                ) : (
                  <>
                    <div className="profile-icon" onClick={toggleProfile}>
                      <i className="fa-solid fa-circle-user"></i>
                    </div>
                    <div className={`profile-menu ${isProfileOpen ? "active" : ""}`}>
                      <div className="profile-header">
                        <i className="fa-solid fa-circle-user"></i>
                        <div>
                          <h3 className="profile-name">{user ? user.ism : "Ism mavjud emas"}</h3>
                          <p className="profile-email">{user ? user.username : "Username mavjud emas"}</p>
                        </div>
                        <button className="close-btn" onClick={toggleProfile}>X</button>
                      </div>
                      <hr />
                      <ul className="profile-list">
                        <Link to="/ShaxsiyKabinet" style={{ textDecoration: "none" }}>Shaxsiy kabinet</Link>
                        <Link to="/Sozlamalar" style={{ textDecoration: "none" }}>Sozlamalar</Link>
                        <Link to="/Buyurtmalar" style={{ textDecoration: "none" }}>Buyurtmalarim</Link>
                        <Link to="/Bildirishnomalar" style={{ textDecoration: "none" }}>Bildirishnomalar</Link>
                        <button>
                          <i class="fa-solid fa-right-from-bracket" onClick={handleLogout}></i>Chiqish
                        </button>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="kirish">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button>
                    <i className="fa-solid fa-user"></i> Kirish
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Carusel />
      <Card />
      <Footer />
    </div>
  );
};

export default Nav;
