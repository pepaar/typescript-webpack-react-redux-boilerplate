import * as React from "react";

/**
 * Base component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */
abstract class BaseComponent<P, S> extends React.Component<P, S> {
    render(): React.ReactElement<{}> {
        let result: React.ReactElement<{}>;
        try {
            result = this.doRender();
        } catch (error) {
            this.logError(error);
            result = null;
        }

        return result;
    }

    /**
     * Abstract method to be overriden by child component which will do real
     * render work as usual react component
     */
    abstract doRender(): React.ReactElement<{}>;

    /**
     * API to log exception
     */
    logError(error: Error): void {
        /* tslint:disable */
        const componentName: string = (this as any)._reactInternalInstance._currentElement.type.name;
        const componentDetail: string = (this as any)._reactInternalInstance._currentElement.type.toString();
        let propsString = "";
        for (let propName in this.props) {
            propsString += " " + propName;
        }
        /* tslint:enable */

        console.error(error, {Component: componentName, ComponentDetail: componentDetail, PropList: propsString});
        console.error("A component (" + componentName + ") had an error during render. " +
                   "Please fix this immediately, even if you don't own this component. " +
                   "This message is designed to be annoying so that the problem is addressed.");
    }
 };

 export default BaseComponent;
