import React from 'react'
import { Link } from 'react-router-dom'

const Careers = () => {

  return <>
  <div className="container mt-4">
    <div className="row">
      
    <div className="col-md-6 mt-4 mb-4">
                <h1 className='mt-4'>5G Starts Here</h1>
                <p>Through open collaboration with OpenRAN ecosystem, we’ve created the world’s first and largest fully compliant OpenRAN portfolio that delivers the next generation of wireless infrastructure at a much lower cost, ensuring more equal access to 5G globally. Our software-defined and interoperable OpenRAN architecture was designed from the ground up to reduce complexity and drive out cost from every aspect from the RAN to the Core. We pride ourselves on offering a fully automated outdoor or indoor coverage and capacity solutions that are easy and cost-effective to deploy and maintain and are software upgradable to 5G.</p>
                <Link className="lern">Lern more..</Link>
            </div>
            <div className="col-md-6 mt-4 mb-4">
                <img src="https://www.parallelwireless.com/wp-content/uploads/20211102_5G-Starts-Here-Homepage-585x415px-585x415.jpg" className='imgcareers' alt="" />
            </div>
           



            <div className="col-md-6 mt-4 mb-4">
                <img src="https://www.parallelwireless.com/wp-content/uploads/20211102_Reimagine-network-Homepage-585x415.jpg" className='imgcareers' alt="" />
            </div>
            <div className="col-md-6 mt-4 mb-4 ">
                <h1 className='mt-4'>Reimagine Your Network</h1>
                <p>Parallel Wireless created the world’s only ALL G (5G/4G/3G/2G) software-enabled OpenRAN architecture to make delivery of wireless coverage or capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G/4G/3G/2G and Wi-Fi cloud-native architecture that is open and standardized across five key domains – RAN, Edge, Core, Orchestration and Analytics – we are committed to the 5G vision of bringing Internet to every person and organization for a truly connected world at much lower cost to deploy and maintain.",
title:"Reimagine Your Network</p>
                <Link className="lern">Lern more..</Link>
            </div>


            <div className="col-md-6  mt-4 mb-4">
                <h1 className='mt-4'>Reimagine Your Economics</h1>
                <p>The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor 5G networks today. Software innovation and openness across 5G/4G/3G /2G and Wi-Fi coupled with network automation drives TCO reduction for low-density or high density use cases of up to 60% for CAPEX and 65% for OPEX.</p>
                <Link className="lern">Lern more..</Link>
            </div>

            <div className="col-md-6 mt-4 mb-4">
                <img src="https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-ECONOMICS.jpg" className='imgcareers' alt="" />
            </div>

       
    </div>
  </div>
  </>
}

export default Careers