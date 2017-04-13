import * as React from "react";
import BaseComponent from "./../../../BaseComponent";

// tslint:disable-next-line:no-any
const styles: any = require("./PostsList.module.less");

interface IPostsListProps {
    posts: ReadonlyArray<Post>;
};

export default class PostsList extends BaseComponent<IPostsListProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (this.props.posts.length === 0) {
            return (<div>No posts</div>);
        }

        const posts = this.props.posts.slice(0, 5).map((post, index) => {
            return (<div key={post.id} className={styles.post}>
                        <a href={post.url} target="_blank">{index + 1}.) {post.title}</a>
                        <span> |&#9652;{post.ups}</span><span>&#9662;{post.downs}</span>
                    </div>);
        });

        return (<div className={styles.container}>{posts}</div>);
    }
};