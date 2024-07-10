import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" class="hero section dark-background">

      {/*<!-- Header Start --> */}
      {/* <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" className="header-height">
        <div class="container">
          <div class="row align-items-center">
          <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img class="img-fluid w-100 rounded-circle shadow-sm" src={require('./img/profile-copy-t.png')} alt="" />
            </div>
            <div class="col-lg-7 text-center text-lg-left">
            <h2>Tejal Kadam</h2>
            <p>I'm Full Stack
              <p class=" typing typed-cursor typed-cursor--blink" aria-hidden="true"><span>Developer</span></p>

            </p>
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="" class="btn btn-outline-light mr-5">Download CV</a>
              </div>
            </div>
            
          </div>
        </div>
      </div> */}
      {/* <!-- Header End -->*/}


      
   
      <img src={require('./img/hero-bg (1)-overlay (1).jpg')} alt="" data-aos="fade-in" class=""/>

      <div class="container " data-aos="fade-up" data-aos-delay="100">
        <h2>Alex Smith</h2>
        <p>I'm 
          <p class=" typing typed-cursor typed-cursor--blink" aria-hidden="true"><span>Developer</span></p>
        </p>
      </div>


    </section>
  )
}
