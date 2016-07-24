import BaseComponent from "./BaseComponent";
import BaseStore from "./../Stores/BaseStore";

/**
 * The smart component hooks into the component lifecycle and registers/deregisters listeners to stores
 */
abstract class SmartComponent<P, S> extends BaseComponent<P, S> {
    /*
     * This is an antipattern, so use it only if there is no other way.
     * See: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
     */
    private isComponentMounted: boolean = false;

    private stores: BaseStore[];
    private onChangeInternal: () => void = this.onChange.bind(this);

    constructor(...stores: BaseStore[]) {
        super();
        this.stores = stores;
        this.state = this.getState();
        this.isComponentMounted = false;
    }

    componentDidMount(): void {
        this.isComponentMounted = true;

        if (this.stores !== undefined && this.stores !== null) {
            this.stores.forEach((store: BaseStore) => {
                store.addListener(this.onChangeInternal);
            });
        }
    }

    componentWillUnmount(): void {
        this.isComponentMounted = false;

        if (this.stores !== undefined && this.stores !== null) {
            this.stores.forEach((store: BaseStore) => {
                store.removeListener(this.onChangeInternal);
            });
        }
    }

    /** Invoked when a store emits a change event */
    protected onChange(): void {
        this.setStateIfMounted(this.getState());
    }

    protected setStateIfMounted(state: S): void {
        if (this.isComponentMounted) {
            this.setState(state);
        }
    }

    /** Returns the component state */
    protected abstract getState(): S;
};

export default SmartComponent;
