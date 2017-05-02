import React from 'react'
import { Parallax } from 'react-parallax'

const handleClick = (e, id) =>{
  e.preventDefault()
  let desc = document.querySelector(`.project-description-${id}`)
  let image = document.querySelector(`.par-${id}`)
  if(desc.style.visibility !== "visible"){
    desc.style.visibility = "visible"
    image.style.marginLeft = "100%"
    // image.style.visibility = "hidden"
  }else{
    desc.style.visibility = "hidden"
    image.style.marginLeft = "0%"
    // image.style.visibility = "visible"
  }
}

const ProjectDisplay = ({  key, id, title, img, description }) => {
  let customDescription=`project-description-${id}`
  let customId = `par-${id}`
  return (
    <div className="project-container">
      <a href='#' onClick={(e) => handleClick(e, id)}><h1 className="project-title">{title}</h1></a>
      <div className={customId}>
        <Parallax bgImage={img} strength={100} bgWidth="68%">
          <div style={{height: 400}}>
          </div>
        </Parallax>
      </div>
      <p style={{visibility: "hidden"}} className={customDescription}>{description}</p>
    </div>
  )
}

export default ProjectDisplay
