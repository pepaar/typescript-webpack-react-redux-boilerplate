import { HelloCountState } from "./State/HelloCountState";
import { ContentState } from "./State/ContentState";
import { SubredditsState } from "./State/SubredditsState";

export interface StoreState {
    helloCount: HelloCountState;
    content: ContentState;
    subreddits: SubredditsState;
};