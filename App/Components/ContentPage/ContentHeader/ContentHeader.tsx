/// <reference path="../../../../typings/tsd.d.ts" />

import React = require("react");

require("./ContentHeader.less");

interface IContentHeaderProps {
    isActive: boolean;
    title: string;
};

export default class ContentHeader extends React.Component<IContentHeaderProps, {}> {
    render(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return  <div className="contentpage__header">{this.props.title}</div>;
    }
};