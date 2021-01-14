import React, {useState} from "react"
import handleViewport from "react-in-viewport"
import Skillbar from "./Skillbar"
import skillData from "./SkillData.json"

const ViewportBlock = handleViewport(Skillbar,)

function SkillsList() {
    const [inView, setInView] = useState(false)

    const skills = skillData.map(skill => 
        <Skillbar  
            key={skill.key}
            label={skill.label} 
            percentage={skill.percentage} 
            barColor="#008ac2"
            labelColor="#00668f"
            inView={inView}
        />
    )

    return (
        <div className="row">
            <div className="text-right offset-xl-5 col-xl-5 offset-lg-4 col-lg-6 offset-md-4 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                <h2 className="subheader my-3">What am I good at?</h2>
                {skills}
                <a href="Resume.pdf" className="mt-4 btn btn-success py-2 px-3">
                    <span className="lead">My Resume</span>
                </a>
            </div>
            <ViewportBlock onEnterViewport={() => setInView(true)}/>
        </div>
    )
}

export default SkillsList