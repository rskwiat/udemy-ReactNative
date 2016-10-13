import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/loginForm';

let ScreenHeight = Dimensions.get("window").height;


class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyCCm0p_LZaB5R-2RbbPVBVEzG4JWiBsbVo",
      authDomain: "rnauth-a03c9.firebaseapp.com",
      databaseURL: "https://rnauth-a03c9.firebaseio.com",
      storageBucket: "rnauth-a03c9.appspot.com",
      messagingSenderId: "230126032754"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false })
      }
    });

  }

  renderContent(){

    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={()=> firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      break;
      case false:
        return <LoginForm />
      break;
      default:
        return(
          <View style={styles.spinnerView}>
            <Spinner size="large" />
          </View>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerTitle="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}

export default App;
