import React from 'react'

const Opportunities = () => {
    const data = [
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-EmployeeProgram-350x295.png",
            title:"Employee Programs",
            desc:"Our programs are global but delivered regionally ensuring every employee receives a tailored, individual development plan to get you to be the best version of yourself. We celebrate our wins with recognition (Spot Awards) and time off to give back to your community.",
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-ComprehensiveBenefits-350x295.jpg",
            title:"Comprehensive Benefits",
            desc:"Our benefits are competitive and designed to foster and encourage good health, peace of mind, and long- term financial security for our team members around the globe.",
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-GrowthLifesytle-large-350x295.jpg",
            title:"Growth and Lifestyle",
            desc:"We support you with everything from flexible/remote working arrangements, a comprehensive global mobility program to support your career growth, and paid time off so you have time to rest and recharge!",
        }
    ]
  return <>
  <div className="row mt-4" >
    <div className="col-md-6 mt-4">
        <img src="https://www.parallelwireless.com/wp-content/uploads/people-first-720x510-1-585x415.jpg" width={"99%"} alt="" />
    </div>
    <div className="col-md-6 mt-4">
        <h3>Parallel Wireless delivers on a People First Strategys</h3>
        <p className='para'>Our team members are essential to making Parallel Wireless an innovative technology leader! Our competitive total rewards package and long-term wealth creation opportunity are unmatched in the industry. Professionals at Parallel Wireless are provided with rapid career growth opportunities to reach their full potential and make a strong lasting impact within the Parallel Wireless community. Parallel Wireless provides challenging assignments, strong growth opportunities in a supportive culture that fosters teamwork and collaboration while encouraging innovation and break through ideas supported by the leadership team who are vested in your success, a concept we call Servant Leadership.

</p>
    </div>

  {
      data.map(item => <>
      <div className="col-md-4 mt-4 mb-4">
        <img src={item?.img} alt="" />
        <h3>{item?.title}</h3>
         <p>{item?.desc}</p>
      </div>
      </> )
    }

    <h3 className='text-center mt-4'>Our team is “All In” and vested to achieve amazing growth as we transform the wireless broadband industry.</h3>
    <h1 className='text-center color-text mb-4'>Join Us!</h1>
    <hr className='hr-main mt-4'/>
    <div className="col-md-6 mt-4">
        <h3 className='text-center'>OUR VISION</h3>
        <p className='text-center'>To reimagine the wireless network so all people can be connected whenever, wherever, and however they choose.</p>
    </div>
    <div className="col-md-6 mt-4">
        <h3 className='text-center'>OUR MISSION</h3>
        <p className='text-center'>To deliver innovative products that unlock value and disrupt the economics of wireless networks through intelligence and openness. Our customers’ success is our success.</p>
    </div>
    </div>

    <h2 className='text-center mt-4 mb-4'>Core Values</h2>
  </>
}

export default Opportunities