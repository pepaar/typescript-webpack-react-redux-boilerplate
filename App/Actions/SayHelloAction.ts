import IAction from "./IAction";

export const type = "SayHelloAction";

export interface SayHelloAction extends IAction {
}

export function create(): SayHelloAction {
    return { type };
}