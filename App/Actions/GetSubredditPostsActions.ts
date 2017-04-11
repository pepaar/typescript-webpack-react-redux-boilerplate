import IAction from "./IAction";

export const typeStart = "GetSubredditPostsStartAction";
export const typeSuccess = "GetSubredditPostsSuccessAction";
export const typeError = "GetSubredditPostsErrorAction";

export interface GetSubredditPostsStartAction extends IAction {
    subreddit: string;
}

export interface GetSubredditPostsSuccessAction extends IAction {
    subreddit: string;
    posts: Post[];
}

export interface GetSubredditPostsErrorAction extends IAction {
    subreddit: string;
    error: string;
}

export function createStart(subreddit: string): GetSubredditPostsStartAction {
    return {
        type: typeStart,
        subreddit,
    };
}

export function createSuccess(subreddit: string, posts: Post[]): GetSubredditPostsSuccessAction {
    return {
        type: typeSuccess,
        subreddit,
        posts,
    };
}

export function createError(subreddit: string, error: string): GetSubredditPostsErrorAction {
    return {
        type: typeError,
        subreddit,
        error,
    };
}