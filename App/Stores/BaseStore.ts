import DispatcherListener from "./../Dispatcher/DispatcherListener";

/** Base class for stores containing functionality for adding/removing event listeners */
abstract class BaseStore extends DispatcherListener {
    private listeners: Array<() => void> = null;

    constructor() {
        super();
        this.listeners = [];
    }

    /** Adds a listener for when the store emits a change. */
    addListener(listener: () => void): void {
        this.listeners.push(listener);
    }

    /** Removes a listener for when the store emits a change. */
    removeListener(listener: () => void): void {
        const index: number = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        } else {
            // We should never be trying to remove a listener we have not registered
            console.error("BaseStore: Trying to remove a listener that was never added. This indicates a bug in a component.");
        }
    }

    protected emitChange(): void {
        for (let i: number = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }

    protected postProcessAction(): void {
        this.emitChange();
    }
}

export default BaseStore;