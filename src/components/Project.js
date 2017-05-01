import React from 'react'

const Project = ({ title, img, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img style={{height: "25%", width: "25%"}} src={img} />
      <p>{description}</p>
    </div>
  )
}

export default Project
