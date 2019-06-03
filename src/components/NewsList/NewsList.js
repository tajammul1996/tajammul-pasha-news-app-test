import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import NewsListCard from "../NewsListCard/NewsListCard";

class NewsList extends Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    return <NewsListCard />;
  }
}

export default NewsList;
