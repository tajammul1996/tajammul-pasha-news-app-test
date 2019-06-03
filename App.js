import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import NewsListContainer from "./src/containers/NewsListContainer";

export default class App extends Component {
  render() {
    return <NewsListContainer />;
  }
}
