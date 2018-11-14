import React, { Component } from "react";
import { Root } from "native-base";
import { Navigation } from "./routes";

export default class App extends Component {

  render() {
    return (
      <Root>
				<Navigation />
      </Root>
    );
  }
}
