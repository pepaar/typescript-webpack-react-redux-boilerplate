import { createAction } from "redux-actions";

export const SAY_HELLO_ACTION = "SayHelloAction";

export const sayHelloAction = createAction<void>(SAY_HELLO_ACTION, undefined);