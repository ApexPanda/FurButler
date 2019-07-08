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
        id: this.props.match.params.id

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

                <h1 className="profile-heading white-text center font1">Profile {this.state.id}</h1>

                <div className="container">
                    {this.state.user.length ? (
                        <div>
                            {this.state.users.map(user => (
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
                            <h2 className="profile-heading white-text center font2">No Profile matches your criteria</h2>
                        )}

                    {this.state.pets.length ? (
                        <div>
                            {this.state.pets.map(pet => (
                                <PetDiv
                                    key={pet.id}
                                    id={pet.id}
                                    first={pet.first_name}
                                    last={pet.last_name}
                                    role={pet.role}
                                    image={pet.image}
                                    location={pet.location}
                                />
                            ))}
                        </div>
                    ) : (
                            <h2 className="profile-heading white-text center font2">No Pets Currently</h2>
                        )}

                    {this.state.reviews.length ? (
                        <div>
                            {this.state.reviews.map(review => (
                                <ReviewDiv
                                    key={review.id}
                                    id={review.id}
                                    first={review.first_name}
                                    last={review.last_name}
                                    role={review.role}
                                    image={review.image}
                                    location={review.location}
                                />
                            ))}
                        </div>
                    ) : (
                            <h2 className="profile-heading white-text center font2">No Reviews Currently</h2>
                        )}
                </div>
            </div>
        );
    }
}

export default Profile;