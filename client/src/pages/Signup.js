import React, { Component } from "react";
import API from "../utils/API";

class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: "",
        clientType: "petOwner",
        jobTitle: "None"
    };

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

    handleSubmit = (event) => {
        event.preventDefault();
        const jobTitleChange = this.state.clientType === "petOwner" ? "Owner" : this.state.jobTitle;
        this.setState({
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            email: this.state.email.trim(),
            password: this.state.password.trim(),
            jobTitle: jobTitleChange
        });

        let newUser = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            client_type: this.state.clientType,
            role: this.state.jobTitle,
            email: this.state.email,
            password: this.state.password
        };

        if (this.state.clientType === "serviceProvider" && this.state.jobTitle === "") {
            alert("Please select a job title");
        } else if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0 || this.state.password.length === 0) {
            alert("All fields must be filled out");
        } else if (this.state.password !== this.state.passwordCheck) {
            alert("Passwords do not match.");
        } else {
            API.createNewUser({
                newUser
            })
                .then(function (response) {
                    console.log('axios response: ', response);
                })
                .catch(function (error) {
                    console.log('axios error: ', error);
                });
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col s12 z-depth-6 card-panel">
                    <div className="content-padding">

                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <h1 className="font3">Sign Up</h1>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s6">
                                    <input id="first-name" type="text" className="validate" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                                    <label htmlFor="first-name" className="center-align">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last-name" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                                    <label htmlFor="last-name" className="center-align">Last Name</label>
                                </div>
                            </div>
                            <div className="row margin">
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
                            <div id="jobs-div" className="row margin hide">
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
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    <label htmlFor="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input id="password-again" type="password" className="validate" name="passwordCheck" value={this.state.passwordCheck} onChange={this.handleInputChange} />
                                    <label htmlFor="password-again">Re-type password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <button /*href="/results" */
                                        id="register-btn"
                                        className="btn waves-effect waves-light col s12 butlr-green font2"
                                        type="submit"
                                        name="action" >
                                        Register Now
                                    </button>
                                </div>
                                <div className="input-field col s12">
                                    <p className="margin center medium-small sign-up">Already have an account? <a href="#modal1"
                                        className="modal-trigger">Login</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;