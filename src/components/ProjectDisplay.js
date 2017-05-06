import React from 'react'
import { Parallax } from 'react-parallax'

const handleClick = (e, id) =>{
  e.preventDefault()
  let desc = document.querySelector(`.project-description-${id}`)
  let image = document.querySelector(`.par-${id}`)
  if(desc.style.flexGrow === "0"){
    desc.style.visibility = "visible"
    desc.style.flexGrow = 1
    image.style.flexGrow = 0
  }else{
    desc.style.visibility = "hidden"
    desc.style.height = 0
    desc.style.flexGrow = 0
    image.style.flexGrow = 1
  }
}

const ProjectDisplay = ({ loc, id, title, img, description }) => {
  let customDescription=`project-description-${id}`
  let customId = `par-${id}`
  return (
    <div className="project-container">
      <a href='#' onClick={(e) => handleClick(e, id)}><h1 className="project-title">{title}</h1></a>
      <div style={{display: "flex", textAlign: "center", flexGrow: 1}}>
        {loc ? <p style={{flexGrow: 0}} className={customDescription}>{description}</p> : null}
        <div className={customId}>
          <Parallax bgImage={img} strength={100} bgWidth="75%">
            <div style={{height: 400}}></div>
          </Parallax>
        </div>
        {loc ? null : <p style={{flexGrow: 0}} className={customDescription}>{description}</p>}
      </div>
    </div>
  )
}

export default ProjectDisplay
