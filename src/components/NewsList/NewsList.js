import React, { Component } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StatusBar
} from "react-native";

import NewsListCard from "../NewsListCard/NewsListCard";
import styles from "./NewsListStyles";

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
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        {this.props.loading ? (
          <View style={styles.activityIndicator}>
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
