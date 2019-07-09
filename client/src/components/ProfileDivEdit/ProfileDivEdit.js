import React, { Component } from "react";
import API from "../../utils/API";
import M from 'materialize-css';
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

function ProfileDivEdit(props) {

    const images = [dog, cat, fish]
    const placeHolder = images[Math.floor(Math.random() * images.length)]
    let divStyle;

    if (props.image) {
        divStyle = {
            backgroundImage: 'url(' + props.image + ')',
        };
    } else {
        divStyle = {
            backgroundImage: 'url(' + placeHolder + ')',
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.htmlFormSelect.init(elems);
    });

    return (

        <div id="profile-div" className="row card white" data-user-id={props.id}>
            <div className="col s12 m4">
                <div className="white">
                    <div className="card-image profile-image"
                        style={divStyle}>
                    </div>

                    <div className="card-content">

                        <textarea id="user-first-name" className="materialize-textarea"
                            placeholder={props.first}></textarea>
                        <label htmlFor="user-first-name">First</label>

                        <textarea id="user-last-name" className="materialize-textarea"
                            placeholder={props.last}></textarea>
                        <label htmlFor="user-last-name">Last</label>

                        <textarea id="user-image-url" className="materialize-textarea" placeholder={props.image}></textarea>
                        <label htmlFor="user-image-url">image url</label>

                        <div className="row">
                            <div className="input-field col s12">
                                <select id="user-role">
                                    <option value="" disabled defaultValue>{props.role}</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Walker">Walker</option>
                                    <option value="Groomer">Groomer</option>
                                    <option value="Sitter">Sitter</option>
                                </select>
                                <label htmlFor="user-role">Role</label>
                            </div>
                        </div>

                        <textarea id="user-location" className="materialize-textarea" placeholder={props.location}></textarea>
                        <label htmlFor="user-location">location</label>

                    </div>
                </div>
            </div>


            <div className="col s12 m8">
                <div className="white">
                    <div className=" card-content">
                        <span className="card-title butlr-green-text font3">About Me</span>
                        <textarea id="user-about-me" className="materialize-textarea  long-text-box"
                            placeholder={props.about}></textarea>
                        <label htmlFor="user-about-me">About Me</label>

                        <div className="row">
                            <a data-about-id={props.id}
                                className="about-save-btn waves-effect waves-light btn butlr-green right"><i
                                    className="material-icons">done</i></a>
                            <a data-about-id={props.id}
                                className="about-cancel-btn waves-effect waves-light btn grey right margin-right-5"><i
                                    className="material-icons" onClick={(e) => props.handleEditOff(e)}>clear</i></a>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    );
};

export default ProfileDivEdit;