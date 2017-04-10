import { SayHelloAction, create } from "../Actions/SayHelloAction";

export function sayHello(): SayHelloAction {
    return create();
}