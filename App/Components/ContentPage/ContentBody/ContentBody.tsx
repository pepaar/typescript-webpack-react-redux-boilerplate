import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentBody.module.less");

interface IContentBodyProps extends React.Props<{}> {
    title: string;
    summary: string;
};

export default class ContentBody extends BaseComponent<IContentBodyProps, {}> {
    doRender(): React.ReactElement<{}> {
        return  <div className={styles.container}>
                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles.summaryTitle}>Summary</div>
                    <div ref="summaryRef" className={styles.summary}>{this.props.summary}</div>
                    <img src={require<string>("headerlogo.png")} alt="logo" className={styles.logo} />
                    {this.props.children}
                </div>;
    }
};