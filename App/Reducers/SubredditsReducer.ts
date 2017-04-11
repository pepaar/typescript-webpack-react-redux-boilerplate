import * as GetSubredditPostsActions from "./../Actions/GetSubredditPostsActions";
import { SubredditsState } from "./../Store/State/SubredditsState";
import IAction from "./../Actions/IAction";

const initialState: SubredditsState = {
    items: {},
    selectedSubreddit: undefined,
};

export function subredditsReducer(state = initialState, action: IAction): SubredditsState {
    switch (action.type) {
        case GetSubredditPostsActions.typeStart:
            const startAction = action as GetSubredditPostsActions.GetSubredditPostsStartAction;

            return {
                selectedSubreddit: startAction.subreddit,
                items: {
                    ...state.items,
                    [startAction.subreddit]: {
                        name: startAction.subreddit,
                        isLoading: true,
                        isError: false,
                        posts: [],
                    },
                },
            };

        case GetSubredditPostsActions.typeSuccess:
            const successAction = action as GetSubredditPostsActions.GetSubredditPostsSuccessAction;

            const updatedItem = Object.assign({}, state.items[successAction.subreddit], {
                isLoading: false,
                posts: successAction.posts,
            });

            return {
                ...state,
                items: {
                    ...state.items,
                    [successAction.subreddit]: updatedItem,
                },
            };

        case GetSubredditPostsActions.typeError:
            const errorAction = action as GetSubredditPostsActions.GetSubredditPostsErrorAction;

            const errorItem = Object.assign({}, state.items[errorAction.subreddit], {
                isLoading: false,
                isError: true,
                posts: [],
            });

            return {
                ...state,
                items: {
                    ...state.items,
                    [errorAction.subreddit]: errorItem,
                },
            };
        default:
          return state;
    }
}