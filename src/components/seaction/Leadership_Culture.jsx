import React from 'react'
import iconCulture from "./../../assets/img/leaderships/iconCulture.png";
import iconleadership from "./../../assets/img/leaderships/iconleadership.png";
import iconPeople from "./../../assets/img/leaderships/iconPeople.png";
import { Link } from 'react-router-dom';
import  "./../../assets/css/home.css";

const Leadership_Culture = () => {
    const data = [
        {
            img:iconCulture,
            title:"Our Leadership",
            desc:"The Parallel Wireless leadership team has experience building many startup companies into leading industry players.",
            link:"Our Leaders"
        },
        {
            img:iconleadership,
            title:"Our People",
            desc:"Reimaginers wanted. We have positions open across the globe. Join us.",
            link:"Become a Reimaginers"
        },
        {
            img:iconPeople,
            title:"Our Culture",
            desc:"We are a fast-moving technology company that is ambitious about innovation and collaboration, and focused on our customers’ success.",
            link:"Our Culture"
        }
    ]
  return <>
  <div className="container">
    <h1 className='text-center'>Leadership / Culture</h1>
    <div className="row">
        {
            data.map(item => <div className="col-md-4">
                <div className="main-leader">
                    <img  className="img-leader mt-4" src={item?.img} alt="" />
                    <h1 className='text-center mt-4'>{item?.title}</h1>
                    <p className='text-center mt-2'>{item?.desc}</p>
                    <Link className=' lern  mt-4'> <div className='text-center'>{item?.link}</div>  </Link>
                </div>
            </div>
                     )
        }

    </div>
  </div>

<div className='careers-box'>
    <h2 className='text-center'>Careers</h2>
    <h5 className='text-center'>View our global openings and apply today to join the team.</h5>
    <div className='join-btn mt-2'>
    <button type="button" class="btn  bc-btn">Join US</button>
    </div>
</div>

  </>
}

export default Leadership_Culture