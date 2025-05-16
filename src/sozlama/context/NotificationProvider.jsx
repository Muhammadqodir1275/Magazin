import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, message, time }]);

    // 5 soniyadan keyin avtomatik o'chirish uchun
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

export const NotificationList = () => {
  const { notifications } = useNotification();
  return (
    <div className="notification-wrapper" style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}>
      {notifications.map(({ id, type, message, time }) => (
        <div key={id} className={`notification ${type}`} style={{ marginBottom: 10, padding: 10, borderRadius: 5, background: type === "success" ? "lightgreen" : "lightcoral" }}>
          <strong>{message}</strong> <br />
          <small>{time}</small>
        </div>
      ))}
    </div>
  );
};
