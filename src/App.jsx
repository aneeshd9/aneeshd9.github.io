import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<About />} path="/" />
          <Route element={<WorkExperience />} path="/workex" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
