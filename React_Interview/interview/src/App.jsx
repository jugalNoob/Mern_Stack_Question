import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Nav from './page/Nav';
import Error from './page/Error';
function App() {
  return (
    <BrowserRouter>
      <Nav />   {/* Navbar should be here */}

      <Routes>
        <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
