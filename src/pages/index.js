import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import { graphql } from "gatsby"

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Daniel Wei</title>
      </Helmet>

      <div 
        style={{
          backgroundColor:"#121212", 
        }}
      >
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  )
}
