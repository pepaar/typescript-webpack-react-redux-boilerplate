import BaseStore from "./BaseStore";
import IAction from "./../Actions/IAction";
import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SayHelloAction from "../Actions/SayHelloAction";

class CommonStore extends BaseStore {
    private bodyTitle: string;
    private bodySummary: string;
    private sayHelloCount: number = 0;

    constructor() {
        super();
        Dispatcher.register((action: IAction) => this.processActions(action));
    }

    getBodyTitle(): string {
        if (this.bodyTitle) {
            return this.bodyTitle.toUpperCase();
        }

        return "";
    };

    getBodySummary(): string {
        return this.bodySummary;
    };

    getSayHelloCount(): number {
        return this.sayHelloCount;
    };

    private processActions(action: IAction): void {
        if (action instanceof AppLoadedAction)	{
            this.bodyTitle = action.bodyTitle;
            this.bodySummary = action.bodySummary;
            this.emitChange();

        } else if (action instanceof SayHelloAction) {
            this.sayHelloCount++;
            this.emitChange();

        }
    };
}

export default new CommonStore();