import React from 'react'
import { Hero } from '../component/sections/hero'
import { About } from '../component/sections/about'
import { Resume } from '../component/sections/resume';
import { Contact } from '../component/sections/contact';
import { Skills } from '../component/sections/skills';
import { Portfolio } from '../component/sections/portfolio';

export const Home = () => {
  return <>
    <div className='header-main'>
      <Hero />
      <About />
      <Skills/>
      <Resume />  
      <Portfolio/>   
      <Contact />
     
    </div>
  </>;
};

