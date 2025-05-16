import { useState } from "react";

import "../style/shaxsiyKabinet.css";
import { useSavat } from "../context/SavatProvider";
import Navbar from "../companent/navbar";
import Footer from "../companent/footer";
const ShaxsiyKabinet = () => {
  const { user, setUser } = useSavat();
  const [hover, setHover] = useState(false);

  if (!user) {
    return <h2>Iltimos, oldin tizimga kiring!</h2>;
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        let yangiFoydalanuvchi = {};
        yangiFoydalanuvchi.ism = user.ism;
        yangiFoydalanuvchi.username = user.username;
        yangiFoydalanuvchi.tugilganSana = user.tugilganSana;
        yangiFoydalanuvchi.email = user.email;
        yangiFoydalanuvchi.rasm = reader.result;

        setUser(yangiFoydalanuvchi);
        localStorage.setItem("loginUser", JSON.stringify(yangiFoydalanuvchi));
      };
      reader.readAsDataURL(file);
    }
  }

  function removeImage() {
    let yangiFoydalanuvchi = {};
    yangiFoydalanuvchi.ism = user.ism;
    yangiFoydalanuvchi.username = user.username;
    yangiFoydalanuvchi.tugilganSana = user.tugilganSana;
    yangiFoydalanuvchi.email = user.email;
    yangiFoydalanuvchi.rasm = "";

    setUser(yangiFoydalanuvchi);
    localStorage.setItem("loginUser", JSON.stringify(yangiFoydalanuvchi));
  }

  return (
    <>
    <Navbar/>
      <div className="kabinet">
        <h2>Shaxsiy Kabinet</h2>
        <div className="profile">
          <div
            className="image-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {user.rasm ? (
              <img src={user.rasm} alt="Profil rasmi" className="profil-rasm" />
            ) : (
              <div className="default-avatar">
                <i className="fa-solid fa-circle-user"></i>
              </div>
            )}

            <label htmlFor="imageUpload" className="camera-icon">
              <i className="fa-solid fa-camera"></i>
            </label>
            <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />

            {user.rasm && (
              <button className="remove-btn" onClick={removeImage}>
                ✖
              </button>
            )}
          </div>
          <h3>Ism: {user.ism}</h3>
          <p>Username: {user.username}</p>
          <p>Tug‘ilgan sana: {user.tugilganSana}</p>
          <p>Email: {user.email ? user.email : "Email kiritilmagan"}</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShaxsiyKabinet;
