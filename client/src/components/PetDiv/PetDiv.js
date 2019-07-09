import React from "react";

function PetDiv(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.image + ')',
    };

    return (

        <div className="row">
            <div className="col s12">

                <div className="card horizontal butlr-blue white-text">
                    <div className="card-image pet-image"
                        style={divStyle}>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title butlr-green-text font3">{props.name}</span>

                            <p>{props.type}</p>
                            <p>{props.location}</p>
                            <br></br>
                            <p>{props.about}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PetDiv;