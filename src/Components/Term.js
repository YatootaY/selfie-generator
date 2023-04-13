import React from "react";
import "./Term.css"

const Term = () => {
    
    return(
        <div className="Term" id="terms">
            <h2>Terms & Conditions</h2>
            <ul>
                <li>This web application has been created solely as a personal project by Kaung Nay Lin Khant, and is not intended for profit.</li>
                <li>Kaung Nay Lin Khant assures that no user data is collected on their server, and that all edited photos are deleted as soon as the user refreshes their browser.</li>
                <li>Users are requested to use the filters provided on the web application sparingly to preserve the limited API requests available.</li>
                <li>Kaung Nay Lin Khant kindly requests users to refrain from using the web application excessively as he require the edited photos for showcasing to potential recruiters.</li>
                <li>By using this web application, users agree to these terms and conditions.</li>
            </ul>
        </div>
    )
}

export default Term;