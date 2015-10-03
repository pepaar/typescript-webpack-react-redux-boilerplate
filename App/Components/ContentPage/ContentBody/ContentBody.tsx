/// <reference path="../../../../typings/tsd.d.ts" />

import React = require("react");
require("./ContentBody.less");

interface IContentBodyProps extends React.Props<ContentBody> {
    title: string;
    summary: string;
};

export default class ContentBody extends React.Component<IContentBodyProps, {}> {
    render(): React.ReactElement<{}> {
        return  <div className="contentpage__body">
                    <div className="contentpage__body--title">{this.props.title}</div>
                    <span className="contentpage__body--summarytitle">Summary:</span>
                    <div className="contentpage__body--summary">{this.props.summary}</div>
                    {this.props.children}
                </div>;
    }
};