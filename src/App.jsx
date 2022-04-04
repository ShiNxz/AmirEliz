import './App.scss'
import Footer from './Components/UI/Footer'
import NavBar from './Components/UI/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Index from './Pages/Index'
import { useState } from 'react'
import Show from './Pages/Show'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const App = () => {
  const [query, setQuery] = useState(false)

  return (
    <>
      <Router>
      <NavBar search={{query, setQuery}}/>
        <Routes >
          <Route path="/" element={<Index search={{query, setQuery}}/>} />
          <Route path="/show/:id" element={<Show/>} />
          <Route path="*" element={<Navigate to={`/`}/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
