import React from 'react'
import "./../../../../../assets/css/css_solutions/urban.css"
import "./../../../../../assets/css/css_solutions/solutions.css"
import hero_private from "./../../../../../assets/img/bg/hero_private.avif";
import BgSeaction from '../../../../BgSeaction';
import RelatProductTech from '../RelatProductTech';
import { Link } from 'react-router-dom';


const Private_LIT = () => {
  return <>
    <img className="bcground" src={hero_private} alt="" />
<div className='main-heading'>
<h1 className='heading'> Private LIT Solutions</h1> 
</div>
<div className="container m-4">
  <p className='para text-center pro'>Parallel Wireless Private LTE solution provides global mobile operators with a new revenue generating opportunity for private and public enterprises in search to replace their legacy, hardware-centric networks with cloud-native, easy to deploy and maintain 4G/LTE solution. Parallel Wireless Private LTE network solution provides secure and reliable connectivity that covers every inch of operations, for humans and machines (IoT) and software-upgradable to 5G. Applicable for all industries, it provides the secure, reliable, flexible and cost-effective wireless connectivity that business- and mission-critical applications demand.</p>
  <div className="row">
    <div className="col-md-6">
      <h3>Features and Capabilities</h3>
      <p className='para'>Parallel Wireless Private LTE is a converged, service-aware, mission-critical end-to-end architecture to deliver autonomy, efficiency and staff safety. Components include:</p>
      <ul>
  <li className='para'>A complete end-to-end LTE wireless broadband network — radio access (i.e. vessel, rig, platform, indoor, M2M),
</li>
<li className='para'>Backhaul for transport, core, devices and management</li>
</ul>  
<p className='para'>The components leverage the most advanced radio access technologies, including small cells and macro cells for maximum coverage and capacity to reach remote systems, vessels and enable safety for personnel.</p>
<p className='para'>A common communications management system for the radio access network, backhaul and core along with lifecycle device management simplifies and reduces operating expenses while being interoperable with existing infrastructure.</p>
<button className='btn bc-btn '>VIEW FULL INFOGRAPHIC</button>
<p>
<Link className='lern'>Learn More</Link>
</p>
    </div>
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/lte-for-mining-preview-585x415.jpg" width={"90%"} alt="" />
    </div>
  </div>
  <h3>Deployment Options</h3>
  <p className='para'>The same solution can be deployed in both outdoor (fixed and in-vehicle) and indoor scenarios for specialized enterprise use cases:</p>
  <ul>
  <li className='para'>Manufacturing and warehouses: Private LTE puts a manufacturing site’s network on a different frequency so robotic and IoT devices don’t have to compete for coverage. With priority and pre-emption, Parallel Wireless solution also can provide a higher quality of service for particular devices or voice traffic.
</li>
<li className='para'>Mining</li>
<li className='para'>Oil and Gas: Wi-Fi isn’t a robust or secure option to meet network needs, yet provisioning wires in remote locations or moving boats and motherships is challenging. With Parallel Wireless Private LTE as the primary WAN and satellite as the backhaul, the oil and gas industries have a secure LTE network that can keep everything and everyone connected, regardless of location. SON will assist with plug-n-play configuration and on-going hands free optimization while providing seamless mobility between boats and other moving vehicles.
</li>
<li className='para'>Campuses: Colleges, financial institutes and hospitals</li>
<p className='para'>The deployments are flexible: the system can be deployed locally or in the cloud.</p>
<p className='para'>The following services/features are provided by this solution:</p>
<li className='para'>Enables a variety of voice options (VoLTE, VoWiFi)</li>
<li className='para'>Interops with existing LMR/PMR or Wi-Fi networks</li>
<li className='para'>PTT (Push To Talk) that can integrate with DMR voice channels</li>
<li className='para'>Staff can now carry an LTE handset rather than a legacy DMR handset</li>
<li className='para'>Web browsing</li>
<li className='para'>Multimedia streaming and sharing (video, picture, text)</li>
<li className='para'>In case of link failure to the cellular operator, the LTE circle will remain and provides all the above services locally</li>
<li className='para'>In case of emergency (such as backhaul loss, team trapped, etc.) PTT is available</li>
<li className='para'>Easily movable/portable above ground towers when blasting; easy to re-deploy</li>

</ul>  
</div>
<BgSeaction/>
  <RelatProductTech/>
  </>
}

export default Private_LIT