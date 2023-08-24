import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers, Home, Page404 } from './pages';
import {  MyFooter, MyNavbar, Solutions } from './components';
import "./assets/css/index.css";

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/solutions" element={<Solutions/>}/>
    

    <Route path="/customers" element={<Customers/>}/>
    <Route path="*" element={<Page404/>}/>
  </Routes>
  <MyFooter/>
  </BrowserRouter>
  </>
}

export default App