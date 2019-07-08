import React from "react";

function ProfileDiv(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.image + ')',
    };

    const profileLink = "/profile/" + props.id

    return (

        <div class="content-padding">

            <div id="profile-div" class="row" data-user-id={props.id}>

                <div class="col s12 m4">
                    <div class="card butlr-blue">
                        <div class="card-image profile-image" style={divStyle}></div>
                        <div class=" card-content white-text">
                            <span class="card-title butlr-green-text font3">{props.first} {props.last}</span>
                            <p>Pet {props.role}</p>
                            <p>{props.location}</p>
                            <p>Rating: <span>4.5/5</span></p>
                        </div>
                    </div>
                </div>

                <div class="col s12 m8">
                    <div class="card butlr-blue white-text">
                        <div class=" card-content">
                            <span class="card-title butlr-green-text font3">About Me</span>
                            <p>{props.about}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProfileDiv;