import React from 'react'
import "./../../../../../assets/css/css_solutions/urban.css"
import "./../../../../../assets/css/css_solutions/solutions.css"
import hero_rural from "./../../../../../assets/img/bg/hero_rural.avif";
import BgSeaction from '../../../../BgSeaction';
import RelatProductTech from '../RelatProductTech';
import FooterUpperSeaction from '../../../../FooterUpperSeaction';
import { Link } from 'react-router-dom';

const Rural = () => {
  return <>
  <img className="bcground" src={hero_rural} alt="" />
<div className='main-heading'>
<h1 className='heading'> Rural Solutions</h1> 
</div>

  <div className="container">

  <p className='para text-center pro'>
  Enhanced mobile broadband will be the first commercial application of 5G and can help operators deliver coverage everywhere from rural to suburban to most dense urban locations. Parallel Wireless OpenRAN can support all those deployment scenarios at the lowest TCO and can be deployed on accelerated timeline.
  </p>
  <div className="row">
    <div className="col-md-6">
      <h2>Features and Capabilities</h2>
      <p className='para'>Parallel Wireless’s innovative cloud-native OpenRAN coverage solution enables coverage by lowering cost, simplifying installation, and increasing flexibility through disaggregation of hardware and software. The flexibility of our software platform enables deployment in urban or rural environments. To meet a variety of deployment scenarios, we have a large portfolio of OpenRAN hardware available from macrocells, to small cells, to Massive MIMOs, all orchestrated and managed by our OpenRAN and network software suite:</p>
      <Link className='lern'>Learn More</Link>
    </div>
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/coverage-img.jpg" width={"90%"} alt="" />
    </div>
    <h2 className='mt-4'>Deployment Options</h2>
    <p className='para'>Uncertainty in the coverage business case (from the demand side) in low-density areas, operational complexity (from the cost side) and competitive pressure in urban/high density markets results in MNOs struggling to find a coverage solution that can address both scenarios:</p>
    <ul>
  <li className='para'> <span className='b-text'>Coffee -</span> Proprietary interfaces and limited flexibility with legacy suppliers make it challenging for MNOs to maintain, expand, and upgrade their networks to meet future demands. With our Parallel Wireless Urban solution, MNOs can avoid vendor lock-in, scale and enable new innovative services seamlessly with cloud-native centralized tools such as Continuous Integration/Continuous Delivery (CI/CD), DevOps, Artificial Intelligence (AI) and Machine Learning (ML).</li>
  <li className='para'><span className='b-text'>Futureproof for 5G –s -</span> MNOs need to upgrade their networks to prepare for the explosive data demands such as Internet of Things (IoT), Industry 4.0, autonomous driving, and digital health. With our Urban solution MNOs can upgrade their networks to any G with a commercial-off-the-shelf (COTS) vBBU which is easy to install, has open interfaces and supports a broad ecosystem of vendors across 2G, 3G, 4G and 5G, preparing networks for the future.
Easy to install, modernize and expand networks – The costs to deploy and maintain networks and the lack of interoperability can be daunting as many operators are supporting 2G voice while migrating to 4G data and preparing for the greater bandwidth possibilities of 5G. Easily change and upgrade technologies to support emerging needs with our cloud-native software-based solution. </li>
  
</ul>  
  </div>
  </div>
  <FooterUpperSeaction/>
  <BgSeaction/>
  <RelatProductTech/>
  </>
}

export default Rural