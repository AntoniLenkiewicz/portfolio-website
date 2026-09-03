import React from 'react'
import Reveal from './reveal'

function AboutMe() {
  return (
    <div className='flex flex-1 flex-row m-5 mt-10 p-5 border bg-blue-950 justify-center'>
        <Reveal className = "" delay={0.2}>
        <div className='flex flex-1 flex-col md:flex-row'>
            <div className='w-full'>
                <h2 className='my-2.5'>"name": "Antoni Lenkiewicz"</h2>
                <h2 className='my-2.5'>"role": "Software Engineer"</h2>
                <h2 className='my-2.5'>"location": "Coventry, UK"</h2>
                <h2 className='my-2.5'>"languages": "JS, TS, Python"</h2>
                <h2 className='my-2.5'>"status": "Open to Work"</h2>
            </div>
        </div>
        </Reveal>
    </div>
  )
}

export default AboutMe