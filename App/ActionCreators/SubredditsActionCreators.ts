import { Dispatch } from "redux";
import * as GetSubredditPostsActions from "./../Actions/GetSubredditPostsActions";
import * as SubredditsProvider from "./../DataLayer/SubredditsProvider";

export function fetchPosts(subreddit: string): (dispatcher: Dispatch<{}>) => Promise<{}> {
    return (dispatch: Dispatch<{}>) => {
        dispatch(GetSubredditPostsActions.createStart(subreddit));

        return SubredditsProvider.fetchPosts(subreddit)
            .then((result: Post[]) => dispatch(GetSubredditPostsActions.createSuccess(subreddit, result)))
            .catch(() => dispatch(GetSubredditPostsActions.createError(subreddit, "FETCHING_ERROR")));
    };
}