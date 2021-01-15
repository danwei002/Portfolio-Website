import React from "react"
import ContactContent from "./ContactContent"

import "./contact.css"

function Contact() {
    return (
        <div id="contact" className="container-fluid pt-3 pb-5">
            <div className="row contact-wrapper">
                <div className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                    <ContactContent/>
                </div>
            </div>
        </div>
    )
}

export default Contact