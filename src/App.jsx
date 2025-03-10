import React from 'react'

import Favsec from './Components/Favsec/Favsec';
import Home from './Components/Home/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favsec" element={<Favsec/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
