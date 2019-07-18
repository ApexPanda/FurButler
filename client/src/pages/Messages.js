import React, { Component } from "react";
import API from "../utils/API";
import Messages from "../components/Messages";

class MessagesPage extends Component {

    state = {
        users: [],
        userId: this.props.match.params.id
    };

    componentDidMount() {
        this.loadChats();
        console.log(this.state.userId)
    }

    loadChats = () => {
        API.getAllUsers(this.state.userId)
            .then(res =>
                this.setState({ users: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

                <h1 className="profile-heading white-text center font1">Messages</h1>

                <div className="container">
                    {this.state.users.length ? (
                        <div>
                            {this.state.users.map(user => (
                                <Messages
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
                            <h3 className="profile-heading white-text center font2">you have no messages</h3>
                        )}

                </div>
            </div>
        );
    }
}

export default MessagesPage;
