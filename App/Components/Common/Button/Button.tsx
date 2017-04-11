import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// tslint:disable-next-line:no-any
const styles: any = require("./Button.module.less");

interface IButtonProps {
    onClick: () => void;
    styleOverride?: string;
};

export default class Button extends BaseComponent<IButtonProps, {}> {
    doRender(): React.ReactElement<{}> {
        let buttonStyle = styles.button;

        if (this.props.styleOverride) {
            buttonStyle += " " + this.props.styleOverride;
        }

        return (<button
                    className={buttonStyle}
                    onClick={() => this.props.onClick()}>
                    {this.props.children}
                </button>);
    }
};