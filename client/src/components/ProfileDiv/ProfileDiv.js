import React from "react";

function ProfileDiv(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.image + ')',
    };

    return (

        <div id="profile-div" className="row" data-user-id={props.id}>

            <div className="col s12 m4">
                <div className="card butlr-blue">
                    <div className="card-image profile-image" style={divStyle}></div>
                    <div className=" card-content white-text">
                        <span className="card-title butlr-green-text font3">{props.first} {props.last}</span>
                        <p>Pet {props.role}</p>
                        <p>{props.location}</p>
                        <p>Rating: <span>4.5/5</span></p>
                    </div>
                </div>
            </div>

            <div className="col s12 m8">
                <div className="card butlr-blue white-text about-section">
                    <div className=" card-content">
                        <span className="card-title butlr-green-text font3">About Me</span>
                        <p>{props.about}</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfileDiv;