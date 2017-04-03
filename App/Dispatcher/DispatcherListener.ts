import IAction from "../Actions/IAction";
import Dispatcher from "./Dispatcher";
import ActionLogEntry from "../Log/ActionLogEntry";

interface IConstructorOf<T> {
    /* tslint:disable */
    new(...args: any[]): T;
    /* tslint:enable */
}

abstract class DispatcherListener {
    private actionMap: {action: IConstructorOf<IAction>, callback: ((action: IAction) => void)}[];
    private evalMap: {evalFn: (action: IAction) => boolean, callback: ((action: IAction) => void)}[];
    private genericCallback: (action: IAction) => void = null;
    private token: string = null;

    constructor() {
        this.actionMap = [];
        this.evalMap = [];

        this.token = Dispatcher.register((action: IAction) => this.onActionSent(action));
    }

    get dispatchToken(): string {
        return this.token;
    }

    /** Adds an action callback for a specific action. */
    addActionCallback<T extends IAction>(action: IConstructorOf<T>, callback: ((action: T) => void)): void {
        this.actionMap.push({action, callback: callback.bind(this)});
    }

    /** Adds an action callback for a actions defined as eval funtion. */
    addCallback(evalFunction: (action: IAction) => boolean, callback: ((action: IAction) => void)): void {
        this.evalMap.push({evalFn: evalFunction, callback: callback.bind(this)});
    }

    /** Adds an action callback for every action. */
    addGenericActionCallback(callback: ((action: IAction) => void)): void {
        this.genericCallback = callback.bind(this);
    }

    protected abstract postProcessAction(): void;

    private onActionSent(action: IAction): void {
        if (this.genericCallback) {
            this.tryProcessAction(this.genericCallback, action);
        }

        for (let i: number = 0; i < this.evalMap.length; i++) {
            if (this.evalMap[i].evalFn(action)) {
                this.tryProcessAction(this.evalMap[i].callback, action);
                this.postProcessAction();
            }
        }

        for (let i: number = 0; i < this.actionMap.length; i++) {
            if (action instanceof this.actionMap[i].action) {
                this.tryProcessAction(this.actionMap[i].callback, action);
                this.postProcessAction();
                break;
            }
        }
    }

    private tryProcessAction(processFunction: (action: IAction) => void, action: IAction): void {
        try {
            processFunction(action);
        } catch (error) {
            const actionLog: ActionLogEntry = action.toLogEntry();
            const actionName: string = actionLog ? actionLog.name : "unknown action";

            console.error("Error while dispatching (" + actionName + ")");
            alert("Error while dispatching (" + actionName + "). This is really bad. Fix ASAP. " +
                       "This message is designed to be annoying so that you fix the issue.");
        }
    }
}

export default DispatcherListener;
