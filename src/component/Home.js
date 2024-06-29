import React from 'react'

function Home() {
    return (
        <div id="home" class="hero section dark-background">

            <img src={require('../img/hero-bg.jpg')} alt="" data-aos="fade-in" class="" />

            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Tejal Kadam</h2>
                <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            </div>

        </div>
    )
}

export default Home