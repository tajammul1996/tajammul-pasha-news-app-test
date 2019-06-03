import { SUCCESS, FAILURE, REQUESTING } from "../../utils/constants";

export const NEWS_FEED_REQUESTING = "NEWS_FEED_REQUESTING";
export const NEWS_FEED_SUCCESS = "NEWS_FEED_SUCCESS";
export const NEWS_FEED_FAILURE = "NEWS_FEED_FAILURE";
const API_URL =
  "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526";

export const newsFeedRequest = () => ({
  type: NEWS_FEED_REQUESTING,
  status: REQUESTING
});

export const newsFeedSuccess = data => ({
  type: NEWS_FEED_SUCCESS,
  status: SUCCESS,
  data
});

export const newsFeedFailure = error => ({
  type: NEWS_FEED_FAILURE,
  status: FAILURE,
  error
});

export const getNewsFeed = () => {
  console.log("Hitting getnews feed");
  return async dispatch => {
    dispatch(newsFeedRequest());

    try {
      const data = await fetch(API_URL);
      const result = await data.json();
      console.log("Result", result);
      dispatch(newsFeedSuccess(result.articles));
      return;
    } catch (error) {
      dispatch(newsFeedFailure(error));
    }
  };
};
