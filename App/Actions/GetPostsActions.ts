import IAction from "./IAction";

export const typeStart = "GetPostsStartAction";
export const typeSuccess = "GetPostsSuccessAction";
export const typeError = "GetPostsErrorAction";

export interface GetPostsStartAction extends IAction {
    subreddit: string;
}

export interface GetPostsSuccessAction extends IAction {
    subreddit: string;
    posts: Post[];
}

export interface GetPostsErrorAction extends IAction {
    subreddit: string;
    error: string;
}

export function createStart(subreddit: string): GetPostsStartAction {
    return {
        type: typeStart,
        subreddit,
    };
}

export function createSuccess(subreddit: string, posts: Post[]): GetPostsSuccessAction {
    return {
        type: typeSuccess,
        subreddit,
        posts,
    };
}

export function createError(subreddit: string, error: string): GetPostsErrorAction {
    return {
        type: typeError,
        subreddit,
        error,
    };
}