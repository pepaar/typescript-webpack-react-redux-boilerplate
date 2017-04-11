import { SayHelloAction, type as SayHelloActionType } from "./../Actions/SayHelloAction";
import { HelloCountState } from "./../Store/State/HelloCountState";

const initialState: HelloCountState = {
    count: 0,
};

export function helloCountReducer(state = initialState, action: SayHelloAction): HelloCountState {
    switch (action.type) {
        case SayHelloActionType:
            return {
              count: state.count + 1,
            };

        default:
            return state;
    }
}