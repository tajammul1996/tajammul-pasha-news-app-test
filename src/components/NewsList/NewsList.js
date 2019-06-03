import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class NewsList extends Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    return (
      <View>
        <Text>NewsList Component</Text>
      </View>
    );
  }
}

export default NewsList;
