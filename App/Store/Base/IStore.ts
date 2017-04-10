import { HelloCountStore } from "./../HelloCountStore";
import { ContentStore } from "./../ContentStore";

export interface IStore {
  helloCount: HelloCountStore;
  content: ContentStore;
};