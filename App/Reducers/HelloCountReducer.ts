import { handleActions } from "redux-actions";
import { sayHelloAction } from "./../Actions/SayHelloAction";
import { HelloCountState } from "./../Store/State/HelloCountState";

const initialState: HelloCountState = {
    count: 0,
};

export default handleActions<HelloCountState, void>({
    [sayHelloAction.toString()]: (state, action) => {
        return {
            count: state.count + 1,
        };
    },
}, initialState);