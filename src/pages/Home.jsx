import React from 'react'
import "./../assets/css/home.css"
import { MyCarousel } from '../components'
import { Link } from 'react-router-dom'
import { Careers,  IconCarousel,  Leadership_Culture, OursProducts } from '../components/seaction/home'

const Home = () => {
  const data= [
    {
      img:"https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-COVERAGE-opt-350x295.jpg",
      title:"Reimagine Coverage",
      desc:"Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.",
    },
    {
      img:"https://www.parallelwireless.com/wp-content/uploads/20211102_REIMAGINE-CAPACITY-Home-page-350x295px-opt-350x295.jpg",
      title:"Reimagine Capacity",
      desc:"Easy to install, low-cost and high-performing cloud-native Parallel Wireless Open RAN supports macro, Massive MIMO or small cell deployments for densification and delivers superior end user QoS for consumers and industries in urban scenarios.",
    },
    {
      img:"https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-5G-AND-BEYOND-01-2-opt-350x295.jpg",
      title:"Cityscape 5G and Beyond",
      desc:"Parallel Wireless cloud-native ORAN approach enables any 5G migration option and is software upgradable to any future 3GPP releases delivering the most cost-effective, easy to deploy, and advanced 5G capabilities for all 5G use cases.",
    }
  ]
  return <>
{/* <div className='main'> */}
<MyCarousel/>
<div className="container mt-4">
  <div className="row">
    {
      data.map(item => <div className="col-md-4">
        <div className="main-start">
          <img src={item?.img} width={"350px"} alt="" />
          <h2 className='mt-2'>{item?.title}</h2>
          <p className='mt-2'>{item?.desc}</p>
          <Link className='lern'>Learn more..</Link>
        </div>
      </div>
        )
    }

  </div>
</div>
<IconCarousel/>
<Leadership_Culture/>
<Careers/>
<OursProducts/>
{/* </div> */}

  </>
}

export default Home