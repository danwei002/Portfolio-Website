import React, { useContext } from "react"
import { ThemeContext } from 'styled-components'

function Navbar(props) {
    const themeCtx = useContext(ThemeContext)
    const navClassNames = themeCtx && themeCtx.mode === 'dark' ? "navbar navbar-expand-lg  bg-transparent navbar-dark py-3": "navbar navbar-expand-lg  bg-transparent navbar-light py-3"

    function handleClick(event) {
        event.preventDefault()
        document.getElementById(event.target.name).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault()
            document.getElementById(event.target.name).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }

    return (
        <div>
            <nav id="navbar-scrollspy" className={navClassNames}>
                <a className="navbar-brand navbar-item" href="Resume.pdf">Daniel Wei</a>
                <span className="navbar-brand navbar-item navbar-mode-toggle">{props.themeToggle}</span>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbarNav">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}} name="about" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">About</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}}  name="projects" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0}  className="nav-link nav-link-grow-up navbar-item">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}}  name="contact" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar