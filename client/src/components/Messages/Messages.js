import React, { Component } from "react";
import API from "../../utils/API";
import dog from "../../images/site/default-profile-2.jpg";
import cat from "../../images/site/default-profile-1.jpg";
import fish from "../../images/site/default-profile-3.jpg";

class MessagesCard extends Component {

    state = {
        chatLink: "/chat/" + this.props.id

    };

    componentDidMount() {
        this.loadMessages();
    }

    loadMessages = () => {
        API.getMessages(this.props.first_name)
            .then(res =>
                this.setState({ user: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {

        const images = [dog, cat, fish]
        const placeHolder = images[Math.floor(Math.random() * images.length)]
        let divStyle;

        if (this.props.image) {
            divStyle = {
                backgroundImage: 'url(' + this.props.image + ')',
            };
        } else {
            divStyle = {
                backgroundImage: 'url(' + placeHolder + ')',
            };
        }

        return (

            <div className="col s6 m6">
         
            <a href={this.state.profileLink} className="butlr-yellow-text font2">
            <a href={this.state.chatLink} className="butlr-yellow-text font2">
                <div className="card horizontal result-card white-text">
                    <div className="card-image result-profile-image"
                        style={divStyle}
                    >
                    </div>
                    <div className="card-stacked">
                        <div className="card-content  font-200">
                            <span className="card-title butlr-green-text font3">{this.props.first} {this.props.last}</span>
                            <p>Pet {this.props.role}</p>
                            <p>{this.props.location}</p>
                        </div>                    
                    </div>
                </div>
            </a></a>
                <br />
            </div >
        );
    };
}

export default MessagesCard;