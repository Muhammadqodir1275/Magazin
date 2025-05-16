// import React, { createContext, useState, useContext, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
// import data from "../companent/data/data";
// import { useNotification } from "../sozlama/context/NotificationProvider";
// const SavatContext = createContext();
// export const SavatProvider = ({ children }) => {
//   const { addNotification } = useNotification();
//   const [savat, setSavat] = useState([]);
//   const [saralangan, setSaralangan] = useState([]);
//   const [tanlanganMahsulot, setTanlanganMahsulot] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [Mahsulotlartoplami, setMahsulotlartoplami] = useState([])
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
//         toast.success("Bu mahsulot allaqachon bor");
//       } else {
//         yangiSavat.push({ ...item, miqdor: 1 });
//         toast.success("Mahsulot savatga qo‘shildi! 🎉");
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
//     const { name, value } = event.target;

//     setFormData((prevState) => {
//       let newFormData = { ...prevState, [name]: value };
//       let errors = { ...prevState.errors };

//       if (name === "password" && value.length < 7) {
//         errors.password = "Parol kamida 7 ta belgidan iborat bo‘lishi kerak!";
//       } else {
//         delete errors.password;
//       }
//       if (name === "confirmPassword" || name === "password") {
//         if (newFormData.password !== newFormData.confirmPassword) {
//           errors.confirmPassword = "Parollar mos kelmadi!";
//         } else {
//           delete errors.confirmPassword;
//         }
//       }

//       if (name === "tugilganSana") {
//         const year = new Date(value).getFullYear();
//         if (year < 1930 || year > 2005) {
//           errors.tugilganSana = "Yil 1930 va 2005 oralig‘ida bo‘lishi kerak!";
//         } else {
//           delete errors.tugilganSana;
//         }
//       }

//       return { ...newFormData, errors };
//     });
//   };

//   const signUp = (newUser) => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     const existingUser = users.find((u) => u.username === newUser.username);
//     if (existingUser) {
//       return { success: false, message: "Bu username allaqachon mavjud!" };
//     }

//     const cleanedUser = { ...newUser };
//     delete cleanedUser.errors;

//     users.push(cleanedUser);

//     localStorage.setItem("users", JSON.stringify(users));


//     return { success: true, message: "Ro‘yxatdan o‘tish muvaffaqiyatli!" };
//   };
//   const login = (username, password) => {

//     let usersData = localStorage.getItem("users");

//     if (!usersData) {
//       return { success: false, message: "Foydalanuvchilar ro‘yxati topilmadi!" };
//     }

//     const allUsers = JSON.parse(usersData);

//     const foundUser = allUsers.find(user => user.username === username && user.password === password);

//     if (foundUser) {
//       localStorage.setItem("loginUser", JSON.stringify(foundUser));
//       setUser(foundUser);
//       return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
//     } else {
//       return { success: false, message: "Username yoki parol noto‘g‘ri!" };
//     }
//   };
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("loginUser");
//     navigate("/login");
//   };
//   const sortedData = data
//     .sort((a, b) => b.price - a.price)
//     .slice(0, 10);
//   const remainingData = data.filter(item => !sortedData.some(sortedItem => sortedItem.id === item.id))

  
  


//   const rasmiylashtirish = () => {
//     if (savat.length === 0) {
//       alert("Savat bo‘sh, mahsulot yo‘q");
//       return;
//     }
//     const yangiMahsulotlar = savat.map(item => ({
//       id: item.id,
//       nomi: item.nomi,
//       miqdor: item.miqdor,
//       narx: item.pul,
//       img: item.img,
//       umumiyNarx: item.pul * item.miqdor,
//     }));
    
    
    
    

//     localStorage.setItem("buyurtmalar", JSON.stringify(yangiMahsulotlar));
//     toast.success("Buyurtma muvaffaqiyatli rasmiylashtirildi!");


