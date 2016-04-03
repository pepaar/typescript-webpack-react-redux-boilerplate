abstract class BaseStore {

    private listeners: Array<() => void> = null;

    constructor() {
        this.listeners = [];
    }

    addListener(listener: () => void): void {
        this.listeners.push(listener);
    }

    removeListener(listener: () => void): void {
        var index: number = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        } else {
            // We should never be trying to remove a listener we have not registered
            console.error("BaseStore: Trying to remove a listener that was never added. This indicates a bug in a component.");
        }
    }

    protected emitChange(): void {
        for (var i: number = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }
}

export default BaseStore;