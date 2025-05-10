import React, { useEffect } from 'react';
import { Routes, Route,} from 'react-router-dom';
import Saralangan from './page/saralangan';
import Nav from './companent/Nav';
import Savat from './page/savat';
import Login from './sozlama/Login';
import Signup from './sozlama/signup';
import UserProfile from './sozlama/UserProfile';
import Buyurtmalar from './sozlama/buyurtmalar';
import ShaxsiyKabinet from './sozlama/ShaxsiyKabinet ';
import Sozlamalar from './sozlama/Sozlamalar';
import Bildirishnomalar from './sozlama/bildirishnoma';
import NotFound from './page/NotFound';
import Page from './page/Page'
import { setError, setLoading } from './store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auth);

  console.log(isLoading, isError);

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setError(false)); 
    }, 2000);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="line">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    if (isError) {
      return <div className="error">❌ Xatolik yuz berdi! Qayta urining...</div>;
    }
    
  }
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
        <Route path='/page/:id' element={<Page/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
