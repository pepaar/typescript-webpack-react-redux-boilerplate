import { SayHelloAction, type as SayHelloActionType } from "./../Actions/SayHelloAction";
import { HelloCountStore } from "./../Store/HelloCountStore";

const initialState: HelloCountStore = {
  count: 0,
};

export function helloCountReducer(state = initialState, action: SayHelloAction): HelloCountStore {
  switch (action.type) {
    case SayHelloActionType:
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
}