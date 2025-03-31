import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SavatContext = createContext();
export const SavatProvider = ({ children }) => {
  const [savat, setSavat] = useState([]);
  const [saralangan, setSaralangan] = useState([]);
  const [tanlanganMahsulot, setTanlanganMahsulot] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [Mahsulotlartoplami,setMahsulotlartoplami] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const saqlanganSavat = JSON.parse(localStorage.getItem("savat"));
    const saqlanganSaralangan = JSON.parse(localStorage.getItem("saralangan"));

    if (saqlanganSavat) {
      setSavat(saqlanganSavat);
    }
    if (saqlanganSaralangan) {
      setSaralangan(saqlanganSaralangan);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("savat", JSON.stringify(savat));
  }, [savat]);
  useEffect(() => {
    localStorage.setItem("saralangan", JSON.stringify(saralangan));
  }, [saralangan]);
  const addToSavat = (item) => {
    setSavat((prev) => {
      const yangiSavat = [...prev];
      const itemIndex = yangiSavat.findIndex((i) => i.nomi === item.nomi);
  
      if (itemIndex !== -1) {
        yangiSavat[itemIndex].miqdor += 1;
        alert("Bu mahsulot allaqachon bor");
      } else {
        yangiSavat.push({ ...item, miqdor: 1 });
        alert("Mahsulot savatga qo‘shildi! 🎉");
      }
  
      return yangiSavat;
    });
  };
  
  const removeFromSavat = (item) => {
    setSavat((prev) => prev.filter((i) => i.nomi !== item.nomi));
  };
  const removeFromSaralangan = (item) => {
    setSaralangan((prev) => prev.filter((i) => i.nomi !== item.nomi));
  };
  const toggleSaralangan = (item) => {
    setSaralangan((prev) => {
      const mavjud = prev.some((i) => i.nomi === item.nomi);
      return mavjud ? prev.filter((i) => i.nomi !== item.nomi) : [...prev, item];
    });
  };
  const increment = (item) => {
    setSavat((prev) =>
      prev.map((i) => {
        if (i.nomi === item.nomi && i.miqdor < 10) {
          return { ...i, miqdor: i.miqdor + 1 };
        }
        return i;
      })
    );
  };

  const decrement = (item) => {
    setSavat((prev) =>
      prev.map((i) => {
        if (i.nomi === item.nomi && i.miqdor > 1) {
          return { ...i, miqdor: i.miqdor - 1 };
        }
        return i;
      })
    );
  };
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      let newFormData = { ...prevState, [name]: value };
      let errors = { ...prevState.errors };

      if (name === "password" && value.length < 7) {
        errors.password = "Parol kamida 7 ta belgidan iborat bo‘lishi kerak!";
      } else {
        delete errors.password;
      }
      if (name === "confirmPassword" || name === "password") {
        if (newFormData.password !== newFormData.confirmPassword) {
          errors.confirmPassword = "Parollar mos kelmadi!";
        } else {
          delete errors.confirmPassword;
        }
      }

      if (name === "tugilganSana") {
        const year = new Date(value).getFullYear();
        if (year < 1930 || year > 2005) {
          errors.tugilganSana = "Yil 1930 va 2005 oralig‘ida bo‘lishi kerak!";
        } else {
          delete errors.tugilganSana;
        }
      }

      return { ...newFormData, errors };
    });
  };

  const signUp = (newUser) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.username === newUser.username);
    if (existingUser) {
      return { success: false, message: "Bu username allaqachon mavjud!" };
    }

    const cleanedUser = { ...newUser };
    delete cleanedUser.errors;

    users.push(cleanedUser);

    localStorage.setItem("users", JSON.stringify(users));


    return { success: true, message: "Ro‘yxatdan o‘tish muvaffaqiyatli!" };
  };




  const login = (username, password) => {
    console.log("🔑 Login uchun kiritilgan:", username, password);

    let usersData = localStorage.getItem("users");

    if (!usersData) {
      return { success: false, message: "Foydalanuvchilar ro‘yxati topilmadi!" };
    }

    const allUsers = JSON.parse(usersData);

    const foundUser = allUsers.find(user => user.username === username && user.password === password);

    if (foundUser) {
      localStorage.setItem("loginUser", JSON.stringify(foundUser));
      return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
    } else {
      return { success: false, message: "Username yoki parol noto‘g‘ri!" };
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loginUser");
    navigate("/login");
  };

  return (
    <SavatContext.Provider
      value={{
        savat,
        addToSavat,
        removeFromSavat,
        saralangan,
        toggleSaralangan,
        removeFromSaralangan,
        increment,
        decrement,
        formData,
        handleChange,
        login,
        logout,
        user,
        signUp,
        setUser,
        searchQuery,
        setSearchQuery,
        tanlanganMahsulot,
        setTanlanganMahsulot,
        Mahsulotlartoplami
      }}
    >
      {children}
    </SavatContext.Provider>
  );
};
export const useSavat = () => useContext(SavatContext);
