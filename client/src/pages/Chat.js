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
      id: ''
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentDidMount() {
    sessionStorage.setItem("receiverId", this.state.receiverID);
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
    this.input.value = '';

    this.scrollToBottom();
  }

  // scrollToBottom() {
  //   var scrollingElement = (document.scrollingElement || document.body);
  //   scrollingElement.scrollTop = (scrollingElement.scrollHeight);
  // }

  scrollToTop = () => {
    this.messagesStart.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" })
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="container">
        <div className="padding-13 messages-div">
          <h1 className="profile-heading white-text center font1">Chat Messages</h1>
          <div ref={(el) => { this.messagesStart = el; }}></div>
          {this.state.messages.map((message) => {
            const _class = message.user === this.state.username ? 'message-left grow' : 'message-right grow right';
            return (
              <div className="row">
                <div className={_class}>
                  <p className="message-text">{message.text}</p>
                  <p className="message-info butlr-green-text">{message.user}<span className="right">{moment(message.date).format("h:mm | MM-DD-YYYY")}</span></p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="spacer row"></div>

        <div className="container textarea-div message-input">
          <textarea className="text-area white" ref={node => this.input = node}></textarea>
          <button className="btn-flat butlr-green-text" onClick={this.scrollToTop}><span className="hide-on-med-and-down">Back to </span>top</button><button className="btn-flat butlr-green-text" onClick={this.scrollToBottom}><span className="hide-on-med-and-down">Back to </span>bottom</button>
          <button className="btn btn-info butlr-green font2 send-btn right" onClick={this.onAddMessage}>Send</button>
        </div>

        <div ref={(el) => { this.messagesEnd = el; }}>
        </div>


      </div>
    );
  }
}
