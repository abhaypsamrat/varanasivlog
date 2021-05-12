import React from 'react'
import { Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Info from './components/Pics';
import Signin from './components/Signin';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/info">
        <Info />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

    </>
  );
}

export default App;
