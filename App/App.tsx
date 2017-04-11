import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ContentPage from "./Components/ContentPage/ContentPage";
import BaseComponent from "./Components/BaseComponent";
import { loadContent } from "./ActionCreators/ContentActionCreators";
import { StoreState } from "./Store/StoreState";

require("./Global/Styles/global.less");

interface IAppProps {
    loadContent?: () => void;
}

@connect(undefined, mapDispatchToProps)
class App extends BaseComponent<IAppProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div>
                    <ContentPage />
                </div>);
    }

    componentDidMount(): void {
        this.props.loadContent();
    }
};

function mapDispatchToProps(dispatch: Dispatch<{}>): IAppProps {
    return {
        loadContent: () => dispatch(loadContent()),
    };
}

export default App;