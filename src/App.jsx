import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './cart';
import Nav from './nav';
import Savat from './savat';
import Login from './login';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/savat' element ={<Savat/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </>
  );
};

export default App;
