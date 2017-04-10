import { Dispatch } from "redux";
import * as GetPostsActions from "../Actions/GetPostsActions";
import * as PostsProvider from "./../DataLayer/PostsProvider";

export function fetchPosts(subreddit: string): (dispatcher) => Promise<{}> {
    return (dispatch: Dispatch<{}>) => {
        dispatch(GetPostsActions.createStart(subreddit));

        return PostsProvider.fetchPosts(subreddit)
            .then((result: Post[]) => dispatch(GetPostsActions.createSuccess(subreddit, result)))
            .catch(() => dispatch(GetPostsActions.createError(subreddit, "FETCHING_ERROR")));
    };
}