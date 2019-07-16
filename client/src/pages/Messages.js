import React, { Component } from "react";
import { database } from '../firebase';
import API from "../utils/API";

class Messages extends Component {


    state = {
        users: [],
        role: this.props.match.params.role

    };

    componentDidMount() {
        this.loadResults();
        console.log(this.state.role)
    }

    loadResults = () => {
        API.getRole(this.state.role)
            .then(res =>
                this.setState({ users: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

                <h1 className="profile-heading white-text center font1">Pet {this.state.role}s</h1>

                <div className="container">
                    {this.state.users.length ? (
                        <div>
                            {this.state.users.map(user => (
                                <ResultProfile
                                    key={user.id}
                                    id={user.id}
                                    first={user.first_name}
                                    last={user.last_name}
                                    role={user.role}
                                    image={user.image}
                                    location={user.location}
                                />
                            ))}
                        </div>
                    ) : (
                            <h2 className="profile-heading white-text center font2">No Results match your criteria</h2>
                        )}

                </div>
            </div>
        );
    }
}

export default Messages;
