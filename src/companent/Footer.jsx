import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Foydali havolalar</h3>
          <ul>
            <li><Link to="/ShaxsiyKabinet">Shaxsiy kabinet</Link></li>
            <li><Link to="/Sozlamalar">Sozlamalar</Link></li>
            <li><Link to="/Buyurtmalar">Buyurtmalarim</Link></li>
            <li><Link to="/Bildirishnomalar">Bildirishnomalar</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Biz bilan bog‘lanish</h3>
          <ul>
            <li>📞 +998 90 123 45 67</li>
            <li>📧 Muhammadqodir@gmail.com</li>
            <li>📍 O‘zbekiston, Andijon</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Ijtimoiy tarmoqlar</h3>
          <div className="footer-social">
            <a target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

export default Footer;
