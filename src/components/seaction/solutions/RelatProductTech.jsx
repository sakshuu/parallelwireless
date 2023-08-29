import React from 'react'
import "./../../../assets/css/css_solutions/urban.css";

const RelatProductTech = () => {
    const data = [

        {
            img:"https://www.parallelwireless.com/wp-content/uploads/product-4.jpg",
            title:"Outdoor OpenRAN",
            desc:"Our fully orchestrated OpenRAN hardware consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost."
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/product-1.png",
            title:"5G OpenRAN",
            desc:"Our fully orchestrated OpenRAN hardware consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost."
        },
        {
            img:"https://www.parallelwireless.com/wp-content/uploads/product-2.png",
            title:"Real-time ALL G SON",
            desc:"Our fully orchestrated OpenRAN hardware consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost."
        },

    ]
  return <>
  <div className="container">
            <h1 className='pro b-text text-center'>Related Products & Technologies</h1>
    <div className="row">
        {
            data.map(item  => <div className="col-md-4">
            <div class="card mt-4 mb-4" >
<img src={item?.img} alt="" />
<div className='p-4'>
<h3>{item?.title}</h3>
<p>{item?.desc}</p>
</div>
<button type="button" class="btn bc-btn btn-pro">LEARN MORE</button>
            </div>
        </div>
                )
        }
      
    </div>
  </div>
  </>
}

export default RelatProductTech