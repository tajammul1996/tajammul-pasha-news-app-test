import { StyleSheet } from "react-native";

const NewsListCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  textContaner: {
    flexDirection: "column",
    width: "70%",
    paddingVertical: 5,
    paddingLeft: 5
  },
  headlineTextStyle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000000"
  },
  thumbnailStyle: {
    height: 75,
    width: 75
  },
  authorTextStyle: {
    fontSize: 13,
    marginTop: 5
  }
});

export default NewsListCardStyles;
