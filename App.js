import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import NewsListContainer from "./src/containers/NewsListContainer";

const NewsStack = createStackNavigator({
  NewsListContainer: {
    screen: NewsListContainer,
    title: "Home"
  }
});

const AppContainer = createAppContainer(NewsStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
