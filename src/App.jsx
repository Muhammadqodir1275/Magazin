import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Saralangan from './saralangan';
import Nav from './Nav';
import Savat from './savat';
import Login from './Login';
import Signup from './signup';
import UserProfile from './UserProfile';
import Buyurtmalar from './buyurtmalar';
import ShaxsiyKabinet from './ShaxsiyKabinet ';
import Sozlamalar from './Sozlamalar';
import Bildirishnomalar from './bildirishnoma';
import NotFound from './NotFound';
import Page from './Page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path='/savat' element={<Savat />} />
        <Route path='/saralangan' element={<Saralangan />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/buyurtmalar' element={<Buyurtmalar />} />
        <Route path='/ShaxsiyKabinet' element={<ShaxsiyKabinet />} />
        <Route path='/Sozlamalar' element={<Sozlamalar />} />
        <Route path='/Bildirishnomalar' element={<Bildirishnomalar />} />
        <Route path='/page' element={<Page/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
