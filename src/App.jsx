import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Careers, Compuny, Customers, Home, Page404, Products_Technologies, Resources, Solutions } from './pages';
import {  MyFooter, MyNavbar} from './components';
import "./assets/css/index.css";
import { Private_LIT, Rural, Urban } from './components/seaction/solutions';

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
    {/* sub */}
    <Route path="/solutions/urben" element={<Urban/>}/>
    <Route path="/solutions/rural" element={<Rural/>}/>
    <Route path="/solutions/private" element={<Private_LIT/>}/>


    <Route path="*" element={<Page404/>}/>

  </Routes>
  <MyFooter/>
  </BrowserRouter>
  </>
}

export default App