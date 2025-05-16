import "../style/buyurtmalar.css";
import Footer from "../companent/footer";
import Navbar from '../companent/navbar';
import { useEffect, useState } from "react";
import { useNotification } from "./context/NotificationProvider";

const Buyurtmalar = () => {
    const { addNotification } = useNotification();
    const [mahsulotlar, setMahsulotlar] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useEffect(() => {
        const oldBuyurtmalar = JSON.parse(localStorage.getItem("buyurtmalar")) || [];
        setMahsulotlar(oldBuyurtmalar);
    }, []);

    const ochirish = (indexToRemove) => {
        console.log("O'chirilayotgan index:", indexToRemove);
        setMahsulotlar((prev) => {
            const yangiMahsulotlar = prev.filter((_, i) => i !== indexToRemove);
            localStorage.setItem("buyurtmalar", JSON.stringify(yangiMahsulotlar));
            return yangiMahsulotlar;
        });
        const now = new Date();
        const vaqt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        addNotification("lightgreen", `Buyurtmangiz Bekor boldi! (${vaqt})`);
    };



    return (
        <>
            <Navbar />
            <div className="buyurtma-container">
                <h2>Buyurtmalarim</h2>
                {mahsulotlar.length === 0 ? (
                    <p>Siz hali hech narsa sotib olmadingiz!</p>
                ) : (
                    <div className="kabinent-body">
                        {mahsulotlar.map((item, index) => (
                            <div key={index} className="kabinent-card">
                                <img src={item.img} alt={item.nomi} style={{ width: '150px' }} />
                                <h3>{item.nomi}</h3>
                                <p>Miqdor: {item.miqdor}</p>
                                <p>Umumiy narx: {item.umumiyNarx}</p>
                                <button onClick={() => ochirish(index)} style={{ marginLeft: '10px' }}>
                                    Buyurtmani bekor qilish
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Buyurtmalar;
