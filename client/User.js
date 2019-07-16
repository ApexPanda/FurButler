import React, { Component } from 'react';
import { database } from './firebase';
import API from "../utils/API";

export default class User extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      user: '',
      id: ''
    };
  }

  loadUser = () => {
    API.getProfile(this.state.firstName)
        .then(res =>
            this.setState({ user: res.data })
        )
        .catch(err => console.log(err));
  }

  loadID = () => {
    API.getProfile(this.state.id)
        .then(res =>
            this.setState({ user: res.data })
        )
        .catch(err => console.log(err));
  }

  componentWillMount() {
    const userRef = database.ref('users')
      .orderByKey()
      .limitToLast(100);

    userRef.once('value', snapshot => {
      const users = [snapshot.val()];
      this.setState({users: users});
    });
  }

  onNameChange(e) {
    this.setState({username: this.state.firstName})
  }

  onAddClick(e) {
    e.preventDefault();
    database.ref('users').push({username: this.state.firstName});
    database.ref('users').push({userId: this.state.userId});
    database.ref('id').push({id: this.state.id});
    localStorage.setItem('chat_username', this.state.firstName);
    localStorage.setItem('chat_id', this.state.userId);
    this.props.history.push('/chat');
  }

  render() {
    return(
    <div className="form-group col-md-4">
        <label >Name: </label>
        <input className="form-control input-sm" type="text"  onChange={this.onNameChange.bind(this)}/>
        <button className="btn btn-info" onClick={this.onAddClick.bind(this)}>Add</button>
    </div>
    );
  }
}