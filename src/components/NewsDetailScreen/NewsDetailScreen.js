import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

import styles from "./NewsDetailScreenStyles";

const NewsDetailScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>The Ideal Design Workflow</Text>
        <Text style={styles.authorText}>The Ideal Design Workflow</Text>
      </View>
      <View>
        <Image
          style={{ width: Dimensions.get("window").width, height: 200 }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
          resizeMode={"stretch"}
        />
        <Text style={styles.decsText}>
          As designers we are constantly experimenting with the tools
        </Text>
      </View>
    </View>
  );
};

export default NewsDetailScreen;
