import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super()
    this.state={
      content: "Home",
      bgImage: "./img/nyc.jpg",

    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow(e){
    this.setState({
      content: e.target.innerText
    })
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.toggleShow} />
        <Parallax bgImage={this.state.bgImage} strength={200}>
          <div style={{height: 400}}>
            <h1 id="page-title">HOLT WALBORN</h1>
          </div>
        </Parallax>
          <div>
            <Route exact path="/" component={ AboutMe } />
            <Route exact path="/projects" component={ Projects } />
            <Route exact path="/resumes/technical" component={ Resume } />
            <Route exact path="/resumes/dance" component={ Resume } />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
