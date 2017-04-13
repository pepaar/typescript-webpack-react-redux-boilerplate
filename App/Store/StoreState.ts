import { HelloCountState } from "./State/HelloCountState";
import { ContentState } from "./State/ContentState";
import { SubredditsState } from "./State/SubredditsState";

export interface StoreState {
    readonly helloCount: HelloCountState;
    readonly content: ContentState;
    readonly subreddits: SubredditsState;
};