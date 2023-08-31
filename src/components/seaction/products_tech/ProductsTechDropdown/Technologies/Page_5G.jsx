import React from 'react'
import  hero_5G from "./../../../../../assets/img/bg/hero_5G.avif";
import BgSeaction from '../../../../BgSeaction';

const Page_5G = () => {
  return <>
<img className="bcground" src={hero_5G.avif} alt="" />
<div className='main-heading'>
<h1 className='heading'>5G</h1> 
</div>

<div className="container">
<p className='para'>5G networks will have to support several services, many of them with different and almost orthogonal performance requirements.</p>
<p className='para'>Three major service categories defined for 5G are:</p>
<div>
<h2 className='mt-4'>Enhanced Mobile Broadband (eMBB): </h2> <span className='para'>This has been billed as the main driver for initial 5G rollouts. Not only are end users expecting to receive faster speeds, they expect more data allowances for a lower price. 5G meets end-user expectations while delivering spectral efficiency for the operator. The Parallel Wireless OpenRAN and network software suite plays an important role here by abstracting core functionality and catering for different deployment options, based on the mobile operator requirement.</span>
<h2 className='mt-4'>Enhanced Mobile Broadband (eMBB): </h2> <span className='para'>This has been billed as the main driver for initial 5G rollouts. Not only are end users expecting to receive faster speeds, they expect more data allowances for a lower price. 5G meets end-user expectations while delivering spectral efficiency for the operator. The Parallel Wireless OpenRAN and network software suite plays an important role here by abstracting core functionality and catering for different deployment options, based on the mobile operator requirement.</span>
<h2 className='mt-4'>Enhanced Mobile Broadband (eMBB): </h2> <span className='para'>This has been billed as the main driver for initial 5G rollouts. Not only are end users expecting to receive faster speeds, they expect more data allowances for a lower price. 5G meets end-user expectations while delivering spectral efficiency for the operator. The Parallel Wireless OpenRAN and network software suite plays an important role here by abstracting core functionality and catering for different deployment options, based on the mobile operator requirement.</span>
<div className="row">
  <div className="col-md-6">
    <h2>Features and Capabilities</h2>
    <p className='para'>In order to expedite network availability, phase 1 of 5G Deployments enables mobile operators to launch services with new 5G radios (aka NR), with the ability to use either an existing 4G core (NSA), or a newly deployed 5G Core (SA). In addition to the core network, RAN is undergoing major transformation too. By distributing protocol stacks between different components (different splits), solution providers focus on addressing the tight requirements for a near perfect fronthaul between RRHs and BBUs.</p>
    <p className='para'>Parallel Wireless is committed to a cloud-centric approach across its end-to-end 5G 4G 3G and 2G portfolio to include OpenRAN, and orchestration solutions, using open development and automation to deliver cost-effective networks that meet subscriber demands today and tomorrow.</p>
    <p className='para'>Cloud-native, fully virtualized architecture with a flexible end-to-end orchestration framework includes:</p>
  </div>
  <div className="col-md-6">
    <img src="https://www.parallelwireless.com/wp-content/uploads/wifi-graph.jpg-600x321.jpg" width={"90%"} alt="" />
  </div>
</div>
</div>

<div className='m-4'>

<iframe width="620" className='img-leader' height="440" src="https://www.youtube.com/embed/01RuPFplAng?si=_lyjbIZv0EkF_l67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<BgSeaction/>


  </>
}

export default Page_5G