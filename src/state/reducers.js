import * as types from "./actionTypes";

const initState = {
    user: null,
    tests: []
}

export function userReducer(state = initState, action){
    switch(action.type){
        case types.SET_LOGGED_IN_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export function testReducer(state = initState.tests, action){
    switch(action.type){
        case types.SET_ALL_TESTS:
            return {...state, tests: action.payload}
        default:
            return state;
    }
}