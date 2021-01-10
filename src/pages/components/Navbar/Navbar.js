import React from "react"

import 'jquery/dist/jquery.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css'

function Navbar() {
    return (
        <div>
            <nav id="navbar-scrollspy" className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
                <a className="navbar-brand navbar-item text-uppercase">Daniel Wei</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item">
                            <a className="nav-link nav-link-grow-up navbar-item" href="#home">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-grow-up navbar-item" href="#about"><i className="fas fa-info-circle"></i> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-grow-up navbar-item " href="#projects"><i className="fas fa-desktop"></i> Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-grow-up navbar-item " href="#contact"><i className="fas fa-address-book"></i> Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar