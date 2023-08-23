import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/mynavbar.css";
import "./../assets/css/home.css";
// import MyCarousel from './MyCarousel';

const MyNavbar = () => {
  return <>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid mx-4">
      <Link class="navbar-brand" to="/">
        <img src="https://www.parallelwireless.com/wp-content/uploads/parallel_wireless.svg" width={"65%"} className="mr-4" alt="logo" />
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="main-nav navbar-nav main-nav align-items-center">
          <Link class="nav-link" to="/">Solutions</Link>
          <Link class="nav-link" to="/customers">Customers</Link>
          <Link class="nav-link">Products & Technologies</Link>
          <Link class="nav-link">Compuny</Link>
          <Link class="nav-link">Careers</Link>
          <Link class="nav-link">Resources</Link>
          <Link href=""> <i class="bi bi-search bi-icon p-4"></i></Link>
          <Link href=""><button type="button" class="btn btn-outline-danger btn-lg">Contact Us</button></Link>
        </div>
      </div>
    </div>
  </nav>

  {/* <MyCarousel/> */}
  </>
}

export default MyNavbar