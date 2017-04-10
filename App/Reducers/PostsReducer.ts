import * as GetPostsActions from "./../Actions/GetPostsActions";
import { PostsStore } from "./../Store/PostsStore";
import IAction from "./../Actions/IAction";

const initialState: PostsStore = {
    items: {},
    selectedSubreddit: undefined,
};

export function postsReducer(state = initialState, action: IAction): PostsStore {
    switch (action.type) {
        case GetPostsActions.typeStart:
            const startAction = action as GetPostsActions.GetPostsStartAction;

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

        case GetPostsActions.typeSuccess:
            const successAction = action as GetPostsActions.GetPostsSuccessAction;

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

        case GetPostsActions.typeError:
            const errorAction = action as GetPostsActions.GetPostsErrorAction;

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