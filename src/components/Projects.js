import React from 'react'
import ProjectDisplay from './ProjectDisplay'
import { projectData } from '../data/projects.js'

const Projects = () => {

  let show = projectData.map((project, index) => {
    let loc = index % 2 === 0
    return <ProjectDisplay key={index} loc={loc} id={index} title={project.title} img={project.img} description={project.description} />
  })

  return (
    <div>
      {show}
    </div>
  )
}

export default Projects
