import React from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
  return <>
    
            <Link to="/customers" className='nav-link'>
            <div className='img-carousel'>
                <img src="https://www.parallelwireless.com/wp-content/uploads/products-hero-1-1600x500.jpg" height={"490px"} className='img-car' alt="" />
            </div>
                <div className='main-carousel'>
    <div className='heading'>Products & Technologies</div>
           </div>
            </Link>

  </>
}

export default Customers