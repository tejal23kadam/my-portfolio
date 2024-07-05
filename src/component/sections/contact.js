import React from 'react'

export const Contact = () => {
  return (
    <section id="contact"><div>
    {/* <!-- Portfolio Section --> */}
<section id="portfolio" class="portfolio section light-background">

  {/* <!-- Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>
  {/* <!-- End Section Title --> */}

  <div class="container">

    <div class="isotope-layout" >          

      <div class="row gy-4 container" data-aos="fade-up" data-aos-delay="200">

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
          <div class="portfolio-content h-100">
            <img src={require('../sections/img/portfolio/app-1.jpg')} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
          <div class="portfolio-content h-100">
            <img src={require('../sections/img/portfolio/app-2.jpg')} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
          <div class="portfolio-content h-100">
            <img src={require('../sections/img/portfolio/app-3.jpg')} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}
      </div>
      {/* <!-- End Portfolio Container --> */}

    </div>

  </div>

</section>
{/* <!-- /Portfolio Section --> */}

</div></section>
  )
}
