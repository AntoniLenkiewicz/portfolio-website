import React from 'react'
import Reveal from './reveal'

function Project({name, desc, languages, link, img, delay}) {
  return (
    <div className='flex flex-1 flex-row m-5 p-5 border bg-blue-950 md:max-w-1/1 md:min-w-1/4'>
        <Reveal className = "" delay = {delay}>
        <div className='flex flex-1 flex-col md:flex-row'>
            <div className='w-full'>
                <h2 className='my-2.5'>{name}</h2>
                <h3 className='my-2.5'>{languages}</h3>
                <p className='my-2.5'>{desc}</p>
                <a href={link}>GitHub Link</a>
            </div>
            <div className='m-2.5'>
                {img &&<img className = " h-48 w-48 object-contain" src={img}></img>}
            </div>
        </div>
        </Reveal>
    </div>
  )
}

export default Project