import React from 'react'
import { aboutData } from '../data/about.js'
import { Parallax } from 'react-parallax'


const AboutMe = () => {
  let about = aboutData.map((info, index) => {
    return (
      <div key={index} className="about-container">
        <h1 className="about-title">{info.title}</h1>
        <p className="about-content">{info.content}</p>
      </div>
    )
  })
  return (
    <div>
      <Parallax bgImage={"https://i.stack.imgur.com/xgNnW.jpg"} strength={300}>
        {about}
      </Parallax>
    </div>
  )
}

export default AboutMe
