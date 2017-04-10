import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import { sayHello } from "./../../ActionCreators/HelloCountActionCreators";
import BaseComponent from "./../BaseComponent";
import { IStore } from "./../../Store/Base/IStore";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentPage.module.less");

interface IContentPageProps {
   bodyTitle?: string;
   bodySummary?: string;
   sayHelloCount?: number;
   sayHello?: () => void;
}

class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div className={styles.container}>
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody ref="contentBodyRef" title={this.props.bodyTitle} summary={this.props.bodySummary}>
                       <div className={styles.hello}>
                           <button className={styles.button} onClick={() => this.onButtonClick()}>Say Hello!</button>
                           <div className={styles.message}>You said hello {this.props.sayHelloCount} time(s)</div>
                       </div>
                   </ContentBody>
               </div>;
    }

    private onButtonClick(): void {
        this.props.sayHello();
    }
}

function mapStateToProps(state: IStore): IContentPageProps {
    return {
        bodyTitle: state.content.title,
        bodySummary: state.content.summary,
        sayHelloCount: state.helloCount.count,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
  return {
    sayHello: () => dispatch(sayHello()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentPage);