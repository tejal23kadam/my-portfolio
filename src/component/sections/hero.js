import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" class="hero section dark-background">
      <img src={require('./img/hero-bg.jpg')} alt="" data-aos="fade-in" class="" />
      <div class="container">
        <h2>Tejal Kadam</h2>
        
         <p>I'm
            <div class="typing">
            <h2 class="typed-cursor typed-cursor--blink" aria-hidden="true">Full Stack developer</h2>
            
            </div>
          </p> 
        {/* <div class="typing">
          <h2 class="text-uppercase">developer</h2>
        </div> */}
      </div>

    </section>
  )
}
