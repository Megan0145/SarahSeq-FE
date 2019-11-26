import * as types from "./actionTypes";

const initState = {
    user: null,
}

export function userReducer(state = initState, action){
    switch(action.type){
        case types.SET_LOGGED_IN_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}