import React from 'react'
import { Opportunities } from '../components/seaction/Careers'
import "./../assets/css/careers.css"

const Careers = () => {
  return <>
  <div className="bcground">
<div className='main-heading'>
<h1 className='heading'>Careers</h1> 
  </div>
</div>
<div className="container">
  <div className="row mt-4 mb-4">
    <div className="col-md-6 mt-4 mb-4">
      <h3>We’re disrupting, challenging, and leading the future of telecommunications.</h3>
      <p className='para'>Parallel Wireless is making a big difference for Mobile Network Operators (MNOs) across the globe as they move toward a secure, cloud-enabled, digital future built on Open RAN technology, and our teams from around the world are all in. There’s no better time to join Parallel Wireless to lead the disruption in wireless networks and propel your future.</p>
    </div>
    <div className="col-md-6 mt-4 mb-4">
      <img width={"90%"} src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Disrupting-585x415.jpg" alt="" />
    </div>

    <div className="col-md-6 mt-4 mb-4">
      <img width={"90%"} src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Technology-585x415.jpg" alt="" />
    </div>
    <div className="col-md-6 mt-4 mb-4">
      <h3>Technology that delivers wireless connectivity, so all people can be connected whenever, wherever, and however they choose.</h3>
      <p className='para'>At Parallel Wireless, you’ll have a unique opportunity to reimagine the boundaries of what’s possible in telecommunications. As part of the Open RAN movement, you’ll help develop innovative products and solutions by leveraging open interfaces, thus enabling cost-effective, agile, and scalable mobile networks from 2G, 3G and 4G to 5G and beyond.</p>
    </div>

    <div className="col-md-6 mt-4 mb-4">
      <h3>We Are</h3>
      <h3>#TeamParallelWireless</h3>
      <p>What do we value most? Our people, our technology, and reimagining the world – together. You’ll be part of a team, all driven to go beyond the status quo to reimagine what comes next. This is the #TeamParallelWireless story, and we’re just getting started.</p>
    </div>
    <div className="col-md-6 mt-4 mb-4">
      <img width={"90%"} src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-TeamParallelWireless-585x400-1.jpg" alt="" />
    </div>
  </div>

  <button type="button" class="btn bc-btn img-leader">explore opportunities</button>
  <hr className='hr-main mt-4'/>

<Opportunities/>


{/* carousel */}
<div className='mt-4 mb-4'>

<img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Collaborative.jpg" className='img-leader' width={"45%"} alt="" />
{/* <div id="carouselExampleCaptions" class="carousel slide mt-4 mb-4" data-bs-ride="carousel">
      <div class="carousel-indicators img-leader">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Collaborative.jpg" width={"59%"} alt="" />
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    </div> */}

      </div>
</div>
  </>
}

export default Careers