import React from 'react'
import { Hero } from '../component/sections/hero'
import { About } from '../component/sections/about'
import { Resume } from '../component/sections/resume';
import { Contact } from '../component/sections/contact';

export const Home = () => {
  return <>
    <div className='header-main'>
      <Hero />
      <About />
      <Resume />
      <Contact />
    </div>
  </>;
};

