import React, {useState, useEffect} from "react"

import "./home.css"

function Home() {
    const choices= ["a Computer Enthusiast", "an avid Programmer"]
    const [index, setIndex] = useState(0)
    const [desc, setDesc] = useState(choices[0])
    
    useEffect(() => {
        const indexInterval = setInterval(() => {
            setIndex(prevIndex => prevIndex === 1 ? 0: prevIndex + 1)
        }, 3500)

        return () => clearInterval(indexInterval)
    }, [])

    useEffect(() => {
        setDesc(choices[index])
    }, [index, choices])

    return (
        <div>
            <div className="home container-fluid min-vh-100 mt-5 pt-lg-5">
                <div className="row pt-5">
                    <div className="offset-lg-2 offset-md-2 col-lg-5 col-md-7 col-sm-12 col-12">
                        <h1 className="home-greeting">
                            <span style={{fontWeight:"bold", lineHeight:"150%"}}>Hi!</span><br/>
                            I'm Daniel, <br/><span key={desc} className="description-animation">{desc}</span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-2 offset-md-2 col-lg-5 col-md-7 col-sm-12 col-12">
                        <a className="mt-4 btn btn-primary py-2 px-3" href="#about">
                            More About Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home