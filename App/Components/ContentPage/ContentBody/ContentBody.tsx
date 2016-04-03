import * as React from "react";
import BaseComponent from "./../../BaseComponent";

/* tslint:disable:no-any */
const styles: any = require("./ContentBody.module.less");
/* tslint:enable:no-any */

interface IContentBodyProps extends React.Props<{}> {
    title: string;
    summary: string;
};

export default class ContentBody extends BaseComponent<IContentBodyProps, {}> {
    doRender(): React.ReactElement<{}> {
        return  <div className={styles.container}>
                    <div className={styles.title}>{this.props.title}</div>
                    <span className={styles.summaryTitle}>Summary:</span>
                    <div ref="summaryRef" className={styles.summary}>{this.props.summary}</div>
                    {this.props.children}
                </div>;
    }
};