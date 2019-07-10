import React, { Component } from "react";
import PetDivEdit from "../PetDivEdit"
class PetDiv extends Component {
    state = {
        rating: null,
        editing: false
    };

    // test
    handleEditOn = () => {
        this.setState({ editing: true })
    }

    handleEditOff = () => {
        this.setState({ editing: false })
    }
    // end

    render() {
        const divStyle = {
            backgroundImage: 'url(' + this.props.image + ')',
        };

        return (
            <div className="row">
                {this.state.editing && this.props.loggedIn && this.props.loginId === this.props.owner ? (
                    <PetDivEdit
                        key={this.props.id}
                        id={this.props.id}
                        owner={this.props.owner}
                        name={this.props.name}
                        type={this.props.type}
                        about={this.props.about}
                        image={this.props.image}
                        location={this.props.location}
                        handleEditOff={this.handleEditOff}

                    />) : (
                        <div>
                            <div className="col s12">

                                <div className="card horizontal butlr-blue white-text">
                                    <div className="card-image pet-image"
                                        style={divStyle}>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <span className="card-title butlr-green-text font3">{this.props.name}
                                                {this.props.loggedIn && this.props.loginId === this.props.owner ? (
                                                    <button className="btn-flat right butlr-yellow-text" onClick={this.handleEditOn}>EDIT<i
                                                        className="material-icons right">edit</i></button>
                                                ) : null}</span>

                                            <p>{this.props.type}</p>
                                            <p>{this.props.location}</p>
                                            <br></br>
                                            <p>{this.props.about}</p>
                                        </div>

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
            </div>

        );
    };
}

export default PetDiv;