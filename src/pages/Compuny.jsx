import React from 'react'
// import compuny from "./../assets/css/compuny.css";
import "./../assets/css/compuny.css"
import { Link } from 'react-router-dom'

const Compuny = () => {
  return <>
  <div className="bcground">
<div className='main-heading'>
<h1 className='heading'>Compuny</h1> 
  </div>
</div>
<div className="container mb-4">
  <h1 className='text-center mt-4'>About Us</h1>
  <p className='para text-center'>Parallel Wireless is leading the OpenRAN movement with the world’s first 5G/4G/3G/2G cloud-native OpenRAN architecture that is open, standardized, and interoperable across five key domains – RAN, Edge, Core, Orchestration and Analytics.</p>
  <p className='para text-center'>Through open collaboration with our OpenRAN ecosystem partners, we have created a world first and largest fully-compliant OpenRAN ecosystem that is capable of delivering the next generation of wireless infrastructure at dramatically lower cost, ensuring more equal access to 5G across the globe.</p>
  <p className='para text-center'>Our OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams, and start deploying multi-vendor 5G networks today.</p>
  <p className='para text-center'>Our customers include over 60 global mobile operators, as well as private and public industries and governments that are all using our software-defined network portfolio to reimagine their networks and get ready for 5G.</p>
  <div className="row">
    <div className="col-md-6">
      <h3>Leadership</h3>
      <p className='para'>The Parallel Wireless team has experience building every component of the cellular network across 2G, 3G, 4G and 5G. We have built many companies from scratch into the leading industry players. For the past 7+ years, our amazing team has been reimagining the architecture of the cellular networks to make deploying and maintaining any G networks, including 5G, easy and cost-effective.</p>
      <Link className='lern'>Learn More</Link>
    </div>
    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/leadership-image-585x415.jpg" alt="" />
    </div>

    <div className="col-md-6">
      <img src="https://www.parallelwireless.com/wp-content/uploads/parallel-reimagine-585x415.jpg" width={"90%"} alt="" />
    </div>
    <div className="col-md-6">
      <h3>Our Culture</h3>
      <p>We are a fast-moving technology company that is proud of what we do, ambitious about innovation and collaboration, and keenly focused on our customers’ success.</p>
      <Link className='lern'>Join Our Globel Team</Link>
    </div>
  </div>
</div>

  </>
}

export default Compuny 