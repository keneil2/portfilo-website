import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './pages/components/Navbar'
import Hero from './pages/components/Hero'
import Skills from './pages/Skills'
import Projects from './pages/components/Projects'
import Footer from './pages/components/Footer'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default App
