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
                    Transform your photo into amazing selfie! <br/><br/>

                    1. Upload your photo<br/>
                    2. Wait a few second<br/>
                    3. Get amazing selfie
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