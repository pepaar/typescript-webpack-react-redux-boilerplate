import BaseStore from "./BaseStore";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SayHelloAction from "../Actions/SayHelloAction";

class CommonStore extends BaseStore {
    private bodyTitle: string;
    private bodySummary: string;
    private sayHelloCount: number = 0;

    constructor() {
        super();

        this.addActionCallback(AppLoadedAction, this.onAppLoaded);
        this.addActionCallback(SayHelloAction, this.onSayHello);
    }

    getBodyTitle(): string {
        if (this.bodyTitle) {
            return this.bodyTitle.toUpperCase();
        }

        return "";
    }

    getBodySummary(): string {
        return this.bodySummary;
    }

    getSayHelloCount(): number {
        return this.sayHelloCount;
    }

    private onAppLoaded(action: AppLoadedAction): void {
        this.bodyTitle = action.bodyTitle;
        this.bodySummary = action.bodySummary;
    }

    private onSayHello(): void {
        this.sayHelloCount++;
    }
}

export default new CommonStore();