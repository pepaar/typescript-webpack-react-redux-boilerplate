export interface SubredditsState {
    readonly selectedSubreddit: string;
    readonly items: {[subreddit: string]: Subreddit};
}