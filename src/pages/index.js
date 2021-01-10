import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"

import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    <div>
      <Helmet>
        <title>Daniel Wei</title>
      </Helmet>

      <div 
        className="min-vh-100" 
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
