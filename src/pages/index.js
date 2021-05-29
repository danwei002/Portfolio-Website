import React, { useState } from "react"
import { ThemeProvider } from 'styled-components'
import { lightMode, darkMode } from "../theme"
import { GlobalStyles } from "../global"
import { Helmet } from "react-helmet"
import { FaSun } from '@react-icons/all-files/fa/FaSun'
import { FaMoon } from '@react-icons/all-files/fa/FaMoon'
import Toggle from 'react-toggle'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const isBrowser = typeof window !== "undefined"

export default function App() {
  let prevTheme
  if (isBrowser) {
    prevTheme = window.localStorage.getItem('theme')
  }
  
  const [theme, setTheme] = useState(prevTheme ==='light' ? lightMode: darkMode);

  const onClick = () => {
    setTheme(theme === darkMode ? lightMode: darkMode);
    window.localStorage.setItem('theme', theme === darkMode ? 'light': 'dark')
  }

  const themeToggle = (
    <Toggle 
      checked={theme === lightMode} 
      onChange={onClick} 
      icons={{
        checked: <FaSun className='pb-2 pr-2' color={"#fcba03"} size={21}/>,
        unchecked: <FaMoon className='pb-2 pr-2' color={"#76a0b0"} size={20}/>
      }}
    />   
  )

  return (
    
    <div>
      <Helmet>
        <title>Daniel Wei</title>
      </Helmet>
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Navbar themeToggle={themeToggle}/>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </ThemeProvider>
    </div>
  )
}
