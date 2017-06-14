import { handleActions } from "redux-actions";
import { ContentLoadActionPayload, contentLoadAction } from "./../Actions/ContentLoadAction";
import { ContentState } from "./../Store/State/ContentState";

const initialState: ContentState = {
    title: "",
    summary: "",
};

export default handleActions<ContentState, ContentLoadActionPayload>({
    [contentLoadAction.toString()]: (state, action) => {
        return {
            title: action.payload.title ? action.payload.title.toUpperCase() : "",
            summary: action.payload.summary,
        };
    },
}, initialState);