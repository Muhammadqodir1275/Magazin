import React from 'react'

import "../style/buyurtmalar.css";
import { useSavat } from '../context/SavatProvider';
const buyurtmalar = () => {
    const { user, savat } = useSavat();
    return (
        <div className="kabinet">
            <h2>Buyurtmalarim</h2>
            {savat.length === 0 ? (
                <p>Siz hali hech narsa sotib olmadingiz!</p>
            ) : (
                <ul>
                    {savat.map((item, index) => (
                        <li key={index}>
                            {item.nomi} - {item.miqdor} dona - {item.pul * item.miqdor} so‘m
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}

export default buyurtmalar