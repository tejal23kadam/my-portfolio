import React from 'react'

export const Hero = () => {

  return (
    <section id="hero" class="hero section dark-background">
      <img src={require('./img/1234.jpg')} alt="" data-aos="fade-in" className='img1' />
      <div class="container " >
        <h2>Tejal Kadam</h2>
        <p>I'm
          <p class=" typing typed-cursor typed-cursor--blink" aria-hidden="true"><span>Developer</span></p>
        </p>
      </div>
    </section>
  )
}
