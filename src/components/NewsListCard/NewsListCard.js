import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import styles from "./NewsListCardStyles";

const NewsListCard = ({ author, title, urlToImage }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContaner}>
        <Text style={styles.headlineTextStyle}>{title}</Text>
        <Text style={styles.authorTextStyle}>{author}</Text>
      </View>
      <View>
        <Image source={{ uri: urlToImage }} style={styles.thumbnailStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsListCard;
