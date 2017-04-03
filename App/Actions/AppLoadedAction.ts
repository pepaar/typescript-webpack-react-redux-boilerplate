import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class AppLoadedAction implements IAction {
    constructor(public bodyTitle: string, public bodySummary: string) {}

    toLogEntry(): ActionLogEntry {
        return new ActionLogEntry(
            "AppLoadedAction",
            {
                bodyTitle: this.bodyTitle,
            });
    }
}