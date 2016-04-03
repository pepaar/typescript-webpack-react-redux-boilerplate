/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

import * as React from "react";
import * as TestUtils  from "react-addons-test-utils";
import ContentPage from "./../ContentPage";
import ContentBody from "./../ContentBody/ContentBody";
import CommonStore from "./../../../Stores/CommonStore";
import * as CommonActionCreators from "./../../../ActionCreators/CommonActionCreators";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
    describe("render tests", () => {
        it("renders content page", () => {
            CommonActionCreators.loadApp();

            const component: React.Component<{}, {}> = TestUtils.renderIntoDocument(
                <ContentPage />
            );

            const body: ContentBody = component.refs["contentBodyRef"] as ContentBody;
            expect(body).toBeDefined();
            expect(body.props.summary.length).toBeGreaterThan(0);

            const summaryElement: Element = body.refs["summaryRef"] as Element;
            expect(summaryElement).toBeDefined();

            const summaryText: string = summaryElement.textContent;
            expect(summaryText).toBe(CommonStore.getBodySummary());
        });
    });
});
