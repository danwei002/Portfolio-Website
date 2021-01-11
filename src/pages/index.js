import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Daniel Wei</title>
      </Helmet>

      <div 
        style={{
          backgroundColor:"#000214", 
        }}
      >
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </div>
  )
}
