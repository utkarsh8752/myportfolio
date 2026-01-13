// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
 

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'

// import Footer from "./Components/Footer"
// import MenuItem from "./Components/MenuItem"
// import Navbar from "./Components/Navbar"
// import React from 'react';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <MenuItem />
//       <Footer />
//     </>
//   )
// }

// export default App
import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App