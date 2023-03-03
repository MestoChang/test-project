import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';



function App() {

  return (
      <BrowserRouter>
      HOME
      <Navbar/>


        <Routes>
          {/* <Route path='/' exact element={<Home />} /> */}
          <Route path='/about' exact element={<About />} />
          <Route path='/projects' exact element={<Projects />} />
        </Routes>


      </BrowserRouter>

  )
}

export default App
