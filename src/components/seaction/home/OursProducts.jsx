import React from 'react'
import awards from "./../../../assets/img/leaderships/awards.png";
import events from "./../../../assets/img/leaderships/events.png";
import { Link } from 'react-router-dom';

const OursProducts = () => {
    const data =[
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/product-1.png",
            title:"Access: OpenRAN",
            desc:"Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost."
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/20211001-NETWORK-SOFTWARE-350x225.jpg",
            title:"Network Software",
            desc:"Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.s"
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/20211102_Intelligence-and-Automation-section-1-Home-page-350x225px-350x225.jpg",
            title:"Intelligence and Automation",
            desc:"Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience."
        },
    ]
  return <>
  <div className='events'>
    <div className="row">
        <div className="col-md-6">
            <img src={awards} className='img-leader' alt="" />
            <h1 className='text-center'>Upcoming Events</h1>
            <p className='text-center'>Visit with us at upcoming tradeshows, conferences or attend our webinars to learn how we can help you reimagine your networks.s</p>
            <Link class="lern mt-4"> <div  className='text-center'>Connect with us at events</div> </Link>
        </div>
        <div className="col-md-6">
            <img src={events} className='img-leader' alt="" />
            <h1 className='text-center'>Awards</h1>
            <p className='text-center'>We are honored and humbled to be recognized by the industry with awards for our innovation, technology vision and deployments.</p>
            <Link className='lern mt-4'> <div  className='text-center'>Lern more</div> </Link>
        </div>
    </div>
</div>

  <h1 className='m-4 text-center'>Our Products</h1>
  <div className="container mb-4">
    <div className="row">
        {
            data.map(item => <div className="col-md-4 ">
                <div class="card">
                    <img src={item?.img} alt="" />
                    <div className="products">

                    <h3>{item?.title}</h3>
                    <p>{item?.desc}</p>
                    <button type="button"  class="btn bc-btn">Learn more</button>
                    </div>
                </div>
            </div>
                )
        }
       
    </div>
  </div>
  </>
}

export default OursProducts