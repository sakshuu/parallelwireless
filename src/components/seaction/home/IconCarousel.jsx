import React from 'react'
// import "./../../../assets/css/home.css"
import clientlogo from "./../../../assets/img/clientlogo.png";
import inland_logo from "./../../../assets/img/inland_logo.png";
import MTN_logo from "./../../../assets/img/MTN_logo.jpg";
import Optimera from "./../../../assets/img/Optimera.png";
import optus_logo from "./../../../assets/img/optus_logo.png";
import ruralfirst from "./../../../assets/img/ruralfirst.png";
import smart from "./../../../assets/img/smart.png";
import telefonica from "./../../../assets/img/telefonica.png";
import vodaphone_logo from "./../../../assets/img/vodaphone_logo.png";
import vodacom from "./../../../assets/img/vodacom.png";
import "./../../../assets/css/icon_carousel.css"


const IconCarousel = () => {
  return <>

    <div id="iconCarousel" className="carousel carousel-icon slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item carousel-item-icon active">
<img  className='px-4' width={"150px"} src={clientlogo} alt="" />
<img  className='px-4' width={"150px"} src={inland_logo} alt="" />
<img  className='px-4' width={"120px"} src={MTN_logo} alt="" />
<img  className='px-4' width={"150px"} src={Optimera} alt="" />
<img className='px-4' width={"150px"} src={ruralfirst} alt="" />
<img  className='px-4'width={"150px"} src={optus_logo} alt="" />
<img src={smart} className='px-4' width={"150px"} alt="" />

        </div>
        <div className="carousel-item carousel-item-icon">
<img  className='px-4' width={"150px"} src={clientlogo} alt="" />
<img  className='px-4' width={"150px"} src={inland_logo} alt="" />
<img  className='px-4'width={"1px"} src={optus_logo} alt="" />
<img src={smart} className='px-4' width={"150px"} alt="" />
<img className='px-4' width={"150px"} src={telefonica} alt="" />
<img className='px-4' width={"150px"} src={vodaphone_logo} alt="" />
<img className='px-4' width={"150px"} src={vodacom} alt="" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#iconCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#iconCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  </>
}

export default IconCarousel