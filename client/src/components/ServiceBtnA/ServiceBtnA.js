import React from "react";
import Walkers from "../../images/site/walkers.jpg"
import Sitters from "../../images/site/sitters.jpg"
import Kennels from "../../images/site/kennels.jpg"
import Parks from "../../images/site/parks.jpg"

function ServiceBtnA(props) {

    let imageUrl

    switch (props.role) {
        case "Walkers":
            imageUrl = Walkers
            break;
        case "Sitters":
            imageUrl = Sitters
            break;
        case "Kennels":
            imageUrl = Kennels
            break;
        case "Parks":
            imageUrl = Parks
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
                        <h2 className="center-align white-text top-margin-0 font1">{props.role}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ServiceBtnA;