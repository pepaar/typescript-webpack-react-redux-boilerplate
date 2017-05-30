import { createAction } from "redux-actions";

export const sayHelloAction = createAction<void>("SayHelloAction", undefined);