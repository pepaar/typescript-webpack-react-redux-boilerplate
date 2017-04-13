import { handleActions } from "redux-actions";
import { sayHelloAction, SAY_HELLO_ACTION } from "./../Actions/SayHelloAction";
import { HelloCountState } from "./../Store/State/HelloCountState";

const initialState: HelloCountState = {
    count: 0,
};

export default handleActions<HelloCountState, void>({
    [SAY_HELLO_ACTION]: (state, action) => {
        return {
            count: state.count + 1,
        };
    },
}, initialState);