import React from 'react'
import "./../assets/css/products_tech.css"
import { FooterUpperSeaction } from '../components'
import hero_products from "./../assets/img/bg/hero_products.jpg";
import { Products_technology } from '../components/seaction/products_tech'
import BgSeaction from '../components/BgSeaction';

const Products_Technologies = () => {
  return <>
    <img className="bcground" src={hero_products} alt="" />
<div className='main-heading'>
<h1 className='heading'>Products & Technologies</h1> 
</div>
<div className="container mt-4">

<h1 className='text-center mt-4'>Reimagine Your Network.</h1>
<h1 className='text-center mt-2'>Reimagine Your Economics</h1>
<p className='text-center  para'>The RAN accounts for around 60% of CAPEX and 65% of OPEX in the cellular network TCO. Mobile operators need to maximize the value of their existing network assets before giving the green light to new investment. With its software-defined and cloud-native OpenRAN network architecture, and with the world’s largest OpenRAN ecosystem, Parallel Wireless is leading the Open movement by delivering substantial cost savings to mobile operators for building or maintaining both today’s 4G/3G/2G networks and tomorrow’s multi-vendor 5G networks. We strive to support our customers as they enable best-quality experiences to their end users and industries.</p>
<Products_technology/>
</div>
<FooterUpperSeaction/>
<BgSeaction/>
  </>
}

export default Products_Technologies