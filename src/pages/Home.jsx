import React from 'react'
import "./../assets/css/home.css"
import { MyCarousel, Solutions } from '../components'

const Home = () => {
  return <>
  <MyCarousel/>
  <div className="container">

  <div className='content'>
  <h1 className='text-center'>Reimagine Your Network.</h1>
  <h1 className='text-center'>Reimagine Your Economics</h1>
  <p className='para'>Parallel Wireless created world’s only 5G 4G 3G 2G <span className='color-t'>OpenRAN</span>  architecture to make delivery of wireless <span className='color-t'> coverage</span> or <span  className='color-t'> coverage</span> capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across five key domains – RAN, <span className='color-t'> Edge,</span> Core, Orchestration and Analytics – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world. The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor <span className='color-t'> 5G networks</span> today.</p>
  <Solutions/>
  </div>
  </div>

  </>
}

export default Home