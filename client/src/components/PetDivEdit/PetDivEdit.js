import React, { Component } from "react";
import M from 'materialize-css';
import API from "../../utils/API";
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class PetDivEdit extends Component {
    state = {
        petId: this.props.id,
        name: this.props.name,
        image: this.props.image,
        petType: this.props.type,
        aboutMe: this.props.about,
        location: this.props.location,

        images: [dog, cat, fish],
        placeHolder: ""
    };

    componentDidMount() {
        M.AutoInit();
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

    updatePetProfile = (data) => {
        API.updatePet(data)
            .then(res =>
                // this.props.handleEditOff()
                window.location.reload()

            )
            .catch(err => console.log(err));
    }

    deletePetProfile = (id) => {
        API.deletePet(id)
            .then(res =>
                // this.props.handleEditOff()
                window.location.reload()

            )
            .catch(err => console.log(err));
    }

    handleDelete = () => {
        this.deletePetProfile(this.state.petId)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: this.state.name.trim(),
            image: this.state.image ? (this.state.image.trim()) : null,
            petType: this.state.petType.trim(),
            location: this.state.location ? (this.state.location.trim()) : null,
            aboutMe: this.state.aboutMe ? (this.state.aboutMe.trim()) : null,
        });

        let petData = {
            id: this.state.petId,
            pet_name: this.state.name,
            image: this.state.image,
            pet_type: this.state.petType,
            location: this.state.location,
            about_me: this.state.aboutMe
        };

        if (this.state.name.length === 0 || this.state.petType.length === 0) {
            alert("Name and Type must be filled out.");
        } else {
            this.updatePetProfile(petData);
        }

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


            <div className="row card white" data-user-id={this.props.id}>
                <form className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="col s12 m4">
                        <div className="white">
                            <div className="card-image profile-image"
                                style={divStyle}>
                            </div>

                            <div className="card-content">

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="name" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                        <label htmlFor="name" className="center-align active">Pet Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="image" type="text" className="validate" name="image" value={this.state.image} onChange={this.handleInputChange} />
                                        <label htmlFor="image" className="center-align active">Image URL</label>
                                    </div>
                                </div>
                                <div id="jobs-div" className="row">
                                    <div className="input-field col s12">
                                        <select name="petType" value="None" onChange={this.handleInputChange}>
                                            <option value="None" disabled>Select Option</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Bird">Bird</option>
                                            <option value="Rodent">Rodent</option>
                                            <option value="Reptile">Reptile</option>
                                            <option value="Amphibian">Amphibian</option>
                                            <option value="Bug">Bug</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <label>Pet Type</label>
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
                        <span className="card-title butlr-green-text font3">About Me
                          <button className="btn-flat right butlr-pink-text" onClick={this.handleDelete}>DELETE<i
                                className="material-icons right">delete</i></button>
                        </span>
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

export default PetDivEdit;