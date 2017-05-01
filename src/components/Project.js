import React from 'react'
import { Parallax } from 'react-parallax'

const Project = ({ title, img, description }) => {
  return (
    <div className="project-container">
      <h1 className="about-title">{title}</h1>
      <Parallax bgImage={img} strength={100} bgWidth="68%">
        <div style={{height: 400}}>
        </div>
      </Parallax>
      <p className="about-content">{description}</p>
    </div>
  )
}

export default Project
