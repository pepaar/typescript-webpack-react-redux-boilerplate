import { HelloCountStore } from "./../HelloCountStore";
import { ContentStore } from "./../ContentStore";
import { PostsStore } from "./../PostsStore";

export interface IStore {
  helloCount: HelloCountStore;
  content: ContentStore;
  posts: PostsStore;
};