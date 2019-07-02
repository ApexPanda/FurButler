import React from "react";

function Signup() {
    return (
        
        <div className="container">
            <div className="col s12 z-depth-6 card-panel">
                <div className="content-padding">

                    <form className="login-form">
                        <div className="row">
                            <div className="input-field col s12 center">
                                <h1 className="font3">Sign Up</h1>
                            </div>
                        </div>
                        <div className="row margin">
                            <div className="input-field col s6">
                                <input id="first-name" type="text" className="validate">
                                    <label for="first-name" className="center-align">First Name</label>
                    </div>
                                <div className="input-field col s6">
                                    <input id="last-name" type="text" className="validate">
                                        <label for="last-name" className="center-align">Last Name</label>
                    </div>
                                </div>
                                <div className="row margin">
                                    <p>
                                        <label>
                                            <input name="group1" type="radio" id="pet-owner" className="profile-type" checked />
                                            <span>Pet Owner</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio" id="service-provider" className="profile-type" />
                                            <span>Service Provider</span>
                                        </label>
                                    </p>
                                </div>
                                <div id="jobs-div" className="row margin hide">
                                    <div className="input-field col s12">
                                        <select id="job-title">
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
                                        <input id="email" type="email" className="validate">
                                            <label for="email" className="center-align">Email</label>
                    </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" className="validate">
                                                <label for="password">Password</label>
                    </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <input id="password-again" type="password">
                                                    <label for="password-again">Re-type password</label>
                    </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <a href="/results" id="register-btn"
                                                        className="btn waves-effect waves-light col s12 butlr-green font2">Register
                            Now</a>
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
                        
export default Signup;