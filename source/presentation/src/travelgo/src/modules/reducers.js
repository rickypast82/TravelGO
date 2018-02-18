// @flow
import { combineReducersAndSelector, type ReducersMap } from '../lib/redux-helper'
import { responsiveStateReducer } from 'redux-responsive'
import travel, {setRootTravel} from './travel'

const reducers:ReducersMap = {
    browser: responsiveStateReducer,
    travel: [travel, setRootTravel],
  
};
export default combineReducersAndSelector(reducers);