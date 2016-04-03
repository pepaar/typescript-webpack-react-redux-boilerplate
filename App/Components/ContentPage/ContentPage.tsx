/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import CommonActionCreators from "../../ActionCreators/CommonActionCreators";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IContentPageState {
   bodyTitle: string;
   bodySummary: string;
   sayHelloCount: number;
}

export default class ContentPage extends React.Component<{}, IContentPageState> {
    constructor() {
        super();
        this.state = this.getStateFromStores();
    }

    render(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div className={styles.container}>
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
                       <div className={styles.hello}>
                           <button onClick={() => this.onButtonClick()}>Say Hello!</button>
                           <span> You said hello {this.state.sayHelloCount} time(s)</span>
                       </div>
                   </ContentBody>
               </div>;
    }

    componentDidMount(): void {
        CommonStore.addListener(this.onChange);
    }

    componentWillUnmount(): void {
        CommonStore.removeListener(this.onChange);
    }

    private onChange: () => void = () => {
        this.setState(this.getStateFromStores());
    };

    private onButtonClick(): void {
        CommonActionCreators.sayHello();
    }

    private getStateFromStores(): IContentPageState {
        return {
            bodyTitle: CommonStore.getBodyTitle(),
            bodySummary: CommonStore.getBodySummary(),
            sayHelloCount: CommonStore.getSayHelloCount()
        };
    }
}