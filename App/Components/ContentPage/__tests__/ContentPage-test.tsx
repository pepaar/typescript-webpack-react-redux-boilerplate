/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

import React = require("react");
import TestUtils = require("react-addons-test-utils");
import ContentPage from "./../ContentPage";
import CommonStore from "./../../../Stores/CommonStore";
import CommonActionCreators from "./../../../ActionCreators/CommonActionCreators";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
    describe("render tests", () => {
        it("renders content page", () => {
            CommonActionCreators.loadApp();

            const component: React.Component<{}, {}> = TestUtils.renderIntoDocument(
                <ContentPage />
            );

            const dom: Element = TestUtils.findRenderedDOMComponentWithClass(component, "contentpage__body--summary");
            const summaryText: string = dom.textContent;

            expect(summaryText).toBe(CommonStore.getBodySummary());
        });
    });
});
