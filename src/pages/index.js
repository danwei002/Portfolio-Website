import React from "react"

import Background from "./imgs/background.png"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    <div 
      className="min-vh-100" 
      style={{
        backgroundColor:"#000214", 
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "contain"
      }}
    >
      <Navbar/>
      <Home/>
    </div>
  )
}
