import React, { useContext } from "react"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaShareAlt } from "@react-icons/all-files/fa/FaShareAlt"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { ThemeContext } from 'styled-components'

function ContactContent() {
    const themeCtx = useContext(ThemeContext)
    let isDarkMode = themeCtx.mode === 'dark'
    let internalColor = isDarkMode ? '#00ad5f': '#00de7a'
    const outerClassName = isDarkMode ? 'contact-container-dark p-3' : 'contact-container-light p-3'

    return (
        <div>
            <h1 className="section-header pb-5">Contact Me</h1>
            <div className={outerClassName}>
                <h2 className="subheader text-center">
                    Daniel Wei
                </h2>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaEnvelope size={24} color={isDarkMode ? "white": "black"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Email 
                                <br/> 
                                <br/> 
                                <a style={{color: internalColor}} href="mailto:danwei002@gmail.com">danwei002@gmail.com</a> 
                                <br/> 
                                <a style={{color: internalColor}} href="mailto:d28wei@uwaterloo.ca">d28wei@uwaterloo.ca</a>
                            </p>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaMapMarkerAlt size={24} color={isDarkMode ? "white": "black"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Location 
                                <br/> 
                                <br/> 
                                <span style={{color: internalColor}}>Toronto, ON, Canada</span>
                            </p>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaShareAlt size={24} color={isDarkMode ? "white": "black"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Socials  
                                <br/> 
                                <br/> 
                                <span style={{color: internalColor}}>
                                    <a style={{color: internalColor}} href="https://github.com/danwei002">GitHub: danwei002</a>
                                    <br/>
                                    <a style={{color: internalColor}} href="https://www.linkedin.com/in/danwei002/">LinkedIn: danwei002</a>
                                    <br/>
                                    Discord: danwei002#0574
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent