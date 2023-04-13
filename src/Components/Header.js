import React from "react";
import "./Header.css"

const Header = () => {

    return(
        <div className="Header">
            <h1>Selfie Generator</h1>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#transform">transform</a></li>
                <li><a href="#terms">terms</a></li>
                <li><a href="#insperation">insperation</a></li>
            </ul>
        </div>
    )
}

export default Header