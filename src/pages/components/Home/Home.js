import React, {useState, useEffect} from "react"

import profilePicture from "../../imgs/profilePic.jpg"
import "./home.css"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

function Home() {
    const choices= ["a Computer Enthusiast", "an avid Programmer"]
    const [index, setIndex] = useState(0)
    const [desc, setDesc] = useState(choices[0])
    
    useEffect(() => {
        const indexInterval = setInterval(() => {
            setIndex(prevIndex => prevIndex === 1 ? 0: 1)
        }, 3500)

        return () => clearInterval(indexInterval)
    }, [])

    useEffect(() => {
        setDesc(choices[index])
    }, [index, choices])

    function handleClick() {
        document.getElementById("about").scrollIntoView({behavior: "smooth"})
    }

    return (
        <div>
            <div className="home container-fluid my-5 pt-lg-5 pb-5">
                <div className="row pt-5">
                    <div className="offset-xl-2 col-xl-5 offset-lg-1 col-lg-6 offset-md-1 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                        <h1 className="home-greeting">
                            <span style={{fontWeight:"bold", lineHeight:"150%"}}>Hi!</span><br/>
                            I'm Daniel, <br/><span key={desc} className="description-animation">{desc}</span>
                        </h1>
                        <button onClick={handleClick} className="mt-4 btn btn-primary py-2 px-3">
                            <span className="lead">Get To Know Me</span>
                        </button>
                        <br/>
                        <a aria-label={"Email"} href="mailto:danwei002@gmail.com"><FaEnvelope size={32} color={"#deddcc"} className="mt-5 mr-5 grow-hover-effect"/></a>
                        <a aria-label={"GitHub"} href="https://github.com/danwei002"><FaGithub size={32} color={"#9413f0"} className="mt-5 mr-5 grow-hover-effect"/></a>
                        <a aria-label={"LinkedIn"} href="https://www.linkedin.com/in/danwei002/"><FaLinkedin size={32} color={"#0e76a8"} className="mt-5 mr-5 grow-hover-effect"/></a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                        <img src={profilePicture} alt="Me" className="profile-picture p-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home