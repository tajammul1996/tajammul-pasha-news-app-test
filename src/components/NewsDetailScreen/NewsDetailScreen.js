import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./NewsDetailScreenStyles";

const NewsDetailScreen = ({ navigation }) => {
  console.log(navigation.state.params);
  const {
    author,
    urlToImage,
    title,
    publishedAt,
    description
  } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.authorText}>
          {author} {publishedAt}
        </Text>
      </View>
      <View>
        <Image
          style={styles.bannerImage}
          source={{
            uri: urlToImage
          }}
          resizeMode={"stretch"}
        />
        <Text style={styles.decsText}>{description}</Text>
      </View>
    </View>
  );
};

export default NewsDetailScreen;
