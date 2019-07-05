import { GET_ERRORS, CLEAR_ERRORS } from './Type';

export const returnErrors = () => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}