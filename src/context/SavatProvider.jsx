
// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SavatContext = createContext();
// export const SavatProvider = ({ children }) => {
//   const [savat, setSavat] = useState([]);
//   const [saralangan, setSaralangan] = useState([]);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   useEffect(() => {
//     const saqlanganSavat = JSON.parse(localStorage.getItem("savat"));
//     const saqlanganSaralangan = JSON.parse(localStorage.getItem("saralangan"));

//     if (saqlanganSavat) {
//       setSavat(saqlanganSavat);
//     }
//     if (saqlanganSaralangan) {
//       setSaralangan(saqlanganSaralangan);
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("savat", JSON.stringify(savat));
//   }, [savat]);
//   useEffect(() => {
//     localStorage.setItem("saralangan", JSON.stringify(saralangan));
//   }, [saralangan]);
//   const addToSavat = (item) => {
//     setSavat((prev) => {
//       const yangiSavat = [...prev];
//       const itemIndex = yangiSavat.findIndex((i) => i.nomi === item.nomi);

//       if (itemIndex !== -1) {
//         yangiSavat[itemIndex].miqdor += 1;
//       } else {
//         yangiSavat.push({ ...item, miqdor: 1 });
//       }

//       return yangiSavat;
//     });
//   };
//   const removeFromSavat = (item) => {
//     setSavat((prev) => prev.filter((i) => i.nomi !== item.nomi));
//   };
//   const removeFromSaralangan = (item) => {
//     setSaralangan((prev) => prev.filter((i) => i.nomi !== item.nomi));
//   };
//   const toggleSaralangan = (item) => {
//     setSaralangan((prev) => {
//       const mavjud = prev.some((i) => i.nomi === item.nomi);
//       return mavjud ? prev.filter((i) => i.nomi !== item.nomi) : [...prev, item];
//     });
//   };
//   const increment = (item) => {
//     setSavat((prev) =>
//       prev.map((i) => {
//         if (i.nomi === item.nomi && i.miqdor < 10) {
//           return { ...i, miqdor: i.miqdor + 1 };
//         }
//         return i;
//       })
//     );
//   };

//   const decrement = (item) => {
//     setSavat((prev) =>
//       prev.map((i) => {
//         if (i.nomi === item.nomi && i.miqdor > 1) {
//           return { ...i, miqdor: i.miqdor - 1 };
//         }
//         return i;
//       })
//     );
//   };
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("loginUser"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);


//   const handleChange = (event) => {
//     // 🔹 Input elementini olish
//     const target = event.target;

//     // 🔹 Input maydonining nomini olish
//     const inputName = target.name;

//     // 🔹 Input maydonining qiymatini olish
//     const inputValue = target.value;

//     // 🔹 Yangi obyekt yaratish va eski qiymatlarni qo'shish
//     let newFormData = {
//         username: formData.username,
//         password: formData.password,
//         email: formData.email,
//         age: formData.age
//     };

//     // 🔹 Input nomiga qarab qiymatni yangilash
//     if (inputName === "username") {
//         newFormData.username = inputValue;
//     } else if (inputName === "password") {
//         newFormData.password = inputValue;
//     } else if (inputName === "email") {
//         newFormData.email = inputValue;
//     } else if (inputName === "age") {
//         newFormData.age = inputValue;
//     }

//     // 🔹 Yangilangan obyektni state-ga saqlash
//     setFormData(newFormData);
// };


//   const signUp = (newUser) => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = users.find((u) => u.username === newUser.username);
//     if (existingUser) {
//       return { success: false, message: "Bu username allaqachon mavjud!" };
//     }
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     return { success: true, message: "Ro‘yxatdan o‘tish muvaffaqiyatli!" };
//   };
//   // const login = (username, password) => {
//   //   let users = JSON.parse(localStorage.getItem("users")) || [];
//   //   const foundUser = users.find(
//   //     (user) => user.username === username && user.parol === password
//   //   );

//   //   if (foundUser) {
//   //     setUser(foundUser);
//   //     localStorage.setItem("loginUser", JSON.stringify(foundUser));
//   //     return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
//   //   } else {
//   //     return { success: false, message: "Username yoki parol xato!" };
//   //   }
//   // };

//   // Chiqish funksiyasi
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("loginUser");
//     navigate("/login");
//   };
//   const login = (username, password) => {
//     if (username === password) {
//       const newUser = { username, rasm: "https://via.placeholder.com/50" };
//       setUser(newUser);
//       localStorage.setItem("loginUser", JSON.stringify(newUser));
//       return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
//     } else {
//       return { success: false, message: "Username yoki parol xato!" };
//     }
//   };

