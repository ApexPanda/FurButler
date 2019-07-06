import React from "react";
import Groomers from "../../images/site/groomers.jpg"
import Vets from "../../images/site/vets.jpg"
import Owners from "../../images/site/owners.jpg"

function ServiceBtnB(props) {

    let imageUrl

    switch (props.role) {
        case "Groomers":
            imageUrl = Groomers
            break;
        case "Vets":
            imageUrl = Vets
            break;
        case "Owners":
            imageUrl = Owners
            break;
        default:
        // code block
    }

    const divStyle = {
        backgroundImage: 'url(' + imageUrl + ')',
    };

    return (
        <div className="col s12 m6">
            <a href={props.url}>
                <div className="card">
                    <div className="card-content job-box" style={divStyle}>
                        <h2 className="center-align butlr-blue-text top-margin-0 font1">{props.role}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ServiceBtnB;