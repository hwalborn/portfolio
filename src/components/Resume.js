import React from 'react'
import ReactPDF from 'react-pdf'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import technical from '../resumes/tech.pdf'
import dance from '../resumes/dance.pdf'

class Resume extends React.Component {
  constructor(){
    super()
    this.state = {
      file: ''
    }
  }

  componentWillMount(){
    this.setState({
      file: this.props.match.path.split('/').slice(-1)[0]
    })
  }

  render(){
    let file = null
    let width
    this.state.file === "technical" ? file = technical : file = dance
    window.innerWidth < 800 ? width = 400 : width = 950
    return (
      <div>
        <div id="download">
          <a href={file} download={this.state.file}><FontAwesome style={{color: 'black'}} name="download" size="5x"/></a>
        </div>
        <Row className="resume-rwd" style={{margin: 0}}>
          <Col style={{textAlign: 'center'}} md={12}>
            <ReactPDF width={width} scale={1.5} file={file} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Resume
