import { SERVICE_CREATED, SERVICE_SCHEDULED, SERVICE_ERRORS } from '../Actions/Type';

//this is the initial State of our Service reducer for now
const initialState = {
    msg: {},
    status: null,
    id: null
}


export default function(state = initialState, action){

    switch(action.type){
        default:
            return state;
        case SERVICE_CREATED:
        case SERVICE_SCHEDULED:
        case SERVICE_ERRORS:
    }

};