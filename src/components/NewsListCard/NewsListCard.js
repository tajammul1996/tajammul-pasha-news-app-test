import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import styles from "./NewsListCardStyles";

const NewsListCard = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContaner}>
        <Text style={styles.headlineTextStyle}>
          Headline text headline text headline text
        </Text>
        <Text style={styles.authorTextStyle}>Author author author</Text>
      </View>
      <View>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={styles.thumbnailStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewsListCard;
