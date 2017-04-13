import { handleActions } from "redux-actions";
import { GET_SUBREDDIT_POSTS_START_ACTION, GET_SUBREDDIT_POSTS_SUCCESS_ACTION, GET_SUBREDDIT_POSTS_ERROR_ACTION,
    GetSubredditPostsStartActionPayload, GetSubredditPostsSuccessActionPayload, GetSubredditPostsErrorActionPayload }
    from "./../Actions/GetSubredditPostsActions";
import { SubredditsState } from "./../Store/State/SubredditsState";

const initialState: SubredditsState = {
    items: {},
    selectedSubreddit: undefined,
};

export default handleActions<SubredditsState>({
    [GET_SUBREDDIT_POSTS_START_ACTION]: (state, action: ReduxActions.Action<GetSubredditPostsStartActionPayload>) => {
        return {
            selectedSubreddit: action.payload.subreddit,
            items: {
                ...state.items,
                [action.payload.subreddit]: {
                    name: action.payload.subreddit,
                    isLoading: true,
                    isError: false,
                    posts: [],
                },
            },
        };
    },

    [GET_SUBREDDIT_POSTS_SUCCESS_ACTION]: (state, action: ReduxActions.Action<GetSubredditPostsSuccessActionPayload>) => {
        const updatedItem = {
            ...state.items[action.payload.subreddit],
            isLoading: false,
            posts: action.payload.posts,
        };

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload.subreddit]: updatedItem,
            },
        };
    },

    [GET_SUBREDDIT_POSTS_ERROR_ACTION]: (state, action: GetSubredditPostsErrorActionPayload) => {
        const errorItem = {
            ...state.items[action.subreddit],
            isLoading: false,
            isError: true,
            posts: [],
        };

        return {
            ...state,
            items: {
                ...state.items,
                [action.subreddit]: errorItem,
            },
        };
    },

}, initialState);