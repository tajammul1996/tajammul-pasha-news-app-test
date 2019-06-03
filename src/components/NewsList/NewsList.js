import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";

import NewsListCard from "../NewsListCard/NewsListCard";

class NewsList extends Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
