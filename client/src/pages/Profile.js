import React, { Component } from "react";
import API from "../utils/API";
import ProfileDiv from "../components/ProfileDiv";
import PetDiv from "../components/PetDiv";
import ReviewDiv from "../components/ReviewDiv";

class Profile extends Component {

    state = {
        user: [],
        pets: [],
        reviews: [],
        id: this.props.match.params.id,

        loggedIn: true

    };

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

                        {this.state.user.length ? (
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
                                    />
                                ))}
                            </div>
                        ) : (
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
                                        name={pet.pet_name}
                                        type={pet.pet_type}
                                        about={pet.about_me}
                                        image={pet.image}
                                        location={pet.location}
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
                        {this.state.loggedIn ? (<p className="green-text">Logged IN</p>) : (<p className="red-text">Logged OUT</p>)}
                    </div>
                </div>



            </div>
        );
    }
}

export default Profile;