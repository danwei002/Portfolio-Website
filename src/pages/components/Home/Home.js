import React, {useState, useEffect} from "react"

import "./home.css"

function Home() {
    const choices= ["a Computer Enthusiast", "an avid Programmer", "a Software Engineering Student"]
    const [index, setIndex] = useState(0)
    const [desc, setDesc] = useState(choices[Math.floor(Math.random() * choices.length)])
    
    useEffect(() => {
        const indexInterval = setInterval(() => {
            setIndex(prevIndex => prevIndex === 2 ? 0: prevIndex + 1)
        }, 3500)

        return () => clearInterval(indexInterval)
    }, [])

    useEffect(() => {
        setDesc(choices[index])
    }, [index, choices])

    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="offset-lg-1 offset-md-1 col-lg-5 col-md-5 col-sm-12 col-12">
                        <h1 className="home-greeting">
                            Hi! <br/>
                            I'm Daniel Wei and I'm <br/><span key={desc} className="description-animation">{desc}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home