import React from 'react'
import hero_products from "./../../../../../assets/img/bg/hero_products.jpg";
import "./../../../../../assets/css/products_tech.css"
import BgSeaction from '../../../../BgSeaction';
import { Link } from 'react-router-dom';

const Page_Technologies = () => {
  return <>
      <img className="bcground" src={hero_products} alt="" />
<div className='main-heading'>
<h1 className='heading'>Technologies</h1> 
</div>
<div className="container mt-4">

<h2 className='text-center mt-4'>Cloud-native 5G 4G 3G 2G Technologies for Low and High Density Coverage and Capacity Scenarios</h2>
<p className='para text-center'>Parallel Wireless created world’s only ALL G software-defined OpenRAN architecture to make delivery of wireless coverage or capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across three key domains – RAN, Orchestration, and Analytics – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world. The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor 5G networks today. Through open collaboration with OpenRAN ecosystem partners, we created world’s first and largest fully compliant OpenRAN ecosystem that delivers the next generation of wireless infrastructure to be much lower cost ensuring more equal access to 5G globally. Our customers include over 60 global mobile operators, as well as private and public industries and governments that use our software defined network portfolio to reimagine their networks’ economics.</p>
<div className="row mt-4 mb-4">
  <div className="col-md-6 p-4">
    <h2>5G</h2>
    <p className='para'>Parallel Wireless cloud-native OpenRAN approach enables any 5G migration option and is software upgradable to any future 3GPP releases delivering most cost-effective and advanced 5G capabilities.</p>
    <Link className='lern'>Learn More</Link>
  </div>
  <div className="col-md-6 ">
    <img src="https://www.parallelwireless.com/wp-content/uploads/5g-img.jpg" width={"90%"} alt="" />
  </div>
</div>
</div>
<hr />
<div className="container mt-4 mb-4">
  <h2 className='text-center'> Reimagine Your Network. Reimagine Your Economicss</h2>
  <p className='para text-center mb-4'>Parallel Wireless leads the innovation in wireless infrastructure with software-defined unified cloud native OpenRAN architecture with world’s largest Open RAN ecosystem delivering substantial cost savings to MNOs when building or maintaining today’s 4G 3G 2G and tomorrow’s multi-vendor 5G networks to enable quality experience to the end users and industries.</p>
  <div className="row">
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/4g-img.jpg" width={"96%"} alt="" />
    </div>
    <div className="col-md-6">
      <div className='main-tech-content'>
<h2>4G</h2>
<p className='para'>Expand your 4G networks, densify them or build new — with Parallel Wireless OpenRAN, you can do it all at much lower cost and on accelerated timeline while extending your investment for 5G.</p>
<Link className='lern'>Learn More</Link>
      </div>
    </div>

    <div className="col-md-6">
    <div className='main-tech-content'>
<h2>3G</h2>
<p className='para'>Expand your 4G networks, densify them or build new — with Parallel Wireless OpenRAN, you can do it all at much lower cost and on accelerated timeline while extending your investment for 5G.</p>
<Link className='lern'>Learn More</Link>
      </div>
    </div>
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/3g-img.jpg" width={"96%"} alt="" />
    </div>

    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/2g-img.jpg" width={"90%"} alt="" />
    </div>
    <div className="col-md-6">
    <div className='main-tech-content'>
<h2>2G</h2>
<p className='para'>Expand your 4G networks, densify them or build new — with Parallel Wireless OpenRAN, you can do it all at much lower cost and on accelerated timeline while extending your investment for 5G.</p>
<Link className='lern'>Learn More</Link>
      </div>
    </div>
    </div>
  </div>
{/* </div> */}
<BgSeaction/>
  </>
}

export default Page_Technologies