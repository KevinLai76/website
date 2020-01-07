import React from 'react';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exacth path='/contact' component={Contact} />
      </div>
    </div>
  );
}

export default App;
