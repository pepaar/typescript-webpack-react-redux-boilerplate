import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// tslint:disable-next-line:no-any
const styles: any = require("./Header.module.less");

interface IHeaderProps {
    isActive: boolean;
    title: string;
};

export default class Header extends BaseComponent<IHeaderProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return (<div className={styles.container}>{this.props.title}</div>);
    }
};