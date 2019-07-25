import { combineReducers } from 'redux';
import authreducer from './AuthReducer';
import errorreducer from './ErrorReducer';
import servicereducer from './ServiceReducer';

export default combineReducers({
    error: errorreducer,
    service: servicereducer,
    auth: authreducer
});