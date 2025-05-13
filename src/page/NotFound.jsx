import { Link } from "react-router-dom";
import "../style/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sahifa topilmadi</h2>
      <p>Ushbu sahifa mavjud emas yoki o‘chirilgan.</p>
      <Link to="/" className="home-link"><span>Bosh sahifaga qaytish </span></Link>
    </div>
  );
};

export default NotFound;
