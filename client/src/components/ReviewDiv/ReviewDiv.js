import React from "react";

function ReviewDiv(props) {

    const profileLink = "/profile/" + props.author

    return (

        <div className="row">
            <div className="col s12">

                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title butlr-green-text font2">{props.title}</span>

                            <p>Rating: {props.rating} / 10</p>

                            <br></br>
                            <p>{props.review}</p>
                        </div>
                        <div className="card-action">
                            <a href={profileLink} className="butlr-pink-text font2">View Author</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ReviewDiv;