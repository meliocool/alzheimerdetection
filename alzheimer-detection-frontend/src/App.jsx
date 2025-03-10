import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles.css"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import FinalForm from "./components/Form.jsx"
import Footer from "./components/Footer.jsx"
import AboutUs from "./components/AboutUs.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FinalForm />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
