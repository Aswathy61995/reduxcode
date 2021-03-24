import { combineReducers } from 'redux'
import counterReducer from './counter';
import loggedReducer from './isLogged';
import check from './isLogged';
//import allReducer from './reducers';

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    
    check:check

})
export default allReducers;