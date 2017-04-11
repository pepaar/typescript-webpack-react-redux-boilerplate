export interface SubredditsState {
    selectedSubreddit: string;
    items: {[subreddit: string]: Subreddit};
}