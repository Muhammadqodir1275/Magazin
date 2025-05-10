// import React, { useState } from 'react';
// import './login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSavat } from './context/SavatProvider';

// const Login = () => {
//   const { login } = useSavat();

//   const navigate = useNavigate();
//   const [eye, setEye] = useState(true);
//   const [passwordType, setPasswordType] = useState("password");
//   const [eyeIcon, setEyeIcon] = useState("fa-eye");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const togglePasswordVisibility = () => {
//     if (eye) {
//       setEyeIcon("fa-eye-slash");
//       setPasswordType("text");
//     } else {
//       setEyeIcon("fa-eye");
//       setPasswordType("password");
//     }
//     setEye(!eye);
//   };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const result = login(formData.username, formData.password);
  //   if (result.success) {
  //     navigate("/"); // 🔹 Foydalanuvchi tizimga kirgandan keyin bosh sahifaga yo‘naltirish
  //   } else {
  //     setError(result.message);
  //     setTimeout(() => setError(""), 3000);
  //   }
  // };

//   const handleKeyUp = (e) => {
//     if (e.key === "Enter") {
//       handleLogin();
//     }
//   };



//   return (
//     <div className='ContainerLogin'>
//       <div className="name">
//         <h1>Login</h1>
//       </div>
//       <div className="inputlar">
//         <div className="input-wrapper">
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             onKeyUp={handleKeyUp}
//             required
//           />
//         </div>

//         <div className="input-wrapper">
//           <input
//             type="password"
//             name="password"
//             placeholder="Parol"
//             value={formData.password}
//             onChange={handleChange}
//             onKeyUp={handleKeyUp}
//             required
//           />
//           <i className={`fa-solid ${eyeIcon}`} onClick={togglePasswordVisibility}></i>
//         </div>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div className="button">
//         <button onClick={handleLogin} disabled={loading}>
//           {loading ? "Yuklanmoqda..." : "Log in"}
//         </button>
//       </div>
//       <div className="signUp">
//         <p>
//           Hisobingiz yo'qmi?
//           <Link to={"/signup"} style={{ textDecoration: 'none' }}>
//             <span> Ro'yxatdan o'tish</span>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;








import React, { useState } from 'react';
import '../style/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSavat } from '../context/SavatProvider';


const Login = () => {
  const { login } = useSavat();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("fa-eye");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    if (passwordVisible) {
      setPasswordType("password");
      setEyeIcon("fa-eye");
    } else {
      setPasswordType("text");
      setEyeIcon("fa-eye-slash");
    }
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (event) => {
    const inputElement = event.target;
    const inputName = inputElement.name;
    const inputValue = inputElement.value;
    
    setFormData((previousState) => {
      return { ...previousState, [inputName]: inputValue };
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      processLogin(event);
    }
  };

  const processLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    const loginResult = login(formData.username, formData.password);
    console.log("nami",loginResult);
    
    if (loginResult.success) {
      navigate("/");
    } else {
      setErrorMessage(loginResult.message);
      setTimeout(() => setErrorMessage(""), 3000);
    }
    setLoading(false);
  };

  return (
    <div className='ContainerLogin'>
      <div className="name">
        <h1>Login</h1>
      </div>
      <div className="inputlar">
        <form onSubmit={processLogin}>
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type={passwordType}
              name="password"
              placeholder="Parol"
              value={formData.password}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              required
            />
            <i className={`fa-solid ${eyeIcon}`} onClick={togglePasswordVisibility}></i>
          </div>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <div className="button">
            <button type="submit" disabled={loading}>
              {loading ? "Yuklanmoqda..." : "Log in"}
            </button>
          </div>
        </form>
      </div>

      <div className="signUp">
        <p>
          Hisobingiz yo'qmi?
          <Link to={"/signup"} style={{ textDecoration: 'none' }}>
            <span> Ro'yxatdan o'tish</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
