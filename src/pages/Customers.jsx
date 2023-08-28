import React from 'react'
import  "./../assets/css/customers.css";
import  clientlogo from "./../assets/img/clientlogo.png";
import  etisalat_logo from "./../assets/img/etisalat_logo.jpg";
import  inland_logo from "./../assets/img/inland_logo.png";
// import  internetParaTodos from "./../assets/img/internetParaTodos.png";
import InternetParaTodos from "./../assets/img/InternetParaTodos.png";
import  MTN_logo from "./../assets/img/MTN_logo.jpg";
import  Optimera from "./../assets/img/Optimera.png";
import  optus_logo from "./../assets/img/optus_logo.png";
import  ruralfirst from "./../assets/img/ruralfirst.png";
import  smart from "./../assets/img/smart.png";
import  telefonica from "./../assets/img/telefonica.png";
import  vodacom from "./../assets/img/vodacom.png";
import  vodaphone_logo from "./../assets/img/vodaphone_logo.png";
import { Case_study } from '../components/seaction/customers';
import hero_customers from "./../assets/img/bg/hero_customers.jpg";

const Customers = () => {
  return <>
    
    <div >
      <img className="bcground" src={hero_customers} alt="" />
<div className='main-heading'>
<h1 className='heading'>Customers</h1> 
  </div>
</div>

<div className="container mt-4">
<h1 className='mt-4 text-center'>Helping Reimagine Global Cellular Networks</h1>
<p className='mt-4 para text-center'>Bringing together unified network software and OpenRAN hardware, we are the only US provider capable of delivering true end-to-end innovative solutions for 5G, 4G, 3G and 2G deployments globally, including complex mixed technology and multi-vendor scenarios at much lower cost. Parallel Wireless enabled the world’s largest Open RAN ecosystem and has been recognized by Vodafone and Telefonica as a best performing vendor.  Our customers include over 60 global mobile operators, as well as private and public industries and governments that use our software defined network portfolio to reimagine their networks. Our innovation has been recognized with 60+ industry awards.</p>
</div>

<div className='custem'>
<h2 className='text-center'>Open RAN Integration: Run With It</h2>
<button type="buttoleadern" class="btn mt-2 img-leader bc-btn">VIEW THE WHITE PAPER</button>
</div>

<div className="row iconCol">
  <div classNamsrce="col-md-6 gap-4">
    <img className='custom-icon' src={clientlogo} alt="" />
    <img className='custom-icon' src={etisalat_logo} alt="" />
    <img className='custom-icon' src={inland_logo} alt="" />
    <img className='custom-icon' src={InternetParaTodos} alt="" />
    <img className='custom-icon' src={MTN_logo} alt="" />
    <img className='custom-icon' src={Optimera} alt="" />
  </div>

  <div classNamsrce="col-md-6">
    <img className='custom-icon' src={optus_logo} alt="" />
    <img className='custom-icon' src={ruralfirst} alt="" />
    <img className='custom-icon' src={smart} alt="" />
    <img className='custom-icon' src={telefonica} alt="" />
    <img className='custom-icon' src={vodacom} alt="" />
    <img className='custom-icon' src={vodaphone_logo} alt="" />
  </div>
</div>
<Case_study/>
  </>
}

export default Customers