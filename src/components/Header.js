import React from 'react'
import { Row, Col, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const style={
  border: 'none',
  backgroundColor: "grey",
  fontFamily: "Cinzel"
}

const Header = ({ handleClick }) => {
    return (
      <Row className="header" style={{margin: 0}}>
        <Col md={3}>
          <Link to="/">Home</Link>
          {/* <a href="/" >Home</a> */}
        </Col>
        <Col md={3}>
          <a href="https://hipsterholt.tumblr.com/">Blog</a>
        </Col>
        <Col md={3}>
          <Link to="/projects">Projects</Link>
          {/* <a href="/projects" >Projects</a> */}
        </Col>
        <Col md={3}>
          <ButtonToolbar>
            <DropdownButton id="drop" title="Resumés" key={1} noCaret style={style}>
              <MenuItem eventKey="1" className="dropItem"><Link style={{fontSize: '1em', paddingLeft: 0}} to="/resumes/technical">Technical</Link></MenuItem>
              <MenuItem eventKey="2" className="dropItem"><Link style={{fontSize: '1em', paddingLeft: 0}} to="/resumes/dance">Dance</Link></MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Col>
      </Row>
    )
}

export default Header
