import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exacth path='/contact' component={Contact} />
    </div>
  );
}

export default App;
