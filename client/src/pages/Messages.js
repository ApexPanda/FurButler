import React, { Component } from "react";
import { database } from '../firebase';
import API from "../utils/API";
import Messages from "../components/Messages";

class MessagesPage extends Component {

    state = {
        users: [],
        user: '',
        receiverID: parseInt(this.props.match.params.id)
    };

    componentDidMount() {
        this.loadMessages();
    }

    loadMessages = () => {
        API.getProfile(this.state.receiverID)
            .then(res =>
                this.setState({ user: res.data })
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
                            <h2 className="profile-heading white-text center font2">No Results match your criteria</h2>
                        )}

                </div>
            </div>
        );
    }
}

export default MessagesPage;
