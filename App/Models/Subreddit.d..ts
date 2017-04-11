declare interface Subreddit {
    name: string;
    isLoading: boolean;
    isError: boolean;
    posts: Post[];
}