import React from "react"

function Navbar() {
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
            <nav id="navbar-scrollspy" className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a className="navbar-brand navbar-item" href="https://danwei002.github.io/">Daniel Wei</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item">
                            <a name="about" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">About</a>
                        </li>
                        <li className="nav-item">
                            <a name="projects" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0}  className="nav-link nav-link-grow-up navbar-item">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a name="contact" href onClick={handleClick} onKeyDown={handleKeyPress} tabIndex={0} className="nav-link nav-link-grow-up navbar-item">Contact</a>
                        </li>
                        {/*<li className="nav-item">
                            <div>
                                <img className="mode-toggler-dark" alt="display mode"/>
                            </div>
                        </li>*/}
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar