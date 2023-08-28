import React from 'react'
import "./../assets/css/resources.css"
import { Link } from 'react-router-dom'
import FooterUpperSeaction from '../components/FooterUpperSeaction'

const Resources = () => {
  return <>
  <div className="bcground">
<div className='main-heading'>
<h1 className='heading'>Resources</h1> 
  </div>
</div>
<div className="container mt-4 mb-4">
  <h3 className='text-center'>Reimagine Your Network.
</h3>
  <h3 className='text-center'>Reimagine Your Economics</h3>
  <p className='para text-center'>In this asset library you’ll find solutions brochures, data sheets, recorded webinars, and customer videos and case studies to learn more about Parallel Wireless world’s leading 5G 4G 3G 2G OpenRAN.</p>
  <div className="row">
    <div className="col-md-6 resources-main">
      <h3>Solution Overviews</h3>
      <p>Learn more about Parallel Wireless 5G 4G 3G 2G coverage and capacity outdoor and indoor solutions by checking out our solution overview briefs and presentations.</p>
      <Link>Learn More</Link>
    </div>

    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/5g-img.jpg" alt="" />
    </div>

    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/eNodeB-img.jpg" alt="" />
    </div>
    <div className="col-md-6 resources-main">
    <h3>Case Studies</h3>
      <p>See how we’ve helped customers all over the globe modernize their networks and reduce costs with our outdoor and indoor OpenRAN.</p>
      <Link>Learn More</Link>
    </div>

    <div className="col-md-6 resources-main">
    <h3>Customer Testimonial Videos</h3>
      <p>Hear it straight from our customers by watching our customer testimonial videos!</p>
      <Link>Watch More Here</Link>
    </div>
    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg" alt="" />
    </div>

    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/city-img.jpg" alt="" />
    </div>
    <div className="col-md-6 resources-main">
    <h3>White Papers</h3>
      <p>Take a deeper dive into our 5G 4G 3G 2G cloud-native solutions with our white papers.</p>
      <Link>Download Now</Link>
    </div>

    <div className="col-md-6 resources-main">
    <h3>Webinars</h3>
      <p>Our webinar program is a great way to learn about everything-Parallel as well as latest industry trends.</p>
      <Link>Watch Now</Link>
    </div>
    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/presentation-img.jpg" alt="" />
    </div>

    <div className="col-md-6">
      <img width={"99%"} src="https://www.parallelwireless.com/wp-content/uploads/parallel-play-button.jpg" alt="" />
    </div>
    <div className="col-md-6 resources-main">
    <h3>Videos and Demos</h3>
      <p>Our videos and demos are a great way to learn about our products, solutions, and deployments – check them out to learn more.</p>
      <Link>Watch Now</Link>
    </div>
  </div>
</div>

<footer class="py-2 main-footer my-footer">
   <p className='footer-section'>Learn from our technical experts about how our OpenRAN solutions are improving networks around the world.
</p>
   <hr />
   </footer>
  </>
}

export default Resources