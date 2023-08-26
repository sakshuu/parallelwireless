import React from 'react'
import { Link } from 'react-router-dom'

const Products_technology = () => {

  return <>
    <div className="row mt-4">

        <div className="col-md-6 mt-4 mb-4">
            <h3>Products</h3>
            <p className='para'>
Our unified, cloud-native, software-defined product portfolio spans across RAN, transport, Core, and Analytics to help reduce the cost and deployment complexity of today’s and tomorrow’s networks for consumers and industries.</p>
            <Link className='lern'>Learn more</Link>
        </div>
        <div className="col-md-6 mt-4  mb-4">
            <img src="https://www.parallelwireless.com/wp-content/uploads/products-img.jpg" alt="" className='proTech-img' />
        </div>
        <div className="col-md-6 mt-4 mb-4">
            <img src="https://www.parallelwireless.com/wp-content/uploads/open-ran.jpg" alt="" className='proTech-img' />
        </div>
        <div className="col-md-6 mt-4 mb-4">
            <h3>Technologies</h3>
            <p className='para'>
Parallel Wireless leads the innovation in wireless infrastructure, with software-defined unified cloud-native OpenRAN network solutions. We provide the world’s largest OpenRAN ecosystem, delivering substantial cost savings to mobile operators as they build or maintain today’s 4G/3G/2G and tomorrow’s multi-vendor 5G networks to enable quality experience to their end users.</p>
            <Link className='lern'>Learn more</Link>
        </div>
    </div>
  </>
}

export default Products_technology