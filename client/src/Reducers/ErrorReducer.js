import {  GET_ERRORS, CLEAR_ERRORS } from '../Actions/Type';

const initialState = {
    msg: {},
    status: null,
    id: null
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
    }
};