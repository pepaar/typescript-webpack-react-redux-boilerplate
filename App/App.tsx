/// <reference path="../typings/tsd.d.ts" />

import React = require("react");
import ContentPage from "./Components/ContentPage/ContentPage";

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <ContentPage />
                </div>;
    }
};