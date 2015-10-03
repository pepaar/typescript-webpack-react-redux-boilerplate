import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SayHelloAction from "../Actions/SayHelloAction";

class CommonActionCreators {
    loadApp(): void {
        const bodyTitle: string = "The standard Lorem Ipsum passage, used since the 1500s";
        const bodySummary: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" +
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt" +
            "in culpa qui officia deserunt mollit anim id est laborum.";

        Dispatcher.dispatch(new AppLoadedAction(bodyTitle, bodySummary));
    }

    sayHello(): void {
         Dispatcher.dispatch(new SayHelloAction());
    }
}

export default new CommonActionCreators();
