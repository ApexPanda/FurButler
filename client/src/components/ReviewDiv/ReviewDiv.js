import React from "react";

function ReviewDiv(props) {

    const profileLink = "/profile/" + props.author

    return (

        <div class="row">
            <div class="col s12">

                <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                            <span class="card-title butlr-green-text font2">{props.title}</span>

                            <p>Rating: {props.rating} / 10</p>

                            <br></br>
                            <p>{props.review}</p>
                        </div>
                        <div class="card-action">
                            <a href={profileLink} class="butlr-pink-text font2">View Author</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ReviewDiv;