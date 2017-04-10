import * as React from "react";
import BaseComponent from "./../../BaseComponent";
import PostsList from "./PostsList/PostsList";

// tslint:disable-next-line:no-any
const styles: any = require("./Posts.module.less");

interface IPostsProps {
    subreddit: Subreddit;
};

export default class Posts extends BaseComponent<IPostsProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.subreddit) {
            return null;
        }

        return (<div className={styles.container}>
                    <div className={styles.title}>{this.props.subreddit.name}</div>
                    {this.props.subreddit.isLoading &&
                        <div>Loading...</div>
                    }
                    {this.props.subreddit.isError &&
                        <div>Sorry, error occured</div>
                    }
                    {!this.props.subreddit.isLoading && !this.props.subreddit.isError &&
                        <PostsList posts={this.props.subreddit.posts}/>
                    }
                </div>);
    }
};