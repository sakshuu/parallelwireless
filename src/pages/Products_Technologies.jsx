import React from 'react'
import "./../assets/css/products_tech.css"
import { Products_technology } from '../components/seaction/products_tech'
import { FooterUpperSeaction } from '../components'

const Products_Technologies = () => {
  return <>
  <div className="bcground">
<div className='main-heading'>
<h1 className='heading'>Products & Technologies</h1> 
  </div>
</div>
<div className="container mt-4">

<h1 className='text-center mt-4'>Reimagine Your Network.</h1>
<h1 className='text-center mt-2'>Reimagine Your Economics</h1>
<p className='text-center  para'>The RAN accounts for around 60% of CAPEX and 65% of OPEX in the cellular network TCO. Mobile operators need to maximize the value of their existing network assets before giving the green light to new investment. With its software-defined and cloud-native OpenRAN network architecture, and with the world’s largest OpenRAN ecosystem, Parallel Wireless is leading the Open movement by delivering substantial cost savings to mobile operators for building or maintaining both today’s 4G/3G/2G networks and tomorrow’s multi-vendor 5G networks. We strive to support our customers as they enable best-quality experiences to their end users and industries.</p>
<Products_technology/>
</div>
<FooterUpperSeaction/>
<div className='img-mid'>
  <img src="https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM=" className='footer-mid-img' alt="" />
  <div className='mid-content'>
    <h1>Vodafone Case Study</h1>
    <p className='mt-4'>Learn how the Parallel Wireless ALL G OpenRAN network solution helped Vodafone modernize their network and reduce CAPEX and OPEX.</p>
    <button type="button" class="btn bc-btn">Learn more <i class="bi bi-cloud-arrow-down-fill"></i></button>
  </div>
</div>
  </>
}

export default Products_Technologies