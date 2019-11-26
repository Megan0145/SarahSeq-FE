import * as types from "./actionTypes";

const initState = {
    tests: []
}


export function testReducer(state = initState.tests, action){
    switch(action.type){
        case types.SET_ALL_TESTS:
            return {...state, tests: action.payload}
        default:
            return state;
    }
}