import * as React from "react";
import BaseComponent from "./../../BaseComponent";
import Button from "./../../Common/Button/Button";

// tslint:disable-next-line:no-any
const styles: any = require("./SubredditChooser.module.less");

interface ISubredditChooserProps {
    fetchSubreddit: (subreddit: string) => void;
};

export default class SubredditChooser extends BaseComponent<ISubredditChooserProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div className={styles.container}>
                    <div className={styles.chooseSubreddit}>Choose subreddit</div>
                    <div className={styles.subredditButtons}>
                        <Button styleOverride={styles.subredditButton} onClick={() => this.props.fetchSubreddit("typescript")}>Typescript</Button>
                        <Button styleOverride={styles.subredditButton} onClick={() => this.props.fetchSubreddit("webpack")}>Webpack</Button>
                        <Button styleOverride={styles.subredditButton} onClick={() => this.props.fetchSubreddit("reactjs")}>React.js</Button>
                    </div>
                </div>);
    }
};