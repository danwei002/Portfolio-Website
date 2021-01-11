import React from "react"
import AboutBasic from "./AboutBasic"
import "./about.css"
import SkillsList from "./SkillsList"

function About() {
    return (
        <div id="about" className="container-fluid pt-3">
            <AboutBasic />
            <SkillsList />
        </div>
    )
}

export default About