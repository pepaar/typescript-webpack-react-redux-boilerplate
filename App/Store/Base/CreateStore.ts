import { createStore, applyMiddleware, compose, Store, Middleware, Reducer } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../../Reducers/RootReducer";
import { IStore } from "./IStore";

export function configureStore(initialState?: IStore): Store<IStore> {
    const middlewares: Middleware[] = [
        thunkMiddleware,
        createLogger(),
    ];

    const composeEnhancers =
        DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    if (module.hot) {
        module.hot.accept("./../../Reducers/RootReducer", () => {
            store.replaceReducer((require("./../../Reducers/RootReducer") as Reducer<IStore>));
        });
    }

    return store;
}