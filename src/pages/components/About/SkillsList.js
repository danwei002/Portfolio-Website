import React from "react"
import Skillbar from "./Skillbar"
import skillData from "./SkillData.json"

function SkillsList() {
    const skills = skillData.map(skill => <Skillbar key={skill.key} label={skill.label} percentage={skill.percentage}/>)

    return (
        <div className="row">
            <div className="text-right offset-xl-5 col-xl-5 offset-lg-1 col-lg-6 offset-md-1 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                <h2 className="subheader my-3">What am I good at?</h2>
                {skills}
            </div>
        </div>
    )
}

export default SkillsList