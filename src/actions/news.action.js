import { SUCCESS, FAILURE, REQUESTING, API_URL } from "../utils/constants";

export const NEWS_FEED_REQUESTING = "NEWS_FEED_REQUESTING";
export const NEWS_FEED_SUCCESS = "NEWS_FEED_SUCCESS";
export const NEWS_FEED_FAILURE = "NEWS_FEED_FAILURE";

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
  return async dispatch => {
    dispatch(newsFeedRequest());
    try {
      const data = await fetch(API_URL);
      const result = await data.json();
      dispatch(newsFeedSuccess(result.articles));
      return;
    } catch (error) {
      dispatch(newsFeedFailure(error));
    }
  };
};
