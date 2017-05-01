import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return(
    <div style={{padding: "2% 0 2% 0"}}>
      <Row>
        <Col style={{textAlign: 'center'}} md={3}>
          <a className="icon" href="https://www.linkedin.com/in/holt-walborn/"><FontAwesome name="linkedin-square" size="4x" style={{color: 'black'}} /></a>
        </Col>
        <Col style={{textAlign: 'center'}} md={3}>
          <a className="icon" href="https://github.com/hwalborn"><FontAwesome name="github" size="4x" style={{color: 'black'}} /></a>
        </Col>
        <Col style={{textAlign: 'center'}} md={3}>
          <a className="icon" href="https://www.instagram.com/hipsterholt/?hl=en"><FontAwesome name="instagram" size="4x" style={{color: 'black'}} /></a>
        </Col>
        <Col style={{textAlign: 'center'}} md={3}>
          <a className="icon" href="mailto:hwalborn@gmail.com"><FontAwesome name="envelope" size="4x" style={{color: 'black'}} /></a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
