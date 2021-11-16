// содержит в себе конструции, управляющие reducer.js


import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";

//  f кот возвращает объект(action), содержащий в себе тип изменения(type) и value данные
export const addCounterValue = () => {
    return {
        type: ADD_COUNTER
    }
}

export const addDecToCounter = () => {
    return {
        type: ADD_DEC_COUNTER
    }
}

export const addNumberToCount = (number) => {
    return {
        type: ADD_NUMBER_COUNTER,
        payload: number
    }
}