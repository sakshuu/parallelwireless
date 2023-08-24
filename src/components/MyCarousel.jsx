import React from 'react'
import  "./../assets/css/home.css";


const MyCarousel = () => {
  return <>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='main-img'>
            <img src="https://www.parallelwireless.com/wp-content/uploads/hero-city-opt-1536x614.jpg" alt="" className='hero-img'/>
            <div className='main-content'>
<h2 className='line-space'>Reimagine your</h2>
<h1 className='b-text font-text'>NETWORK</h1>
<h2 className='line-space'>Reimagine your</h2>
<h1 className='b-text font-text'>ECONOMICS</h1>
<h2 className=''>Everything you need to know about openRAN.</h2>
<h2>An Ebook from parallel wireless.</h2>
<button type="button" class="btn bc-btn">DOWNLOAD NOW</button>
            </div>
          </div>
          </div>
          <div class="carousel-item">
          <div className='main-img'>
            <img src="https://www.parallelwireless.com/wp-content/uploads/hero-city-opt-1536x614.jpg" alt="" className='hero-img'/>
            <div className='main-content'>
<h2>Beinging the first</h2>
<h1 className='b-text font-text'>OPEN RAN</h1>
<h2>to indonesia</h2>
<button type="button" class="btn bc-btn">LEARN MORE</button>
            </div>
          </div>
          </div>
        </div>

      </div>
  </>
}

export default MyCarousel