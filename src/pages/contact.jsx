import React from 'react'

function Contact() {
  return (
    <div className="h-[30dvh] flex flex-col items-start justify-start border-x bg-blue-900 text-white">
      <div className='flex flex-col m-5'>
        <h1>Contact Me</h1>
        <a className='text-xl' href="mailto:antoniolenkiewicz@gmail.com">Email</a>
        <a className='text-xl' href="https://www.linkedin.com/in/antoni-lenkiewicz-42999a346/"
            target="_blank"
            rel="noopener noreferrer">LinkedIn</a>

        <a className='text-xl' href="https://github.com/AntoniLenkiewicz"
            target="_blank"
            rel="noopener noreferrer">GitHub</a>
        </div>
    </div>
  )
}

export default Contact