import { combineReducers } from 'redux';
import authreducer from '../Reducers/AuthReducer';
import errorreducer from '../Reducers/ErrorReducer';
import servicereducer from '../Reducers/ServiceReducer;'

export default combineReducers({
    error: errorreducer,
    auth: authreducer,
    service: servicereducer
});