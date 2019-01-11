import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PlanReducer from './PlanReducer';


const RootReducer=combineReducers({
    authReducer:AuthReducer,
    planReducer:PlanReducer
});

export default RootReducer;