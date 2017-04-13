import { sayHelloAction } from "../Actions/SayHelloAction";

export function sayHello(): ReduxActions.Action<void> {
    // Put your business logic here
    return sayHelloAction();
}