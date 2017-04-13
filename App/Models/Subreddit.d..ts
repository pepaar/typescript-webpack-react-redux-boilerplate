declare interface Subreddit {
    readonly name: string;
    readonly isLoading: boolean;
    readonly isError: boolean;
    readonly posts: ReadonlyArray<Post>;
}