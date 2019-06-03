import { StyleSheet, Dimensions } from "react-native";

const NewsDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    width: "80%",
    padding: 15
  },
  titleStyle: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    lineHeight: 35
  },
  authorText: {
    color: "#000000",
    marginTop: 5
  },
  decsText: {
    padding: 15,
    fontSize: 16,
    color: "#000000"
  },
  bannerImage: {
    width: Dimensions.get("window").width,
    height: 200
  }
});

export default NewsDetailScreenStyles;
