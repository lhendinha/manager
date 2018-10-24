import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk';

import reducers from './Reducers'
import Router from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPHRMDOio6KYtmYmcHithz0o3rvnIvTbY",
      authDomain: "manager-5fa3a.firebaseapp.com",
      databaseURL: "https://manager-5fa3a.firebaseio.com",
      projectId: "manager-5fa3a",
      storageBucket: "manager-5fa3a.appspot.com",
      messagingSenderId: "157269335671"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;