import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'
import travel from './modules/travel/reducer'

const reducers = combineReducers({
    browser: responsiveStateReducer,
    travel
})


export default reducers;