import React from "react";

function PetDiv(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.image + ')',
    };

    const profileLink = "/profile/" + props.id

    return (

        <div className="col s12 m9">
            <h2 className="header white-text font3">{props.first} {props.last}</h2>
            <div className="card horizontal butlr-blue white-text">
                <div className="card-image result-profile-image"
                    style={divStyle}
                >
                </div>
                <div className="card-stacked">
                    <div className="card-content  font-200">
                        <p>Pet {props.role}</p>
                        <p>{props.location}</p>
                        <p>Average Rating: ****</p>
                    </div>
                    <div className="card-action">
                        <a href={profileLink} className="butlr-yellow-text font2">More Info</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PetDiv;