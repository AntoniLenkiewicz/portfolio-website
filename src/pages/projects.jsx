import React from 'react'
import Reveal from '../components/reveal'
import Project from '../components/project'
import { projects } from '../../constants/data'


function Projects() {
  return (
    <div className='sticky top-0 flex h-dvh justify-center items-center bg-blue-900'>
        <div className='w-10 lg:w-20'/>
        <div className='flex flex-col w-full border-x h-full pt-16 justify-start'>
            <div className='flex m-5'>
                <Reveal delay={0.1}>
                <h2 className="">Projects</h2>
                </Reveal>
            </div>
            <div className='flex flex-row flex-wrap overflow-auto'>
                {projects.map((project, index) => (
                        <Project key = {index} name={project.name} desc={project.description} languages = {project.languages} link={project.link} img={project.img} delay={(index*0.2)} />
                ))}
            </div>
        </div>
        <div className='w-10 lg:w-20'/>
    </div>
  )
}

export default Projects