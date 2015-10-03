/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import CommonActionCreators from "../../ActionCreators/CommonActionCreators";
require("./ContentPage.less");

interface IContentPageState {
   bodyTitle: string;
   bodySummary: string;
   sayHelloCount: number;
}

export default class ContentPage extends React.Component<{}, IContentPageState> {
    private onChange: () => void = () => {
        this.setState(this.getStateFromStores());
    };

    constructor() {
        super();
        this.state = this.getStateFromStores();
    }

    render(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div className="contentpage__container">
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody title={this.state.bodyTitle} summary={this.state.bodySummary}>
                       <div className="contentpage__hello" >
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