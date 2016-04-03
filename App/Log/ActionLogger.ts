import IAction from "../Actions/IAction";
import Dispatcher from "../Dispatcher/Dispatcher";
import ActionLogEntry from "./ActionLogEntry";

/**
 * Logger that logs all actions
 */
class ActionLogger {
    public constructor() {
        Dispatcher.register(this.processActions);
    }

    private processActions: (action: IAction) => void = (action: IAction) => {
        this.log(action);
    };

    private log(action: IAction): void {
        let logEntry: ActionLogEntry = action.toLogEntry();

        if (logEntry != null) {
            console.log(`ActionLogger: ${logEntry.toString()}`);

        }
    }
}

export default new ActionLogger();