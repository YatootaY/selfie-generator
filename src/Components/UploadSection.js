import React from "react";
import "./UploadSection.css"
import Example from "../assets/Example.png"
import cameraIcon from "../assets/🦆 icon _camera outline_.png"
import logOut from "../assets/🦆 icon _log out_.png"


const UploadSection = () => {

    return(
        <div className="UploadSection">
            <h2>Transform your photo here!</h2>
            <div className="inputArea">
                <label htmlFor="imgInput" id="uploadBtn"><img src={logOut} alt="" className="icon"/> Upload Image </label>
                <input type="file" accept="image/*" capture="camera" id="imgInput" style={{ display: 'none' }} />
                <button id="openCamera"><img src={cameraIcon} alt="" className="icon"/> Open Camera</button>
            </div>
            
            <div className="createImage">
                <img src={Example} alt="" />
            </div>
            
            <p>We do not collect your photo.</p>
        </div>
    )
}

export default UploadSection