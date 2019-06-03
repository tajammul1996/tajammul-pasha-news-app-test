import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import styles from "./NewsDetailScreenStyles";

class NewsDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const {
      author,
      urlToImage,
      title,
      publishedAt,
      description
    } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    );
  }
}

export default NewsDetailScreen;