//     const now = new Date();
//     const vaqt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const sana = now.toLocaleDateString("uz-UZ", { day: '2-digit', month: 'long' });

//     setTimeout(() => {
//       const now = new Date();
//       const vaqt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//       const sana = now.toLocaleDateString("uz-UZ", { day: '2-digit', month: 'long' });
    
//       addNotification("success", `Buyurtmangiz qabul qilindi! (${vaqt})`);
    
//       const newNotice = {
//         title: "📦 Buyurtma holati",
//         message: "Buyurtmangiz 1-2 ish kuni ichida yetkaziladi.",
//         time: `${vaqt} — ${sana}`
//       };
    
//       const oldNotices = JSON.parse(localStorage.getItem("bildirishnomalar")) || [];
//       const updated = [newNotice, ...oldNotices];
//       localStorage.setItem("bildirishnomalar", JSON.stringify(updated));
//     }, 4000);

//     setSavat([]);
//     setSelectedItems([]);
//     // navigate("/Bildirishnomalar");
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
//         setUser,
//         searchQuery,
//         setSearchQuery,
//         tanlanganMahsulot,
//         setTanlanganMahsulot,
//         Mahsulotlartoplami,
//         sortedData,
//         remainingData,
//         rasmiylashtirish,
//       }}
//     >
//       {children}
//     </SavatContext.Provider>
//   );
// };

// export const useSavat = () => useContext(SavatContext);



























import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import data from "../companent/data/data";
import { useNotification } from "../sozlama/context/NotificationProvider";

const SavatContext = createContext();

