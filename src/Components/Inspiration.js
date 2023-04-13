import React from "react";
import "./Inspiration.css"
import barbieExample from "../assets/barbieExample.png"

const Inspiration = () => {

    return(
        <div className="Inspiration">
            <h2>Inspiration</h2>
            <p>This is inspired by Barbie Selfie Generator by Warner Bros. Entertainment Inc.</p>
            <img src={barbieExample} alt="" />
        </div>
    )
}

export default Inspiration