import React from "react"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaShareAlt } from "@react-icons/all-files/fa/FaShareAlt"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

function ContactContent() {
    return (
        <div>
            <h1 className="section-header pb-5">Contact Me</h1>
            <div className="contact-container p-3">
                <h2 className="subheader text-center">
                    Daniel Wei
                </h2>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaEnvelope size={24} color={"white"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Email 
                                <br/> 
                                <br/> 
                                <a style={{color: "#00ad5f"}} href="mailto:danwei002@gmail.com">danwei002@gmail.com</a> 
                                <br/> 
                                <a style={{color: "#00ad5f"}} href="mailto:d28wei@uwaterloo.ca">d28wei@uwaterloo.ca</a>
                            </p>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaMapMarkerAlt size={24} color={"white"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Location 
                                <br/> 
                                <br/> 
                                <span style={{color: "#00ad5f"}}>Toronto, ON, Canada</span>
                            </p>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mb-3">
                            <FaShareAlt size={24} color={"white"}/>
                        </div>
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mb-3">
                            <p className="lead contact-content">
                                Socials  
                                <br/> 
                                <br/> 
                                <span style={{color: "#00ad5f"}}>
                                    <a style={{color: "#00ad5f"}} href="https://github.com/danwei002">GitHub: danwei002</a>
                                    <br/>
                                    <a style={{color: "#00ad5f"}} href="https://www.linkedin.com/in/danwei002/">LinkedIn: danwei002</a>
                                    <br/>
                                    Discord: danwei002#0574
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent