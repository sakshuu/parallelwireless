import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/mynavbar.css";
import { DropdownSolutions, ProductsTechDropdown } from './allDropdowns';

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

// solutions deopdown
   const [solutionsOpen, setSolutionsOpen] = useState(false)
  const solutionshandleMouseEnter = () => {
    setSolutionsOpen(true);
  };
  const solutionshandleMouseLeave = () => {
    setSolutionsOpen(false);
  };

// products tech
const [productsTechOpen, setProductsTechOpen] = useState(false)
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
  <DropdownSolutions solutionsOpen={solutionsOpen} setSolutionsOpen={setSolutionsOpen}/>
</Link>
          {/* <Link  class="a nav-link" to="/products-technologies">Products & Technologies</Link> */}

          <Link to="/products-technologies" className="a dropdown nav-link" onMouseEnter={productsTechhandleMouseEnter} onMouseLeave={productsTechhandleMouseLeave}>
<ProductsTechDropdown setProductsTechOpen={setProductsTechOpen} productsTechOpen={productsTechOpen}/>
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