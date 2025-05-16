import { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useSavat } from "../context/SavatProvider";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { user, setUser, searchQuery, setSearchQuery } = useSavat();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toggleOpen, settoggleOpen] = useState(false)
  const [text, settext] = useState("")
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

  const toggleSidebar = () => {
    settoggleOpen(!toggleOpen)
    settext("active_side")
  }
  const Clase = () => {
    settoggleOpen(false)
    settext("")
  }
  return (
    <div className="continer">
      <nav>
        <div className="nav">
          <div className="navbar">
            <div className="nomi">
              <Link to={"/"} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK59CsMWhurgZEjxDuKp5fGCLz75qf2Vgww&s" alt="Logo" />
                <h1>Onlayn magazin</h1>
              </Link>
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
                  <div className="profile-img-wrapper">
                    <img
                      src={user.rasm}
                      alt="Profil rasmi"
                      className="profile-img"
                      onClick={toggleProfile}
                    />
                  </div>
                ) : (
                  <>
                    <div className="profile-icon" onClick={toggleProfile}>
                      <i className="fa-solid fa-circle-user"></i>
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

          <div className={`profile-menu ${isProfileOpen ? "active" : ""}`}>
            <div className="profile-header">
              {user ? (user.rasm ? (
                <img
                  src={user.rasm}
                  alt="Profil rasmi"
                  className="profile-img"
                  onClick={toggleProfile}
                />
              ) : (
                <>
                  <i className="fa-solid fa-circle-user"></i>
                  <div>
                    <h3 className="profile-name">{user ? user.ism : "Ism mavjud emas"}</h3>
                    <p className="profile-email">{user ? user.username : "Username mavjud emas"}</p>
                  </div>
                </>

              )
              ) : (
                <i className="fa-solid fa-circle-user"></i>
              )
              }
              <button className="fa-solid fa-xmark close-btn" onClick={toggleProfile}></button>
            </div>
            <hr />
            <div className="user-profile">
              <ul className="profile-list">
                <Link to="/ShaxsiyKabinet" style={{ textDecoration: "none" }}>Shaxsiy kabinet</Link>
                <Link to="/Sozlamalar" style={{ textDecoration: "none" }}>Sozlamalar</Link>
                <Link to="/Tarix" style={{ textDecoration: "none" }}>Buyurtmalar Tarixi</Link>
                <Link to="/Bildirishnomalar" style={{ textDecoration: "none" }}>Bildirishnomalar</Link>
                <button onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>Chiqish
                </button>
              </ul>
            </div>
          </div>
          <div className={`side_bar_container ${text}`}>
            <div className="side_bar_flex">
              {user ? (user.rasm ? (
                <img
                  src={user.rasm}
                  alt="Profil rasmi"
                  className="profile-img"
                  onClick={toggleProfile}
                />
              ) : (
                <div className="profile-header">
                  <i className="fa-solid fa-circle-user"></i>
                  <div>
                    <h3 className="profile-name">{user ? user.ism : "Ism mavjud emas"}</h3>
                    <p className="profile-email">{user ? user.username : "Username mavjud emas"}</p>
                  </div>
                  {/* <button className="close-btn" onClick={toggleProfile}>X</button> */}
                </div>
              )
              ) : (
                <div className="nomi">
                  <Link to={"/"} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK59CsMWhurgZEjxDuKp5fGCLz75qf2Vgww&s" alt="Logo" />
                    <h1>Onlayn magazin</h1>
                  </Link>
                </div>
              )
              }
              <i className="fa-solid fa-xmark" onClick={Clase} style={{ cursor: "pointer" }}></i>
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
              <ul className="profile-list" style={{ borderTop: "1px solid #000" }}>
                <Link to="/ShaxsiyKabinet" style={{ textDecoration: "none" }}>Shaxsiy kabinet</Link>
                <Link to="/Sozlamalar" style={{ textDecoration: "none" }}>Sozlamalar</Link>
                <Link to="/Tarix" style={{ textDecoration: "none" }}>Buyurtmalari Tarixi</Link>
                <Link to="/Bildirishnomalar" style={{ textDecoration: "none" }}>Bildirishnomalar</Link>
                <button  onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>Chiqish
                </button>
              </ul>

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
          <div className="hambutton" >
            <div className="hambutton_flex">
              <div className="nomi">
                <Link to={"/"} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK59CsMWhurgZEjxDuKp5fGCLz75qf2Vgww&s" alt="Logo" />
                  <h1>Onlayn magazin</h1>
                </Link>
              </div>
              <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                <svg width="40" height="30" viewBox="0 0 94 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="24" y1="21" x2="70" y2="21" stroke="black" stroke-width="2" />
                  <line x1="24" y1="35" x2="70" y2="35" stroke="black" stroke-width="2" />
                  <line x1="24" y1="49" x2="70" y2="49" stroke="black" stroke-width="2" />
                </svg>
              </span>
            </div>
            <div className="hambutton-nav">
              <div className="hambutton_input">
                <input type="text" placeholder="Mahsulotlar izlash"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fa-solid fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
