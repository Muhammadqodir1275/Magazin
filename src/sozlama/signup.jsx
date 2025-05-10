import React, { useState } from "react";
import { useSavat } from "../context/SavatProvider";
import "../style/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const { formData, handleChange } = useSavat();
  const [error, seterror] = useState("")
  const { signUp } = useSavat(); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      seterror("Parollar mos kelmadi!");
      setTimeout(() => seterror(""), 3000);
      return;
    }
  
    const result = signUp(formData); 
    
    if (!result.success) {
      alert(result.message); 
      return;
    }
  
    alert("✅ Ro‘yxatdan o‘tildi:", formData);
  };
  return (
    <div className="ContainerSignup">
      <div className="name">
        <h1>Ro'yxatdan o'tish</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputlar">
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="ism"
              placeholder="Ismingiz"
              value={formData.ism}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="date"
              name="tugilganSana"
              value={formData.tugilganSana || ""}
              onChange={handleChange}
              required
            />
            {formData.errors?.tugilganSana && <p style={{ color: "red" }}>{formData.errors.tugilganSana}</p>}
          </div>
          <div className="input-wrapper">
            <h3>Jinsingizni tanlang</h3>
            <select name="jins" value={formData.jins} onChange={handleChange}>
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Parol"
              value={formData.password || ""}
              onChange={handleChange}
              required
            />
            {formData.errors?.password && <p style={{ color: "red" }}>{formData.errors.password}</p>}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Parolni tasdiqlang"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
              required
            />
            {formData.errors?.confirmPassword && <p style={{ color: "red" }}>{formData.errors.confirmPassword}</p>}
          </div>
        </div>
        <div className="button">
          <button type="submit">Ro'yxatdan o'tish</button>
        </div>
      </form>
      <div className="login-link">
        <p>
          Hisobingiz bormi?{" "}
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <span>Kirish</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;






// import React, { useState } from "react";
// // import { useSavat } from "./context/SavatProvider";
// import "./signup.css";
// import { Link } from "react-router-dom";
// import { useSavat } from "./context/SavatProvider";

// const Signup = () => {
//   const { formData, handleChange, setFormData } = useSavat();
//   const [error, seterror] = useState("");
//   const { signUp } = useSavat(); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (formData.password !== formData.confirmPassword) {
//       seterror("Parollar mos kelmadi!");
//       setTimeout(() => seterror(""), 3000);
//       return;
//     }
  
//     const result = signUp(formData); 
    
//     if (!result.success) {
//       alert(result.message); 
//       return;
//     }
  
//     alert("Ro‘yxatdan o‘tildi ✅");
//     setFormData({
//       username: "",
//       ism: "",
//       tugilganSana: "",
//       jins: "erkak",
//       password: "",
//       confirmPassword: "",
//       errors: {},
//     });
//   };
  
//   return (
//     <div className="ContainerSignup">
//       <div className="name">
//         <h1>Ro'yxatdan o'tish</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="inputlar">
//           <div className="input-wrapper">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-wrapper">
//             <input
//               type="text"
//               name="ism"
//               placeholder="Ismingiz"
//               value={formData.ism}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-wrapper">
//             <input
//               type="date"
//               name="tugilganSana"
//               value={formData.tugilganSana || ""}
//               onChange={handleChange}
//               required
//             />
//             {formData.errors?.tugilganSana && <p style={{ color: "red" }}>{formData.errors.tugilganSana}</p>}
//           </div>
//           <div className="input-wrapper">
//             <h3>Jinsingizni tanlang</h3>
//             <select name="jins" value={formData.jins} onChange={handleChange}>
//               <option value="erkak">Erkak</option>
//               <option value="ayol">Ayol</option>
//             </select>
//           </div>
//           <div className="input-wrapper">
//             <input
//               type="password"
//               name="password"
//               placeholder="Parol"
//               value={formData.password || ""}
//               onChange={handleChange}
//               required
//             />
//             {formData.errors?.password && <p style={{ color: "red" }}>{formData.errors.password}</p>}
//           </div>
//           <div className="input-wrapper">
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Parolni tasdiqlang"
//               value={formData.confirmPassword || ""}
//               onChange={handleChange}
//               required
//             />
//             {formData.errors?.confirmPassword && <p style={{ color: "red" }}>{formData.errors.confirmPassword}</p>}
//           </div>
//         </div>
//         <div className="button">
//           <button type="submit">Ro'yxatdan o'tish</button>
//         </div>
//       </form>
//       <div className="login-link">
//         <p>
//           Hisobingiz bormi?{" "}
//           <Link to={"/login"} style={{ textDecoration: "none" }}>
//             <span>Kirish</span>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
