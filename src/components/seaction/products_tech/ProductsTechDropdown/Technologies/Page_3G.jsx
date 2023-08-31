import React from 'react'
import hero_3G from "./../../../../../assets/img/bg/hero_3G.jpg";
import RelatProductTech from '../../../solutions/DropdownSolutions/RelatProductTech';
import BgSeaction from '../../../../BgSeaction';

const Page_3G = () => {
  return <>
  <img className="bcground" src={hero_3G} alt="" />
<div className='main-heading'>
<h1 className='heading'>Outdoor 3G Wireless Solution</h1> 
</div>

<div className="container">

<p className='para'>Parallel Wireless’s innovative virtualized multi-technology OpenRAN solution supports 3G for outdoor deployments. It disaggregates hardware and software to make deployments easy and affordable to install, maintain and upgrade to any future technology. It automates radio and network optimization, provides QoS for voice and data while reducing deployment and maintenance TCO.</p>
<div className="row">
  <div className="col-md-6">
    <h2>Features and Capabilities</h2>
    <p className='para'>Key product components of our outdoor OpenRAN include:</p>
  </div>
  <div className="col-md-6"></div>
</div>
</div>
<BgSeaction/>
<RelatProductTech/>
  </>
}

export default Page_3G