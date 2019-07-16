import React, { Component } from "react";
import API from "../../utils/API";
import moment from 'moment';

class ReviewDiv extends Component {
    state = {
        image: null
    }

    componentDidMount() {
        this.loadImage();
        console.log(this.state.id)
    }

    loadImage = () => {
        API.getImage(this.props.author)
            .then(res =>
                this.setState({ image: res.data.image })
            )
            .catch(err => console.log(err));
    }

    render() {
        const profileLink = "/profile/" + this.props.author
        const divStyle = {
            backgroundImage: 'url(' + this.state.image + ')',
        };
        return (

            <div className="row">

                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                {this.state.image ?
                                    <span className="card-image right small-profile-img"
                                        style={divStyle}
                                    /> : null}

                                <span className="card-title butlr-green-text font2">{this.props.title}</span>

                                <p>Rating: {this.props.rating} / 10</p>

                                <br />
                                <p>{this.props.review}</p>
                                <br />
                                <p className="date-text">Posted: {moment(this.props.date).format("MM-DD-YYYY")}</p>
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
}

export default ReviewDiv;