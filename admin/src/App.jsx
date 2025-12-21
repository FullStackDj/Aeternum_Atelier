import React, {useEffect} from 'react';
import Header from './component/Header.jsx';
import {Route, Routes} from 'react-router-dom';
import Login from './component/Login.jsx';
import Sidebar from './component/SIdebar.jsx';
import Add from './pages/Add.jsx';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const backend_url = import.meta.env.VITE_BACKEND_URL;
export const currency = '$'

const App = () => {

  const [token, setToken] = React.useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);


  return (
    <main>
      <ToastContainer/>
      {token === '' ? (
        <Login/>
      ) : (
        <div className='bg-primary text-[#404040]'>
          <Header/>
          <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-8 sm:mt-4'>
            <Sidebar token={token} setToken={setToken}/>
            <Routes>
              <Route path='/' element={<Add token={token}/>}/>
              <Route path='/list' element={<List token={token}/>}/>
              <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;