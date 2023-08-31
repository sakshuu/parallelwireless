import React from 'react'
import hero_4G from "./../../../../../assets/img/bg/hero_4G.avif";
import { Link  } from "react-router-dom";
import RelatProductTech from '../../../solutions/DropdownSolutions/RelatProductTech';

const Page_4G = () => {
  return  <>
  <img className="bcground" src={hero_4G} alt="" />
<div className='main-heading'>
<h1 className='heading'>4G LIE</h1> 
</div>
<div className="container">
  <p className='para'>Parallel Wireless’s fully virtualized, software-based unified 2G/3G/4G/ 5G architecture allows operators to easily deploy, manage, scale, and future-proof their  4G/LTE networks or cost-effectively migrate their existing networks from 2G/3G to 4G while providing the lowest TCO by making the networks self- configuring, self-optimizing, and 5G-ready.</p>

  <div className="row">
    <div className="col-md-6">
      <h2>Features and Capabilities</h2>
      <p>Parallel Wireless’s solution is comprised of two main components to provide LTE based functionality. The OpenRAN RRH hardware from a variety of ecosystem partners. A COTS vBBU can provide shared capacity or enable Carrier Aggregation (CA) at a much lower cost. OpenRAN Controller software suite consolidates all necessary functionalities to build, expand or densify the 4G RAN (i.e. X2-gateway, small cell gateway, and security gateway) to build new or expand/ densify current 4G networks.</p>
      <p className='para'>Parallel Wireless’s Automation and Orchestration software module provides SON functionality to enable self-configuration and self-optimization during deployments, resulting in quick and easy rollouts. Interference mitigation by OpenRAN Software simplifies network expansions to make them easy to scale. OpenRAN and network is software-upgradable, removing the cost and complexity of transitioning the networks to 5G.</p>
      <Link className="lern">Learn More</Link>
    </div>
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/technologies4g-768x432.png" width={"97%"} alt="" style={{marginTop:"18%"}} />
    </div>
    <h3>DEPLOYMENT OPTIONS</h3>
    <p className='para'>Parallel Wireless’s solution is ideally suited for:</p>
    <ul>
  <li className='para'> <span className='b-text'>Coffee -</span> Proprietary interfaces and limited flexibility with legacy suppliers make it challenging for MNOs to maintain, expand, and upgrade their networks to meet future demands. With our Parallel Wireless Urban solution, MNOs can avoid vendor lock-in, scale and enable new innovative services seamlessly with cloud-native centralized tools such as Continuous Integration/Continuous Delivery (CI/CD), DevOps, Artificial Intelligence (AI) and Machine Learning (ML).</li>
  <li className='para'><span className='b-text'>Futureproof for 5G –s -</span> MNOs need to upgrade their networks to prepare for the explosive data demands such as Internet of Things (IoT), Industry 4.0, autonomous driving, and digital health. With our Urban solution MNOs can upgrade their networks to any G with a commercial-off-the-shelf (COTS) vBBU which is easy to install, has open interfaces and supports a broad ecosystem of vendors across 2G, 3G, 4G and 5G, preparing networks for the future.
Easy to install, modernize and expand networks – The costs to deploy and maintain networks and the lack of interoperability can be daunting as many operators are supporting 2G voice while migrating to 4G data and preparing for the greater bandwidth possibilities of 5G. Easily change and upgrade technologies to support emerging needs with our cloud-native software-based solution. </li>
</ul>  
  </div>
  <RelatProductTech/>
</div>
  </>
}

export default Page_4G