import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from "../Components/Header/Home/Home"
import About from './Header/About/About'
import Projects from './Header/Projects/Projects'
import Contact from './Header/Contact/Contact'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>


    </>
  )
}

export default Main