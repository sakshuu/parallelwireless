import React from 'react'
import { Link } from "react-router-dom";
import  "./../../../assets/css/customers.css";

const Case_study = () => {
  return <>
  <div className="container">
    <div className="row mb-4">
        <div className="col-md-6 case-main">
            <h1>Telefonica Case Study</h1>
            <p className='para'>Parallel Wireless Helps New Operator Mayutel to Build 3G/4G Open RAN Network in 3 Months Through Partnership with Telefonica.</p>
            <Link className="lern">Download Case Study</Link>
        </div>
        <div className="col-md-6">
            <img className='case-img' src="https://www.parallelwireless.com/wp-content/uploads/4g-img.jpg" alt="" />
        </div>
    </div>
  </div>

  <div className='main-mid'>
    <img className='main-case-img' src="https://images.unsplash.com/photo-1472577938094-84871b72ccac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="" />
    
    <div className="case-opti">
<div className="row row-gap">
  <div className="col-md-6">
    <h2>Why Parallel Wireless</h2>
  <ol className='mt-4'>
  <h5 className='num-case'> <li className='ol-case'></li> Why Parallel Wireless</h5>
 <h5 className='num-case'>  <li className='ol-case'></li>  Interoperable across All G </h5>
 <h5 className='num-case'>  <li className='ol-case'></li>Mature and end-to-end OpenRAN network solutions  </h5>
 <h5 className='num-case'>  <li className='ol-case' ></li>Unification and simplification of 5G 4G 3G 2G and Wi-Fi networks  </h5>
 <h5 className='num-case'>  <li className='ol-case'></li>Easy install with plug-n-play and automated maintenance </h5>
 <h5 className='num-case'>  <li className='ol-case'></li>NewRevenue and network sharing </h5>
 <h5 className='num-case'>  <li className='ol-case'></li>5G-native architecture </h5>
 <h5 className='num-case'>  <li className='ol-case'></li>Customer focused </h5>
</ol> 
  </div>
  <div className="col-md-6">
  <h1>Benefits</h1>
  <ol>
 <h5 className='num-case'> <li className='ol-case'></li> Lowest TCO </h5>
 <h5 className='num-case'> <li className='ol-case'></li> Low-density or high-density indoor and outdoor coverage and capacity </h5>
 <h5 className='num-case'> <li className='ol-case'></li> Faster deployment with less deployment CAPEX </h5>
 <h5 className='num-case'> <li className='ol-case'></li> Unification and simplification of 5G 4G 3G 2G and Wi-Fi networks </h5>
 <h5 className='num-case'> <li className='ol-case'></li> Easy install with plug-n-play and automated maintenance </h5>
 <h5 className='num-case'> <li className='ol-case'></li> NewRevenue and network sharing </h5>
 <h5 className='num-case'> <li className='ol-case'></li> 5G-native architecture </h5>
 <h5 className='num-case'> <li className='ol-case'></li> Customer focused </h5>
</ol> 
  </div>
  <button type="button" class="btn img-leader btn-cse bc-btn">Learn More</button>
</div>
    </div>
  </div>

  <div className="container">
    <div className="row mb-4 mt-4">
        <div className="col-md-6">
            <img className='case-img' src="https://www.parallelwireless.com/wp-content/uploads/4g-img.jpg" alt="" />
        </div>
        <div className="col-md-6 case-main">
            <h1>Vodafone Case Study</h1>
            <p className='para'>Learn how Parallel Wireless ALL G OpenRAN helped Vodafone modernize their network and reduce CAPEX and OPEX.</p>
            <Link className="lern">Download Case Study</Link>
        </div>
    </div>

<div className='iframe-center'>
    <iframe   width="740" height="390" src="https://www.youtube.com/embed/w0PK0VQvjko?si=8uJtRFdiS-Ngay2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
  </div>
  </>
}

export default Case_study