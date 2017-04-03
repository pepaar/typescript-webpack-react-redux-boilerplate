import * as React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import  * as CommonActionCreators from "../../ActionCreators/CommonActionCreators";
import SmartComponent from "./../SmartComponent";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IContentPageState {
   bodyTitle: string;
   bodySummary: string;
   sayHelloCount: number;
}

export default class ContentPage extends SmartComponent<{}, IContentPageState> {
    constructor() {
        super(CommonStore);
    }

    doRender(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div className={styles.container}>
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
                       <div className={styles.hello}>
                           <button className={styles.button} onClick={() => this.onButtonClick()}>Say Hello!</button>
                           <div className={styles.message}>You said hello {this.state.sayHelloCount} time(s)</div>
                       </div>
                   </ContentBody>
               </div>;
    }

    protected getState(): IContentPageState {
        return {
            bodyTitle: CommonStore.getBodyTitle(),
            bodySummary: CommonStore.getBodySummary(),
            sayHelloCount: CommonStore.getSayHelloCount(),
        };
    }

    private onButtonClick(): void {
        CommonActionCreators.sayHello();
    }
}