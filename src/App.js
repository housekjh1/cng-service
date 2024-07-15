import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Join from './components/Join';
import Jmt_Home from './components/Jmt_Home';

function App() {
  return (
    <div className='bg-gradient-to-tl from-emerald-200 from-10% via-green-200 via-50% to-white to-100% h-screen w-screen overflow-hidden pt-10 pl-20 pr-20'>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/jmt' element={<Jmt_Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
