// Handle errors in real world app
export function fetchPosts(subreddit: string): Promise<Post[]> {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((response: Response) => response.json())
        .then((json: any) => json.data.children.map((child: any) => {
            return {
                id: child.data.id,
                title: child.data.title,
                url: child.data.url,
                ups: child.data.ups,
                downs: child.data.downs,
            };
        }) as Post[]);
}