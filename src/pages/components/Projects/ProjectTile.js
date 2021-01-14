import React from "react"

function ProjectTile(props) {
    function handleClick() {
        window.open(props.url)
    }

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
            <div onClick={handleClick} onKeyDown={handleClick} className="project-tile pt-4 pl-3 pr-3">
                <h1>{props.title}</h1>
                <br/>
                <p className="lead">
                    {props.desc}
                </p>
                <footer style={{position: "absolute", bottom: "0"}} className="mb-2">
                    <span style={{float: "right"}}>
                        {props.tools}
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default ProjectTile