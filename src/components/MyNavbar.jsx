import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/mynavbar.css";

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

// solutions deopdown
  const [solutionsOpen, setSolutionsOpen] = useState(false)
    const solutionshandleToggle = () => {
    setSolutionsOpen(!solutionsOpen);
  };
  const solutionshandleMouseEnter = () => {
    setSolutionsOpen(true);
  };
  const solutionshandleMouseLeave = () => {
    setSolutionsOpen(false);
  };

// products tech
const [productsTechOpen, setProductsTechOpen] = useState(false)
const productsTechhandleToggle = () => {
    setProductsTechOpen(!productsTechOpen);
  };
  const productsTechhandleMouseEnter = () => {
    setProductsTechOpen(true);
  };
  const productsTechhandleMouseLeave = () => {
    setProductsTechOpen(false);
  };

  // compuny
  const [compunyOpen, setCompunyOpen] = useState(false)
  const compunyhandleToggle = () => {
    setCompunyOpen(!compunyOpen);
  };
  const compunyhandleMouseEnter = () => {
    setCompunyOpen(true);
  };
  const compunyhandleMouseLeave = () => {
    setCompunyOpen(false);
  };

  // resources
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const resourceshandleToggle = () => {
    setResourcesOpen(!resourcesOpen);
  };
  const resourceshandleMouseEnter = () => {
    setResourcesOpen(true);
  };
  const resourceshandleMouseLeave = () => {
    setResourcesOpen(false);
  };


  return <>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid mx-4">
      <Link class="navbar-brand" to="/">
        <img src="https://www.parallelwireless.com/wp-content/uploads/parallel_wireless.svg" width={"70%"} className="mr-4" alt="logo" />
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="main-nav navbar-nav main-nav align-items-center">
          {/* <Link  class="a nav-link" to="/solutions">Solutions</Link> */}
          <Link to="/solutions" className="a dropdown nav-link" onMouseEnter={solutionshandleMouseEnter} onMouseLeave={solutionshandleMouseLeave}>
  <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={solutionshandleToggle}
  >
    Solutions
  </div>
  <ul className={`dropdown-menu productsTech-main ${solutionsOpen ? 'show' : ''}`}>
    <li><a className="dropdown-item" href="#">Urben</a></li>
    <li><a className="dropdown-item" href="#">Rural</a></li>
    <li><a className="dropdown-item" href="#">Private LIT</a></li>
  </ul>
</Link>
          {/* <Link  class="a nav-link" to="/products-technologies">Products & Technologies</Link> */}

          <Link to="/products-technologies" className="a dropdown nav-link" onMouseEnter={productsTechhandleMouseEnter} onMouseLeave={productsTechhandleMouseLeave}>
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
    <h4 className="b-text">Technologies</h4>
    <p>5G</p>
    <p>4G</p>
    <p>3G</p>
    <p>2G</p>
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
</Link>

          <Link  class="a nav-link" to="/customers">Customers</Link>

          {/* <Link  class="a nav-link" to="/compuny">Compuny</Link> */}

          <Link to="/compuny" className="a dropdown nav-link" onMouseEnter={compunyhandleMouseEnter} onMouseLeave={compunyhandleMouseLeave}>
  <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={compunyhandleToggle}
  >
    Compuny
  </div>
  <ul className={`dropdown-menu  ${compunyOpen ? 'show' : ''}`}>
    <li><a className="dropdown-item" href="#">Who We Are</a></li>
    <li><a className="dropdown-item" href="#">News</a></li>
    <li><a className="dropdown-item" href="#">Events</a></li>
    <li><a className="dropdown-item" href="#">Leadership</a></li>
    <li><a className="dropdown-item" href="#">Awards</a></li>
    <li><a className="dropdown-item" href="#">Contact</a></li>
    <li><a className="dropdown-item" href="#">Partners</a></li>
    <li><a className="dropdown-item" href="#"></a></li>
  </ul>
</Link>
          

          <Link  class="a nav-link" to="/careers">Careers</Link>
          {/* <Link  class="a nav-link" to="/resources">Resources</Link> */}
          <Link to="/resources" className="a dropdown nav-link" onMouseEnter={resourceshandleMouseEnter} onMouseLeave={resourceshandleMouseLeave}>
  <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={resourceshandleToggle}
  >
    Resources
  </div>
  <ul className={`dropdown-menu  ${resourcesOpen ? 'show' : ''}`}>
    <li><a className="dropdown-item" href="#">White Papers</a></li>
    <li><a className="dropdown-item" href="#">Solution Overviews</a></li>
    <li><a className="dropdown-item" href="#">Videos</a></li>
    <li><a className="dropdown-item" href="#">Blogs</a></li>
    <li><a className="dropdown-item" href="#">Case Studies</a></li>
    <li><a className="dropdown-item" href="#">Webinars</a></li>
    <li><a className="dropdown-item" href="#">OpenRAN</a></li>
  </ul>
</Link>
     <div className="search-bar">
      <i
        className="bi bi-search bi-icon p-4"
        onClick={toggleModal}
        style={{ cursor: 'pointer' }}
      ></i>
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                  <button 
                  type="button"
                  className="btn-close p-2"
                  onClick={toggleModal}
                ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
          <Link href=""><button type="button" class="btn btn-outline-danger btn-lg">Contact Us</button></Link>
        </div>
      </div>
    </div>
  </nav>





  </>
}

export default MyNavbar