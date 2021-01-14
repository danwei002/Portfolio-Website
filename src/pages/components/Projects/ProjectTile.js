import React from "react"

function ProjectTile(props) {
    function handleClick() {
        window.open(props.url)
    }

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
            <div onClick={handleClick} onKeyDown={handleClick} className="project-tile pt-4 pl-3">
                <h1>{props.title}</h1>
                <br/>
                <p className="lead">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectTile