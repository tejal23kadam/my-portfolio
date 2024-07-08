import React from 'react'

export const About = () => {
    return (
      <section id="about">
         {/* <!-- Section Title --> */}
         <div class="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p> Motivated Computer Engineering graduate from Dharamsinh Desai Institute of Technology (DDIT) with one year of experience in software development.
                    Proven experience in developing and testing code and administering systems and networks. 
                    Seeking a full-time software development position to deliver solutions to business needs.
                </p>
            </div>
            {/* <!-- End Section Title --> */}

            <div class="container">

                <div class="row gy-4 justify-content-center">
                    <div class="col-lg-4">
                        <img src={require('./img/about-image.jpg')} class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-8 content">
                        <h2>Full Stack Developer.</h2>
                        <p class="py-4 about-me-p">                            
                            Hello there! My name is Tejal Kadam. I am a full stack developer,and i am very passionate and dedicated to my work. 
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 May 1994</span></li>                                    
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+(91) 834777-1678</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Surat,Gujarat</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech(CE)</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>tejalmchandlekar@gmail.com</span></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <p class="py-4 about-me-p">
                        Proven ability to learn new technologies quickly and apply them to real-world problems. 
                        I enjoy every step of the design and coding process from discussion and collaboration.
                        Seeking an entry-level position where I can use my skills and knowledge to contribute to a team and make a positive impact on the company.
                        </p>
                    </div>
                </div>

            </div>

      </section>
    )
  }
