import { Add, Minus } from "./type";

const AddMinusReducer = (state, action) => {

    switch (action.type) {
        case Add:
            return state + 1;
        case Minus:
            return state - 1;
        default:
            return state
    }
}

export default AddMinusReducer;