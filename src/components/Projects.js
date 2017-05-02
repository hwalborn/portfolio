import React from 'react'
import ProjectDisplay from './ProjectDisplay'
import { projectData } from '../data/projects.js'

const Projects = () => {

  let show = projectData.map((project, index) => {
    return <ProjectDisplay key={index} id={index} title={project.title} img={project.img} description={project.description} />
  })

  return (
    <div>
      {show}
    </div>
  )
}

export default Projects
