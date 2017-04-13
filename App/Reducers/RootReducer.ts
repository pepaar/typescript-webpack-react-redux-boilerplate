import { combineReducers, Reducer } from "redux";
import helloCountReducer from "./HelloCountReducer";
import contentReducer from "./ContentReducer";
import subredditsReducer from "./SubredditsReducer";
import { StoreState } from "./../Store/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    helloCount: helloCountReducer,
    content: contentReducer,
    subreddits: subredditsReducer,
});

export default rootReducer;