import { Dispatch } from "redux";
import { getSubredditPostsStartAction, getSubredditPostsSuccessAction, getSubredditPostsErrorAction } from "./../Actions/GetSubredditPostsActions";
import * as SubredditsProvider from "./../DataLayer/SubredditsProvider";

export function fetchPosts(subreddit: string): (dispatcher: Dispatch<{}>) => Promise<{}> {
    return (dispatch: Dispatch<{}>) => {
        dispatch(getSubredditPostsStartAction(subreddit));

        return SubredditsProvider.fetchPosts(subreddit)
            .then((result: Post[]) => dispatch(getSubredditPostsSuccessAction(subreddit, result)))
            .catch(() => dispatch(getSubredditPostsErrorAction({subreddit, error: "FETCHING_ERROR"})));
    };
}