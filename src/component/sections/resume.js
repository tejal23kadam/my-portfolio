import React from 'react'

export const Resume = () => {
  return (   
      //  <!-- Resume Section -->
    <section id="resume" class="resume section">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Goal-oriented and enthusiastic graduate looking for an opportunity to launch my career 
          in Full Stack Development. With a solid foundation in React Js and Node. I am eager to contribute to a dynamic team, 
          learn from experienced professionals, and work towards achieving both personal and organizational goals.</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Sumary</h3>

            <div class="resume-item pb-0">
              <h4>Tejal Kadam</h4>
              
              <ul>
                <li>Suart,Gujarat,India</li>
                <li>(+91) 834777-1678</li>
                <li>tejalmchandlekar@gmail.com</li>
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}



            <h3 class="resume-title">Internship </h3>
            <div class="resume-item">
              <h4>Software Developer</h4>
              <h5>Dec-2015 to Aug-2016</h5>
              <p><em>Aubergine Solutions Pvt. Ltd, Ahmedabad, Gujarat </em></p>
              <p>Role and Responsibility as Intern:</p>
              <ul>
                <li>Learn and grab fundamentals of an Android.</li>
                <li>Development of a fitness Application based on Android Platform (Front End)</li>                
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}

            <div class="resume-item">
              <h4>React Js Developer</h4>
              <h5>Fresher</h5>
              <p><em>CDMI</em></p>
              <ul>
                <li>Learn and grab fundamentals of an ReactJS.</li>                
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}
            
     

          </div>

          <div class="col-lg-6" data-aos="fade-up" >
          <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor of Technology &amp; Computer Engineering</h4>
              <h5>2013 - 2016</h5>
              <p><em>Dharamsinh Desai Institute of Technology, Nadiad, Gujarat</em></p>
              <p>CPI : 7.8</p>
             
            </div>
            {/* <!-- Edn Resume Item --> */}

            <div class="resume-item">
              <h4>Diploma in Computer Engineering</h4>
              <h5>2010 - 2013</h5>
              <p><em>Government Polytechnic For Girls,Suart</em></p>
              <p>CGPA : 9.24</p>
            </div>
            {/* <!-- Edn Resume Item --> */}

            <div class="resume-item">
              <h4>SSC</h4>
              <h5>Jun - 2010</h5>
              <p>Sanskar Bharti Vidhyalaya, Suart</p>
              <p>87.85%</p>
            </div>
            {/* <!-- Edn Resume Item --> */}

          </div>

        </div>

      </div>

    </section>
    //  <!-- /Resume Section -->
   
  )
}
