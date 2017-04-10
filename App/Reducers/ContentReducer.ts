import { ContentLoadAction, type as ContentLoadActionType } from "./../Actions/ContentLoadAction";
import { ContentStore } from "./../Store/ContentStore";

const initialState: ContentStore = {
    title: "",
    summary: "",
};

export function contentReducer(state = initialState, action: ContentLoadAction): ContentStore {
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