//   return (
//     <SavatContext.Provider
//       value={{
//         savat,
//         addToSavat,
//         removeFromSavat,
//         saralangan,
//         toggleSaralangan,
//         removeFromSaralangan,
//         increment,
//         decrement,
//         formData,
//         handleChange,
//         login,
//         logout,
//         user,
//         signUp,
//       }}
//     >
//       {children}
//     </SavatContext.Provider>
//   );
// };

// // Context dan foydalanish uchun hook
// export const useSavat = () => useContext(SavatContext);




































import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { log } from "three/tsl";
const SavatContext = createContext();
export const SavatProvider = ({ children }) => {
  const [savat, setSavat] = useState([]);
  const [saralangan, setSaralangan] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
      }}
    >
      {children}
    </SavatContext.Provider>
  );
};
export const useSavat = () => useContext(SavatContext);











// import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SavatContext = createContext();

// export const SavatProvider = ({ children }) => {
//   const [savat, setSavat] = useState([]);
//   const [saralangan, setSaralangan] = useState([]);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const saqlanganSavat = JSON.parse(localStorage.getItem("savat"));
//     const saqlanganSaralangan = JSON.parse(localStorage.getItem("saralangan"));
//     const saqlanganUser = JSON.parse(localStorage.getItem("loginUser"));

//     if (saqlanganSavat) {
//       setSavat(saqlanganSavat);
//     }
//     if (saqlanganSaralangan) {
//       setSaralangan(saqlanganSaralangan);
//     }
//     if (saqlanganUser) {
//       setUser(saqlanganUser);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("savat", JSON.stringify(savat));
//   }, [savat]);

//   useEffect(() => {
//     localStorage.setItem("saralangan", JSON.stringify(saralangan));
//   }, [saralangan]);

//   const addToSavat = (item) => {
//     const yangiSavat = savat.slice();
//     let mavjudIndex = -1;

//     for (let i = 0; i < yangiSavat.length; i++) {
//       if (yangiSavat[i].nomi === item.nomi) {
//         mavjudIndex = i;
//         break;
//       }
//     }

//     if (mavjudIndex !== -1) {
//       yangiSavat[mavjudIndex].miqdor += 1;
//     } else {
//       yangiSavat.push({ img: item.img, nomi: item.nomi, pul: item.pul, miqdor: 1 });
//     }

//     setSavat(yangiSavat);
//   };

//   const removeFromSavat = (item) => {
//     const yangiSavat = [];
//     for (let i = 0; i < savat.length; i++) {
//       if (savat[i].nomi !== item.nomi) {
//         yangiSavat.push(savat[i]);
//       }
//     }
//     setSavat(yangiSavat);
//   };

//   const toggleSaralangan = (item) => {
//     const yangiSaralangan = [];
//     let mavjud = false;

//     for (let i = 0; i < saralangan.length; i++) {
//       if (saralangan[i].nomi === item.nomi) {
//         mavjud = true;
//       } else {
//         yangiSaralangan.push(saralangan[i]);
//       }
//     }

//     if (!mavjud) {
//       yangiSaralangan.push({ img: item.img, nomi: item.nomi, pul: item.pul });
//     }

//     setSaralangan(yangiSaralangan);
//   };
//   const removeFromSaralangan = (item) => {
//     setSaralangan((prev) => prev.filter((i) => i.nomi !== item.nomi));
//   };
  
//   const increment = (item) => {
//     const yangiSavat = savat.map((i) => {
//       if (i.nomi === item.nomi && i.miqdor < 10) {
//         return { img: i.img, nomi: i.nomi, pul: i.pul, miqdor: i.miqdor + 1 };
//       }
//       return i;
//     });
//     setSavat(yangiSavat);
//   };

//   const decrement = (item) => {
//     const yangiSavat = savat.map((i) => {
//       if (i.nomi === item.nomi && i.miqdor > 1) {
//         return { img: i.img, nomi: i.nomi, pul: i.pul, miqdor: i.miqdor - 1 };
//       }
//       return i;
//     });
//     setSavat(yangiSavat);
//   };

//   const login = (username, password) => {
//     let usersData = JSON.parse(localStorage.getItem("users")) || [];
//     const foundUser = usersData.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (foundUser) {
//       localStorage.setItem("loginUser", JSON.stringify(foundUser));
//       setUser(foundUser);
//       return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
//     }
//     return { success: false, message: "Username yoki parol noto‘g‘ri!" };
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("loginUser");
//     navigate("/login");
//   };


//   return (
//     <SavatContext.Provider
//       value={{
//         savat,
//         addToSavat,
//         removeFromSavat,
//         saralangan,
//         toggleSaralangan,
//         increment,
//         decrement,
//         user,
//         login,
//         logout,
//         setUser,
//         removeFromSaralangan,
//       }}
//     >
//       {children}
//     </SavatContext.Provider>
//   );
// };

// export const useSavat = () => {
//   return React.useContext(SavatContext);
// };
