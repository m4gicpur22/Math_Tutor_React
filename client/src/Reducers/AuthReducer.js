import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADING,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    USER_LOADED,
    LOGOUT_SUCCESS
} from '../Actions/Type';

const initialState = {
    //initliaze token for state
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

function isTokenNull(){

    if(localStorage.getItem('token') === null){
        console.log("Token is undefined, no value is passed!");
    }
    else {
        console.log("Token is not empty!");
    }
}

export default function(state = initialState, action) {
    switch(action.type){
        default://when registering, we want to pass in the token
            return state;
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            isTokenNull();
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            } //we can pass a flash message when we fail to login
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case LOGOUT_SUCCESS:

    }
}