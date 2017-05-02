import React from 'react'

const ProjectInfo = ({ handleClick, desc, id, title }) => {
  return (
    <div>
      <a href='#' onClick={(e) => handleClick(e, id)}><h1 className="project-title">{title}</h1></a>
      <p>{desc}</p>
    </div>
  )
}

export default ProjectInfo
