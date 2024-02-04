import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Skills from './components/Skills';
import Navigation from './components/Navigation';


const App = () => {
  return ( 
    <>  
    <Navigation />
    <Routes>
      
        
        
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
        
       
      
    </Routes> 
    </>
  );
}

export default App;
