import React, { useContext } from "react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt"
import { ThemeContext } from 'styled-components' 

import "./footer.css"

function Footer() {
    const themeCtx = useContext(ThemeContext)
    const color = themeCtx.mode === 'dark' ? 'rgba(255, 255, 255, 0.781)': '#202422'
    return (
        <div style={{marginTop: "7rem"}} className="footer-wrapper container-fluid">
            <div className="row">
                <div className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-6 offset-md-1 col-md-6 offset-sm-1 col-sm-6 offset-1 col-6 pb-5">
                    <h2 style={{fontWeight: "bold"}}>Daniel Wei</h2>
                    <br/>
                    <footer>
                        2021 | Made using Gatsby, React.js, and Bootstrap
                    </footer>
                </div>
                <div className="footer-container col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 text-right">
                    <a aria-label={"GitHub"} href="https://github.com/danwei002"><FaGithub size={27} color={color} className="mr-3 grow-hover-effect" /></a>
                    <a aria-label={"LinkedIn"} href="https://www.linkedin.com/in/danwei002/"><FaLinkedin size={27} color={color} className="mr-3 grow-hover-effect" /></a>
                    <a aria-label={"Email"} href="mailto:danwei002@gmail.com"><FaEnvelope size={27} color={color} className="mr-3 grow-hover-effect" /></a>
                    <a aria-label={"Resume"} href="Resume.pdf"><FaFileAlt size={27} color={color} className="mr-3 grow-hover-effect" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer