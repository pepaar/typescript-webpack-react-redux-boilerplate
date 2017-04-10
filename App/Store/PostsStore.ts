export interface PostsStore {
    selectedSubreddit: string;
    items: {[subreddit: string]: Subreddit};
}