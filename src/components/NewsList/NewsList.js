import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import NewsListCard from "../NewsListCard/NewsListCard";

class NewsList extends Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    return (
      <View>
        {this.props.loading ? (
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
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
