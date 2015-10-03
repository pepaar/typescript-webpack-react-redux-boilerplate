/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";

require("./ContentPage.less");

export default class ContentPage extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";
        const bodySummary: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" +
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt" +
            "in culpa qui officia deserunt mollit anim id est laborum.";
        const bodyTitle: string = "The standard Lorem Ipsum passage, used since the 1500s";

        return <div className="contentpage__container">
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody title={bodyTitle} summary={bodySummary}>
                       <div className="contentpage__theend">THE END!</div>
                   </ContentBody>
               </div>;

    }
}