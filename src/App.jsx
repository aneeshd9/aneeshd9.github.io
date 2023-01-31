import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<About />} path="/" />
          <Route element={<WorkExperience />} path="/workex" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