export const SavatProvider = ({ children }) => {
  const { addNotification } = useNotification();
  const [savat, setSavat] = useState([]);
  const [saralangan, setSaralangan] = useState([]);
  const [tanlanganMahsulot, setTanlanganMahsulot] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [Mahsulotlartoplami, setMahsulotlartoplami] = useState([]);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saqlanganSavat = JSON.parse(localStorage.getItem("savat"));
    const saqlanganSaralangan = JSON.parse(localStorage.getItem("saralangan"));
    if (saqlanganSavat) setSavat(saqlanganSavat);
    if (saqlanganSaralangan) setSaralangan(saqlanganSaralangan);
  }, []);

  useEffect(() => {
    localStorage.setItem("savat", JSON.stringify(savat));
  }, [savat]);

  useEffect(() => {
    localStorage.setItem("saralangan", JSON.stringify(saralangan));
  }, [saralangan]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  const addToSavat = (item) => {
    setSavat(function (prev) {
      const yangiSavat = prev.slice();
      const itemIndex = yangiSavat.findIndex((i) => i.nomi === item.nomi);
      if (itemIndex !== -1) {
        yangiSavat[itemIndex].miqdor = yangiSavat[itemIndex].miqdor + 1;
        toast.success("Bu mahsulot allaqachon bor");
      } else {
        const yangiItem = Object.assign({}, item);
        yangiItem.miqdor = 1;
        yangiSavat.push(yangiItem);
        toast.success("Mahsulot savatga qo‘shildi! 🎉");
      }
      return yangiSavat;
    });
  };

  const removeFromSavat = (item) => {
    setSavat(function (prev) {
      return prev.filter((i) => i.nomi !== item.nomi);
    });
  };

  const removeFromSaralangan = (item) => {
    setSaralangan(function (prev) {
      return prev.filter((i) => i.nomi !== item.nomi);
    });
  };

  const toggleSaralangan = (item) => {
    setSaralangan(function (prev) {
      const mavjud = prev.some((i) => i.nomi === item.nomi);
      if (mavjud) {
        return prev.filter((i) => i.nomi !== item.nomi);
      } else {
        const yangiItem = Object.assign({}, item);
        const yangiList = prev.slice();
        yangiList.push(yangiItem);
        return yangiList;
      }
    });
  };

  const increment = (item) => {
    setSavat(function (prev) {
      return prev.map(function (i) {
        if (i.nomi === item.nomi && i.miqdor < 10) {
          const yangiItem = Object.assign({}, i);
          yangiItem.miqdor = yangiItem.miqdor + 1;
          return yangiItem;
        }
        return i;
      });
    });
  };

  const decrement = (item) => {
    setSavat(function (prev) {
      return prev.map(function (i) {
        if (i.nomi === item.nomi && i.miqdor > 1) {
          const yangiItem = Object.assign({}, i);
          yangiItem.miqdor = yangiItem.miqdor - 1;
          return yangiItem;
        }
        return i;
      });
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(function (prevState) {
      const newFormData = Object.assign({}, prevState);
      newFormData[name] = value;
      const errors = newFormData.errors || {};

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

      newFormData.errors = errors;
      return newFormData;
    });
  };

  const signUp = (newUser) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const mavjud = users.find((u) => u.username === newUser.username);
    if (mavjud) {
      return { success: false, message: "Bu username allaqachon mavjud!" };
    }

    const cleanedUser = Object.assign({}, newUser);
    delete cleanedUser.errors;
    users.push(cleanedUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true, message: "Ro‘yxatdan o‘tish muvaffaqiyatli!" };
  };

  const login = (username, password) => {
    let usersData = localStorage.getItem("users");
    if (!usersData) {
      return { success: false, message: "Foydalanuvchilar ro‘yxati topilmadi!" };
    }

    const allUsers = JSON.parse(usersData);
    const foundUser = allUsers.find((u) => u.username === username && u.password === password);

    if (foundUser) {
      localStorage.setItem("loginUser", JSON.stringify(foundUser));
      setUser(foundUser);
      return { success: true, message: "Tizimga muvaffaqiyatli kirdingiz!" };
    }

    return { success: false, message: "Username yoki parol noto‘g‘ri!" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loginUser");
    navigate("/login");
  };

  const sortedData = data.slice().sort(function (a, b) {
    return b.price - a.price;
  }).slice(0, 10);

  const remainingData = data.filter(function (item) {
    return !sortedData.some(function (sortedItem) {
      return sortedItem.id === item.id;
    });
  });

  const rasmiylashtirish = () => {
    if (savat.length === 0) {
      alert("Savat bo‘sh, mahsulot yo‘q");
      return;
    }

    const yangiMahsulotlar = savat.map(function (item) {
      return {
        id: item.id,
        nomi: item.nomi,
        miqdor: item.miqdor,
        narx: item.pul,
        img: item.img,
        umumiyNarx: item.pul * item.miqdor,
      };
    });

    localStorage.setItem("buyurtmalar", JSON.stringify(yangiMahsulotlar));
    toast.success("Buyurtma muvaffaqiyatli rasmiylashtirildi!");

    const now = new Date();
    const vaqt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sana = now.toLocaleDateString("uz-UZ", { day: '2-digit', month: 'long' });

    setTimeout(function () {
      const now = new Date();
      const vaqt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const sana = now.toLocaleDateString("uz-UZ", { day: '2-digit', month: 'long' });

      addNotification("success", "Buyurtmangiz qabul qilindi! (" + vaqt + ")");

      const newNotice = {
        title: "📦 Buyurtma holati",
        message: "Buyurtmangiz 1-2 ish kuni ichida yetkaziladi.",
        time: vaqt + " — " + sana
      };

      const oldNotices = JSON.parse(localStorage.getItem("bildirishnomalar")) || [];
      oldNotices.unshift(newNotice);
      localStorage.setItem("bildirishnomalar", JSON.stringify(oldNotices));
    }, 4000);

    setSavat([]);
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
        Mahsulotlartoplami,
        sortedData,
        remainingData,
        rasmiylashtirish,
      }}
    >
      {children}
    </SavatContext.Provider>
  );
};

export const useSavat = () => useContext(SavatContext);
