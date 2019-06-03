import React, { Component } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StatusBar
} from "react-native";

import NewsListCard from "../NewsListCard/NewsListCard";

class NewsList extends Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "300"
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        {this.props.loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" />
            <Text>Loading news feed...</Text>
          </View>
        ) : (
          <FlatList
            data={this.props.newsFeeds}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <NewsListCard {...item} />}
            keyExtractor={item => item.publishedAt}
          />
        )}
      </View>
    );
  }
}

export default NewsList;
