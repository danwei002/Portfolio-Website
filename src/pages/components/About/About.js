import React from "react"
import AboutBasic from "./AboutBasic"
import SkillsList from "./SkillsList"

import "./about.css"

function About() {
    return (
        <div id="about" className="container-fluid pt-3 pb-3">
            <AboutBasic />
            <SkillsList />
        </div>
    )
}

export default About