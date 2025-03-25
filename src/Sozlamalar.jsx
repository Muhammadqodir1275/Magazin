// import React from 'react'
// import { useSavat } from './context/SavatProvider';
// import "./sozlamalar.css";
// const Sozlamalar = () => {
//     const { user, savat } = useSavat();
//     const [newUsername, setNewUsername] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let currentUser = users.find((u) => u.username === user.username);

//     if (currentUser) {
//         currentUser.username = newUsername || currentUser.username;
//         currentUser.password = newPassword || currentUser.password;
//         localStorage.setItem("users", JSON.stringify(users));
//         alert("Ma’lumotlar yangilandi!");
//     }
//     return (
//         <div>
//             <div className="kabinet">
//                 <h2>Sozlamalar</h2>
//                 <input type="text" placeholder="Yangi username" onChange={(e) => setNewUsername(e.target.value)} />
//                 <input type="password" placeholder="Yangi parol" onChange={(e) => setNewPassword(e.target.value)} />
//                 <button onClick={updateUser}>Yangilash</button>
//             </div>
//         </div>
//     )
// }

// export default Sozlamalar







import React, { useState } from 'react';
import { useSavat } from './context/SavatProvider';
import "./sozlamalar.css";

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
        <div className="kabinet">
            <h2>Sozlamalar</h2>
            <input type="text" placeholder="Yangi username" onChange={(e) => setNewUsername(e.target.value)} />
            <input type="password" placeholder="Yangi parol" onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={updateUser}>Yangilash</button>
        </div>
    );
}

export default Sozlamalar;
