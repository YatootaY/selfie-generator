import "./Hero.css"
import React from "react"
import After from "../assets/After.png"
import Before from "../assets/Before.png"

const Hero = () => {

    return(
        <div className="Hero">
            <div className="heroLeft">
                <h2>How it works?</h2>
                <p>
                    1. Upload your photo<br/>
                    2. Wait a few second<br/>
                    3. Get amazing selfie<br/>
                    4. Download your selfie<br/>
                    <span className="warning">All photos are deleted after broswer refresh</span>
                </p>
            </div>
            <div className="heroRight">
                <img src={After} alt="" />
                <img src={Before} alt="" />
            </div>
        </div>
    )
}

export default Hero;