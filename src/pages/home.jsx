import React from 'react'
import Reveal from '../components/reveal';
import AnimatedText from '../components/animatedText';
import Project from '../components/project';
import { currentProject } from '../../constants/data';
import AboutMe from '../components/aboutMe';

function Home() {
  return (
    <div className="h-screen flex border-x bg-blue-950 overflow-auto">
        <Reveal className='lg:flex flex-row flex-1 mx-15 my-10 pt-16 items-start'>
          <div className='w-full'>
            <div className='flex flex-col justify-center my-10'>
              <p className='text-3xl lg:text-7xl font-semibold'>Creating modern</p>
              <p className='text-3xl lg:text-7xl font-semibold text-blue-400'>applications</p>
              <p className='text-3xl lg:text-7xl font-semibold'>with React and</p>
              <p className='text-3xl lg:text-7xl font-semibold'>React Native</p>
            </div>
            <AnimatedText />
            <br />
            <div className='flex flex-row'>
              <button className='mt-5 border p-2.5 h-min' onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>
                <p>Get In Touch</p>
              </button>
              <button className='m-5 border p-2.5' onClick={() => {
              }}>
                <p>View CV</p>
              </button>
            </div>
          </div>
          <div className='lg:w-7/12'> 
          <h1 className='text-3xl mt-10 lg:ml-5'>Hi, I'm Antoni Lenkiewicz</h1>
          <h1 className='lg:mx-5 my-2.5'>Full Stack Developer</h1>
          <AboutMe />
          </div>
        </Reveal>
    </div>
  )
}

export default Home;