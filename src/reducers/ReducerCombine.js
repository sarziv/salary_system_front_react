import { combineReducers } from 'redux'
import AuthReducer from './AuthReducers'
import RateReducer from './RateReducers'

export default combineReducers({
    AuthReducer,
    RateReducer
})