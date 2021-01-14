import React from "react"

function AboutBasic() {
    return (
        <div className="row pb-5">
            <div className="offset-xl-2 col-xl-5 offset-lg-1 col-lg-6 offset-md-1 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                <h1 className="section-header">About Me</h1>
                <hr style={{borderColor: "white"}}/>
                <h2 className="subheader my-3">Born in 2002. Programmer since 2013.</h2>
                <p className="lead about-content">
                    Nice to meet you! I'm Daniel Wei, a programmer, student, and gamer who loves computers and programming. 
                    I am currently a 1B Software Engineering student at the University of Waterloo.
                    <br/><br/>
                    I enjoy pretty much anything to do with computers, especially building them and programming. 
                    I built my own PC a year ago, and I'm not ashamed to say I'm always looking for chances to upgrade it.
                    Now when it comes to programming, I'm most interested in Game Development, Robotics, and App/Web Development. 
                    <br/><br/>
                    Some other things I like to do include gaming, playing chess, and watching Netflix. If you want some Netflix 
                    suggestions, some of my favourites are: Brooklyn 99, The Queen's Gambit, Snowpiercer, The 100, and The Last Dance.
                </p>
            </div>
        </div>
    )
}

export default AboutBasic