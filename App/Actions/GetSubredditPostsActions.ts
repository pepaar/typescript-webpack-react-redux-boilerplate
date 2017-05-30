import { createAction } from "redux-actions";

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
    createAction<GetSubredditPostsStartActionPayload, string>("GetSubredditPostsStartAction", (subreddit) => ({subreddit}));
// an example utilizing payloadCreator
export const getSubredditPostsSuccessAction =
    createAction<GetSubredditPostsSuccessActionPayload, string, Post[]>("GetSubredditPostsSuccessAction", (subreddit, posts) => ({subreddit, posts}));
// createAction without payloadCreator
export const getSubredditPostsErrorAction =
    createAction<GetSubredditPostsErrorActionPayload, GetSubredditPostsErrorActionPayload>("GetSubredditPostsErrorAction", undefined);