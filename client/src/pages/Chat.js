import React, { Component } from 'react';
import { database } from '../firebase';
import moment from 'moment';
import API from "../utils/API";

let d = Date(Date.now());
d.toString()

export default class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      username: '',
      id: '',
      room: ''
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentDidMount() {
    sessionStorage.setItem("receiverId", this.state.receiverID);
    sessionStorage.setItem("rooms", this.state.room);
}

  componentWillMount() {
    const id = sessionStorage.getItem('userId');
    this.setState({ id: id ? id : 'Unknown' })

    const username = sessionStorage.getItem('userName');
    this.setState({ username: username ? username : 'Unknown' })

    const receiverID = parseInt(this.props.match.params.id);
    this.setState({ receiverID: receiverID ? receiverID : 'Unknown' })


    const messagesRef = database.ref('messages')
      .orderByKey()
      .limitToLast(100);

    messagesRef.on('value', snapshot => {
      let messagesObj = snapshot.val();
      let messages = [];
      Object.keys(messagesObj).forEach(key => messages.push(messagesObj[key]));
      messages = messages.map((message) => { return { text: message.text, user: message.user, date: message.date, id: message.key } })
      this.setState(prevState => ({
        messages: messages,
      }));
    });
  }

  onAddMessage(event) {
    event.preventDefault();
    database.ref('messages').push({ text: this.input.value, user: this.state.username, id: this.state.id, receiverID: this.state.receiverID, date: d });
    database.ref('rooms').push({ roomNumber: this.state.room+1, text: this.input.value, user: this.state.username, id: this.state.id, receiverID: this.state.receiverID, date: d });
    this.input.value = '';
  }

  render() {
    return (
      <div className="container">
        <div className="padding-13 messages-div">
          <h1 className="profile-heading white-text center font1">Chat Messages</h1>
          {this.state.messages.map((message) => {
            const _class = message.user === this.state.username ? 'message-left' : 'message-right';
            return (
              <div className={_class}>
                <p className="message-text">{message.text}</p>
                <p className="message-info butlr-green-text">{message.user}<span className="right">{moment(message.date).format("h:mm | MM-DD-YYYY")}</span></p>
              </div>
            )
          })}
        </div>
        <div className="container textarea-div">
          <textarea className="text-area white" ref={node => this.input = node}></textarea>
          <button className="btn btn-info send-btn " onClick={this.onAddMessage}>Send</button>
        </div>
      </div>
    );
  }
}
