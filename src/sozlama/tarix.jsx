import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/tarix.css';
import Footer from '../companent/footer';
import Navbar from '../companent/navbar';

const Tarix = () => {
    const [mahsulotlar, setMahsulotlar] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const oldBuyurtmalar = JSON.parse(localStorage.getItem("buyurtmalar")) || [];
        setMahsulotlar(oldBuyurtmalar);
    }, []);

    const handleBosish = () => {
        navigate("/buyurtmalar");
    };

    return (
        <>
            <Navbar />
            <div className='tarix-container'>
                <h2><i className="fa-solid fa-clock-rotate-left"></i> Buyurtma tarixi</h2>

                <div className="tarixcard">
                    {mahsulotlar.length === 0 ? (
                        <p>Buyurtma mavjud emas</p>
                    ) : (
                        <>
                            <ul>
                                {mahsulotlar.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.nomi}</strong> - {item.miqdor} dona, narx: {item.narx}
                                    </li>
                                ))}
                            </ul>
                            <button className="korish-btn" onClick={handleBosish}>
                                Buyurtmalar sahifasiga o‘tish
                            </button>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tarix;
