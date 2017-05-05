import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Route } from 'react-router'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import img from './img/nyc.jpg'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Parallax bgImage={img} strength={200}>
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
