import React from 'react'
import Header from "./AppHeader/Header"
import img3 from "./shop2.jpg";
import img2 from "./sh.jpg";
import Footer from "./AppFooter/Footer"
function AboutUs() {
  return (
<>

<Header/>
<div className='mxm'>
<img srcSet={img2} alt="" className='w-100' />
<div className="container caption">
  <h2 className='display-4'>ABOUT US</h2>
</div>


</div>
<div className="container text-center pt-5 ">
<div className="row">
<div className="col-1g-12">
<h1>WHO WE ARE</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias facere provident aut laboriosam, omnis fuga voluptatibus laborum mollitia, architecto voluptatum asperiores! Similique aliquid alias inventore sapiente saepe esse quibusdam ipsum qui dolor itaque, reiciendis minus repudiandae consequatur sequi exercitationem odit et magni at optio eaque? Quas, ipsa illum minus delectus quae laborum illo totam iure odit voluptatum excepturi amet earum atque aspernatur qui sit eum quam commodi culpa, quidem non fuga molestiae nesciunt deleniti! Error corporis rem excepturi unde libero laboriosam est iure quia voluptatibus sit? Cumque alias soluta ipsa quod qui expedita magnam! Expedita tempora cum asperiores vel perferendis.</p>



</div>


</div>




</div>

<div className='mxm'>
<img srcSet={img3} alt="" className='w-100' />
<div className="container caption">
  <h2 className='display-4'> MISSION AND VISION</h2>
</div>


</div>



<div className="container pt-5 pb-5">


<div className="flex-container mv ">
  <div className='zx '><h1 className='text-center'>MISSION</h1>
<div className="container">
<p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim eveniet explicabo ratione, nemo sunt blanditiis quo doloribus assumenda delectus minima esse pariatur nesciunt adipisci excepturi sed quas similique error neque! Nisi libero rerum ipsam. Amet delectus officiis quod hic facilis, porro obcaecati.</p>
</div></div>
  <div className='zx'><h1 className='text-center'>VISION</h1>
  <div className="container">
<p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nostrum commodi a dolore perspiciatis, recusandae aspernatur dolores exercitationem non itaque voluptates voluptatibus vel fugiat id aperiam quam tempore maxime iure blanditiis quos, obcaecati sapiente animi possimus? Fugiat consequatur.</p>
  </div></div>
  
</div>


</div>

<div className='mxm '>
<img srcSet={img3} alt="" className='w-100' />
<div className="container caption">
  <h2 className='display-4'>OUR VALUES</h2>
</div>


</div>
<div className='mt-5'>
<Footer />
</div>
</>
  )
}

export default AboutUs