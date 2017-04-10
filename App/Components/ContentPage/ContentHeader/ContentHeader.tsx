import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentHeader.module.less");

interface IContentHeaderProps {
    isActive: boolean;
    title: string;
};

export default class ContentHeader extends BaseComponent<IContentHeaderProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return  <div className={styles.container}>{this.props.title}</div>;
    }
};