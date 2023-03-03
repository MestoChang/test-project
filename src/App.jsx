import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';



function App() {

  return (
    <div>

      APP

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/projects' exact element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
