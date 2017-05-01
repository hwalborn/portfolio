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
    this.state.file === "technical" ? file = technical : file = dance
    return (
      <div>
        <div id="download">
          <a href={file} download={this.state.file}><FontAwesome style={{color: 'black'}} name="download" size="5x"/></a>
        </div>
        <Row style={{margin: 0}}>
          <Col style={{textAlign: 'center'}} md={12}>
            <ReactPDF scale={1.5} file={file} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Resume
