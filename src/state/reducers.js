import * as types from "./actionTypes";

const initState = {
    tests: [],
    userTests: []
}


export function testReducer(state = initState.tests, action){
    switch(action.type){
        case types.SET_ALL_TESTS:
            return {...state, tests: action.payload}
        default:
            return state;
    }
}

export function userTestsReducer(state = initState.userTests, action){
    switch(action.type){
        case types.SET_USER_TESTS:
            return {...state, userTests: action.payload}
        default:
            return state;
    }
}