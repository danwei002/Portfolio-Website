import React from "react"
import ProjectTile from "./ProjectTile"

function ProjectsList(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <ProjectTile/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <ProjectTile/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <ProjectTile/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList