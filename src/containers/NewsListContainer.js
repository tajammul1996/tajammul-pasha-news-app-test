import { connect } from "react-redux";

import NewsList from "../components/NewsList/NewsList";
import { getNewsFeed } from "../actions/news.action";

const mapStateToProps = state => {
  return {
    newsFeeds: state.news.newsFeeds,
    loading: state.news.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsFeed: () => dispatch(getNewsFeed())
  };
};

const NewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
export default NewsListContainer;
