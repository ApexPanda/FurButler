import React, { Component } from "react";
import API from "../utils/API";
import ResultProfile from "../components/ResultProfile";

class Results extends Component {

    state = {
        users: [],
        role: this.props.match.params.role

    };

    componentDidUpdate() {
        console.log("update");
        console.log(this.props.match.params);
        console.log(this.state.role);
        if (this.props.match.params.role != this.state.role) {
            
            this.setState({
                role: this.props.match.params.role
            },
            ()=> this.loadResults());
        }
    }
    
    componentDidMount() {
        console.log("mount");
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

export default Results;

