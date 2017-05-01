// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

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

  // pageContent(){
  //   switch (this.state.content) {
  //     case "Home":
  //       return <AboutMe />
  //     case "Projects":
  //       return <Projects />
  //     case "Technical":
  //       return <Resume file="./resumes/tech.pdf" />
  //     case "Dance":
  //       return <Resume file="./resumes/dance.pdf" />
  //     default:
  //       return <AboutMe />
  //   }
  // }

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

            {/* <Route exact path="/resumes/technical" render={() =>{
              return <Resume file="./resumes/tech.pdf" />
            }}/>
            <Route exact path="/resumes/dance" render={() =>{
              return <Resume file="./resumes/dance.pdf" /> */}
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
