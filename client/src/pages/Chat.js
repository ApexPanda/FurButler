import React, { Component } from 'react';
import { database } from '../firebase';

let d = Date(Date.now());
d.toString() 

export default class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      username: '',
      id: '',
      receiverID: ''
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentWillMount() {
    const id = sessionStorage.getItem('userId');
    this.setState({id: id ? id : 'Unknown'})

    const username = sessionStorage.getItem('userName');
    this.setState({username: username ? username : 'Unknown'})

    const receiverID = sessionStorage.getItem('receiverId');
    this.setState({receiverID: receiverID ? receiverID : 'Unknown'})


    const messagesRef = database.ref('messages')
      .orderByKey()
      .limitToLast(100);

    messagesRef.on('value', snapshot => {
      let messagesObj = snapshot.val();
      let messages = [];
      Object.keys(messagesObj).forEach(key =>  messages.push(messagesObj[key]));
      messages = messages.map((message) => { return {text: message.text, user: message.user, id: message.key}})
      this.setState(prevState => ({
        messages: messages,
      }));
    });
  }

  onAddMessage(event) {
    event.preventDefault();
    database.ref('messages').push({text: this.input.value, user: this.state.username, id: this.state.id, receiverID: this.state.receiverID, date: d});
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <div className="padding-13 messages-div">
            <h2>Chat Messages</h2>
            {this.state.messages.map((message) => {
             const _class = message.user === this.state.username ? 'message-left container' : 'message-right container';
            return (
                <div className={_class}>
                  <h6 className="name-heading">{message.user}</h6>
                  <p className="marg-left-10">{message.text}</p>
                  <span className="time-left"></span>
                </div>
            )
            })}
        </div>
      <div className="container textarea-div">
        <textarea className="text-area" ref={node => this.input = node}></textarea>
        <button className="btn btn-info send-btn " onClick={this.onAddMessage}>Send</button>
      </div>
    </div>
    );
  }
}
