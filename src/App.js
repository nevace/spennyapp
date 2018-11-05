import React, { Component } from "react";
import { Root, Spinner } from "native-base";
import { Navigation, TabNavigation } from "./routes";
import firebase from "react-native-firebase";

export default class App extends Component {
  state = { loggedIn: true, loading: true };

  componentWillMount() {
    firebase
      .auth()
      .onAuthStateChanged(user =>
        this.setState({ loggedIn: !!user, loading: false })
      );
  }

  render() {
    return (
      <Root>
        {this.state.loading ? (
          <Spinner />
        ) : this.state.loggedIn ? (
          <TabNavigation />
        ) : (
          <Navigation />
        )}
      </Root>
    );
  }
}
