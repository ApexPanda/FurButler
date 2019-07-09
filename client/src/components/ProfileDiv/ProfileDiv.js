import React, { Component } from "react";
import ProfileDivEdit from "../ProfileDivEdit";
import API from "../../utils/API";
import cat from "../../images/site/default-profile-1.jpg";
import dog from "../../images/site/default-profile-2.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class ProfileDiv extends Component {

    state = {
        rating: null,
        editing: true
    };

    // test
    handleEditOn = () => {
        this.setState({ editing: true })
    }

    handleEditOff = () => {
        this.setState({ editing: false })
    }
    // end

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

            <div id="profile-div" className="row" data-user-id={this.props.id}>

                {this.state.editing && this.props.loggedIn && this.props.loginId === this.props.id ? (
                    <ProfileDivEdit
                        key={this.props.id}
                        id={this.props.id}
                        first={this.props.first}
                        last={this.props.last}
                        type={this.props.type}
                        role={this.props.role}
                        image={this.props.image}
                        location={this.props.location}
                        about={this.props.about}
                        handleEditOff={this.handleEditOff}

                    />) : (
                        <div>
                            <div className="col s12 m4">
                                <div className="card butlr-blue">
                                    <div className="card-image profile-image" style={divStyle}></div>
                                    <div className=" card-content white-text">
                                        <span className="card-title butlr-green-text font3">{this.props.first} {this.props.last}</span>
                                        <p>Pet {this.props.role}</p>
                                        <p>{this.props.location}</p>
                                        <p>Rating: {this.state.rating ? (
                                            <span>{this.state.rating}/10</span>
                                        ) : (
                                                <span>N/A</span>
                                            )}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m8">
                                <div className="card butlr-blue white-text about-section">
                                    <div className=" card-content">
                                        <span className="card-title butlr-green-text font3">About Me
                            {this.props.loggedIn && this.props.loginId === this.props.id ? (
                                                <button className="btn-flat right butlr-green-text" onClick={this.handleEditOn}>EDIT<i
                                                    className="material-icons right">edit</i></button>
                                            ) : null}
                                        </span>
                                        <p>{this.props.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                <span className="col right">
                    {this.state.editing ? (<p className="green-text">Edit ON</p>) : (<p className="red-text">Edit OFF</p>)}
                    <button onClick={this.handleEditOn}>On</button>
                    <button onClick={this.handleEditOff}>Off</button>
                </span>
            </div >

        );
    };
}

export default ProfileDiv;