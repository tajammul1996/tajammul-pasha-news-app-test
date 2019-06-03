import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import NewsListContainer from "./src/containers/NewsListContainer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsListContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
