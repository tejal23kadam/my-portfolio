import React from 'react'

export const Services = () => {
  return (
    // <!-- Services Section -->
    <section id="services" class="services section light-background">

      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>       
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="bi bi-pencil-fill"></i></div>
            <div>
              <h4 class="title">Creative Design</h4>
              <p class="description">Leveraging artistic elements and aethestic principles to craft visually appealing and engaging user experiences.</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
            <div>
              <h4 class="title">Clean Code</h4>
              <p class="description">Writing code that is well structured , readable and maintainable.</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="icon flex-shrink-0"><i class="bi bi-window-fullscreen"></i></div>
            <div>
              <h4 class="title">User Interface</h4>
              <p class="description">Creating intutive and user friendly designs that prioritize usability, accessibility and a seamless user experience.</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}
        </div>
      </div>
    </section>
    // <!-- /Services Section -->
  )}