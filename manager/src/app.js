import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC-yjKzeVyCUVDX7y9jfxCqfTTauVK2cfQ',
      authDomain: 'manager-805fe.firebaseapp.com',
      databaseURL: 'https://manager-805fe.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '948467369216'
    };
    firebase.initializeApp(config);
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
