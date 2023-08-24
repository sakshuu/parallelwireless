import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Careers, Compuny, Customers, Home, Page404, Products_Technologies, Resources, Solutions } from './pages';
import {  MyFooter, MyNavbar} from './components';
import "./assets/css/index.css";

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/solutions" element={<Solutions/>}/>
    <Route path="/products-technologies" element={<Products_Technologies/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/compuny" element={<Compuny/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="*" element={<Page404/>}/>
  </Routes>
  <MyFooter/>
  </BrowserRouter>
  </>
}

export default App