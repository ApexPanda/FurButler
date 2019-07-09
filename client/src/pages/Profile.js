import React, { Component } from "react";
import API from "../utils/API";
import ProfileDiv from "../components/ProfileDiv";
import ProfileDivEdit from "../components/ProfileDivEdit";
import PetDiv from "../components/PetDiv";
import ReviewDiv from "../components/ReviewDiv";

class Profile extends Component {

    state = {
        user: [],
        pets: [],
        reviews: [],
        id: parseInt(this.props.match.params.id),


        loginId: 1,
        loggedIn: true,
        editing: false

    };

    // testing functions
    handleLoginTest = () => {
        this.setState({ loggedIn: true })
    }

    handleLogoutTest = () => {
        this.setState({ loggedIn: false })
    }

    handleEditOn = () => {
        this.setState({ editing: true })
    }

    handleEditOff = () => {
        this.setState({ editing: false })
    }

    handleIdMinus = () => {
        this.setState({ loginId: this.state.loginId - 1 })
    }

    handleIdPlus = () => {
        this.setState({ loginId: this.state.loginId + 1 })
    }
    // end

    componentDidMount() {
        this.loadProfile();
        this.loadPets();
        this.loadReviews();
        console.log(this.state.id)
    }

    loadProfile = () => {
        API.getProfile(this.state.id)
            .then(res =>
                this.setState({ user: res.data })
            )
            .catch(err => console.log(err));
    }

    loadPets = () => {
        API.getPets(this.state.id)
            .then(res =>
                this.setState({ pets: res.data })
            )
            .catch(err => console.log(err));
    }

    loadReviews = () => {
        API.getReviews(this.state.id)
            .then(res =>
                this.setState({ reviews: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {

        return (

            <div>

                <div className="container grey lighten-4">

                    <div id="profile-header"></div>

                    <div className="content-padding">

                        {this.state.user.length && !this.state.editing ? (
                            <div>
                                {this.state.user.map(user => (
                                    <ProfileDiv
                                        key={user.id}
                                        id={user.id}
                                        first={user.first_name}
                                        last={user.last_name}
                                        role={user.role}
                                        image={user.image}
                                        location={user.location}
                                        about={user.about_me}
                                        loggedIn={this.state.loggedIn}
                                        loginId={this.state.loginId}
                                        handleEditOn={this.handleEditOn}
                                    />
                                ))}
                            </div>
                        ) : this.state.user.length && this.state.loginId === this.state.id && this.state.editing ?
                                <div>
                                    {this.state.user.map(user => (
                                        <ProfileDivEdit
                                            key={user.id}
                                            id={user.id}
                                            first={user.first_name}
                                            last={user.last_name}
                                            role={user.role}
                                            image={user.image}
                                            location={user.location}
                                            about={user.about_me}
                                            loggedIn={this.state.loggedIn}
                                            handleEditOff={this.handleEditOff}

                                        />
                                    ))}
                                </div> : (
                                    <div>
                                        <br></br>
                                        <p className="center-align font2">No Profile Found</p>
                                        <br></br>
                                    </div>
                                )}

                        <h4 className="center-align font1">My Pets</h4>
                        {this.state.pets.length ? (
                            <div>
                                {this.state.pets.map(pet => (
                                    <PetDiv
                                        key={pet.id}
                                        id={pet.id}
                                        owner={pet.owner_id}
                                        name={pet.pet_name}
                                        type={pet.pet_type}
                                        about={pet.about_me}
                                        image={pet.image}
                                        location={pet.location}
                                        loggedIn={this.state.loggedIn}
                                        loginId={this.state.loginId}
                                    />
                                ))}
                            </div>
                        ) : (
                                <div>
                                    <br></br>
                                    <p className="center-align font2">No pets currently</p>
                                    <br></br>
                                </div>
                            )}

                        <h4 className="center-align font1">Reviews</h4>
                        {this.state.reviews.length ? (
                            <div>
                                {this.state.reviews.map(review => (
                                    <ReviewDiv
                                        key={review.id}
                                        id={review.id}
                                        title={review.title}
                                        rating={review.rating}
                                        review={review.review}
                                        author={review.author_id}
                                        owner={review.owner_id}
                                    />
                                ))}
                            </div>
                        ) : (
                                <div>
                                    <br></br>
                                    <p className="center-align font2">No Reviews currently</p>
                                    <br></br>
                                </div>
                            )}
                        {/* State test buttons */}
                        <div className="row">
                            <span className="col">
                                {this.state.loggedIn ? (<p className="green-text">Logged IN</p>) : (<p className="red-text">Logged OUT</p>)}
                                <button onClick={this.handleLoginTest}>In</button>
                                <button onClick={this.handleLogoutTest}>Out</button>
                            </span>
                            <span className="col">
                                <p>login ID: <strong className="blue-text">{this.state.loginId}</strong></p>
                                <button onClick={this.handleIdMinus}>-</button>
                                <button onClick={this.handleIdPlus}>+</button>
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Profile;