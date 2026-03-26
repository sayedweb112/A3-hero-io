import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css'

function App() {
  

  return (
 <Router>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
