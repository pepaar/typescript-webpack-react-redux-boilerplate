import { combineReducers, Reducer } from "redux";
import { helloCountReducer } from "./HelloCountReducer";
import { contentReducer } from "./ContentReducer";
import { postsReducer } from "./PostsReducer";
import { IStore } from "./../Store/Base/IStore";

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  helloCount: helloCountReducer,
  content: contentReducer,
  posts: postsReducer,
});

export default rootReducer;