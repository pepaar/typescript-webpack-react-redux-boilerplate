import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sayHello } from "./../../ActionCreators/HelloCountActionCreators";
import { fetchPosts } from "./../../ActionCreators/SubredditsActionCreators";
import { StoreState } from "./../../Store/StoreState";
import BaseComponent from "./../BaseComponent";
import Button from "./../Common/Button/Button";
import Header from "./Header/Header";
import BodyWrapper from "./BodyWrapper/BodyWrapper";
import SubredditChooser from "./SubredditChooser/SubredditChooser";
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

@connect(mapStateToProps, mapDispatchToProps)
class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div className={styles.container}>
                    <Header isActive={true} title={"Welcome to test page"} />
                    <BodyWrapper ref="contentBodyRef" title={this.props.bodyTitle} summary={this.props.bodySummary}>
                        <div className={styles.hello}>
                            <Button onClick={() => this.props.sayHello()}>Say Hello!</Button>
                            <div className={styles.message}>You said hello {this.props.sayHelloCount} time(s)</div>
                        </div>
                        <br />
                        <div className={styles.subreddits}>
                            <SubredditChooser fetchSubreddit={this.props.fetchSubreddit} />
                            <Posts subreddit={this.props.selectedSubreddit} />
                        </div>
                    </BodyWrapper>
                </div>);
    }
}

function mapStateToProps(state: StoreState): IContentPageProps {
    return {
        bodyTitle: state.content.title,
        bodySummary: state.content.summary,
        sayHelloCount: state.helloCount.count,
        selectedSubreddit: state.subreddits.items[state.subreddits.selectedSubreddit],
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {
        sayHello: () => dispatch(sayHello()),
        fetchSubreddit: (subreddit: string) => dispatch(fetchPosts(subreddit)),
    };
}

export default ContentPage;