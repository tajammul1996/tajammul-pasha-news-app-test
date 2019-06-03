import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./NewsListCardStyles";

const NewsListCard = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.navigation.navigate("NewsDetailScreen", { ...props })
      }
    >
      <View style={styles.textContaner}>
        <Text style={styles.headlineTextStyle}>{props.title}</Text>
        <Text style={styles.authorTextStyle}>{props.author}</Text>
      </View>
      <View>
        <Image
          source={{ uri: props.urlToImage }}
          style={styles.thumbnailStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(NewsListCard);
