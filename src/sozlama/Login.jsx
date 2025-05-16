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
