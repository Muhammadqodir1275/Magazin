import React from "react";
import "./UserProfile.css"; // 👉 CSS faylni ulash

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="profile-avatar"
        />
        <div>
          <h3 className="profile-name">Foydalanuvchi Ismi</h3>
          <p className="profile-email">email@example.com</p>
        </div>
      </div>
      <hr />
      <ul className="profile-list">
        <li>Shaxsiy kabinet</li>
        <li>Sozlamalar</li>
        <li>Buyurtmalarim</li>
        <li>Bildirishnomalar</li>
        <li className="logout">Chiqish</li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
