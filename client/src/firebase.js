import * as firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: 'fur-butlr-chat.firebaseapp.com',
  databaseURL: 'https://fur-butlr-chat.firebaseio.com',
  storageBucket: 'fur-butlr-chat.appspot.com'
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};