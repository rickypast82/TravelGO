import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'
import travelList from './modules/travelList/reducer'

const reducers = combineReducers({
    browser: responsiveStateReducer,
    travelList
})


export default reducers;