import { ContentLoadAction, type as ContentLoadActionType } from "./../Actions/ContentLoadAction";
import { ContentState } from "./../Store/State/ContentState";

const initialState: ContentState = {
    title: "",
    summary: "",
};

export function contentReducer(state = initialState, action: ContentLoadAction): ContentState {
    switch (action.type) {
        case ContentLoadActionType:
            return {
              title: action.title ? action.title.toUpperCase() : "",
              summary: action.summary,
            };

        default:
            return state;
    }
}