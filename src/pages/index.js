import React from "react"

import Background from "./imgs/background.png"
import Navbar from "./components/Navbar/Navbar"

import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    <div className="min-vh-100" style={{backgroundImage:'url(${Background})'}}>
      <Navbar/>
    </div>
  )
}
