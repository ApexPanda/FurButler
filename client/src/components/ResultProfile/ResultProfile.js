import React, { Component } from "react";
import API from "../../utils/API";
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class ResultProfile extends Component {

    state = {
        profileLink: "/profile/" + this.props.id,
        rating: null,
    };

    componentDidMount() {
        this.loadRating();
    }

    loadRating = () => {
        API.getRating(this.props.id)
            .then(res =>
                this.setState({ rating: Math.trunc(res.data[0].avgRating) })
            )
            .catch(err => console.log(err));
    }

    render() {

        const images = [dog, cat, fish]
        const placeHolder = images[Math.floor(Math.random() * images.length)]
        let divStyle;

        if (this.props.image) {
            divStyle = {
                backgroundImage: 'url(' + this.props.image + ')',
            };
        } else {
            divStyle = {
                backgroundImage: 'url(' + placeHolder + ')',
            };
        }

        return (

            <div className="col s12 m9">
                <h2 className="header white-text font3">{this.props.first} {this.props.last}</h2>
                <div className="card horizontal butlr-blue white-text">
                    <div className="card-image result-profile-image"
                        style={divStyle}
                    >
                    </div>
                    <div className="card-stacked">
                        <div className="card-content  font-200">
                            <p>Pet {this.props.role}</p>
                            <p>{this.props.location}</p>
                            <p>Average Rating: {this.state.rating ? (
                                <span>{this.state.rating}/10</span>
                            ) : (
                                    <span>N/A</span>
                                )}
                            </p>
                        </div>
                        <div className="card-action">
                            <a href={this.state.profileLink} className="butlr-yellow-text font2">More Info</a>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
}

export default ResultProfile;