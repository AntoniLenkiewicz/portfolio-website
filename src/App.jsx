import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/navbar'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Contact from './pages/contact'
import './index.css'
import PageWrapper from './components/pagewrapper'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
    <Navbar className ="fixed top-0 left-0 w-full z-50 border-b bg-blue-900"/>
      <div className='w-full'>
      <section id="home" className='relative border-b z-20'>
        <PageWrapper color="bg-blue-900">
          <Home />
        </PageWrapper>
      </section>
      <section id="projects" className='relative border-b z-20'>
        <div className='h-[200dvh]'>
            <Projects />
        </div>
      </section>
      <section id="" className='fixed left-0 bottom-0 w-full z-0'>
        <PageWrapper color="bg-blue-900">
          <About />
        </PageWrapper>
      </section>
      <section id="about">
        <div className='h-[200dvh]'></div>
      </section>
      <section id="contact" className='relative z-20 border-b border-t'>
        <PageWrapper color="bg-blue-900">
          <Contact />
        </PageWrapper>
      </section>
      </div>
    </>
  )
}


export default App
