import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/css_solutions/solutions.css"
import { FooterUpperSeaction } from '../components'
import hero_solutions from "./../assets/img/bg/hero_solutions.jpg";

const Solutions = () => {
  
  // const solutionData = [

  //   {
  //     title:"Rural",
  //     desc:"Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.",
  //     img:"https://www.parallelwireless.com/wp-content/uploads/coverage-img.jpg",
  //   },
  //   {
  //     title:"Urban",
  //     desc:"Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments.",
  //     img:"https://www.parallelwireless.com/wp-content/uploads/capacity-img.jpg",
  //   },
  //   {
  //     title:"In-Building",
  //     desc:"Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user.",
  //     img:"https://www.parallelwireless.com/wp-content/uploads/in-building2.jpg",
  //   },
  //   {
  //     title:"Public Safety LTE",
  //     desc:"Provide Public Safety LTE with our solution to deliver reliable and secure coverage, local organizational control, and resilience to first responders, police and defense organizations in daily and tactical operations.",
  //     img:"https://www.parallelwireless.com/wp-content/uploads/public-safety.jpg",
  //   },
  //   {
  //     title:"Private LTE",
  //     desc:"Provide dedicated, fixed-cost LTE networks for businesses and IoT devices using Parallel Wireless OpenRAN on licensed, shared, or unlicensed spectrum to deliver secure, managed information flow for enterprises of any size.",
  //     img:"https://www.parallelwireless.com/wp-content/uploads/Images-Private-LTE.jpg",
  //   }
  // ]
  
  return <>
  <img className="bcground" src={hero_solutions} alt="" />
<div className='main-heading'>
<h1 className='heading'>Solutions</h1> 
</div>

<div className="container mb-4">
  <div className='content'>
  <h1 className='text-center'>Reimagine Your Network.</h1>
  <h1 className='text-center'>Reimagine Your Economics</h1>
  <p className='para'>Parallel Wireless created world’s only 5G 4G 3G 2G <span className='color-t'>OpenRAN</span>  architecture to make delivery of wireless <span className='color-t'> coverage</span> or <span  className='color-t'> coverage</span> capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across five key domains – RAN, <span className='color-t'> Edge,</span> Core, Orchestration and Analytics – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world. The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor <span className='color-t'> 5G networks</span> today.</p>

<div className="row">
  {/* 1st */}
<div  className="col-md-6 col-sm-12">
  <div className='contentData'>
<h3>Rural</h3>
<p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
<Link className='lern'>Lern more...</Link>
  </div>
</div>
<div className="col-md-6 col-sm-12">
  <img src="https://www.parallelwireless.com/wp-content/uploads/coverage-img.jpg" width={"100%"} alt="" />
</div>

{/* 2nd */}
<div className="col-md-6 col-sm-12">
  <img src="https://www.parallelwireless.com/wp-content/uploads/capacity-img.jpg" width={"100%"} alt="" />
</div>
<div  className="col-md-6 col-sm-12">
  <div className='contentData'>
<h3>Rural</h3>
<p className='desc-data'>Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments.</p>
<Link className='lern'>Lern more...</Link>
  </div>
</div>

{/* 3nd */}
<div  className="col-md-6 col-sm-12">
  <div className='contentData'>
<h3>In-Building</h3>
<p className='desc-data'>Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user</p>
<Link className='lern'>Lern more...</Link>
  </div>
</div>
<div className="col-md-6 col-sm-12">
  <img src="https://www.parallelwireless.com/wp-content/uploads/in-building2.jpg" width={"100%"} alt="" />
</div>

{/* 4th */}
<div className="col-md-6 col-sm-12">
  <img src="https://www.parallelwireless.com/wp-content/uploads/public-safety.jpg" width={"100%"} alt="" />
</div>
<div  className="col-md-6 col-sm-12">
  <div className='contentData'>
<h3>Public Safety LTE</h3>
<p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
<Link className='lern'>Lern more...</Link>
  </div>
</div>


{/* 5th */}
<div  className="col-md-6 col-sm-12">
  <div className='contentData'>
<h3>Private LTE</h3>
<p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
<Link className='lern'>Lern more...</Link>
  </div>
</div>
<div className="col-md-6 col-sm-12">
  <img src="https://www.parallelwireless.com/wp-content/uploads/Images-Private-LTE.jpg" width={"100%"} alt="" />
</div>

  </div> 
  </div> 
  </div> 

<FooterUpperSeaction/>
  </>
} 

export default Solutions