import React, { Component } from "react";
import API from "../../utils/API";
import M from 'materialize-css';
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class ProfileDivEdit extends Component {

    state = {
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

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });

        return (

            <div id="profile-div" className="row" data-user-id={this.props.id}>
                <div className="col s12 m4">
                    <div className="card white">
                        <div className="card-image profile-image"
                            style={divStyle}>
                        </div>

                        <div className="card-content">

                            <textarea id="user-first-name" className="materialize-textarea"
                                placeholder={this.props.first}></textarea>
                            <label for="user-first-name">First</label>

                            <textarea id="user-last-name" className="materialize-textarea"
                                placeholder={this.props.last}></textarea>
                            <label for="user-last-name">Last</label>

                            <textarea id="user-image-url" className="materialize-textarea" placeholder={this.props.image}></textarea>
                            <label for="user-image-url">image url</label>

                            <div className="row">
                                <div className="input-field col s12">
                                    <select id="user-role">
                                        <option value="" disabled defaultValue>{this.props.role}</option>
                                        <option value="Owner">Owner</option>
                                        <option value="Walker">Walker</option>
                                        <option value="Groomer">Groomer</option>
                                        <option value="Sitter">Sitter</option>
                                    </select>
                                    <label for="user-role">Role</label>
                                </div>
                            </div>

                            <textarea id="user-location" className="materialize-textarea" placeholder={this.props.location}></textarea>
                            <label for="user-location">location</label>

                            <div className="row">
                                <a data-user-id={this.props.id}
                                    className="user-save-btn waves-effect waves-light btn butlr-green right"><i
                                        className="material-icons">done</i></a>
                                <a data-user-id={this.props.id}
                                    className="user-cancel-btn waves-effect waves-light btn grey right margin-right-5"><i
                                        className="material-icons">clear</i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col s12 m8">
                    <div className="card white">
                        <div className=" card-content">
                            <span className="card-title butlr-green-text font3">About Me</span>
                            <textarea id="user-about-me" className="materialize-textarea  long-text-box"
                                placeholder={this.props.about}></textarea>
                            <label for="user-about-me">About Me</label>

                            <div className="row">
                                <a data-about-id={this.props.id}
                                    className="about-save-btn waves-effect waves-light btn butlr-green right"><i
                                        className="material-icons">done</i></a>
                                <a data-about-id={this.props.id}
                                    className="about-cancel-btn waves-effect waves-light btn grey right margin-right-5"><i
                                        className="material-icons">clear</i></a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        );
    };
}

export default ProfileDivEdit;