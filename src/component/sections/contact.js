import React from 'react'

export const Contact = () => {
  return (
    <section id="contact">
      {/* <!-- Contact Section --> */}
      <section id="contact" class="contact section">

        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Contact Me !</h2>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">

            <div class="col-lg-5">

              <div class="info-wrap">
                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>UG - 1/2, First Floor, V3 Corner, Sai Square, Adajan Dn, Surat - 395009 (Honey Park)</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Contact</h3>
                    <p>+(91) 83477-71678</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>tejalmchandlekar@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d877.7472221430143!2d72.78534503856534!3d21.20156780367746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scdmi%20adajan!5e0!3m2!1sen!2sin!4v1720419175534!5m2!1sen!2sin" 
                 frameborder="0"
                 class="iFrameClass"
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade">

                 </iframe>
              </div>
            </div>

            <div class="col-lg-7">
              <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">

                  <div class="col-md-6">
                    <label for="name-field" class="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" class="form-control" required="" />
                  </div>

                  <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field" required="" />
                  </div>

                  <div class="col-md-12">
                    <label for="subject-field" class="pb-2">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject-field" required="" />
                  </div>

                  <div class="col-md-12">
                    <label for="message-field" class="pb-2">Message</label>
                    <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>

                </div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}

          </div>

        </div>

      </section>
      {/* <!-- /Contact Section --> */}


    </section>
  )
}
