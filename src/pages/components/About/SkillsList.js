import React, {useState, useContext } from "react"
import handleViewport from "react-in-viewport"
import Skillbar from "./Skillbar"
import skillData from "./SkillData.json"
import { ThemeContext } from 'styled-components'

const ViewportBlock = handleViewport(Skillbar,)

function SkillsList() {
    const [inView, setInView] = useState(false)
    const themeCtx = useContext(ThemeContext)

    let barColor = themeCtx && themeCtx.mode === 'dark' ? '#008ac2': '#008ac2'
    let labelColor = themeCtx && themeCtx.mode === 'dark' ? '#00668f': '#00668f'

    const skills = skillData.map(skill => 
        <Skillbar  
            key={skill.key}
            label={skill.label} 
            percentage={skill.percentage} 
            barColor={barColor}
            labelColor={labelColor}
            inView={inView}
        />
    )

    return (
        <div  className="row skills-wrapper">
            <div className="text-right offset-xl-5 col-xl-5 offset-lg-4 col-lg-6 offset-md-4 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                <h2 className="subheader my-3">What am I good at?</h2>
                {skills}
            </div>
            <ViewportBlock onEnterViewport={() => setInView(true)}/>
        </div>
    )
}

export default SkillsList