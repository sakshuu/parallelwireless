import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import { Careers, Compuny, Customers, Home, Page404, Products_Technologies, Resources, Solutions } from './pages';
import {  MyFooter, MyNavbar} from './components';
import { Private_LIT, Rural, Urban } from './components/seaction/solutions';
import { Page_2G, Page_3G, Page_4G, Page_5G, Page_Technologies } from './components/seaction/products_tech';

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/solutions" element={<Solutions/>}/>
    {/* sub */}
    <Route path="/solutions/urben" element={<Urban/>}/>
    <Route path="/solutions/rural" element={<Rural/>}/>
    <Route path="/solutions/private" element={<Private_LIT/>}/>

    <Route path="/products-technologies" element={<Products_Technologies/>}/>
    {/* sub */}
    <Route path="/products-technologies/page-technologies" element={<Page_Technologies/>}/>
    <Route path="/products-technologies/technologies/2G" element={<Page_2G/>}/>
    <Route path="/products-technologies/technologies/3G" element={<Page_3G/>}/>
    <Route path="/products-technologies/technologies/4G" element={<Page_4G/>}/>
    <Route path="/products-technologies/technologies/5G" element={<Page_5G/>}/>

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