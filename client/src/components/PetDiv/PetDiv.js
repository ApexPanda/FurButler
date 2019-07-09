import React from "react";

function PetDiv(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.image + ')',
    };

    return (

        <div class="row">
            <div class="col s12">

                <div class="card horizontal butlr-blue white-text">
                    <div class="card-image pet-image"
                        style={divStyle}>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <span class="card-title butlr-green-text font3">{props.name}</span>

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