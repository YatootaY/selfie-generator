import React from "react";
import "./Footer.css"
import githubIcon from "../assets/🦆 icon _github_.png"

const Footer = () => {

    return(
        <div className="Footer">
            <a href="https://github.com/YatoAki" target="_blank"><h4>Developed by YatoAki</h4><img src={githubIcon} alt="" /></a>
        </div>
    )
}

export default Footer