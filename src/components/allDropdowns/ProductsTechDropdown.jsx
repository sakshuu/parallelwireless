import React from 'react'
import { Link } from 'react-router-dom';

const ProductsTechDropdown = ({setProductsTechOpen, productsTechOpen}) => {
    const productsTechhandleToggle = () => {
        setProductsTechOpen(!productsTechOpen);
      };
  return <>
    <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={productsTechhandleToggle}
  >
    Products & Technologies
  </div>
  <div className={`dropdown-menu productsTech  ${productsTechOpen ? 'show' : ''}`}>
    <div className="container p-4">
<div className="row">
  <div className="col-md-2">
   <h5 className="b-text"> <Link className='text-deco' to="/products-technologies/page-technologies">Technologiess</Link></h5>
    <p><Link className='text-deco' to="/products-technologies/technologies/5G">5G</Link></p>
    <p><Link className='text-deco' to="/products-technologies/technologies/4G">4G</Link></p>
    <p><Link className='text-deco' to="/products-technologies/technologies/3G">3G</Link></p>
    <p><Link className='text-deco' to="/products-technologies/technologies/2G">2G</Link></p>
  </div>
  <div className="col-md-3">
    <h4 className="b-text">Products</h4>
    <h6 className='b-text'>ACCESS : OpenRAN</h6>
    <p>Software-defined Open</p>
    <p>vRAN</p>
    <p>5G OpenRAN</p>
  </div>
  <div className="col-md-2">
    <h6 className="b-text">Network Software</h6>
    <p>Interoperable</p>
    <p>Unified</p>
    <p>Cloud-native</p>
    <p>End-to-end</p>
    <p>Performance</p>
    <p>Multi-tenant and sharing</p>
    <p>Secure</p>
  </div>
  <div className="col-md-2">
    <h6 className="b-text">Network Intelligence</h6>
    <p>Analytics</p>
    <p>Real-Time ALL G SON</p>
    <p>Network Orchestrator</p>
  </div>
  <div className="col-md-3">
    <div className='drop-main'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VGft6mvNYOiHHZKGCv8myBvcHShLw3GDD-gvLiUH&s" width={"100%"} alt="" />
      <div className='drop-inside'>
      <h5 className="b-text text-inside">Visit our resources page to download collateral, watch customer testimonial, or get a spec sheet.</h5>
      <h6 className="b-text text-inside">RESOURCES</h6>
      </div>
    </div>
  </div>
    </div>
</div>
  </div>
  </>
}

export default ProductsTechDropdown