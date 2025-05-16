import React, { useState } from 'react';

import "../style/sozlamalar.css";
import { useSavat } from '../context/SavatProvider';
import Footer from '../companent/footer';
import Navbar from '../companent/navbar';

const Sozlamalar = () => {
    const { user } = useSavat();
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const updateUser = () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUser = users.find((u) => u.username === user.username);

        if (currentUser) {
            currentUser.username = newUsername || currentUser.username;
            currentUser.password = newPassword || currentUser.password;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Ma’lumotlar yangilandi!");
        }
    };

    return (
        <>
        <Navbar/>
            <div className="kabinet">
                <h2>Sozlamalar</h2>
                <input type="text" placeholder="Yangi username" onChange={(e) => setNewUsername(e.target.value)} />
                <input type="password" placeholder="Yangi parol" onChange={(e) => setNewPassword(e.target.value)} />
                <button onClick={updateUser}>Yangilash</button>
            </div>
            <Footer/>
        </>
    );
}

export default Sozlamalar;
