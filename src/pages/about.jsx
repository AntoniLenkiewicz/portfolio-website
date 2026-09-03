import React from 'react'
import Tools from '../components/tools'

function About() {
  return (
    <div className="flex flex-col bottom-0 h-dvhn items-start justify-center border-x bg-blue-950">
        <div className='h-dvh pt-16 overflow-auto'>
          <div className='flex flex-col m-5'>
            <h2>About me</h2>
            <p>I'm a full-stack developer based around Coventry and Birmingham focused on building modern websites and mobile apps. I enjoy solving problems and turning ideas into reality, from backend APIs to clean UI implementations. I am always looking to improve my skills through personal projects and collaboration. I am currently looking for an opportunity to contribute to a meaningful project while continuing to grow as a developer.</p>
            <br />
            <p>I like learning new technologies so feel free to reach out with any opportunities even if they don't align with my current experience.</p>
            <h2 className='pt-5'>Tools and Technologies</h2>
            <h3>Languages</h3>
            <div className='flex flex-wrap'>
              <Tools tool = "JavaScript" />
              <Tools tool = "TypeScript" />
              <Tools tool = "C" />
              <Tools tool = "Swift" />
              <Tools tool = "Python" />
              <Tools tool = "SQL" />
            </div>
            <h3 className='mt-2.5'>Technologies and Frameworks</h3>
            <div className='flex flex-wrap'>
              <Tools tool = "React & React Native" />
              <Tools tool = "SwiftUI" />
              <Tools tool = "Linux & MacOS" />
              <Tools tool = "Git & GitHub" />
              <Tools tool = "Flask" />
              <Tools tool = "TensorFlow & Scikit-Learn" />
            </div>
            <h2 className='pt-5'>Education</h2>
            <p>I have recently graduated from Coventry University with a Bachelors of Science with Honours First Class in Computer Science with Artificial Intelligence. My dissertation topic was Exploring lightweight machine learning approaches for note detection in polyphonic chords in which I trained various machine learning models to detect individual notes present within a musical chord.</p>
          </div>
        </div>
      </div>
  )
}

export default About

