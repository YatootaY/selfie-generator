import React from "react";
import loading from "../assets/loading.gif"
import "./Loading.css"

const Loading = () => {

    return(
        <span className="Loading">
            <img src={loading} alt="loadng" /> Loading
        </span>
    )
}

export default Loading