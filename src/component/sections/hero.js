import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" class="hero section light-background">

      <div class="container">
        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h2>Tejal Kadam</h2>
            <p>I'm Full Stack
              <p class=" typing typed-cursor typed-cursor--blink" aria-hidden="true"><span>Developer</span></p>

            </p>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={require('./img/profile-copy-t.png')} alt="" data-aos="fade-in" class="" />
          </div>

        </div>
      </div>

    </section>
  )
}
