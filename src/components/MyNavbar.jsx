import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/mynavbar.css";

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
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
          <Link to="/solutions" className="dropdown nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={handleToggle}
  >
    Solutions
  </div>
  <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else </a></li>
  </ul>
</Link>


          <Link  class="a nav-link" to="/products-technologies">Products & Technologies</Link>

          {/* <Link to="/products-technologies" className="dropdown nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={handleToggle}
  >
    Products & Technologies
  </div>
  <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else </a></li>
  </ul>
</Link> */}

          <Link  class="a nav-link" to="/customers">Customers</Link>
          <Link  class="a nav-link" to="/compuny">Compuny</Link>
          <Link  class="a nav-link" to="/careers">Careers</Link>
          <Link  class="a nav-link" to="/resources">Resources</Link>
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