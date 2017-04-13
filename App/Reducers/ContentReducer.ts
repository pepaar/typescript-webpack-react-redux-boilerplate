import { handleActions } from "redux-actions";
import { CONTENT_LOAD_ACTION, ContentLoadActionPayload } from "./../Actions/ContentLoadAction";
import { ContentState } from "./../Store/State/ContentState";

const initialState: ContentState = {
    title: "",
    summary: "",
};

export default handleActions<ContentState, ContentLoadActionPayload>({
    [CONTENT_LOAD_ACTION]: (state, action) => {
        return {
            title: action.payload.title ? action.payload.title.toUpperCase() : "",
            summary: action.payload.summary,
        };
    },
}, initialState);