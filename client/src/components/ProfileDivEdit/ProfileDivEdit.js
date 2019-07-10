import React, { Component } from "react";
import M from 'materialize-css';
import API from "../../utils/API";
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class ProfileDivEdit extends Component {
    state = {
        userId: this.props.id,
        firstName: this.props.first,
        lastName: this.props.last,
        image: this.props.image,
        clientType: this.props.type,
        jobTitle: this.props.role,
        aboutMe: this.props.about,
        location: this.props.location,

        images: [dog, cat, fish],
        placeHolder: ""

    };


    componentDidMount() {
        M.AutoInit();
        if (this.state.clientType === "serviceProvider") {
            const element = document.getElementById("jobs-div");
            element.classList.remove("hide");
        }
        this.setState({
            placeHolder: this.state.images[Math.floor(Math.random() * this.state.images.length)]
        })
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleRadioChange = (event) => {
        this.setState({
            clientType: event.target.name
        });
        const element = document.getElementById("jobs-div");
        this.state.clientType === "petOwner" ? element.classList.remove("hide") : element.classList.add("hide");
    }

    handleJobTitleChange = (event) => {
        this.setState({
            jobTitle: event.target.value
        });
    }

    updateProfile = (data) => {
        API.updateUser(data)
            .then(res =>
                // this.props.handleEditOff()
                window.location.reload()

            )
            .catch(err => console.log(err));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const jobTitleChange = this.state.clientType === "petOwner" ? "Owner" : this.state.jobTitle;
        this.setState({
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            image: this.state.image ? (this.state.image.trim()) : null,
            clientType: this.state.clientType.trim(),
            jobTitle: jobTitleChange,
            location: this.state.location ? (this.state.location.trim()) : null,
            aboutMe: this.state.aboutMe ? (this.state.aboutMe.trim()) : null,
        });

        let userData = {
            id: this.state.userId,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            image: this.state.image,
            client_type: this.state.clientType,
            role: this.state.jobTitle,
            location: this.state.location,
            about_me: this.state.aboutMe
        };

        this.updateProfile(userData);

    }

    render() {

        let divStyle;

        if (this.state.image) {
            divStyle = {
                backgroundImage: 'url(' + this.state.image + ')',
            };
        } else {
            divStyle = {
                backgroundImage: 'url(' + this.state.placeHolder + ')',
            };
        }

        return (

            <div id="profile-div" className="row card white" data-user-id={this.props.id}>
                <form className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="col s12 m4">
                        <div className="white">
                            <div className="card-image profile-image"
                                style={divStyle}>
                            </div>

                            <div className="card-content">

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="first-name" type="text" className="validate" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                                        <label htmlFor="first-name" className="center-align active">First Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="last-name" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                                        <label htmlFor="lastName" className="center-align active">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="image" type="text" className="validate" name="image" value={this.state.image} onChange={this.handleInputChange} />
                                        <label htmlFor="image" className="center-align active">Image URL</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <p>
                                        <label>
                                            <input
                                                value="petOwner"
                                                name="petOwner"
                                                type="radio"
                                                id="pet-owner"
                                                className="profile-type"
                                                checked={this.state.clientType === "petOwner"}
                                                onChange={this.handleRadioChange} />
                                            <span>Pet Owner</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                value="serviceProvider"
                                                name="serviceProvider"
                                                type="radio"
                                                id="service-provider"
                                                className="profile-type"
                                                checked={this.state.clientType === "serviceProvider"}
                                                onChange={this.handleRadioChange} />
                                            <span>Service Provider</span>
                                        </label>
                                    </p>
                                </div>
                                <div id="jobs-div" className="row hide">
                                    <div className="input-field col s12">
                                        <select id="job-title" value="None" onChange={this.handleJobTitleChange}>
                                            <option value="None" disabled>Select Option</option>
                                            <option value="Walker">Pet Walker</option>
                                            <option value="Groomer">Pet Groomer</option>
                                            <option value="Sitter">Pet Sitter</option>
                                        </select>
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="location" type="text" className="validate" name="location" value={this.state.location} onChange={this.handleInputChange} />
                                        <label htmlFor="location" className="center-align active">location</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m8 margin-about-edit">
                        <span className="card-title butlr-green-text font3">About Me</span>
                        <textarea id="aboutMe" type="text" className="validate" name="aboutMe" value={this.state.aboutMe} className="materialize-textarea long-text-box"
                            onChange={this.handleInputChange} />
                        <label htmlFor="aboutMe">About Me</label>

                        <div className="row">
                            <div className="input-field col s12">
                                <button data-about-id={this.props.id}
                                    className="about-save-btn waves-effect waves-light btn butlr-green right"
                                    type="submit"
                                    name="action">
                                    <i className="material-icons">done</i></button>
                                <button data-about-id={this.props.id}
                                    className="about-cancel-btn waves-effect waves-light btn grey right margin-right-5"
                                    onClick={(e) => this.props.handleEditOff(e)}><i
                                        className="material-icons">clear</i></button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>

        );
    };
}

export default ProfileDivEdit;