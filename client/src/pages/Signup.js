import React, { Component } from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            role: "",
            email: "",
            password: "",
            clientType: "petOwner",
            jobTitle: "None"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleRadioChange(event) {
        this.setState({
            clientType: event.target.name
        });
        const element = document.getElementById("jobs-div");
        this.state.clientType === "petOwner" ? element.classList.remove("hide") : element.classList.add("hide");
    }

    handleJobTitleChange(event) {
        console.log("event log: ", event.value);
        this.setState({
            jobTitle: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`Sign Up success for: ${this.state.firstName} ${this.state.lastName}`);
        event.preventDefault();
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
                                    <label for="first-name" className="center-align">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last-name" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                                    <label for="last-name" className="center-align">Last Name</label>
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
                                    <select id="job-title" value={this.state.value} onChange={this.handleJobTitleChange}>
                                        <option value="None" disabled selected>Select Option</option>
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
                                    <label for="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input id="password-again" type="password" />
                                    <label for="password-again">Re-type password</label>
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