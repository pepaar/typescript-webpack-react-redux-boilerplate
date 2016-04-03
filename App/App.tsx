import * as React from "react";
import ContentPage from "./Components/ContentPage/ContentPage";
import * as CommonActionCreators from "./ActionCreators/CommonActionCreators";
require("./Log/ActionLogger");
require("./Global/Styles/global.less");

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <ContentPage />
                </div>;
    }

    componentDidMount(): void {
        CommonActionCreators.loadApp();
    }
};