import React from 'react'
import { Parallax } from 'react-parallax'

const handleClick = (e, id) =>{
  e.preventDefault()
  let desc = document.querySelector(`.project-description-${id}`)
  let image = document.querySelector(`.par-${id}`)
  if(desc.style.flexGrow === "0"){
    desc.style.visibility = "visible"
    desc.style.flexGrow = 1
    desc.style.marginLeft = "5%"
    image.style.flexGrow = 0
  }else{
    desc.style.visibility = "hidden"
    desc.style.height = 0
    desc.style.flexGrow = 0
    desc.style.marginLeft = 0
    image.style.flexGrow = 1
  }
}

const ProjectDisplay = ({ loc, id, title, img, description, url }) => {
  let customDescription=`project-description-${id}`
  let customId = `par-${id}`
  let newDesc = <ul style={{flexGrow: 0}} className={customDescription}>{description.split("***").map(li => <li>{li}</li>)}<a href={url}>{title}</a></ul>

  return (
    <div className="project-container">
      <a href='#' onClick={(e) => handleClick(e, id)}><h1 className="project-title">{title}</h1></a>
      <div style={{display: "flex", textAlign: "center", flexGrow: 1}}>
        {loc ? newDesc : null}
        <div className={customId}>
          <Parallax bgImage={img} strength={100} bgWidth="75%">
            <div style={{height: 400}}></div>
          </Parallax>
        </div>
        {loc ? null : newDesc}
      </div>
    </div>
  )
}

export default ProjectDisplay
