import React from "react"

function Navbar(props) {
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
            <nav id="navbar-scrollspy" className="navbar navbar-expand-lg bg-transparent py-3">
                <a className="navbar-brand navbar-item" href="Resume.pdf">Daniel Wei</a>
                <span className="navbar-brand navbar-item navbar-mode-toggle">{props.themeToggle}</span>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbarNav">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}} name="about" href="#about" onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">About</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}}  name="projects" href="#projects" onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0}  className="nav-link nav-link-grow-up navbar-item">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor: "pointer"}}  name="contact" href="#contact" onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar