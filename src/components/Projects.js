import React from 'react'
import Project from './Project'
import { projectData } from '../data/projects.js'

const Projects = () => {
  let show = projectData.map((project, index) => {
    return <Project key={index} title={project.title} img={project.img} description={project.description} />
  })
  
  return (
    <div>
      {show}
    </div>
  )
}

export default Projects
