import React from 'react'
import "./../assets/css/myfooter.css";

const MyFooter = () => {
  return <>

  <footer class="py-5 main-footer">
      <div class="container">
        <div>

        <p className='footer-section'>Find out how we help our customers roll out services faster and reduce OPEX by visiting our resources page to download data sheets and solution overviews or watch customer videos or webinar recordings.
</p>
<p className='footer-section'><i class="bi bi-cloud-arrow-down-fill"></i></p>
<hr className='line'/>
        </div>
        <div className="row">

        <div className="col-md-4">
<img src="https://www.parallelwireless.com/wp-content/uploads/parallel_wireless.svg" width={"45%"} alt="" />
<p>Follow us</p>
<span><i class="p-2 bi icon bi-twitter"></i></span>
<span><i class="p-2 bi icon bi-linkedin"></i></span>
<span><i class="p-2 bi icon bi-facebook"></i></span>
<span><i class="p-2 bi icon bi-youtube"></i></span>
        </div>
        <div className="col-md-4">
<h5 className='b-text'>IMPORTANT LINKS</h5>
<hr />
<div>
</div>

<div className='items'>
  <span>Resources</span>
  <span>About Us</span>
</div>
<div className='items'>
  <span>Leadership</span>
  <span>Solutions</span>
</div>
<div className='items'>

  <span>News</span>
  <span>Technologies</span>
</div>
<div className='items'>
  <span>Contact</span>
  <span>Products</span>
</div>
<div className='items'>
  <span>Careers</span>
</div>
        </div>

        <div className="col-md-4">
<h5 className='b-text'>CONTACT US</h5>
<hr />
<h5><i class="bi bi-headset"></i> 1-603-589-9937</h5>
<h5 className='mt-4'><i class="bi bi-geo-alt-fill"></i> 300 Innovative Way, Suite #2310
Nashua, NH 03062, USA</h5>
        </div>
        </div>
        <div>
          <p>© 2023 Parallel Wireless. All rights reserved.</p>
          <p>Privacy Policy | Legal | Cookies | Terms of Use | Trademarks  PO Terms & Conditions</p>
        </div>
      </div>

    </footer>
  </>
}

export default MyFooter