import React from 'react'
import { Parallax } from 'react-parallax'

const handleClick = (e, id) =>{
  e.preventDefault()
  document.querySelector(`.project-description-${id}`).style.display = "block"
  document.querySelector(`.par-${id}`).style.display = "none"
}

const Project = ({ id, title, img, description }) => {
  let customDescription=`project-description-${id}`
  let customId = `par-${id}`
  return (
    <div className="project-container">
      <a href='#' onClick={(e) => handleClick(e, id)}><h1 className="project-title">{title}</h1></a>
      <Parallax className={customId} bgImage={img} strength={100} bgWidth="68%">
        <div style={{height: 400}}>
        </div>
      </Parallax>
      <p className={customDescription}>{description}</p>
    </div>
  )
}

export default Project
