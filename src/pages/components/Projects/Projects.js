import React from "react"
import ProjectTile from "./ProjectTile"
import projectData from "./ProjectsData.json"
import "./projects.css"

function Projects() {
    const projectTiles = projectData.map(project => 
        <ProjectTile 
            key={project.key}
            title={project.title}
            desc={project.desc}
            url={project.url}
            tools={project.tools}
        />
    )

    return (
        <div id="projects" className="container-fluid pt-3 pb-3">
            <div className="row">
                <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                    <h1 className="section-header pb-5">Projects</h1>
                    <div className="container-fluid">
                        <div className="row">
                            {projectTiles}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects