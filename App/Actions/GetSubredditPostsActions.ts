import { createAction } from "redux-actions";

export const GET_SUBREDDIT_POSTS_START_ACTION = "GetSubredditPostsStartAction";
export const GET_SUBREDDIT_POSTS_SUCCESS_ACTION = "GetSubredditPostsSuccessAction";
export const GET_SUBREDDIT_POSTS_ERROR_ACTION = "GetSubredditPostsErrorAction";

export interface GetSubredditPostsStartActionPayload {
    subreddit: string;
}

export interface GetSubredditPostsSuccessActionPayload {
    subreddit: string;
    posts: Post[];
}

export interface GetSubredditPostsErrorActionPayload {
    subreddit: string;
    error: string;
}

export const getSubredditPostsStartAction =
    createAction<GetSubredditPostsStartActionPayload, GetSubredditPostsStartActionPayload>(GET_SUBREDDIT_POSTS_START_ACTION, undefined);
export const getSubredditPostsSuccessAction =
    createAction<GetSubredditPostsSuccessActionPayload, GetSubredditPostsSuccessActionPayload>(GET_SUBREDDIT_POSTS_SUCCESS_ACTION, undefined);
export const getSubredditPostsErrorAction =
    createAction<GetSubredditPostsErrorActionPayload, GetSubredditPostsErrorActionPayload>(GET_SUBREDDIT_POSTS_ERROR_ACTION, undefined);