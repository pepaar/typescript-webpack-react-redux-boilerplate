import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import { sayHello } from "./../../ActionCreators/HelloCountActionCreators";
import { fetchPosts } from "./../../ActionCreators/PostsActionCreators";
import BaseComponent from "./../BaseComponent";
import { IStore } from "./../../Store/Base/IStore";
import Posts from "./Posts/Posts";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentPage.module.less");

interface IContentPageProps {
   bodyTitle?: string;
   bodySummary?: string;
   sayHelloCount?: number;
   selectedSubreddit?: Subreddit;

   sayHello?: () => void;
   fetchSubreddit?: (subreddit: string) => void;
}

class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return (<div className={styles.container}>
                    <ContentHeader isActive={true} title={headerTitle} />
                    <ContentBody ref="contentBodyRef" title={this.props.bodyTitle} summary={this.props.bodySummary}>
                        <div className={styles.hello}>
                            <button className={styles.button} onClick={() => this.props.sayHello()}>Say Hello!</button>
                            <div className={styles.message}>You said hello {this.props.sayHelloCount} time(s)</div>
                        </div>
                        <br />
                        <div className={styles.posts}>
                            <div className={styles.chooseSubreddit}>Choose subreddit</div>
                            <div className={styles.subredditButtons}>
                                <button className={styles.subredditButton} onClick={() => this.props.fetchSubreddit("typescript")}>Typescript</button>
                                <button className={styles.subredditButton} onClick={() => this.props.fetchSubreddit("webpack")}>Webpack</button>
                                <button className={styles.subredditButton} onClick={() => this.props.fetchSubreddit("reactjs")}>React.js</button>
                            </div>
                            <Posts subreddit={this.props.selectedSubreddit}/>
                        </div>
                    </ContentBody>
                </div>);
    }
}

function mapStateToProps(state: IStore): IContentPageProps {
    return {
        bodyTitle: state.content.title,
        bodySummary: state.content.summary,
        sayHelloCount: state.helloCount.count,
        selectedSubreddit: state.posts.items[state.posts.selectedSubreddit],
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
  return {
    sayHello: () => dispatch(sayHello()),
    fetchSubreddit: (subreddit: string) => dispatch(fetchPosts(subreddit)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentPage);