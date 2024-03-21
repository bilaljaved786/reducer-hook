import { Add, Minus } from "./type";

const addNumber = () => {
    return {
        type: Add
    }
}

const MinusNumber = () => {
    return {
        type: Minus
    }
}

export { addNumber, MinusNumber }
